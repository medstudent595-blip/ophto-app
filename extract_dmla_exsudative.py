# -*- coding: utf-8 -*-
"""
Extraction des figures composites de la section 4.4 « DMLA exsudative »
du rapport SFO 2019 (OCT en ophtalmologie).

Rendu COMPOSITE par figure : on calcule la region-image de chaque figure
(union des bbox des panneaux raster rattaches a sa legende) puis on rend
cette region de page en PNG haute resolution. Cela « aplatit » les rasters
qui se chevauchent + les fleches/labels vectoriels (a, b, c, d) exactement
comme la figure apparait dans le livre. Le texte de legende n'est PAS inclus
dans l'image (il est reformule cote application).

Sortie : public/images/dmla-exsudative/fig_4-NN.png + manifest.json
"""
import os
import re
import json
import fitz  # PyMuPDF
from PIL import Image, ImageDraw

PDF = r"C:\Etudes\DEMS\oct-en-ophtalmologie_rapport-sfo-2019.pdf"
OUT_DIR = os.path.join(os.path.dirname(__file__), "public", "images", "dmla-exsudative")
PAGES = range(162, 187)          # idx 162..186 (imprimees 142..166 : Fig. 4-80 deborde p.166)
EXPECTED = list(range(50, 81))   # Fig. 4-50 .. 4-80
DPI = 220
MIN_PANEL = 40                   # px : ignore artefacts (fleches, puces...)
PAD = 8                          # padding autour de la region rendue

CAP_RE = re.compile(r"^\s*Fig\.?\s*4-(\d+)")


def block_text(b):
    return "".join(s["text"] for l in b["lines"] for s in l["spans"])


def x_overlap(a0, a1, b0, b1):
    return max(0.0, min(a1, b1) - max(a0, b0))


