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

### A. Bilan Minimal (1ère intention, si indication à bilan)

*   NFS, CRP/VS.
*   HLA-B27.
*   Radiographie du bassin (sacro-iliaques de face).
*   TPHA-VDRL.
*   Enzyme de conversion de l'angiotensine (ECA) + radiographie de thorax.

### B. Bilan Élargi (2ème intention, orienté selon le tableau)

*   **Orientation HLA-B27 positive / rachialgies** : avis rhumatologique, IRM des sacro-iliaques si radiographie standard non contributive et forte suspicion clinique.
*   **Orientation granulomateuse** : lysozyme, TDM thoracique, IDR à la tuberculine ou test IGRA (Quantiferon), calcémie ; biopsie des glandes salivaires accessoires si forte suspicion de sarcoïdose et bilan non contributif.
*   **Orientation herpétique/zostérienne** (hypertonie majeure, atrophie irienne, PRD granulomateux, forme récidivante unilatérale) : diagnostic clinique en 1ère intention ; ponction de chambre antérieure avec PCR HSV/VZV ± coefficient de Witmer-Desmont si doute ou forme sévère.
*   **Bilatéralité / chronicité inexpliquée** : sérologie VIH, avis interniste.

---

## IV. Ordonnance Type (Posologies)

*   **Corticoïdes topiques** : Dexaméthasone collyre, dose d'attaque **4 à 8 gouttes/jour** selon l'intensité du Tyndall (jusqu'à 1 goutte/heure les premiers jours dans les formes sévères à hypopyon), décroissance progressive sur plusieurs semaines guidée par la clinique (jamais d'arrêt brutal).
*   **Cycloplégiques-mydriatiques** :
    *   **Cyclopentolate 0,5 %** : 1 goutte, 2 à 3 fois/jour dans les formes modérées (action courte, antalgique).
    *   **Atropine 1 %** : 1 goutte, 1 à 2 fois/jour dans les formes sévères ou à synéchies constituées (action prolongée, meilleure prévention des synéchies).
    *   Objectifs : antalgie (lever le spasme du sphincter irien et du corps ciliaire) et **prévention des synéchies postérieures**.
*   **Corticothérapie générale (formes sévères, bilatérales ou à hypopyon important)** : Prednisone orale **0,5 à 1 mg/kg/jour**, en association aux corticoïdes topiques, avec décroissance progressive une fois l'inflammation contrôlée.
*   **Surveillance de la PIO** : systématique sous corticoïdes (hypertonie cortico-induite) — à distinguer de l'hypertonie inflammatoire du tableau initial (trabéculite).
*   **Traitement étiologique** si cause identifiée (ex : Valaciclovir PO 500 mg x 2/j si UA herpétique — cf. fiche Herpès oculaire).

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

### A. Bilan Minimal (1ère ligne, systématique)

*   NFS, ionogramme sanguin, créatininémie, bilan hépatique.
*   TPHA-VDRL et sérologie de Lyme.
*   Radiographie pulmonaire et test IGRA (Quantiféron®).
*   Enzyme de conversion de l'angiotensine (ECA) et calcémie.

### B. Bilan Élargi (2ème ligne, orienté selon suspicion clinique)

