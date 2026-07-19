// Fiches Techniques et Algorithmes de prise en charge pour les 4 cours magistraux interactifs d'uvéites
// (Uvéites Antérieures, Intermédiaires, Orientation Diagnostique, Postérieures et Vascularites)

// ============================================================
// I. UVÉITES ANTÉRIEURES
// ============================================================

export const uaFichesMarkdown = `
# 📋 Fiche Technique : Uvéites Antérieures

> [!IMPORTANT]
> **Objectif Pratique** : Reconnaître une uvéite antérieure (UA), la classer selon SUN, mener un bilan raisonné (et non systématique) et prescrire l'ordonnance type selon le terrain.

---

## I. Sémiologie et Classification (SUN)

*   **Définition** : inflammation du segment antérieur = iris (irite) et/ou pars plicata du corps ciliaire (iridocyclite).
*   **Signe cardinal** : **Tyndall** de chambre antérieure (cellules ± protéines), coté de 0 à 4+ (Standardization of Uveitis Nomenclature).
*   **Précipités rétro-descémétiques (PRD)** :
    *   **Fins, punctiformes** → non granulomateux (HLA-B27, idiopathique, herpès parfois).
    *   **Volumineux « en graisse de mouton »** → granulomateux (sarcoïdose, syphilis, VKH, tuberculose).
*   **Nodules iriens** : Koeppe (bord pupillaire) et Busacca (surface irienne) → granulomateux.
*   **Signes d'alarme à rechercher systématiquement** : hypopyon, atrophie irienne en secteur (herpès/zona), hypertonie aiguë (trabéculite virale), synéchies postérieures serrées, hétérochromie irienne (Fuchs).

---

## II. Interrogatoire et Examen — Grille de Lecture

| Critère SUN | Options |
| :--- | :--- |
| **Latéralité** | Unilatérale / Bilatérale (alternante ou simultanée) |
| **Mode évolutif** | Aiguë (< 3 mois, début brutal) / Chronique (> 3 mois ou rechutes rapprochées) |
| **Type** | Granulomateuse / Non granulomateuse |
| **Terrain à cibler** | Rachialgies inflammatoires, psoriasis, diarrhée/MICI, aphtose, uréthrite, contage tuberculeux, morsure de tique, antécédent zostérien |

---

## III. Bilan Paraclinique Raisonné (pas de bilan systématique au 1er épisode typique isolé)

> [!NOTE]
> **1er épisode d'UA aiguë non granulomateuse, unilatérale, typique, bonne réponse au traitement** → **aucun bilan** n'est nécessaire.

**Indications à un bilan étiologique** : bilatéralité, forme granulomateuse, chronicité, récidives, hypertonie majeure, atrophie irienne, hypopyon, atteinte du segment postérieur associée.

*   **Orientation HLA-B27** : NFS-CRP, HLA-B27, radiographie du bassin (sacro-iliaques), avis rhumatologique si rachialgies inflammatoires.
*   **Orientation granulomateuse** : Enzyme de conversion de l'angiotensine (ECA) + lysozyme, radiographie/TDM thoracique, IDR ou Quantiferon (tuberculose), TPHA-VDRL.
*   **Orientation herpétique/zostérienne** (hypertonie majeure, atrophie irienne, PRD granulomateux, forme récidivante unilatérale) : diagnostic clinique en 1ère intention ; ponction de chambre antérieure (PCR HSV/VZV) si doute ou forme sévère.

---

## IV. Ordonnance Type

*   **Corticoïdes topiques** : Dexaméthasone collyre, dose d'attaque 4 à 6 fois/jour selon l'intensité du Tyndall, décroissance progressive sur plusieurs semaines guidée par la clinique (jamais d'arrêt brutal).
*   **Cycloplégiques-mydriatiques** : Cyclopentolate ou Atropine 1 %, 1 à 2 fois/jour — objectifs : antalgie (lever le spasme du sphincter irien et du corps ciliaire) et **prévention des synéchies postérieures**.
*   **Surveillance de la PIO** : systématique sous corticoïdes (hypertonie cortico-induite) — à distinguer de l'hypertonie inflammatoire du tableau initial (trabéculite).
*   **Traitement étiologique** si cause identifiée (ex : Valaciclovir PO si UA herpétique — cf. fiche Herpès oculaire).

---

## 🧠 Synthèse

| Présentation | 1ère Cause à Évoquer | Bilan de 1ère Intention |
| :--- | :--- | :--- |
| Aiguë, unilatérale, non granulomateuse, récidivante | HLA-B27 / spondyloarthropathie | HLA-B27, radio bassin |
| Chronique, granulomateuse, bilatérale | Sarcoïdose | ECA, radio thorax, IDR/Quantiferon |
| Unilatérale, hypertonie majeure, atrophie irienne | Herpès / Zona | Clinique ± PCR humeur aqueuse |
| Hétérochromie, PRD stellaires, pas de synéchies | Uvéite hétérochromique de Fuchs | Clinique (pas de corticoïdes au long cours) |
`;

