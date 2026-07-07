export const memCourseMarkdown = `
# 👁️ Cours Magistral : Membranes Épirétiniennes Maculaires (MEM)

<div class="alert alert-note">
  <strong>Objectif Pédagogique</strong><br/>
  Maîtriser le diagnostic, le pronostic et les indications thérapeutiques des membranes épimaculaires dans le cadre de la préparation à l'examen de fin d'étude de spécialité.
</div>

## 1. Introduction et Épidémiologie

Les membranes épirétiniennes maculaires (MEM) sont des proliférations cellulaires gliales avasculaires et bénignes, d'évolution autolimitée. Elles siègent à la surface de la rétine et possèdent un épicentre contractile maculaire ou paramaculaire.

- **Prévalence** : Affectent environ **10 % des sujets âgés de plus de 70 ans**.
- **Causes** : 
  - Idiopathiques dans **80 % des cas**.
  - Secondaires (20 %) : Décollement de rétine (DR) opéré, affections vasculaires (ex: OVR, Diabète), ou inflammatoires (Uvéites).
- **Facteurs de risque** : L'antécédent de chirurgie de la cataracte est un facteur causal important. Il n'y a pas de prédominance de sexe.

## 2. Physiopathologie et Anatomopathologie

La cascade d'événements conduisant à ces proliférations reste encore imparfaitement connue, mais deux éléments sont fondamentaux :

<div class="alert alert-tip">
  <strong>Physiopathologie : Le Rôle du DPV et des Cellules de Müller</strong>
  <ul>
    <li>Il existe une relation chronologique forte entre l'apparition d'un <strong>Décollement Postérieur du Vitré (DPV)</strong> et la survenue d'une MEM.</li>
    <li>Les <strong>cellules de Müller</strong> semblent jouer un rôle majeur. Elles franchissent une membrane limitante interne (MLI) intacte pour proliférer à sa surface.</li>
  </ul>
</div>

- **Histologie des MEM Idiopathiques** : Les cellules sont disposées en monocouche sur la MLI avec un collagène peu abondant.
- **Histologie des MEM Secondaires** : La prolifération cellulaire se fait en *plusieurs couches* noyées dans un collagène abondant.

## 3. Diagnostic Clinique

### Signes Fonctionnels (Motif de consultation)
Souvent asymptomatiques au début, elles sont de plus en plus révélées fortuitement. Quand elles sont symptomatiques, on retrouve :
1. **Baisse d'Acuité Visuelle (BAV)** : D'installation progressive.
2. **Métamorphopsies** : Fréquentes, plus ou moins sévères, parfois la première et unique plainte.
3. **Scotome central relatif** : Atténuant le contraste des lettres lors de la lecture de près.
4. **Diplopie binoculaire** (plus rare) : Liée à une ectopie fovéolaire par rétraction tangentielle de la membrane.

### Examen au Fond d'Œil

<div class="md-image-container" style="max-width: 600px; margin: 2rem auto;">
  <img src="/images/mem_retinographie.png" alt="Rétinographie couleur MEM" />
  <div class="md-caption">Rétinographie couleur montrant un reflet cellophane et une tortuosité vasculaire.</div>
</div>

L'examen du pôle postérieur révèle :
- Un voile transparent ou un reflet brillant (cellophane).
- Une contraction du pigment xanthophylle.
- Une <span style="color:var(--accent-primary)"><strong>tortuosité des vaisseaux à destinée maculaire</strong></span> (très bon indicateur de la déformation).
- Des plis rétiniens (superficiels ou formant des vallées).
- Un DPV (anneau prépapillaire) retrouvé dans 80 à 95 % des cas idiopathiques.

## 4. Examens Complémentaires : L'OCT (L'examen roi)

La Tomographie par Cohérence Optique (OCT) est indispensable pour confirmer le diagnostic, évaluer le pronostic et poser l'indication opératoire.

<div class="alert alert-warning">
  <strong>Sémiologie OCT de la MEM</strong>
  <ul>
    <li>Ligne hyperréflective prérétinienne (la membrane elle-même).</li>
    <li>Disparition de la dépression fovéolaire.</li>
    <li>Épaississement maculaire global (profil convexe et irrégulier).</li>
  </ul>
</div>

<div class="md-image-container" style="max-width: 600px; margin: 2rem auto;">
  <img src="/images/mem_oct_bscan.png" alt="OCT B-Scan MEM" />
  <div class="md-caption">Coupe OCT B-Scan : Ligne hyperréflective, disparition de la dépression fovéolaire et épaississement.</div>
</div>

<div class="alert alert-caution">
  <strong>🚨 Attention au piège des logettes intrarétiniennes :</strong><br/>
  La présence de logettes (œdème maculaire cystoïde) à l'OCT n'est pas classique dans une MEM idiopathique pure. Elle doit faire :
  <ol>
    <li>Suspecter une <strong>MEM secondaire</strong>.</li>
    <li>Conduire à la réalisation d'une angiographie à la fluorescéine (voire au vert d'indocyanine) à la recherche d'une étiologie (OVR ancienne, uvéite, rétinopathie diabétique). Le traitement étiologique doit toujours précéder la chirurgie !</li>
  </ol>
</div>

## 5. Pronostic et Évolution

- **Évolution spontanée** : Les MEM idiopathiques sont le plus souvent peu évolutives (80 à 90 % des patients ont une acuité stable à 3 ans). Les détachements spontanés sont exceptionnels.
- **Facteurs de bon pronostic opératoire** :
  - Bonne acuité visuelle initiale préopératoire (détermine la meilleure AV finale).
  - Baisse visuelle de survenue récente.
  - Intégrité de la ligne des photorécepteurs (ligne ellipsoïde) à l'OCT.
`;