*   **Suspicion de sarcoïdose** : scanner thoracique, biopsie des glandes salivaires accessoires, lavage bronchoalvéolaire (LBA), biopsie transbronchique, épreuves fonctionnelles respiratoires (EFR).
*   **Suspicion de sclérose en plaques** : IRM cérébrale ± potentiels évoqués visuels (PEV) ± ponction lombaire.
*   **Suspicion de pathologie infectieuse atypique** : sérologie VIH, PCR sur ponction du vitré (Lyme, Whipple), examens ciblés selon le contexte (voyage, morsure de tique, diarrhée chronique).
*   **Suspicion de lymphome intraoculaire** (> 50 ans, bilan négatif, corticorésistance, absence d'OMC) : IRM cérébrale, dosage de l'interleukine-10 (IL-10) dans l'humeur aqueuse (forte suspicion si **> 100 pg/mL**), vitrectomie diagnostique (cytologie, cytokines).
*   **Cause rare mais à connaître** : maladie de Whipple (atteinte neurologique, digestive associée — biopsie intestinale avec macrophages PAS+, PCR vitréenne *Tropheryma whipplei*).
*   **Très jeune enfant** : éliminer systématiquement un rétinoblastome par examen minutieux du fond d'œil, au besoin sous anesthésie générale.

---

## IV. Prise en Charge par Paliers (Posologies)

| Palier | Traitement | Posologie | Indication |
| :--- | :--- | :--- | :--- |
| 0 | Abstention thérapeutique | Surveillance clinique tous les 6 mois | Absence de retentissement fonctionnel invalidant et de signe de gravité anatomique |
| 1 | Corticoïdes périoculaires (Kénacort® retard, triamcinolone 40 mg/1 mL) | Injection sous-conjonctivale/sous-ténonienne de **0,4 mL (= 16 mg)**, aiguille 25G | Forme unilatérale ou asymétrique, OMC, épargne systémique |
| 1 | Corticothérapie systémique (Prednisone) | **0,5 à 1 mg/kg/j**, maintenue **3 à 5 semaines**, puis décroissance codifiée : 10 mg/7-15 j jusqu'à 20 mg/j ; 2 mg/15-30 j jusqu'à 10 mg/j ; 1 mg/1-3 mois jusqu'à 7 mg/j (dose d'entretien réévaluée tous les 6 mois) | Retentissement fonctionnel central ou signe de gravité anatomique, atteinte bilatérale sévère |
| 1-2 | Implant intravitréen (Ozurdex®, dexaméthasone 0,7 mg) | 1 injection, durée d'action **4 à 6 mois** | OMC réfractaire, épargne systémique |
| — | Kénacort® retard intravitréen (triamcinolone 4 mg) | Durée d'action **3 à 7 mois** | Alternative à l'Ozurdex®, complications (cataracte, hypertonie) plus fréquentes |
| 2 | Immunosuppresseur d'épargne cortisonique — **Méthotrexate** (référence sarcoïdose/AJI), Azathioprine (Imurel®, ≈ 90 % de rémission à 1 an) ou Mycophénolate mofétil (Cellcept®, action plus rapide) | Posologie et surveillance à discuter avec un interniste ; délai d'action ≥ 6 semaines, à associer initialement aux corticoïdes | Corticodépendance **> 10 mg/j pendant plusieurs semaines**, ou **> 7 mg/j pendant plus d'un an**, ou corticorésistance |
| 2 | Biothérapie — Anti-TNFα (Adalimumab/Humira®, Infliximab/Rémicade®) OU Interféron-α2a (UI associée à la SEP) | Selon protocole spécialisé | Échec des immunosuppresseurs conventionnels ; **éliminer une SEP avant tout anti-TNFα** (risque d'aggravation d'une pathologie démyélinisante) |
| 2 | Cryothérapie des banquises / Laser argon | Séance(s) ciblée(s) | Pars planite compliquée de néovascularisation de la banquise ou d'hémorragie intravitréenne |
| 2 (chirurgical) | Vitrectomie (pars plana) | — | Snowbanking compliqué, hémorragie du vitré, décollement de rétine tractionnel, membrane épirétinienne, ou visée diagnostique |

> [!WARNING]
> **L'œdème maculaire cystoïde (OMC)** est la principale cause de baisse d'acuité visuelle et le facteur pronostique majeur : surveillance OCT systématique à chaque consultation.

> [!CAUTION]
> Toute tentative de réduction de la corticothérapie sous **5 mg/j** expose au risque d'**insuffisance surrénalienne** : en informer systématiquement le patient et le médecin traitant.

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

### A. Bilan Minimal (commun, si uvéite non typique du 1er épisode isolé)

*   NFS, CRP/VS, créatininémie, bilan hépatique.
*   Sérologies TPHA-VDRL.
*   Radiographie thoracique.
*   Enzyme de conversion de l'angiotensine (ECA) ± lysozyme, calcémie.
*   IDR à la tuberculine ou test IGRA (Quantiferon®).
*   HLA-B27 si uvéite antérieure aiguë récidivante ou à hypopyon.

### B. Bilan Élargi (2ème ligne, strictement orienté par les points d'appel)

| Orientation clinique | Examens complémentaires |
| :--- | :--- |
| Rachialgies inflammatoires, psoriasis | Avis rhumatologique, radiographie/IRM des sacro-iliaques |
| Granulomes choroïdiens, dyspnée, adénopathies | TDM thoracique, biopsie des glandes salivaires accessoires, LBA, EFR |
| Dysesthésies, diplopie, NORB, vertiges | IRM cérébrale ± PEV ± ponction lombaire |
| Morsure de tique, érythème migrant | Sérologie de Lyme (Borrelia) |
| Diarrhée chronique, macrophages PAS+ | Biopsie intestinale, PCR *Tropheryma whipplei* (Whipple) |
| Hypertonie majeure, atrophie irienne | Ponction de chambre antérieure, PCR HSV/VZV |
| > 50 ans, corticorésistance, absence d'OMC | IRM cérébrale, IL-10 humeur aqueuse (> 100 pg/mL évocateur), vitrectomie diagnostique (lymphome) |
| Enfant < 5 ans, leucocorie | Examen du fond d'œil sous anesthésie générale (rétinoblastome) |

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

## II. Choriorétinites — Étiologies Clés et Posologies