export const uaAlgorithmsMarkdown = `
# 🧠 Algorithme Décisionnel : Uvéite Antérieure

> [!IMPORTANT]
> Le traitement symptomatique (corticoïdes + cycloplégiques) est **débuté sans attendre** les résultats du bilan étiologique, sauf suspicion d'infection active non couverte (herpès, endophtalmie).

---

### Étape 1 — Confirmer et classer
Tyndall + PRD à la lampe à fente → localisation SUN (antérieure) → uni/bilatérale → aiguë/chronique → granulomateuse/non granulomateuse.

### Étape 2 — Éliminer une urgence
*   Hypopyon fébrile / douleur majeure / baisse d'acuité brutale → éliminer une **endophtalmie** (post-opératoire, traumatique).
*   Hypertonie majeure + atrophie irienne → **UA herpétique/zostérienne** → antiviral systémique avant/associé aux corticoïdes.

### Étape 3 — Bilan raisonné
1er épisode typique isolé → **pas de bilan**. Sinon → bilan orienté par le terrain (HLA-B27, granulomateuse, herpétique — cf. fiche technique).

### Étape 4 — Traitement et surveillance
Corticoïdes topiques + cycloplégiques → réévaluation à J7-J15.
*   **Bonne réponse** → décroissance lente des corticoïdes.
*   **Corticorésistance / récidives fréquentes / bilatéralisation** → bilan systémique approfondi, avis interniste/rhumatologue, discussion d'un traitement de fond (immunosuppresseur) si cause systémique confirmée et sévère.
`;

export const uaAlgoMermaid = `
graph TD
    classDef redFill fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff;
    classDef greenFill fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff;
    classDef blueFill fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef purpleFill fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef orangeFill fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff;
    classDef grayFill fill:#374151,stroke:#fff,stroke-width:2px,color:#fff;

    Start((Tyndall + PRD<br>à la LAF)):::grayFill --> Urg{Signe d'alarme ?<br>Hypopyon fébrile /<br>Hypertonie majeure}
    Urg -->|Hypopyon fébrile| Endo[🛑 Éliminer<br>Endophtalmie]:::redFill
    Urg -->|Hypertonie + atrophie irienne| Herpes[UA Herpétique/Zostérienne<br>Antiviral systémique]:::orangeFill
    Urg -->|Non| Classer(Classer SUN :<br>uni/bilat, aigu/chronique,<br>granulomateuse ou non):::blueFill

    Classer --> Episode{1er épisode<br>typique isolé ?}
    Episode -->|OUI| NoBilan[Aucun bilan<br>Traitement symptomatique]:::greenFill
    Episode -->|NON : récidive,<br>bilatéral, granulomateux| Bilan[Bilan raisonné :<br>HLA-B27 / ECA-thorax /<br>PCR herpès]:::purpleFill

    NoBilan --> Ttt[Corticoïdes topiques<br>+ Cycloplégiques]
    Bilan --> Ttt
    Herpes --> Ttt

    Ttt --> Reeval{Réévaluation<br>J7-J15}
    Reeval -->|Bonne réponse| Decroiss[Décroissance lente<br>des corticoïdes]:::greenFill
    Reeval -->|Corticorésistance /<br>récidives| Approfondi[Bilan systémique approfondi<br>+ avis spécialisé<br>± immunosuppresseur]:::redFill
`;

// ============================================================
// II. UVÉITES INTERMÉDIAIRES
// ============================================================