export const memFichesMarkdown = `
# 🛠️ Fiche Technique : Critères Pronostics Opératoires des MEM

| Facteur | Impact sur le Pronostic Visuel |
| :--- | :--- |
| **Acuité visuelle préopératoire élevée** | Meilleur pronostic (AV finale plus haute) |
| **Ancienneté de la BAV** | Mauvais pronostic si BAV ancienne |
| **Intégrité de la ligne Ellipsoïde (OCT)** | Facteur pronostic majeur (positif si intègre) |
| **Présence d'un DPV (idiopathique)** | Classique, sans impact péjoratif direct |
| **Œdème Maculaire Cystoïde (logettes)** | Faire suspecter une MEM secondaire (traiter la cause avant) |

<br/>
<div class="alert alert-tip">
  Ne pas se précipiter sur la chirurgie si la gêne fonctionnelle (métamorphopsies) est minime ou si l'AV est conservée, car 80 à 90% des MEM idiopathiques restent stables à 3 ans.
</div>

---

# 🔪 Fiche Visuelle : Prise en charge chirurgicale des MEM

<div class="alert alert-important">
  <strong>Règle d'or de l'indication chirurgicale</strong><br/>
  On n'opère pas une image OCT mais un patient gêné. L'indication repose sur la gêne ressentie :
  <ul>
    <li>Baisse d'Acuité Visuelle (souvent ≤ 6/10).</li>
    <li>Métamorphopsies invalidantes au quotidien.</li>
    <li>Perte du sens du relief / Diplopie.</li>
  </ul>
</div>

## 1. Préparation et Anesthésie

<div style="display:flex; gap: 1rem; margin-bottom: 2rem;">
  <div style="flex:1; background:var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-primary);">
    <h3 style="margin-top:0">💉 Privilégiée</h3>
    <p><strong>Anesthésie locale (péribulbaire ou sous-ténonienne)</strong> pour assurer une akinésie parfaite, facilitant le pelage millimétrique.</p>
  </div>
  <div style="flex:1; background:var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid #fbc02d;">
    <h3 style="margin-top:0">💧 Alternative</h3>
    <p><strong>Anesthésie topique (gel de Xylocaïne)</strong> possible avec des opérateurs expérimentés, offrant des résultats satisfaisants.</p>
  </div>
</div>

## 2. Les 4 Temps Opératoires

### 🟢 A. La Vitrectomie Postérieure
- Utilisation de trocarts de petit calibre : **23 G, 25 G ou 27 G**.
- Objectif : Obtenir un espace de travail libre.
- DPV : Souvent déjà présent. Si absent (notamment chez le sujet jeune), le créer prudemment.

### 🔵 B. Coloration des Membranes (Chromovitrectomie)
Indispensable pour guider le geste et assurer un pelage complet sans endommager la rétine sous-jacente.

<div class="alert alert-note">
  <strong>Choix des colorants (Les indispensables à retenir)</strong>
  <ul>
    <li><span style="color:#2196f3; font-weight:bold;">Bleu Trypan</span> : Colore la MEM (traverse les cellules mortes de la membrane, ne colore pas la MLI).</li>
    <li><span style="color:#0288d1; font-weight:bold;">Brilliant Blue G (BBG)</span> : Colore spécifiquement la MLI. Moins toxique que le vert d'indocyanine.</li>
  </ul>
  <em>Astuce : Il existe des seringues combinant les deux colorants pour un double marquage simultané.</em>
</div>

### ✂️ C. Dissection de la MEM
- **Outils** : Pinces à membranes ultra-fines (0,45 mm pour du 25 G ou 0,57 mm pour du 23 G).
- **Technique** : Saisir la membrane à sa surface (ou préférentiellement sur un bord libre identifié à l'OCT), éviter la région centrofovéolaire pour l'amorçage. 
- Les membranes fines "cellophane" s'enlèvent souvent d'un seul tenant.

### 🎯 D. Pelage de la Membrane Limitante Interne (MLI)

| Type de MEM | Pelage de la MLI | Justification |
| :--- | :--- | :--- |
| **Idiopathique** | <span style="color:#fbc02d; font-weight:bold;">À discuter (Optionnel)</span> | Diminue les récidives et aide au déplissement, mais risque de créer des microscotomes (DONFL) et de baisser la sensibilité rétinienne. |
| **Secondaire (Pucker)** | <span style="color:#4caf50; font-weight:bold;">Systématique</span> | Récidives fréquentes dans les formes secondaires. Indispensable pour un résultat pérenne. |

<div class="md-image-container" style="max-width: 600px; margin: 2rem auto;">
  <img src="/images/chromovitrectomie_mem.png" alt="Chromovitrectomie per-opératoire" />
  <div class="md-caption">Photo per-opératoire de chromovitrectomie montrant le pelage d'une membrane colorée au Brilliant Blue G à l'aide d'une pince fine.</div>
</div>

## 3. L'Aide de l'OCT Per-opératoire
Permet de visualiser les structures en temps réel via le microscope intégré :
- Guide la zone de préhension initiale.
- Vérifie l'intégrité de la rétine (absence de trou maculaire iatrogène post-pelage).
- Particulièrement utile chez le myope fort (où la visibilité est réduite).

## 4. Particularités : Chirurgie Combinée (Phako-Vitrectomie)
- **Quand ?** Patient de **plus de 60 ans** (la vitrectomie est fortement cataractogène, l'opacification survient dans 40-80% des cas à 1 an).
- **Principe** : Phakoémulsification avec pose d'implant suivie de la vitrectomie/pelage dans le même temps opératoire.
- **Attention** : Risque d'œdème maculaire post-opératoire légèrement plus élevé.

## 5. Gestion des Complications

<div class="alert alert-caution">
  <strong>🚨 Prévention per-opératoire des déchirures</strong><br/>
  Un examen scrupuleux de la périphérie rétinienne sous indentation en fin d'intervention est <strong>OBLIGATOIRE</strong>. Toute déhiscence périphérique (souvent liée au passage des instruments) doit être traitée immédiatement par cryoapplication ou laser endoculaire pour prévenir le décollement de rétine post-opératoire (qui survient dans 1% des cas).
</div>
`;