| Cause | Aspect Typique | Traitement et Posologie |
| :--- | :--- | :--- |
| **Toxoplasmose oculaire** | Foyer blanc-jaunâtre satellite d'une cicatrice pigmentée (« phare dans le brouillard »), hyalite dense en regard | **Pyriméthamine** 100 mg J1 puis **50 mg/j** + **Sulfadiazine 4 g/j** (2 g x 2) + acide folinique 25 mg 2x/semaine (surveillance NFS) **OU Cotrimoxazole** (triméthoprime-sulfaméthoxazole) 800/160 mg, 1 cp x 2/j, durée 4 à 6 semaines ; corticoïdes systémiques (Prednisone 0,5-1 mg/kg/j) **après 48h** d'antiparasitaire si atteinte maculaire/nerf optique/gros vaisseaux ou immunodépression |
| **Nécrose rétinienne aiguë (NRA)** (HSV/VZV) | 🚨 **Urgence absolue** : plages de nécrose périphérique confluentes, vascularite occlusive artérielle, hyalite | **Aciclovir IV 10 à 15 mg/kg toutes les 8h** en urgence (hospitalisation), relais per os (Valaciclovir 1 g x 3/j) après 7 à 10 jours ; laser prophylactique de barrage discuté ; corticoïdes retardés après 48h d'antiviral |
| **Rétinite à CMV** | Immunodéprimé (VIH < 50 CD4/mm³, greffés) — aspect « pizza pie » (nécrose blanche hémorragique le long des vaisseaux) | **Ganciclovir IV 5 mg/kg toutes les 12h** ou **Valganciclovir PO 900 mg x 2/j** (attaque 2-3 semaines puis dose d'entretien 900 mg/j) ± implant intravitréen de ganciclovir |

---

## III. Vascularites Rétiniennes — Étiologies Clés et Posologies

| Cause | Aspect Typique | Particularité et Traitement |
| :--- | :--- | :--- |
| **Maladie de Behçet** | Occlusions veineuses et/ou artérielles, hémorragies rétiniennes, vascularite nécrosante | 🚨 Urgence thérapeutique — risque de cécité rapide ; Corticoïdes forte dose (bolus IV Méthylprednisolone 1 g/j x 3j puis relais Prednisone 1 mg/kg/j) + Azathioprine ou Ciclosporine d'emblée ; biothérapie anti-TNF (Adalimumab) précoce dans les formes sévères |
| **Sarcoïdose** | Périphlébite avec exsudats péri-veineux en « coulées de bougie » (*candle wax drippings*), granulomes choroïdiens | Bilan systémique (ECA, calcémie, TDM thoracique, biopsie glandes salivaires) ; Prednisone 0,5-1 mg/kg/j si atteinte sévère |
| **Sclérose en plaques** | Périphlébite périphérique rétinienne, souvent asymptomatique | IRM cérébro-médullaire ± PEV ± PL systématiques ; Interféron-α2a en 1ère ligne si traitement local insuffisant (éviter les anti-TNFα) |
| **Lupus / Granulomatose avec polyangéite** | Vascularite occlusive, atteinte multisystémique | Bilan immunologique dirigé (AAN, ANCA) ; corticoïdes systémiques + immunosuppresseur (Cyclophosphamide dans les formes sévères de GPA) |

---

## IV. Bilan Paraclinique

### A. Bilan Minimal (1ère intention)

*   NFS, CRP/VS.
*   Sérologie toxoplasmose (IgG/IgM).
*   TPHA-VDRL.
*   ECA + radiographie/TDM thoracique.
*   Angiographie à la fluorescéine et OCT maculaire systématiques.

### B. Bilan Élargi (orienté selon le tableau)

*   **Nécrose rétinienne / suspicion virale** : ponction de chambre antérieure avec PCR HSV/VZV/CMV (± coefficient de Witmer-Desmont).
*   **Suspicion de Behçet** : recherche HLA-B51, aphtose bipolaire, pathergy test, avis interniste.
*   **Suspicion de sarcoïdose** : biopsie des glandes salivaires accessoires, LBA, EFR.
*   **Suspicion de SEP** : IRM cérébro-médullaire ± PEV ± ponction lombaire.
*   **Immunodépression suspectée/connue** : sérologie VIH, numération CD4.

---

## V. Place de l'Imagerie

*   **Angiographie à la fluorescéine** : diffusion pariétale des vaisseaux (vascularite active), zones d'occlusion/ischémie périphérique guidant l'indication d'une photocoagulation panrétinienne.
*   **OCT maculaire** : recherche d'un œdème maculaire, d'une membrane épirétinienne ; épaississement choroïdien évocateur de VKH.

---

## VI. Règle d'Or Thérapeutique

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