export const uiFichesMarkdown = `
# 📋 Fiche Technique : Uvéites Intermédiaires

> [!IMPORTANT]
> **Objectif Pratique** : Reconnaître une hyalite prédominante, éliminer un syndrome mascarade, mener le bilan étiologique et gérer l'œdème maculaire cystoïde (OMC), premier facteur pronostique.

---

## I. Sémiologie

*   **Définition SUN** : inflammation à prédominance **vitréenne**, avec ou sans atteinte de la pars plana/pars plicata et de la rétine périphérique. Peu ou pas de Tyndall de chambre antérieure.
*   **Signes typiques** : **snowballs** (agrégats inflammatoires vitréens), **snowbanking** (banquise blanchâtre en base du vitré, ora serrata), périphlébite rétinienne périphérique.
*   **Terrain** : sujet jeune, atteinte souvent **bilatérale asymétrique**, forme idiopathique majoritaire (« pars planite »).

---

## II. Diagnostics à Ne Pas Manquer (Syndromes Mascarade)

> [!CAUTION]
> Chez un patient **> 50-60 ans** avec hyalite corticorésistante ou atypique → toujours évoquer un **lymphome intra-oculaire primitif** avant de conclure à une pars planite idiopathique.

*   **Lymphome intra-oculaire primitif** : cytologie et dosage IL-10/IL-6 du vitré (ratio IL-10/IL-6 > 1 évocateur), IRM cérébrale (atteinte SNC associée fréquente).
*   Autres mascarades : rétinoblastome (enfant), corps étranger intra-oculaire méconnu, décollement de rétine chronique.

---

## III. Bilan Étiologique

*   **Systématique** : NFS, ECA + lysozyme, radiographie ou TDM thoracique (sarcoïdose), sérologies syphilis (TPHA-VDRL) et Lyme, **IRM cérébrale et médullaire** (recherche de plaques de démyélinisation évocatrices de sclérose en plaques).
*   **Selon contexte** : ponction du vitré (cytologie, PCR, cytokines) si suspicion de lymphome ou de forme infectieuse atypique ; sérologie VIH.
*   **Cause rare mais à connaître** : maladie de Whipple (atteinte neurologique, digestive associée — PCR *Tropheryma whipplei*).

---

## IV. Prise en Charge par Paliers

| Palier | Traitement | Indication |
| :--- | :--- | :--- |
| 1 | Corticoïdes périoculaires (injection sous-ténonienne de triamcinolone) | Forme unilatérale ou asymétrique, modérée |
| 2 | Corticoïdes systémiques (cure courte) | Atteinte bilatérale sévère |
| 3 | Immunosuppresseur d'épargne cortisonique (**Méthotrexate** en 1ère ligne) | Corticodépendance, récidives |
| 4 | Biothérapie anti-TNF (Adalimumab) | Échec des immunosuppresseurs conventionnels |
| 5 | Implant intravitréen de dexaméthasone / anti-VEGF | OMC réfractaire |
| 6 | Vitrectomie | Snowbanking compliqué, hémorragie du vitré, décollement de rétine tractionnel, ou visée diagnostique |

> [!WARNING]
> **L'œdème maculaire cystoïde (OMC)** est la principale cause de baisse d'acuité visuelle et le facteur pronostique majeur : surveillance OCT systématique à chaque consultation.

---

## 🧠 Synthèse

| Situation | Cause à évoquer en priorité |
| :--- | :--- |
| Sujet jeune, bilatéral asymétrique, snowballs isolés | Pars planite idiopathique |
| Signes neurologiques associés (BAV, paresthésies) | Sclérose en plaques → IRM systématique |
| > 50-60 ans, corticorésistance | Lymphome intra-oculaire primitif |
| Adénopathies, atteinte pulmonaire | Sarcoïdose |
`;

export const uiAlgorithmsMarkdown = `
# 🧠 Algorithme Décisionnel : Uvéite Intermédiaire

---

### Étape 1 — Confirmer le diagnostic
Hyalite prédominante + snowballs ± snowbanking à l'examen du fond d'œil dilaté et à l'échographie/OCT si media troubles.

### Étape 2 — Éliminer un syndrome mascarade
Âge > 50-60 ans, forme atypique ou corticorésistante → ponction vitréenne (cytologie, IL-10/IL-6) et IRM cérébrale avant tout traitement immunosuppresseur au long cours.

### Étape 3 — Bilan étiologique systématique
ECA/thorax (sarcoïdose), sérologies (syphilis, Lyme), IRM cérébro-médullaire (SEP). Si négatif → **pars planite idiopathique** (diagnostic d'élimination).

### Étape 4 — Évaluer la sévérité et l'OMC
OCT maculaire à chaque visite.

### Étape 5 — Traitement par paliers
Débuter au palier adapté à la sévérité (uni/bilatéral, présence d'OMC) et escalader en cas de corticodépendance : périoculaire → systémique → méthotrexate → biothérapie → vitrectomie.
`;