export const memAlgorithmsMarkdown = `
# Algorithmes et Cartes Mentales : MEM

<div class="alert alert-tip">
  <strong>Aide à la mémorisation</strong><br/>
  Les schémas suivants sont conçus pour te permettre d'avoir une vision globale immédiate de la pathologie (carte mentale) et de l'attitude pratique face à un patient (algorithme décisionnel).
</div>

## 1. Algorithme Décisionnel et de Prise en Charge

Cet algorithme résume la conduite à tenir face à la découverte d'une Membrane Épirétinienne Maculaire à l'examen (OCT/FO).
`;

export const memAlgoMermaid = `graph TD
    %% Couleurs et styles
    classDef exam fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef symp fill:#fff9c4,stroke:#fbc02d,stroke-width:2px;
    classDef action fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef chir fill:#ffebee,stroke:#c62828,stroke-width:2px;
    classDef alert fill:#ffcc80,stroke:#e65100,stroke-width:2px;

    A["Découverte OCT: <br> Ligne hyperréflective prérétinienne"]:::exam --> B{"Le patient est-il symptomatique ? <br> <i>Baisse d'AV ressentie, Métamorphopsies</i>"}:::symp
    
    B -- NON --> C["Abstention thérapeutique <br> Surveillance OCT & Clinique / 6 mois"]:::action
    
    B -- OUI --> D["Bilan Pré-opératoire Rigoureux <br> FO Périphérique + OCT Maculaire"]:::exam
    
    D --> E{"Présence de logettes / kystes <br> intrarétiniens à l'OCT ?"}:::symp
    
    E -- OUI <br> Suspicion MEM Secondaire --> F["Angiographie Fluorescéine <br> Recherche: Diabète, OVR, Uvéite"]:::alert
    F --> G["Traitement étiologique prioritaire <br> <i>Anti-VEGF, Corticoïdes, Laser...</i>"]:::action
    G --> H["Chirurgie différée <br> avec pelage MLI systématique"]:::chir

    E -- NON <br> Suspicion MEM Idiopathique --> I{"Acuité Visuelle & Gêne"}:::symp
    I -- Gêne minime & AV > 6/10 --> C
    I -- Gêne invalidante ou AV <= 6/10 --> J["Indication Chirurgicale Retenue"]:::action
    
    J --> K{"Âge du patient"}:::symp
    K -- > 60 ans --> L["Chirurgie combinée : <br> Phakoémulsification + Vitrectomie + Pelage"]:::chir
    K -- < 60 ans --> M["Vitrectomie seule + Pelage MEM <br> <i>+/- Pelage MLI discuté</i>"]:::chir`;