def extract():
    os.makedirs(OUT_DIR, exist_ok=True)
    doc = fitz.open(PDF)
    manifest = {}
    found = {}

    for idx in PAGES:
        page = doc[idx]
        W = page.rect.width
        d = page.get_text("dict")

        # 1) legendes (blocs commencant par "Fig. 4-NN")
        caps = {}  # num -> (x0,y0,x1,y1, text)
        for b in d["blocks"]:
            if b["type"] != 0:
                continue
            txt = block_text(b)
            m = CAP_RE.match(txt)
            if not m:
                continue
            num = int(m.group(1))
            # garde la legende la plus longue si doublon
            if num not in caps or len(txt) > len(caps[num][4]):
                caps[num] = (*b["bbox"], re.sub(r"\s+", " ", txt).strip())

        # 2) panneaux raster (bbox, filtres)
        panels = []
        for im in page.get_images(full=True):
            try:
                r = page.get_image_bbox(im)
            except Exception:
                continue
            if r.width < MIN_PANEL or r.height < MIN_PANEL:
                continue
            panels.append(r)

        if not caps:
            continue

        # 3) rattachement panneau -> legende. Regle : plus proche legende SOUS le
        #    centre du panneau (les legendes sont sous leurs figures). La colonne
        #    (recouvrement en x) est une PREFERENCE ponderee, pas un filtre dur :
        #    sinon un panneau en colonne adjacente rattache a une legende etroite
        #    (ex. Fig. 4-69 : B-scan a gauche + OCT en face a droite) serait perdu.
        COL_PENALTY = 400.0
        cap_items = sorted(caps.items(), key=lambda kv: kv[1][1])  # par y0
        groups = {num: [] for num in caps}
        unassigned = []
        for r in panels:
            cy = (r.y0 + r.y1) / 2
            best, best_score = None, 1e9
            for num, (cx0, cy0, cx1, cy1, _t) in cap_items:
                if cy0 < cy - 2:            # la legende doit etre sous le panneau
                    continue
                cap_full = (cx1 - cx0) > 0.7 * W
                pan_full = (r.x1 - r.x0) > 0.7 * W
                compat = cap_full or pan_full or x_overlap(r.x0, r.x1, cx0, cx1) > 20
                score = (cy0 - cy) + (0.0 if compat else COL_PENALTY)
                if score < best_score:
                    best_score, best = score, num
            if best is None:               # aucun panneau au-dessus d'une legende
                # rattache a la legende la plus proche verticalement (au-dessus)
                cand = min(cap_items, key=lambda kv: abs(kv[1][1] - cy), default=None)
                best = cand[0] if cand else None
            if best is not None:
                groups[best].append(r)
            else:
                unassigned.append(r)
        if unassigned:
            print(f"  [idx{idx}] {len(unassigned)} panneau(x) NON rattache(s) :",
                  [f"({r.x0:.0f},{r.y0:.0f},{r.width:.0f}x{r.height:.0f})" for r in unassigned])

        # 4) rendu par figure
        for num, (cx0, cy0, cx1, cy1, ctext) in caps.items():
            rects = groups[num]
            if rects:
                x0 = min(r.x0 for r in rects) - PAD
                y0 = min(r.y0 for r in rects) - PAD
                x1 = max(r.x1 for r in rects) + PAD
                y1 = max(r.y1 for r in rects) + PAD
            else:
                # fallback : region de colonne entre legende precedente et cette legende
                prev_y = 79
                for n2, (_a, py0, _c, _d, _e) in cap_items:
                    if py0 < cy0 - 2 and x_overlap(cx0, cx1, _a, _c) > 20:
                        prev_y = max(prev_y, py0 + 30)
                x0, y0, x1, y1 = cx0 - PAD, prev_y, cx1 + PAD, cy0 - 4

            clip = fitz.Rect(x0, y0, x1, y1) & page.rect
            if clip.is_empty or clip.width < 20 or clip.height < 20:
                print(f"  !! fig 4-{num}: region vide, ignoree")
                continue
            pix = page.get_pixmap(clip=clip, dpi=DPI)
            img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            # Masque : efface toute legende « Fig. 4-NN » du livre qui deborde dans
            # le cadre (cas des panneaux hauts en colonne adjacente). Le texte est
            # reformule cote application ; on ne garde que l'imagerie.
            scale = DPI / 72.0
            draw = ImageDraw.Draw(img)
            for b in d["blocks"]:
                if b["type"] != 0 or not CAP_RE.match(block_text(b)):
                    continue
                bx0, by0, bx1, by1 = b["bbox"]
                ix0 = max(bx0, clip.x0); iy0 = max(by0, clip.y0)
                ix1 = min(bx1, clip.x1); iy1 = min(by1, clip.y1)
                if ix1 <= ix0 or iy1 <= iy0:
                    continue
                draw.rectangle(
                    [(ix0 - clip.x0) * scale - 2, (iy0 - clip.y0) * scale - 2,
                     (ix1 - clip.x0) * scale + 2, (iy1 - clip.y0) * scale + 2],
                    fill=(255, 255, 255),
                )

            out = os.path.join(OUT_DIR, f"fig_4-{num}.png")
            img.save(out)
            found[num] = idx
            manifest[f"4-{num}"] = {
                "page_idx": idx,
                "printed_page": idx - 20,
                "clip": [round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)],
                "px": [pix.width, pix.height],
                "panels": len(rects),
                "fallback": not bool(rects),
                "legend_raw": ctext,
            }

    with open(os.path.join(OUT_DIR, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    # recap
    print("\n===== RECAP =====")
    ok = sorted(found)
    print(f"figures rendues : {len(ok)}/{len(EXPECTED)}")
    missing = [n for n in EXPECTED if n not in found]
    fallbacks = [k for k, v in manifest.items() if v["fallback"]]
    if missing:
        print("MANQUANTES :", ["4-%d" % n for n in missing])
    else:
        print("Exhaustivite OK : toutes les figures 4-50..4-80 presentes.")
    if fallbacks:
        print("Rendues en fallback (a verifier visuellement) :", fallbacks)
    print(f"Sortie : {OUT_DIR}")


if __name__ == "__main__":
    extract()