export const uiAlgoMermaid = `
graph TD
    classDef redFill fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff;
    classDef greenFill fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff;
    classDef blueFill fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef purpleFill fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef orangeFill fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff;
    classDef grayFill fill:#374151,stroke:#fff,stroke-width:2px,color:#fff;

    Start((Hyalite + snowballs<br>± snowbanking)):::grayFill --> Age{Âge > 50-60 ans<br>ou forme atypique/<br>corticorésistante ?}
    Age -->|OUI| Mascarade[🛑 Ponction vitréenne<br>Cytologie + IL-10/IL-6<br>+ IRM cérébrale]:::redFill
    Age -->|NON| Bilan[Bilan étiologique :<br>ECA/thorax, sérologies,<br>IRM cérébro-médullaire]:::blueFill

    Mascarade -->|Lymphome confirmé| Onco[Prise en charge<br>hémato-oncologique]:::redFill
    Mascarade -->|Négatif| Bilan

    Bilan -->|Cause identifiée| EtioSpec[Traitement étiologique<br>spécifique]:::purpleFill
    Bilan -->|Négatif| Idiopathique[Pars planite idiopathique]:::greenFill

    EtioSpec --> Severite
    Idiopathique --> Severite{Sévérité /<br>OMC au OCT ?}

    Severite -->|Unilat., modérée| P1[Palier 1 :<br>Corticoïde sous-ténonien]
    Severite -->|Bilat., sévère| P2[Palier 2 :<br>Corticoïdes systémiques]:::orangeFill

    P1 --> Recid{Corticodépendance<br>/ récidive ?}
    P2 --> Recid
    Recid -->|OUI| P3[Palier 3 : Méthotrexate]:::purpleFill
    P3 --> Echec{Échec ?}
    Echec -->|OUI| P4[Palier 4 : Anti-TNF<br>Adalimumab]:::redFill
    Echec -->|OMC réfractaire| P5[Implant dexaméthasone<br>IVT / Anti-VEGF]
    P4 --> P6[Vitrectomie si<br>snowbanking compliqué /<br>hémorragie / DR tractionnel]:::orangeFill
`;

// ============================================================
// III. ORIENTATION DIAGNOSTIQUE DES UVÉITES
// ============================================================