export const memMindmapMarkdown = `
---

## 2. Carte Mentale (Mindmap) de Synthèse

Cette carte mentale reprend les grands axes du cours magistral pour une révision flash.
`;

export const memMindmapMermaid = `mindmap
  root(("Membranes Épirétiniennes Maculaires"))
    id1("Épidémiologie")
      id1a("10% des plus de 70 ans")
      id1b("80% Idiopathiques")
      id1c("20% Secondaires")
    id2("Physiopathologie")
      id2a("Décollement Postérieur du Vitré DPV")
      id2b("Cellules de Müller")
      id2c("Prolifération sur la MLI")
      id2d("Contraction et plissement")
    id3("Diagnostic Positif")
      id4["Clinique"]
        id4a("Baisse d'acuité visuelle")
        id4b("Métamorphopsies +++")
        id4c("Diplopie binoculaire")
      id5["Fond d'Oeil"]
        id5a("Reflet cellophane")
        id5b("Vaisseaux maculaires tortueux")
        id5c("Plis rétiniens")
      id6["OCT - Examen Roi"]
        id6a("Ligne hyperréflective")
        id6b("Effacement fovéolaire")
        id6c("Épaississement maculaire")
    id7("Formes Cliniques")
      id7a("Pseudotrou maculaire")
      id7b("Trou lamellaire")
      id7c("Syndrome Traction Vitréo-Maculaire")
      id7d("MEM Secondaires Macular Pucker")
    id8("Traitement Chirurgical")
      id9["Indications"]
        id9a("Gêne ressentie")
        id9b("BAV ou Métamorphopsies")
      id10["Technique"]
        id10a("Vitrectomie 23G/25G/27G")
        id10b("Pelage MEM Bleu Trypan")
        id10c("Pelage MLI Brilliant Blue G")
      id11["Complications"]
      id11["Complications"]
        id11a("Cataracte très fréquente")
        id11b("Décollement de rétine")
        id11c("Endophtalmie")`;

export const memClassificationsMarkdown = `
# 🗂️ Classifications et Formes Cliniques des MEM

Bien qu'il n'existe pas de classification par stades universellement évoquée, les Membranes Épirétiniennes Maculaires (MEM) se classent formellement selon leur **étiologie** et selon les **formes anatomocliniques** à l'OCT.

## 1. Classification Étiologique

C'est la classification la plus importante en pratique clinique car elle dicte le bilan et l'attitude thérapeutique.

| Caractéristique | MEM Idiopathiques (80 %) | MEM Secondaires / "Médicales" (20 %) |
| :--- | :--- | :--- |
| **Terrain / Causes** | Sujets > 50 ans | Post-DR chirurgical, Diabète, OVR, Uvéites, Trauma |
| **Physiopathologie** | Liées au Décollement Postérieur du Vitré (DPV) | Prolifération inflammatoire ou cicatricielle |
| **Histologie** | Monocouche cellulaire, peu de collagène | Plusieurs couches, collagène abondant |
| **Pronostic & Évolution**| Évolution lente, chirurgie très efficace | Œdème cystoïde (logettes) fréquent, résultats visuels moyens |
| **Risque de Récidive** | Faible | Élevé (justifie le pelage systématique de la MLI) |

## 2. Classification selon l'aspect OCT (Formes Cliniques)

L'OCT permet de différencier les formes induites par la MEM.

| Forme Clinique | Mécanisme | Signes à l'OCT | Pronostic / Attitude |
| :--- | :--- | :--- | :--- |
| **Pseudotrou Maculaire** | Contraction centripète homogène | Verticalisation des bords, diamètre rétréci, **épaisseur fovéolaire conservée** | Bon pronostic |
| **Trou Lamellaire** | Processus avorté de trou maculaire | Clivage en **oméga inversé**, perte de substance | Chirurgie si traction évolutive |
| **Syndrome VMT** | Décollement vitréen partiel | Hyaloïde postérieure tendue attachée à la macula, œdème microkystique | Chirurgie précoce recommandée |
`;

export const memClassificationsMermaid = `graph TD
    classDef main fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef cat fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef sub fill:#f1f8e9,stroke:#33691e,stroke-width:2px;

    A["Classification des MEM"]:::main --> B["Selon l'Étiologie"]:::cat
    A --> C["Selon l'aspect OCT"]:::cat

    B --> B1["Idiopathiques (80%)"]:::sub
    B --> B2["Secondaires / Macular Pucker (20%)"]:::sub

    C --> C1["Pseudotrou Maculaire"]:::sub
    C --> C2["Trou Lamellaire"]:::sub
    C --> C3["Syndrome VMT"]:::sub
`;