export const uodFichesMarkdown = `
# 📋 Fiche Technique : Orientation Diagnostique d'une Uvéite

> [!IMPORTANT]
> **Objectif Pratique** : Structurer la démarche devant toute uvéite — classer selon SUN, mener un bilan **raisonné** (jamais systématique « tout-venant »), et reconnaître les signes d'alarme imposant une prise en charge urgente.

---

## I. Classification SUN (Standardization of Uveitis Nomenclature)

| Axe | Catégories |
| :--- | :--- |
| **Anatomique** | Antérieure / Intermédiaire / Postérieure / Panuvéite |
| **Évolutif** | Aiguë (< 3 mois, début brutal) / Chronique (> 3 mois ou rechutes < 3 mois après arrêt du traitement) |
| **Type inflammatoire** | Granulomateuse (PRD « en graisse de mouton », nodules de Koeppe/Busacca) / Non granulomateuse |
| **Latéralité** | Unilatérale / Bilatérale |

---

## II. Démarche Clinique Structurée

1.  **Interrogatoire** : âge, origine ethnique, antécédents rhumatologiques (rachialgies inflammatoires), dermatologiques (psoriasis, aphtose bipolaire), digestifs (MICI), neurologiques, IST, contage tuberculeux, morsure de tique, voyages, immunodépression, traitements en cours, antécédent chirurgical/traumatique oculaire.
2.  **Examen ophtalmologique complet et bilatéral** : acuité visuelle, PIO, LAF (segment antérieur), fond d'œil dilaté, OCT maculaire ± angiographie à la fluorescéine.
3.  **Examen général orienté** par les points d'appel de l'interrogatoire (peau, articulations, aires ganglionnaires, auscultation pulmonaire).

---

## III. Principe du Bilan « Raisonné »

> [!CAUTION]
> Il n'existe **pas** de bilan biologique systématique unique pour toute uvéite. Le bilan est **orienté** par la présentation clinique (localisation SUN, uni/bilatéralité, granulomateuse ou non, aiguë ou chronique) et par l'interrogatoire.

**Bilan de débrouillage commun** (uvéite non typique du 1er épisode isolé) : NFS-CRP, sérologies TPHA-VDRL, radiographie thoracique, ECA ± lysozyme, IDR à la tuberculine ou test IGRA (Quantiferon), HLA-B27 si uvéite antérieure aiguë récidivante à hypopyon.

---

## IV. Signes d'Alarme (Urgences Diagnostiques)

*   **Hypopyon fébrile / douleur majeure** → éliminer une **endophtalmie** infectieuse.
*   **Sujet âgé, corticorésistance** → syndrome mascarade (**lymphome intra-oculaire**).
*   **Nécrose rétinienne rapidement extensive** → **nécrose rétinienne aiguë** (urgence virale, traitement antiviral IV en urgence).
*   **Contexte post-opératoire ou traumatique** → corps étranger intra-oculaire, endophtalmie.

---

## 🧠 Grands Cadres Étiologiques

| Cadre | Exemples |
| :--- | :--- |
| **Infectieux** | Herpès/zona, toxoplasmose, tuberculose, syphilis, maladie de Lyme, maladie de Whipple |
| **Inflammatoire systémique** | Spondyloarthropathies HLA-B27, sarcoïdose, maladie de Behçet, VKH, MICI |
| **Syndromes mascarade** | Lymphome intra-oculaire, rétinoblastome (enfant), corps étranger, décollement de rétine chronique |
| **Idiopathique** | Diagnostic d'élimination après bilan négatif — cause la plus fréquente toutes localisations confondues |
`;

export const uodAlgorithmsMarkdown = `
# 🧠 Algorithme Décisionnel : Orientation Diagnostique d'une Uvéite

---

### Étape 1 — Confirmer et localiser (SUN)
Uvéite antérieure, intermédiaire, postérieure ou panuvéite ? → oriente directement le bilan et le pronostic.

### Étape 2 — Éliminer une urgence
Hypopyon fébrile, sujet âgé corticorésistant, nécrose rétinienne extensive, contexte post-opératoire/traumatique → prise en charge urgente spécifique avant tout bilan étiologique différé.

### Étape 3 — Caractériser
Aiguë/chronique, uni/bilatérale, granulomateuse/non granulomateuse.

### Étape 4 — Bilan raisonné
Pas de bilan si 1er épisode d'UA typique isolé. Sinon, bilan orienté selon le tableau clinique et l'interrogatoire (pas de « bilan tout-venant »).

### Étape 5 — Conclure
Cause identifiée → traitement étiologique + anti-inflammatoire. Bilan négatif → uvéite idiopathique, traitement symptomatique et surveillance rapprochée (réévaluer le diagnostic en cas d'évolution atypique).
`;

export const uodAlgoMermaid = `
graph TD
    classDef redFill fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff;
    classDef greenFill fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff;
    classDef blueFill fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef purpleFill fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef orangeFill fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff;
    classDef grayFill fill:#374151,stroke:#fff,stroke-width:2px,color:#fff;

    Start((Uvéite suspectée)):::grayFill --> Loc[Localiser selon SUN :<br>Antérieure / Intermédiaire /<br>Postérieure / Panuvéite]:::blueFill
    Loc --> Urg{Signe d'alarme ?}
    Urg -->|Hypopyon fébrile| Endo[🛑 Éliminer endophtalmie]:::redFill
    Urg -->|Nécrose rétinienne<br>extensive| NRA[🛑 Nécrose rétinienne aiguë<br>Antiviral IV en urgence]:::redFill
    Urg -->|Âgé, corticorésistant| Masc[Syndrome mascarade ?<br>Bilan oncologique]:::redFill
    Urg -->|Non| Caract[Caractériser :<br>aigu/chronique, uni/bilat,<br>granulomateux ou non]:::blueFill

    Caract --> Episode{1er épisode<br>typique isolé ?}
    Episode -->|OUI, UA typique| NoBilan[Aucun bilan]:::greenFill
    Episode -->|NON| BilanR[Bilan raisonné selon<br>le tableau clinique]:::purpleFill

    NoBilan --> Ttt[Traitement symptomatique<br>+ surveillance]
    BilanR --> Concl{Cause identifiée ?}
    Concl -->|OUI| EtioSpec[Traitement étiologique<br>ciblé]:::greenFill
    Concl -->|NON| Idiop[Uvéite idiopathique<br>Traitement symptomatique<br>+ réévaluation si atypie]:::orangeFill
`;

// ============================================================
// IV. UVÉITES POSTÉRIEURES ET VASCULARITES
// ============================================================

export const upvFichesMarkdown = `
# 📋 Fiche Technique : Uvéites Postérieures et Vascularites Rétiniennes

> [!IMPORTANT]
> **Objectif Pratique** : Distinguer choriorétinite focale et vascularite diffuse, reconnaître les urgences virales (nécrose rétinienne aiguë) et parasitaires, et poser l'indication d'un traitement anti-infectieux avant toute corticothérapie.

---

## I. Deux Grands Cadres Sémiologiques

*   **Choriorétinites (foyers focaux)** : lésion(s) blanc-jaunâtre(s) rétino-choroïdienne(s) avec hyalite en regard.
*   **Vascularites rétiniennes** : engainements vasculaires (péri-artériels ou péri-veineux), hémorragies, occlusions, diffusion pariétale à l'angiographie à la fluorescéine.

---

## II. Choriorétinites — Étiologies Clés

| Cause | Aspect Typique | Traitement |
| :--- | :--- | :--- |
| **Toxoplasmose oculaire** | Foyer blanc-jaunâtre satellite d'une cicatrice pigmentée (« phare dans le brouillard »), hyalite dense en regard | Pyriméthamine-sulfadiazine ou cotrimoxazole ; corticoïdes systémiques **après 48h** d'antiparasitaire si atteinte maculaire/nerf optique/gros vaisseaux ou immunodépression |
| **Nécrose rétinienne aiguë (NRA)** (HSV/VZV) | 🚨 **Urgence absolue** : plages de nécrose périphérique confluentes, vascularite occlusive artérielle, hyalite | Aciclovir IV en urgence (hospitalisation), laser prophylactique de barrage discuté, corticoïdes retardés après 48h d'antiviral |
| **Rétinite à CMV** | Immunodéprimé (VIH < 50 CD4/mm³, greffés) — aspect « pizza pie » (nécrose blanche hémorragique le long des vaisseaux) | Ganciclovir/Valganciclovir ± implant intravitréen |

---

## III. Vascularites Rétiniennes — Étiologies Clés

| Cause | Aspect Typique | Particularité |
| :--- | :--- | :--- |
| **Maladie de Behçet** | Occlusions veineuses et/ou artérielles, hémorragies rétiniennes, vascularite nécrosante | 🚨 Urgence thérapeutique — risque de cécité rapide ; biothérapie (anti-TNF) souvent nécessaire d'emblée dans les formes sévères |
| **Sarcoïdose** | Périphlébite avec exsudats péri-veineux en « coulées de bougie » (*candle wax drippings*), granulomes choroïdiens | Bilan systémique (ECA, TDM thoracique) |
| **Sclérose en plaques** | Périphlébite périphérique rétinienne, souvent asymptomatique | IRM cérébro-médullaire systématique |
| **Lupus / Granulomatose avec polyangéite** | Vascularite occlusive, atteinte multisystémique | Bilan immunologique dirigé |

---

## IV. Place de l'Imagerie

*   **Angiographie à la fluorescéine** : diffusion pariétale des vaisseaux (vascularite active), zones d'occlusion/ischémie périphérique guidant l'indication d'une photocoagulation panrétinienne.
*   **OCT maculaire** : recherche d'un œdème maculaire, d'une membrane épirétinienne ; épaississement choroïdien évocateur de VKH.

---

## V. Règle d'Or Thérapeutique

> [!CAUTION]
> Devant une choriorétinite ou une vascularite fébrile/aiguë, **toujours éliminer une cause infectieuse avant de débuter une corticothérapie systémique** — le traitement anti-infectieux précède ou couvre l'introduction des corticoïdes (règle identique à celle de l'herpès du segment antérieur).

*   **Cause infectieuse confirmée** : traitement anti-infectieux ciblé, corticoïdes différés/associés selon la gravité.
*   **Cause inflammatoire non infectieuse** (Behçet, sarcoïdose, VKH) : corticoïdes systémiques ± immunosuppresseurs/biothérapie d'emblée si pronostic visuel engagé.

---

## 🧠 Complications à Surveiller

Décollement de rétine (nécrose extensive), néovascularisation rétinienne/prépapillaire (zones ischémiques), œdème maculaire cystoïde, atrophie choriorétinienne séquellaire.
`;

export const upvAlgorithmsMarkdown = `
# 🧠 Algorithme Décisionnel : Uvéite Postérieure / Vascularite

---

### Étape 1 — Caractériser la lésion
Foyer(s) choriorétinien(s) focal(aux) ou vascularite rétinienne diffuse ? Uni ou bilatérale ? Terrain immunocompétent ou immunodéprimé ?

### Étape 2 — Reconnaître l'urgence virale
Plages de nécrose périphérique rapidement extensives + vascularite occlusive → **nécrose rétinienne aiguë** → hospitalisation, aciclovir IV immédiat, avant tout bilan complémentaire différé.

### Étape 3 — Orienter selon le contexte
*   Cicatrice pigmentée + foyer satellite → **toxoplasmose** → sérologie + traitement antiparasitaire.
*   Immunodéprimé, aspect hémorragique le long des vaisseaux → **CMV** → antiviral spécifique.
*   Occlusions vasculaires bilatérales + aphtose/uvéite antérieure → **Behçet** → urgence thérapeutique, biothérapie précoce si sévère.
*   Périphlébite en coulées de bougie → **sarcoïdose** → bilan systémique.
*   Périphlébite isolée + signes neurologiques → **sclérose en plaques** → IRM.

### Étape 4 — Séquencer le traitement
Cause infectieuse → traiter l'infection **avant/en couverture** des corticoïdes. Cause inflammatoire non infectieuse → corticoïdes ± immunosuppresseurs/biothérapie selon la sévérité et le pronostic visuel.
`;

export const upvAlgoMermaid = `
graph TD
    classDef redFill fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff;
    classDef greenFill fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff;
    classDef blueFill fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef purpleFill fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff;
    classDef orangeFill fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff;
    classDef grayFill fill:#374151,stroke:#fff,stroke-width:2px,color:#fff;

    Start((Uvéite postérieure<br>suspectée)):::grayFill --> Type{Foyer focal ou<br>vascularite diffuse ?}

    Type -->|Foyer focal| Foyer(Choriorétinite):::blueFill
    Type -->|Diffuse| Vasc(Vascularite rétinienne):::blueFill

    Foyer --> NecroseCheck{Nécrose périphérique<br>rapidement extensive ?}
    NecroseCheck -->|OUI| NRA[🛑 Nécrose Rétinienne Aiguë<br>Aciclovir IV en urgence]:::redFill
    NecroseCheck -->|NON, cicatrice pigmentée| Toxo[Toxoplasmose<br>Antiparasitaire puis<br>corticoïdes à 48h]:::greenFill
    NecroseCheck -->|NON, immunodéprimé| CMV[Rétinite à CMV<br>Ganciclovir/Valganciclovir]:::orangeFill

    Vasc --> Behcet{Occlusions bilatérales +<br>aphtose ?}
    Behcet -->|OUI| BehcetTtt[🛑 Maladie de Behçet<br>Urgence — Biothérapie<br>précoce si sévère]:::redFill
    Behcet -->|NON| Sarco{Coulées de bougie<br>péri-veineuses ?}
    Sarco -->|OUI| SarcoTtt[Sarcoïdose<br>Bilan systémique + Corticoïdes]:::purpleFill
    Sarco -->|NON, signes neuro| SEP[Sclérose en plaques<br>IRM cérébro-médullaire]:::purpleFill

    NRA --> Seq[Traitement anti-infectieux<br>AVANT/EN COUVERTURE<br>des corticoïdes]
    Toxo --> Seq
    CMV --> Seq
    BehcetTtt --> Seq2[Corticoïdes ± Immunosuppresseur<br>/ Biothérapie selon sévérité]
    SarcoTtt --> Seq2
    SEP --> Seq2
`;
