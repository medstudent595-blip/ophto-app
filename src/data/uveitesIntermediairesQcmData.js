// QCM interactifs — Uvéites Intermédiaires (60 questions difficiles, conformes au cours magistral EMC 21-225-D-20)
// Répartition : 10 Clinique · 30 Orientation étiologique · 10 Diagnostic différentiel · 10 Prise en charge thérapeutique

export const uiQcmData = [
  // ============================================================
  // 🔬 CLINIQUE (1–10)
  // ============================================================
  {
    "question": "🔬 CLINIQUE — Concernant les signes fonctionnels révélateurs d'une uvéite intermédiaire (UI) de l'adulte, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Les myodésopsies et un flou visuel d'installation progressive sont les symptômes les plus fréquents." },
      { "id": "B", "text": "Une douleur et une rougeur oculaires marquées sont habituelles et orientent d'emblée le diagnostic." },
      { "id": "C", "text": "Un grand nombre de formes sont asymptomatiques, de découverte fortuite lors d'un examen systématique." },
      { "id": "D", "text": "Une baisse d'acuité visuelle brutale peut révéler une hémorragie intravitréenne ou un décollement de rétine." },
      { "id": "E", "text": "L'acuité visuelle centrale est toujours effondrée dès le début, même en l'absence d'œdème maculaire." }
    ],
    "correctAnswers": ["A", "C", "D"],
    "explanation": "- **A (Vrai)** : Myodésopsies + flou progressif = tableau le plus fréquent, traduisant l'inflammation vitréenne.\n- **B (Faux)** : Douleur et rougeur sont **rares chez l'adulte** ; leur présence doit faire évoquer une composante antérieure (SEP, enfant) ou une autre étiologie.\n- **C (Vrai)** : Nombreuses formes asymptomatiques dépistées fortuitement.\n- **D (Vrai)** : La BAV brutale traduit une complication (hémorragie intravitréenne sur néovascularisation, DR).\n- **E (Faux)** : L'AV peut être longtemps conservée alors qu'il existe déjà un retentissement campimétrique ; c'est l'atteinte maculaire œdémateuse qui conditionne le pronostic visuel."
  },
  {
    "question": "🔬 CLINIQUE — L'examen du vitré après dilatation met en évidence une triade sémiologique du vitré inflammatoire. Quel est l'élément le mieux corrélé au degré d'inflammation vitréenne ?",
    "options": [
      { "id": "A", "text": "Le tyndall cellulaire (nombre de cellules)." },
      { "id": "B", "text": "Le tyndall protéique (haze), opalescence diffuse non cellulaire." },
      { "id": "C", "text": "Le remaniement architectural du vitré (bandes fibreuses, DPV)." },
      { "id": "D", "text": "La présence de corps astéroïdes." },
      { "id": "E", "text": "Le degré de liquéfaction (synérèse) du gel vitréen." }
    ],
    "correctAnswers": ["B"],
    "explanation": "- **B (Vrai)** : Le **haze** (tyndall protéique) correspond à une concentration anormale de protéines plasmatiques et représente l'élément sémiologique **le mieux corrélé** au degré d'inflammation, du fait d'une concordance temporelle étroite avec la rupture de la barrière hémato-rétinienne. À la différence des cellules (qui persistent sous forme cicatricielle), le haze disparaît à distance de l'épisode aigu.\n- **A** : Les cellules quantifient l'activité mais persistent sous forme séquellaire.\n- **C, E** : Remaniements architecturaux = conséquences chroniques, non un marqueur d'activité.\n- **D** : Les corps astéroïdes ne sont pas inflammatoires (dégénératifs, non spécifiques)."
  },
  {
    "question": "🔬 CLINIQUE — Selon la quantification standardisée (SUN/EMC) de la réaction cellulaire vitréenne en rétro-illumination, quelles correspondances grade ↔ nombre de cellules sont exactes ?",
    "options": [
      { "id": "A", "text": "Grade 0,5+ : 2 à 20 opacités." },
      { "id": "B", "text": "Grade 1+ : 21 à 50 opacités." },
      { "id": "C", "text": "Grade 2+ : 51 à 100 opacités." },
      { "id": "D", "text": "Grade 3+ : 101 à 250 opacités, seul le nerf optique reste visible." },
      { "id": "E", "text": "Grade 4+ : plus de 250 opacités, fond d'œil non visible." }
    ],
    "correctAnswers": ["A", "B", "C", "D", "E"],
    "explanation": "Toutes les correspondances sont exactes selon le Tableau 1 de l'EMC :\n- **0,5+** = 2–20 opacités (opacités rares) ;\n- **1+** = 21–50 (dispersées, seules les fibres optiques floues) ;\n- **2+** = 51–100 (modérées, vaisseaux et nerf optique visibles mais flous) ;\n- **3+** = 101–250 (nombreuses, seul le nerf optique visible) ;\n- **4+** = > 250 (denses, fond d'œil non visible).\nLe grade 0 correspond à 0–1 cellule (vitré clair)."
  },
  {
    "question": "🔬 CLINIQUE — Comment distinguer une hyalite active d'une hyalite séquellaire (inactive) et quel seuil définit l'activité d'une UI ?",
    "options": [
      { "id": "A", "text": "Une réaction cellulaire ≥ 1+ dans le gel vitréen ET dans les lacunes de vitré liquéfié définit une hyalite active." },
      { "id": "B", "text": "Des cellules présentes uniquement dans le gel (absentes des lacunes) traduisent une hyalite cicatricielle inactive." },
      { "id": "C", "text": "Une hyalite active nécessite au minimum un grade 3+." },
      { "id": "D", "text": "Le tyndall protéique persistant à distance de l'épisode aigu est le meilleur marqueur d'activité résiduelle." },
      { "id": "E", "text": "La disparition du haze n'exclut pas la persistance de cellules cicatricielles." }
    ],
    "correctAnswers": ["A", "B", "E"],
    "explanation": "- **A (Vrai)** : Hyalite active = cellules ≥ 1+ présentes à la fois dans le gel **et** dans les lacunes liquéfiées.\n- **B (Vrai)** : Cellules confinées au gel = cellules « cicatricielles » (séquellaires inactives).\n- **C (Faux)** : Le seuil d'activité est ≥ 1+, pas 3+.\n- **D (Faux)** : Le haze **disparaît** à distance de l'épisode aigu ; il ne persiste pas comme marqueur résiduel (ce sont les cellules qui persistent).\n- **E (Vrai)** : Conséquence directe : après régression du haze, des cellules cicatricielles peuvent subsister."
  },
  {
    "question": "🔬 CLINIQUE — Concernant les œufs de fourmi (snowballs) et la banquise (snowbank), quelles affirmations sont exactes ?",
    "options": [
      { "id": "A", "text": "Les œufs de fourmi, situés en avant de la rétine inférieure, constituent le signe le plus spécifique des uvéites intermédiaires." },
      { "id": "B", "text": "La banquise est une opacité blanchâtre segmentaire de l'extrême périphérie, prédominant en inférieur (6 heures), et signe la pars planite." },
      { "id": "C", "text": "La banquise est mieux visualisée avec une lentille grand champ chez un patient bien dilaté." },
      { "id": "D", "text": "La présence d'une banquise s'associe à une inflammation plus sévère et à une plus grande fréquence d'œdème maculaire cystoïde." },
      { "id": "E", "text": "Les œufs de fourmi prédominent dans le vitré supérieur, à proximité de la papille." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Snowballs = signe **le plus spécifique** de l'UI, de localisation déclive (vitré inférieur, devant la rétine inférieure).\n- **B (Vrai)** : Banquise = opacité blanchâtre circonscrite, segmentaire, extrême périphérie inférieure (6h), pouvant s'étendre à 360°, **caractéristique de la pars planite**.\n- **C (Vrai)** : Sa visualisation exige une bonne dilatation + lentille grand champ.\n- **D (Vrai)** : Anatomopathologiquement, la banquise (prolifération gliale) est associée à une inflammation plus sévère et à un OMC plus fréquent.\n- **E (Faux)** : Les snowballs sont **déclives (inférieurs)**, non supérieurs."
  },
  {
    "question": "🔬 CLINIQUE — L'analyse sémiologique fine des opacités cellulaires vitréennes oriente le diagnostic. Quelles associations couleur ↔ signification sont correctes ?",
    "options": [
      { "id": "A", "text": "Cellules blanches : inflammatoires récentes, mais aussi cellules tumorales (rétinoblastome, lymphome, métastase) ou corps astéroïdes." },
      { "id": "B", "text": "Cellules pigmentées rouges : hématies, traduisant une hémorragie intravitréenne." },
      { "id": "C", "text": "Cellules pigmentées brunes : cellules de l'épithélium pigmentaire ou mélaniques, évocatrices d'une déchirure rétinienne ou d'une origine post-traumatique." },
      { "id": "D", "text": "Cellules blanches très réfléchissantes : toujours strictement inflammatoires." },
      { "id": "E", "text": "La distribution des cellules (gel seul vs gel + lacunes) permet de distinguer une hyalite active d'une hyalite séquellaire." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Cellules blanches = inflammatoires récentes mais aussi tumorales ou corps astéroïdes (non spécifiques).\n- **B (Vrai)** : Rouges = hématies (hémorragie).\n- **C (Vrai)** : Brunes = EPR/mélaniques → déchirure rétinienne, post-traumatique.\n- **D (Faux)** : Une **réflexion intense** évoque justement des corps astéroïdes ou un synchisis étincelant (pathologies **non inflammatoires**) ; les cellules inflammatoires sont peu réfléchissantes.\n- **E (Vrai)** : La topographie gel/lacunes distingue active vs séquellaire."
  },
  {
    "question": "🔬 CLINIQUE — Concernant l'examen du segment antérieur au cours d'une UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Le segment antérieur est généralement calme chez l'adulte." },
      { "id": "B", "text": "Une inflammation antérieure granulomateuse (précipités en graisse de mouton) est plus fréquente dans les UI associées à la sclérose en plaques." },
      { "id": "C", "text": "Chez l'enfant, synéchies postérieures et kératopathie en bandelette sont plus fréquentes." },
      { "id": "D", "text": "La réaction cellulaire de chambre antérieure est classiquement supérieure à celle du vitré antérieur." },
      { "id": "E", "text": "La cataracte sous-capsulaire postérieure est la complication la plus fréquente du segment antérieur." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Segment antérieur calme chez l'adulte dans la majorité des cas.\n- **B (Vrai)** : Les UI de la SEP donnent plus volontiers une uvéite antérieure **granulomateuse** (précipités « en graisse de mouton »).\n- **C (Vrai)** : Chez l'enfant, synéchies postérieures et kératopathie en bandelette (3–9 %).\n- **D (Faux)** : Le **gradient inflammatoire** impose que le flare/cellules de chambre antérieure (≤ 2+) soient **toujours inférieurs** à la réaction du vitré antérieur (sinon on s'oriente vers une uvéite antérieure).\n- **E (Vrai)** : Cataracte sous-capsulaire postérieure = complication la plus fréquente du segment antérieur (jusqu'à 83 % à 10 ans)."
  },
  {
    "question": "🔬 CLINIQUE — Parmi les complications observables à l'examen d'une UI, quelles fréquences rapportées sont exactes ?",
    "options": [
      { "id": "A", "text": "Œdème maculaire cystoïde : 28 à 64 %." },
      { "id": "B", "text": "Cataracte sous-capsulaire postérieure : 41 % au stade initial, jusqu'à 83 % à 10 ans." },
      { "id": "C", "text": "Périphlébites (vascularites rétiniennes) : 20 à 60 %." },
      { "id": "D", "text": "Glaucome secondaire (souvent cortico-induit) : environ 50 %." },
      { "id": "E", "text": "Œdème papillaire : 10 à 50 %." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : OMC 28–64 %, première cause de baisse d'acuité visuelle prolongée.\n- **B (Vrai)** : Cataracte SCP 41 % initial → 83 % à 10 ans.\n- **C (Vrai)** : Périphlébites 20–60 %.\n- **D (Faux)** : Le glaucome secondaire est **rare (8 %, 14 % à 10 ans)**, le plus souvent cortico-induit, et non 50 %.\n- **E (Vrai)** : Œdème papillaire 10–50 %."
  },
  {
    "question": "🔬 CLINIQUE — Une patiente présente une AV conservée à 8/10 malgré des myodésopsies invalidantes. L'examen retrouve une hyalite. Quelles affirmations concernant l'évaluation du retentissement sont exactes ?",
    "options": [
      { "id": "A", "text": "Le champ visuel peut objectiver un retentissement fonctionnel réel malgré une acuité conservée." },
      { "id": "B", "text": "L'OCT SD est l'aide la plus précieuse et la moins invasive pour dépister et suivre l'œdème maculaire cystoïde." },
      { "id": "C", "text": "L'atteinte maculaire œdémateuse conditionne le pronostic visuel." },
      { "id": "D", "text": "Une acuité visuelle conservée exclut formellement toute indication thérapeutique." },
      { "id": "E", "text": "L'OCT en mode RNFL permet de suivre l'œdème papillaire et de dépister un glaucome secondaire." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Le champ visuel précise le retentissement d'une hyalite dont l'AV peut être conservée.\n- **B (Vrai)** : SD-OCT = examen clé, non invasif, pour l'OMC (principale cause de BAV prolongée).\n- **C (Vrai)** : La macula œdémateuse conditionne le pronostic visuel.\n- **D (Faux)** : Des myodésopsies très invalidantes et/ou des signes de gravité anatomique (OMC, vascularite, papillite, néovascularisation) peuvent justifier un traitement même avec une AV conservée.\n- **E (Vrai)** : Le mode RNFL suit l'œdème papillaire et dépiste précocement un glaucome cortisoné/inflammatoire."
  },
  {
    "question": "🔬 CLINIQUE — La pars planite est une entité particulière d'uvéite intermédiaire. Quelle est sa définition classique et quelle en est la limite conceptuelle soulignée dans le cours ?",
    "options": [
      { "id": "A", "text": "Elle associe œufs de fourmi (snowballs), banquises (snowbanks) et absence d'étiologie identifiée." },
      { "id": "B", "text": "Sa définition mêle un critère topographique et un critère étiologique, ce qui est source d'ambiguïté." },
      { "id": "C", "text": "Certains auteurs proposent de la réserver à une entité purement topographique (présence de banquises) sans préjuger de l'origine." },
      { "id": "D", "text": "Elle impose par définition la mise en évidence d'un granulome choroïdien." },
      { "id": "E", "text": "Elle est toujours unilatérale et strictement infectieuse." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : Définition classique = snowballs + snowbanks + absence d'étiologie.\n- **B (Vrai)** : L'ambiguïté vient du mélange d'un critère **topographique** (siège) et d'un critère **étiologique** (absence de cause).\n- **C (Vrai)** : Proposition de réserver le terme à l'entité topographique (banquises) sans préjuger de l'origine inflammatoire/infectieuse/idiopathique.\n- **D (Faux)** : Le granulome choroïdien oriente vers une sarcoïdose, ce n'est pas un critère de pars planite.\n- **E (Faux)** : La pars planite s'inscrit dans les UI, majoritairement bilatérales et idiopathiques par définition d'exclusion."
  },

  // ============================================================
  // 🧭 ORIENTATION ÉTIOLOGIQUE (11–40)
  // ============================================================
  {
    "question": "🧭 ÉTIOLOGIE — Chez l'adulte, quelles fréquences étiologiques des uvéites intermédiaires sont exactes (Tableau 3, EMC) ?",
    "options": [
      { "id": "A", "text": "Idiopathique : 70 à 85 %." },
      { "id": "B", "text": "Sarcoïdose : 7 à 22 %." },
      { "id": "C", "text": "Sclérose en plaques : 5 à 10 %." },
      { "id": "D", "text": "Maladies inflammatoires intestinales : environ 5 %." },
      { "id": "E", "text": "Lymphome intraoculaire : 30 à 40 %." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Idiopathique 70–85 %.\n- **B (Vrai)** : Sarcoïdose 7–22 %.\n- **C (Vrai)** : SEP 5–10 %.\n- **D (Vrai)** : MICI (Crohn, RCH) ≈ 5 %.\n- **E (Faux)** : Les pseudo-uvéites néoplasiques (lymphome, métastase, CAR) sont **rares**, à éliminer systématiquement, et ne représentent pas 30–40 %."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant l'épidémiologie et le terrain des uvéites intermédiaires, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Elles représentent 4 à 20 % de l'ensemble des uvéites de l'adulte." },
      { "id": "B", "text": "Chez l'enfant, elles représentent 16 à 33 % des uvéites pédiatriques." },
      { "id": "C", "text": "Elles touchent préférentiellement les patients de moins de 40 ans, avec deux pics (5-15 ans et 25-35 ans)." },
      { "id": "D", "text": "Elles sont bilatérales d'emblée dans 70 à 90 % des cas, et le deviennent dans 90 % au cours de l'évolution." },
      { "id": "E", "text": "Il existe une nette prédominance masculine et une atteinte strictement symétrique." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : 4–20 % des uvéites de l'adulte (forme anatomique la moins fréquente).\n- **B (Vrai)** : 16–33 % des uvéites pédiatriques.\n- **C (Vrai)** : < 40 ans, deux pics 5-15 et 25-35 ans.\n- **D (Vrai)** : Bilatérales d'emblée 70–90 %, 90 % au cours de l'évolution.\n- **E (Faux)** : **Pas de prédilection de sexe ni de race** ; l'atteinte est souvent **asymétrique** (et non strictement symétrique)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant les associations HLA décrites au cours des uvéites intermédiaires, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "HLA-DR15 est significativement associé et également retrouvé dans la sclérose en plaques, corroborant une parenté physiopathologique." },
      { "id": "B", "text": "HLA-DR2 et HLA-DQ1 ont été rapportés en association." },
      { "id": "C", "text": "HLA-A28 est décrit avec un syndrome associant UI, arthralgies et hypocomplémentémie." },
      { "id": "D", "text": "Le typage HLA a une forte valeur pronostique et guide directement la prise en charge." },
      { "id": "E", "text": "HLA-B27 est le marqueur spécifique et constant des uvéites intermédiaires idiopathiques." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : HLA-DR15 = association significative, partagée avec la SEP (parenté physiopathologique).\n- **B (Vrai)** : HLA-DR2 et DQ1 rapportés.\n- **C (Vrai)** : HLA-A28 = syndrome UI + arthralgies + hypocomplémentémie.\n- **D (Faux)** : Le typage HLA **n'a pas de valeur pronostique** et ne modifie pas la prise en charge en pratique.\n- **E (Faux)** : HLA-B27 est le marqueur des uvéites **antérieures** aiguës (spondyloarthropathies), pas des UI."
  },
  {
    "question": "🧭 ÉTIOLOGIE — La forme idiopathique / pars planite représente la majorité des UI. Quel est son profil typique ?",
    "options": [
      { "id": "A", "text": "Diagnostic d'exclusion." },
      { "id": "B", "text": "Touche préférentiellement les femmes jeunes ou d'âge moyen, typiquement bilatérale." },
      { "id": "C", "text": "Associe classiquement hyalite + œdème maculaire + périphlébite." },
      { "id": "D", "text": "Pronostic visuel souvent excellent." },
      { "id": "E", "text": "Nécessite systématiquement une biothérapie anti-TNFα d'emblée." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Diagnostic d'exclusion.\n- **B (Vrai)** : Femmes jeunes/âge moyen, bilatérale.\n- **C (Vrai)** : Triade hyalite + OMC + périphlébite.\n- **D (Vrai)** : Pronostic visuel souvent excellent.\n- **E (Faux)** : La plupart ne nécessitent aucun traitement (abstention/surveillance) ; la biothérapie est réservée aux formes réfractaires."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Quels éléments cliniques orientent vers une sarcoïdose devant une uvéite intermédiaire ?",
    "options": [
      { "id": "A", "text": "Snowballs disposés en « collier de perles »." },
      { "id": "B", "text": "Périphlébites en « taches de bougie »." },
      { "id": "C", "text": "Précipités rétrodescémétiques en « graisse de mouton »." },
      { "id": "D", "text": "Granulomes choroïdiens hypofluorescents en angiographie ICG." },
      { "id": "E", "text": "Atteinte strictement isolée à l'œil, sans manifestation systémique dans plus de 90 % des cas." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Snowballs « en collier de perles » évocateurs.\n- **B (Vrai)** : Périphlébites en taches de bougie (candle wax).\n- **C (Vrai)** : Précipités en graisse de mouton (granulomateux).\n- **D (Vrai)** : Granulomes choroïdiens hypofluorescents en ICG.\n- **E (Faux)** : La sarcoïdose est **multiviscérale dans 80 % des cas** ; l'atteinte isolée n'est pas la règle. Le bilan comprend ECA, calcémie, imagerie thoracique, biopsie des glandes salivaires accessoires, LBA."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la relation entre uvéite intermédiaire et sclérose en plaques (SEP), quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "L'UI est le type d'inflammation oculaire le plus fréquent au cours de la SEP (5 à 27 % des patients SEP)." },
      { "id": "B", "text": "L'atteinte oculaire peut précéder la SEP de plus de 7 ans." },
      { "id": "C", "text": "Une inflammation du segment antérieur est plus fréquente dans ces formes." },
      { "id": "D", "text": "Le bilan comporte une IRM cérébrale, éventuellement complétée de PEV et/ou d'une ponction lombaire." },
      { "id": "E", "text": "Il n'existe aucun lien immunogénétique entre UI et SEP." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : L'UI est l'inflammation oculaire la plus fréquente de la SEP (5–27 %).\n- **B (Vrai)** : Elle peut précéder la SEP de > 7 ans.\n- **C (Vrai)** : Segment antérieur plus fréquemment inflammatoire (granulomateux).\n- **D (Vrai)** : Bilan = IRM cérébrale ± PEV ± PL.\n- **E (Faux)** : Le partage de **HLA-DR2/DR15** corrobore une parenté physiopathologique entre les deux entités."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Devant une UI, quels éléments orientent spécifiquement vers une maladie de Lyme ?",
    "options": [
      { "id": "A", "text": "Atteinte volontiers bilatérale avec banquise habituelle." },
      { "id": "B", "text": "Réaction de chambre antérieure plus marquée que dans les formes idiopathiques." },
      { "id": "C", "text": "Notion de morsure de tique ou d'érythème migrant." },
      { "id": "D", "text": "Agent : Treponema pallidum, confirmé par TPHA-VDRL." },
      { "id": "E", "text": "Confirmation par sérologie de Lyme (Borrelia spp.)." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Lyme oculaire = UI volontiers bilatérale, banquise habituelle.\n- **B (Vrai)** : Réaction de chambre antérieure plus marquée que dans les formes idiopathiques.\n- **C (Vrai)** : Morsure de tique / érythème migrant.\n- **D (Faux)** : *Treponema pallidum* = syphilis, pas Lyme. L'agent de Lyme est **Borrelia**.\n- **E (Vrai)** : Confirmation par sérologie de Lyme."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la maladie de Whipple comme cause rare d'uvéite intermédiaire, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "L'agent responsable est Tropheryma whippelii." },
      { "id": "B", "text": "Elle s'accompagne volontiers de diarrhées chroniques." },
      { "id": "C", "text": "La biopsie intestinale retrouve des macrophages PAS positifs." },
      { "id": "D", "text": "Une PCR peut être réalisée sur prélèvement vitréen." },
      { "id": "E", "text": "Elle est due à Bartonella henselae, transmise par griffure de chat." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Agent = *Tropheryma whippelii*.\n- **B (Vrai)** : Diarrhées chroniques.\n- **C (Vrai)** : Biopsie intestinale = macrophages PAS+.\n- **D (Vrai)** : PCR vitréenne possible.\n- **E (Faux)** : *Bartonella henselae* / griffure de chat = **maladie des griffes du chat** (avec adénopathie satellite), entité distincte."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Parmi les causes suivantes d'uvéite intermédiaire, lesquelles sont d'origine INFECTIEUSE ?",
    "options": [
      { "id": "A", "text": "Maladie de Lyme." },
      { "id": "B", "text": "Syphilis." },
      { "id": "C", "text": "Sarcoïdose." },
      { "id": "D", "text": "Tuberculose." },
      { "id": "E", "text": "Maladie de Behçet." }
    ],
    "correctAnswers": ["A", "B", "D"],
    "explanation": "- **A, B, D (Vrai)** : Lyme (Borrelia), syphilis (Treponema pallidum) et tuberculose (bacille de Koch) sont des causes **infectieuses** — urgences diagnostiques car un traitement spécifique est curatif.\n- **C (Faux)** : La sarcoïdose est une cause **inflammatoire systémique** (granulomatose).\n- **E (Faux)** : Behçet est une **vascularite inflammatoire systémique**, non infectieuse.\nAutres causes infectieuses du cours : Whipple, griffes du chat, virus (VIH, HTLV-1, EBV...), toxoplasmose, toxocarose."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Le syndrome TINU est une cause à connaître d'uvéite. Quelle est sa présentation caractéristique ?",
    "options": [
      { "id": "A", "text": "Uvéite bilatérale associée à une néphrite tubulo-interstitielle aiguë." },
      { "id": "B", "text": "Uvéite associée à une aphtose bipolaire et une vascularite occlusive rétinienne." },
      { "id": "C", "text": "Uvéite associée à une atteinte pulmonaire granulomateuse isolée." },
      { "id": "D", "text": "Uvéite associée à une méningite lymphocytaire chronique." },
      { "id": "E", "text": "Uvéite associée à une diarrhée chronique et à des macrophages PAS+." }
    ],
    "correctAnswers": ["A"],
    "explanation": "- **A (Vrai)** : TINU (Tubulo-Interstitial Nephritis and Uveitis) = UI **bilatérale** + **néphrite interstitielle aiguë**.\n- **B** : décrit la maladie de Behçet.\n- **C** : évoque la sarcoïdose.\n- **D** : évoque une uvéo-méningite.\n- **E** : évoque la maladie de Whipple."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la toxocarose comme cause d'uvéite intermédiaire, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "L'agent est Toxocara canis." },
      { "id": "B", "text": "Elle représente la majorité des infections responsables d'UI de l'enfant." },
      { "id": "C", "text": "Elle est typiquement unilatérale, avec granulome rétinien." },
      { "id": "D", "text": "L'UBM peut montrer une transformation pseudokystique du vitré périphérique, signe spécifique." },
      { "id": "E", "text": "Elle est toujours bilatérale et symétrique chez l'adulte de plus de 50 ans." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : *Toxocara canis*.\n- **B (Vrai)** : Majorité des infections pédiatriques responsables d'UI.\n- **C (Vrai)** : Typiquement unilatérale, granulome rétinien.\n- **D (Vrai)** : UBM = transformation pseudokystique du vitré périphérique (signe spécifique, sensible mais parfois difficile à mettre en évidence).\n- **E (Faux)** : Elle est **unilatérale, de l'enfant** (géophagie), non bilatérale du sujet âgé."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Un patient de 68 ans présente une UI bilatérale, un bilan étiologique négatif, une faible réponse aux corticoïdes et l'absence d'œdème maculaire. Quel diagnostic redouter et comment le confirmer ?",
    "options": [
      { "id": "A", "text": "Lymphome intraoculaire primitif (pseudo-uvéite néoplasique)." },
      { "id": "B", "text": "IRM cérébrale à la recherche d'une atteinte oculocérébrale associée." },
      { "id": "C", "text": "Dosage de l'interleukine-10 (IL-10) dans l'humeur aqueuse (forte suspicion si > 100 pg/mL)." },
      { "id": "D", "text": "Vitrectomie diagnostique avec cytologie (recherche de cellules lymphomateuses)." },
      { "id": "E", "text": "Simple surveillance à 1 an sans exploration complémentaire." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Le tableau (> 50 ans, bilatéral, bilan négatif, corticorésistance, **absence d'OMC**) est très évocateur d'un **lymphome intraoculaire primitif**.\n- **B (Vrai)** : IRM cérébrale (atteinte oculocérébrale fréquente).\n- **C (Vrai)** : IL-10 dans l'humeur aqueuse, forte suspicion si > 100 pg/mL.\n- **D (Vrai)** : Vitrectomie diagnostique (cytologie).\n- **E (Faux)** : L'urgence diagnostique interdit la simple surveillance : le pronostic vital peut être engagé."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Chez l'enfant, quelles propositions concernant les étiologies des uvéites intermédiaires sont exactes ?",
    "options": [
      { "id": "A", "text": "Elles sont moins souvent idiopathiques que chez l'adulte." },
      { "id": "B", "text": "L'arthrite juvénile idiopathique est la première cause inflammatoire." },
      { "id": "C", "text": "La toxocarose représente la majorité des infections pédiatriques responsables." },
      { "id": "D", "text": "Le rétinoblastome doit être éliminé systématiquement chez l'enfant de moins de 5 ans, au besoin sous anesthésie générale." },
      { "id": "E", "text": "La sclérose en plaques est la première étiologie de l'enfant de moins de 3 ans." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Moins souvent idiopathiques que chez l'adulte.\n- **B (Vrai)** : AJI = 1ʳᵉ cause inflammatoire (uvéite antérieure chronique + hyalite de contiguïté).\n- **C (Vrai)** : Toxocarose = majorité des infections pédiatriques.\n- **D (Vrai)** : Rétinoblastome à éliminer systématiquement < 5 ans, si besoin sous AG.\n- **E (Faux)** : La SEP concerne l'adulte jeune, non l'enfant de moins de 3 ans."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Quel est le bilan paraclinique minimal (1ère ligne) recommandé devant une uvéite intermédiaire ?",
    "options": [
      { "id": "A", "text": "NFS, ionogramme sanguin, créatininémie, bilan hépatique." },
      { "id": "B", "text": "TPHA-VDRL et sérologie de Lyme." },
      { "id": "C", "text": "Radiographie pulmonaire et Quantiféron®." },
      { "id": "D", "text": "Enzyme de conversion de l'angiotensine et calcémie." },
      { "id": "E", "text": "Vitrectomie diagnostique systématique avec dosage d'IL-10 chez tous les patients." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A–D (Vrai)** : Le bilan minimal comporte NFS, iono, créatinine, bilan hépatique, TPHA-VDRL, sérologie de Lyme, radiographie pulmonaire, Quantiféron®, ECA, calcémie.\n- **E (Faux)** : La vitrectomie diagnostique avec IL-10 n'est **pas systématique** : elle est réservée à la suspicion de lymphome (sujet > 50 ans, bilan négatif, corticorésistance)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la conduite à tenir si le bilan étiologique de première intention est négatif, quelles propositions sont exactes selon le terrain ?",
    "options": [
      { "id": "A", "text": "Chez le très jeune enfant : éliminer systématiquement un rétinoblastome, au besoin sous AG." },
      { "id": "B", "text": "Chez le patient de plus de 50 ans : éliminer un lymphome oculocérébral (IRM, IL-10, vitrectomie diagnostique)." },
      { "id": "C", "text": "En cas de chronicité ou d'aggravation : refaire un bilan étiologique complet après quelques mois." },
      { "id": "D", "text": "Un bilan négatif initial dispense définitivement de toute réévaluation ultérieure." },
      { "id": "E", "text": "Un traitement spécifique tardif peut encore guérir certains cas initialement classés idiopathiques." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : < 5 ans → rétinoblastome à éliminer.\n- **B (Vrai)** : > 50 ans → lymphome oculocérébral (IRM, IL-10, vitrectomie).\n- **C (Vrai)** : Chronicité/aggravation → refaire le bilan à quelques mois.\n- **D (Faux)** : Il faut **renouveler** le bilan si l'inflammation persiste ou devient réfractaire.\n- **E (Vrai)** : Un traitement spécifique découvert tardivement peut encore guérir certains cas."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la physiopathologie des uvéites intermédiaires, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Les mécanismes précis ne sont pas totalement élucidés." },
      { "id": "B", "text": "Une phase à médiation immunologique humorale et cellulaire est décrite, auto-immune dans certains cas (notamment associés à la SEP)." },
      { "id": "C", "text": "Une seconde phase liée à une rupture non spécifique de la barrière hémato-rétinienne intervient." },
      { "id": "D", "text": "Le rôle de la vascularite et des troubles de perméabilité vasculaire est central." },
      { "id": "E", "text": "Il s'agit exclusivement d'une atteinte uvéale primitive, sans composante vasculaire." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Mécanismes non complètement élucidés.\n- **B (Vrai)** : Phase immunologique humorale + cellulaire (auto-immune dans les formes SEP).\n- **C (Vrai)** : Seconde phase = rupture non spécifique de la BHR.\n- **D (Vrai)** : Rôle central de la vascularite et des troubles de perméabilité.\n- **E (Faux)** : Certains auteurs suggèrent que l'UI n'est pas davantage la conséquence d'une atteinte uvéale primitive que d'une **vascularite** — la composante vasculaire est essentielle."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Quelle est la nature anatomopathologique de la banquise (snowbank) ?",
    "options": [
      { "id": "A", "text": "Prolifération gliale (marquage anti-cellules de Müller et GFAP)." },
      { "id": "B", "text": "Associée à du collagène IV et de la laminine, en regard de la pars plana." },
      { "id": "C", "text": "Le plus souvent déclive, à 6 heures, parfois néovascularisée." },
      { "id": "D", "text": "Simple dépôt de cristaux de cholestérol non cellulaire." },
      { "id": "E", "text": "Amas de cellules tumorales lymphomateuses." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : Prolifération gliale (Müller, GFAP+).\n- **B (Vrai)** : Collagène IV + laminine, en regard de la pars plana.\n- **C (Vrai)** : Déclive à 6h, remontant vers 5 et 8h, parfois néovascularisée.\n- **D (Faux)** : Ce n'est pas un dépôt cristallin (ce serait un synchisis étincelant).\n- **E (Faux)** : Ce n'est pas une prolifération tumorale (qui évoquerait un lymphome/rétinoblastome)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant l'apport de l'angiographie au vert d'indocyanine (ICG) dans le bilan d'une UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Elle permet d'écarter une atteinte choroïdienne infraclinique." },
      { "id": "B", "text": "La mise en évidence de granulomes choroïdiens (lésions hypofluorescentes) peut orienter vers une sarcoïdose ou une tuberculose." },
      { "id": "C", "text": "Elle peut évoquer un diagnostic différentiel postérieur (Birdshot, Vogt-Koyanagi-Harada)." },
      { "id": "D", "text": "Elle est l'examen de référence pour quantifier l'œdème maculaire cystoïde." },
      { "id": "E", "text": "Les granulomes choroïdiens apparaissent hyperfluorescents par diffusion précoce." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : L'ICG écarte une atteinte choroïdienne infraclinique.\n- **B (Vrai)** : Granulomes choroïdiens = lésions **hypofluorescentes** (défaut d'imprégnation) → sarcoïdose, tuberculose.\n- **C (Vrai)** : Peut évoquer un diagnostic différentiel postérieur (Birdshot, VKH).\n- **D (Faux)** : C'est l'**OCT** (et l'angiographie à la fluorescéine) qui explorent l'OMC, pas l'ICG.\n- **E (Faux)** : Les granulomes sont **hypo**fluorescents, non hyperfluorescents."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant les diagnostics différentiels néoplasiques (« pseudo-uvéites ») d'une hyalite, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Le lymphome intraoculaire primitif se présente comme une prolifération cellulaire vitréenne sans tyndall protéique visible, à évoquer chez le sujet de plus de 50 ans." },
      { "id": "B", "text": "Le rétinoblastome (amas de cellules tumorales au fond d'œil) est à éliminer systématiquement chez l'enfant de moins de 5 ans." },
      { "id": "C", "text": "Une métastase vitréenne (ex. mélanome cutané) peut simuler une UI." },
      { "id": "D", "text": "La rétinopathie associée au cancer (CAR) fait partie de ces diagnostics." },
      { "id": "E", "text": "Le lymphome intraoculaire répond de façon spectaculaire et durable aux corticoïdes, ce qui confirme le diagnostic." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : LIOP = prolifération cellulaire **sans tyndall protéique visible**, sujet > 50 ans.\n- **B (Vrai)** : Rétinoblastome à éliminer < 5 ans.\n- **C (Vrai)** : Métastase vitréenne (mélanome cutané).\n- **D (Vrai)** : CAR fait partie des pseudo-uvéites néoplasiques.\n- **E (Faux)** : Le lymphome répond au contraire **faiblement** aux corticoïdes ; une corticorésistance est justement un argument en sa faveur."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant les manifestations infectieuses virales pouvant être associées à une uvéite intermédiaire, lesquelles sont citées dans le cours ?",
    "options": [
      { "id": "A", "text": "VIH." },
      { "id": "B", "text": "HTLV-1." },
      { "id": "C", "text": "EBV." },
      { "id": "D", "text": "Parvovirus et adénovirus." },
      { "id": "E", "text": "Virus de l'hépatite A exclusivement." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A–D (Vrai)** : Les infections virales citées comme causes possibles d'UI incluent VIH, HTLV-1, EBV, parvovirus et adénovirus (sérologies spécifiques selon le contexte).\n- **E (Faux)** : Le virus de l'hépatite A n'est pas mentionné comme cause d'UI dans le cours."
  },
  {
    "question": "🧭 ÉTIOLOGIE — À propos de la démarche diagnostique et du bilan étiologique d'une UI, quelles affirmations de principe sont exactes ?",
    "options": [
      { "id": "A", "text": "Le bilan doit être gradué, orienté et progressif selon les données cliniques, l'âge et la latéralité." },
      { "id": "B", "text": "L'absence d'éléments d'orientation rend le rendement des examens complémentaires très faible." },
      { "id": "C", "text": "Il faut d'emblée réaliser tous les examens possibles chez tous les patients (bilan « tout-venant » exhaustif)." },
      { "id": "D", "text": "L'interrogatoire minutieux est une étape déterminante pour orienter le bilan." },
      { "id": "E", "text": "Une hyalite ne doit jamais faire l'économie d'une recherche de diagnostic différentiel avant de conclure à une UI idiopathique." }
    ],
    "correctAnswers": ["A", "B", "D", "E"],
    "explanation": "- **A (Vrai)** : Bilan gradué, orienté, progressif.\n- **B (Vrai)** : Rendement faible en l'absence d'orientation clinique.\n- **C (Faux)** : Le bilan « tout-venant » exhaustif est justement **à proscrire** ; le bilan doit être **orienté**.\n- **D (Vrai)** : L'interrogatoire est déterminant.\n- **E (Vrai)** : Recherche systématique de diagnostic différentiel, surtout enfant < 5 ans et sujet > 50 ans."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant les particularités du segment antérieur selon l'étiologie, quelles associations sont exactes ?",
    "options": [
      { "id": "A", "text": "Uvéite antérieure granulomateuse avec précipités en graisse de mouton → orienter vers la SEP ou la sarcoïdose." },
      { "id": "B", "text": "Réaction de chambre antérieure plus marquée que dans les formes idiopathiques → penser à la maladie de Lyme." },
      { "id": "C", "text": "Hétérochromie irienne (iris atteint plus clair) + hyalite à gros grains → hétérochromie de Fuchs." },
      { "id": "D", "text": "Synéchies postérieures et kératopathie en bandelette chez l'enfant → penser à l'AJI." },
      { "id": "E", "text": "Segment antérieur totalement calme → exclut formellement toute cause systémique." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Granulomateux avec graisse de mouton → SEP/sarcoïdose.\n- **B (Vrai)** : Réaction CA plus marquée → Lyme.\n- **C (Vrai)** : Hétérochromie + hyalite à gros grains (cellules stellaires) → Fuchs.\n- **D (Vrai)** : Synéchies + kératopathie en bandelette chez l'enfant → AJI.\n- **E (Faux)** : Un segment antérieur calme (fréquent chez l'adulte) **n'exclut pas** une cause systémique (sarcoïdose, SEP, etc.)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant l'apport de l'échographie (mode B et UBM) dans le bilan étiologique d'une UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Le mode B est indispensable en cas d'opacification des milieux (cataracte obturante, hyalite dense, hémorragie intravitréenne)." },
      { "id": "B", "text": "L'UBM analyse l'angle iridocornéen et l'extrême périphérie rétinienne (pars plana)." },
      { "id": "C", "text": "L'UBM peut mettre en évidence une membrane cyclitique tendue entre les procès ciliaires, expliquant certaines hypotonies." },
      { "id": "D", "text": "La transformation pseudokystique du vitré périphérique à l'UBM est un signe spécifique de la toxocarose." },
      { "id": "E", "text": "L'échographie est l'examen de référence pour quantifier le tyndall protéique cellulaire à la lampe à fente." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Mode B indispensable si milieux opaques.\n- **B (Vrai)** : UBM = angle + extrême périphérie (pars plana).\n- **C (Vrai)** : Membrane cyclitique entre procès ciliaires → hypotonie.\n- **D (Vrai)** : Pseudokyste vitréen périphérique = signe spécifique de toxocarose.\n- **E (Faux)** : La quantification du tyndall se fait cliniquement à la **lampe à fente**, pas à l'échographie."
  },
  {
    "question": "🧭 ÉTIOLOGIE — L'angiographie à la fluorescéine apporte des informations essentielles dans une UI. Lesquelles ?",
    "options": [
      { "id": "A", "text": "Confirmer l'œdème maculaire cystoïde (diffusion du colorant)." },
      { "id": "B", "text": "Détecter les vascularites (capillarite et/ou périphlébite) et les papillites infracliniques." },
      { "id": "C", "text": "Aider au diagnostic d'ischémie rétinienne et de néovascularisation." },
      { "id": "D", "text": "Permettre le suivi évolutif des vascularites sous traitement." },
      { "id": "E", "text": "Mettre en évidence des granulomes choroïdiens hypofluorescents, examen supérieur à l'ICG pour cette indication." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A–D (Vrai)** : L'angiographie à la fluorescéine confirme l'OMC, détecte capillarites/périphlébites et papillites infracliniques, dépiste ischémie/néovascularisation et suit l'évolution sous traitement.\n- **E (Faux)** : Ce sont les **granulomes choroïdiens en ICG** (vert d'indocyanine) qui sont hypofluorescents ; l'ICG est l'examen adapté à l'atteinte choroïdienne, non la fluorescéine."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Le cours insiste sur la nécessité de « ne jamais faire l'économie » d'un diagnostic différentiel dans certaines situations à risque. Lesquelles ?",
    "options": [
      { "id": "A", "text": "Enfant de moins de 5 ans (rétinoblastome)." },
      { "id": "B", "text": "Sujet de plus de 50 ans (lymphome oculocérébral)." },
      { "id": "C", "text": "Hyalite atypique ou corticorésistante." },
      { "id": "D", "text": "UI bilatérale idiopathique typique chez une femme jeune répondant bien au traitement." },
      { "id": "E", "text": "Inflammation persistante ou réfractaire malgré un traitement bien conduit." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : < 5 ans → rétinoblastome.\n- **B (Vrai)** : > 50 ans → lymphome.\n- **C (Vrai)** : Hyalite atypique/corticorésistante → réévaluer.\n- **D (Faux)** : Le tableau idiopathique typique bien contrôlé est justement la situation où l'on retient l'idiopathie après bilan négatif — la vigilance différentielle concerne les formes atypiques/extrêmes d'âge.\n- **E (Vrai)** : Persistance/réfractarité → refaire le bilan (un traitement spécifique peut encore guérir)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant les indices d'orientation vers la tuberculose et la syphilis dans le bilan d'une UI, quelles associations sont exactes ?",
    "options": [
      { "id": "A", "text": "Tuberculose : contexte d'endémie/contage, IDR et Quantiféron®." },
      { "id": "B", "text": "Syphilis : sérologies TPHA-VDRL et FTA-abs." },
      { "id": "C", "text": "Syphilis : manifestations cutanéo-muqueuses possibles." },
      { "id": "D", "text": "Tuberculose : confirmée par la mise en évidence de macrophages PAS+ sur biopsie intestinale." },
      { "id": "E", "text": "La radiographie thoracique participe au bilan de la tuberculose." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : TB → endémie/contage, IDR, Quantiféron®.\n- **B (Vrai)** : Syphilis → TPHA-VDRL, FTA-abs.\n- **C (Vrai)** : Syphilis → manifestations cutanéo-muqueuses.\n- **D (Faux)** : Les macrophages **PAS+** sur biopsie intestinale caractérisent la **maladie de Whipple**, pas la tuberculose.\n- **E (Vrai)** : La radiographie thoracique fait partie du bilan (TB, sarcoïdose)."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Le dosage de l'interleukine-10 dans l'humeur aqueuse est utile dans une situation précise. Laquelle et quel seuil retenir ?",
    "options": [
      { "id": "A", "text": "Suspicion de lymphome intraoculaire ; forte suspicion si IL-10 > 100 pg/mL." },
      { "id": "B", "text": "Suspicion de sarcoïdose ; forte suspicion si IL-10 < 10 pg/mL." },
      { "id": "C", "text": "Suspicion de toxoplasmose ; dosage couplé au coefficient de Witmer." },
      { "id": "D", "text": "Suspicion de maladie de Behçet ; seuil non pertinent." },
      { "id": "E", "text": "Il complète l'IRM cérébrale et la vitrectomie diagnostique dans le bilan du lymphome oculocérébral." }
    ],
    "correctAnswers": ["A", "E"],
    "explanation": "- **A (Vrai)** : L'IL-10 dans l'humeur aqueuse aide au diagnostic de **lymphome** ; forte suspicion si **> 100 pg/mL** (un ratio IL-10/IL-6 élevé est également évocateur).\n- **E (Vrai)** : Il s'intègre au bilan du lymphome oculocérébral avec l'IRM cérébrale et la vitrectomie diagnostique.\n- **B, C, D (Faux)** : L'IL-10 n'est pas un marqueur de sarcoïdose, de toxoplasmose ni de Behçet."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Quels signes cliniques du fond d'œil, isolés ou associés, doivent faire évoquer une périphlébite d'origine sarcoïdosique plutôt qu'idiopathique ?",
    "options": [
      { "id": "A", "text": "Périphlébites en « taches de bougie »." },
      { "id": "B", "text": "Snowballs en « collier de perles »." },
      { "id": "C", "text": "Granulomes choroïdiens hypofluorescents en ICG." },
      { "id": "D", "text": "Précipités rétrodescémétiques en graisse de mouton." },
      { "id": "E", "text": "Hétérochromie irienne avec cataracte." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A–D (Vrai)** : Taches de bougie (périphlébites), snowballs en collier de perles, granulomes choroïdiens (ICG hypofluorescents) et précipités en graisse de mouton sont autant d'indices de **sarcoïdose**.\n- **E (Faux)** : L'hétérochromie irienne + cataracte évoquent une **hétérochromie de Fuchs**, entité isolée distincte."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Concernant la maladie de Behçet comme cause d'UI, quelle proposition est exacte ?",
    "options": [
      { "id": "A", "text": "Elle est rare sous forme d'uvéite intermédiaire isolée et s'inscrit dans un contexte d'aphtose et de vascularite systémique." },
      { "id": "B", "text": "Elle se caractérise avant tout par une néphrite interstitielle aiguë." },
      { "id": "C", "text": "Elle est confirmée par la présence de macrophages PAS+ sur biopsie intestinale." },
      { "id": "D", "text": "Elle donne exclusivement une hyalite à gros grains avec hétérochromie irienne." },
      { "id": "E", "text": "Son diagnostic repose sur le dosage de l'IL-10 dans l'humeur aqueuse." }
    ],
    "correctAnswers": ["A"],
    "explanation": "- **A (Vrai)** : Behçet est **rare sous forme d'UI** ; il s'intègre dans un tableau d'aphtose (bipolaire) et de vascularite systémique.\n- **B** : décrit le TINU.\n- **C** : décrit la maladie de Whipple.\n- **D** : décrit l'hétérochromie de Fuchs.\n- **E** : décrit le bilan du lymphome."
  },
  {
    "question": "🧭 ÉTIOLOGIE — Un enfant de 4 ans présente une leucocorie et une « hyalite » unilatérale. Quelle est la priorité absolue avant tout traitement anti-inflammatoire ?",
    "options": [
      { "id": "A", "text": "Éliminer un rétinoblastome par un examen minutieux de la rétine, au besoin sous anesthésie générale." },
      { "id": "B", "text": "Débuter une corticothérapie orale forte dose sans exploration." },
      { "id": "C", "text": "Réaliser une IRM cérébrale à la recherche d'un lymphome oculocérébral." },
      { "id": "D", "text": "Prescrire d'emblée du méthotrexate pour une AJI présumée." },
      { "id": "E", "text": "Rechercher une transformation pseudokystique à l'UBM et une sérologie de toxocarose." }
    ],
    "correctAnswers": ["A", "E"],
    "explanation": "- **A (Vrai)** : Chez l'enfant < 5 ans, la **priorité absolue** est d'éliminer un **rétinoblastome** (examen du fond d'œil sous AG au besoin) — une corticothérapie aveugle serait dangereuse.\n- **E (Vrai)** : La toxocarose (unilatérale, granulome, pseudokyste à l'UBM) est le principal diagnostic infectieux pédiatrique à évoquer en parallèle.\n- **B (Faux)** : Corticothérapie aveugle contre-indiquée avant d'éliminer une néoplasie.\n- **C (Faux)** : Le lymphome oculocérébral concerne le sujet > 50 ans.\n- **D (Faux)** : Aucun immunosuppresseur avant d'avoir éliminé un rétinoblastome."
  },

  // ============================================================
  // 🔍 DIAGNOSTIC DIFFÉRENTIEL (41–50)
  // ============================================================
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Quels sont les critères anatomiques du diagnostic positif d'une uvéite intermédiaire (permettant de la distinguer d'autres hyalites) ?",
    "options": [
      { "id": "A", "text": "Inflammation prédominant sur la base du vitré, la rétine antérieure et la pars plana." },
      { "id": "B", "text": "Hyalite active obligatoire (réaction cellulaire ≥ 1+)." },
      { "id": "C", "text": "Gradient inflammatoire : le vitré antérieur doit être plus inflammatoire que la chambre antérieure." },
      { "id": "D", "text": "Présence d'un foyer choriorétinien focalisé en arrière de la base du vitré." },
      { "id": "E", "text": "Absence de foyer rétinien ou choroïdien focalisé postérieur." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Prédominance base du vitré/rétine antérieure/pars plana.\n- **B (Vrai)** : Hyalite active ≥ 1+ obligatoire.\n- **C (Vrai)** : Gradient vitré antérieur > chambre antérieure.\n- **D (Faux)** : La présence d'un **foyer choriorétinien focalisé postérieur** fait sortir du cadre de l'UI (→ uvéite postérieure).\n- **E (Vrai)** : L'absence d'un tel foyer est un critère du diagnostic positif d'UI."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — « Toute hyalite n'est pas synonyme d'uvéite intermédiaire. » Comment reclasser une hyalite selon la localisation initiale de l'inflammation ?",
    "options": [
      { "id": "A", "text": "Si l'inflammation est principalement antérieure → uvéite antérieure (avec hyalite d'extension)." },
      { "id": "B", "text": "S'il existe une inflammation rétinienne et/ou choroïdienne en arrière de l'équateur → uvéite postérieure." },
      { "id": "C", "text": "Une hyalite d'extension impose de rattacher le tableau au foyer inflammatoire principal." },
      { "id": "D", "text": "Toute hyalite doit être classée d'emblée comme uvéite intermédiaire quelle que soit l'inflammation associée." },
      { "id": "E", "text": "Le gradient inflammatoire antéro-postérieur aide à déterminer le siège principal." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Inflammation surtout antérieure → uvéite antérieure.\n- **B (Vrai)** : Atteinte rétinienne/choroïdienne postérieure → uvéite postérieure.\n- **C (Vrai)** : Une hyalite d'extension se rattache au foyer principal.\n- **D (Faux)** : C'est précisément l'erreur à éviter : la hyalite n'est pas synonyme d'UI.\n- **E (Vrai)** : Le gradient guide la localisation du siège principal."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Devant une hyalite, quelles pathologies rétiniennes/choroïdiennes peuvent en être responsables par extension (Tableau 2, EMC) ?",
    "options": [
      { "id": "A", "text": "Rétinites : toxoplasmose, rétinites herpétiques (HSV, VZV, CMV), rétinite candidosique." },
      { "id": "B", "text": "Choroïdites : épithéliopathie en plaques, Vogt-Koyanagi-Harada, Birdshot, choroïdite serpigineuse." },
      { "id": "C", "text": "Vascularites : maladie de Behçet, maladie d'Eales." },
      { "id": "D", "text": "Glaucome primitif à angle ouvert." },
      { "id": "E", "text": "Kératocône." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : Rétinites (toxoplasmose, herpétiques HSV/VZV/CMV, candidosique).\n- **B (Vrai)** : Choroïdites (EMPP, VKH, Birdshot, serpigineuse).\n- **C (Vrai)** : Vascularites (Behçet, Eales).\n- **D, E (Faux)** : Le GPAO et le kératocône ne sont pas des causes de hyalite inflammatoire."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Parmi les « pseudo-uvéites » postopératoires ou post-traumatiques pouvant simuler une UI, lesquelles sont citées ?",
    "options": [
      { "id": "A", "text": "Syndrome d'Irvine-Gass (œdème maculaire du pseudophaque)." },
      { "id": "B", "text": "Endophtalmie (postopératoire ou post-traumatique)." },
      { "id": "C", "text": "Ophtalmie sympathique." },
      { "id": "D", "text": "Syndrome de Schwartz-Matsuo." },
      { "id": "E", "text": "Corps étranger intraoculaire passé inaperçu." }
    ],
    "correctAnswers": ["A", "B", "C", "D", "E"],
    "explanation": "Toutes sont des pseudo-uvéites postopératoires/post-traumatiques à évoquer devant une hyalite (Tableau 2, EMC) :\n- **A** Irvine-Gass ;\n- **B** endophtalmie ;\n- **C** ophtalmie sympathique ;\n- **D** Schwartz-Matsuo (hyalite post-traumatique par rupture de la barrière hémato-rétinienne) ;\n- **E** corps étranger intraoculaire méconnu. L'interrogatoire (chirurgie, traumatisme) est déterminant."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — L'hétérochromie de Fuchs est une cause importante de hyalite « isolée ». Quelles caractéristiques permettent de l'identifier ?",
    "options": [
      { "id": "A", "text": "Hyalite à gros grains (cellules stellaires)." },
      { "id": "B", "text": "Hétérochromie irienne, l'iris atteint étant plus clair." },
      { "id": "C", "text": "Absence habituelle de synéchies postérieures." },
      { "id": "D", "text": "Cataracte fréquemment associée." },
      { "id": "E", "text": "Réponse spectaculaire et durable à une corticothérapie prolongée, qui doit être poursuivie au long cours." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Hyalite à gros grains (cellules stellaires).\n- **B (Vrai)** : Hétérochromie irienne, iris atteint plus clair (dépigmenté).\n- **C (Vrai)** : Pas de synéchies postérieures (caractéristique).\n- **D (Vrai)** : Cataracte fréquente.\n- **E (Faux)** : La Fuchs répond mal aux corticoïdes et ne justifie **pas** une corticothérapie au long cours (risque de complications sans bénéfice)."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Parmi les entités oculaires isolées pouvant se présenter comme une hyalite, quelles associations sont exactes ?",
    "options": [
      { "id": "A", "text": "Syndrome d'Eales : vascularite rétinienne périphérique." },
      { "id": "B", "text": "Syndrome de Schwartz-Matsuo : hyalite post-traumatique par rupture de la barrière hémato-rétinienne." },
      { "id": "C", "text": "Hétérochromie de Fuchs : hyalite à gros grains + hétérochromie irienne." },
      { "id": "D", "text": "Syndrome d'ischémie oculaire et syndrome d'Irvine-Gass figurent parmi les diagnostics différentiels d'une hyalite." },
      { "id": "E", "text": "Ces entités isolées imposent toujours une biothérapie anti-TNFα." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Eales = vascularite rétinienne périphérique.\n- **B (Vrai)** : Schwartz-Matsuo = hyalite post-traumatique (rupture de la BHR).\n- **C (Vrai)** : Fuchs = hyalite à gros grains + hétérochromie.\n- **D (Vrai)** : Syndrome d'ischémie oculaire et Irvine-Gass figurent au Tableau 2 des diagnostics d'une hyalite.\n- **E (Faux)** : Ces entités relèvent de prises en charge spécifiques, non d'une biothérapie systématique."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Quel signe échographique (UBM) est spécifique et oriente le diagnostic différentiel d'une hyalite de l'enfant ?",
    "options": [
      { "id": "A", "text": "Transformation pseudokystique du vitré périphérique (toxocarose)." },
      { "id": "B", "text": "Hyperéchogénicité faible diffuse non spécifique." },
      { "id": "C", "text": "Membrane cyclitique entre les procès ciliaires." },
      { "id": "D", "text": "Décollement de rétine tractionnel." },
      { "id": "E", "text": "Calcifications intraoculaires du rétinoblastome (mode B)." }
    ],
    "correctAnswers": ["A"],
    "explanation": "- **A (Vrai)** : La **transformation pseudokystique du vitré périphérique** à l'UBM est le signe spécifique de la **toxocarose** (sensible mais parfois difficile à mettre en évidence).\n- **B** : hyperéchogénicité faible diffuse = aspect **non spécifique** de la hyalite.\n- **C** : la membrane cyclitique explique certaines hypotonies, non spécifique de la toxocarose.\n- **D** : le DR tractionnel est une complication, non un signe différentiel spécifique.\n- **E** : les calcifications du rétinoblastome se voient en mode B, mais l'item demande le signe **spécifique de hyalite** décrit — c'est le pseudokyste toxocarien."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — L'analyse de la couleur et du caractère réfléchissant des opacités vitréennes permet d'écarter certains diagnostics non inflammatoires. Quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Des opacités très réfléchissantes évoquent des corps astéroïdes ou un synchisis étincelant (non inflammatoires)." },
      { "id": "B", "text": "Des cellules brunes pigmentées orientent vers une déchirure rétinienne ou une origine post-traumatique." },
      { "id": "C", "text": "Des cellules rouges signent une hémorragie intravitréenne." },
      { "id": "D", "text": "Des cellules blanches peuvent aussi être tumorales (rétinoblastome, lymphome, métastase)." },
      { "id": "E", "text": "Les cellules inflammatoires sont fortement réfléchissantes, ce qui les distingue des corps astéroïdes." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Réflexion intense → corps astéroïdes / synchisis étincelant (non inflammatoires).\n- **B (Vrai)** : Cellules brunes → déchirure / post-traumatique.\n- **C (Vrai)** : Cellules rouges → hémorragie.\n- **D (Vrai)** : Cellules blanches → aussi tumorales.\n- **E (Faux)** : Les cellules inflammatoires sont **peu réfléchissantes** ; c'est justement l'inverse qui les distingue des corps astéroïdes."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Dans quelles situations le cours impose-t-il de rechercher SYSTÉMATIQUEMENT un diagnostic différentiel néoplasique avant de conclure à une UI idiopathique ?",
    "options": [
      { "id": "A", "text": "Enfant de moins de 5 ans (rétinoblastome)." },
      { "id": "B", "text": "Sujet de plus de 50 ans (lymphome intraoculaire primitif)." },
      { "id": "C", "text": "Hyalite atypique." },
      { "id": "D", "text": "UI bilatérale du sujet jeune répondant parfaitement aux corticoïdes." },
      { "id": "E", "text": "Faible réponse aux corticoïdes ou absence d'œdème maculaire chez un sujet âgé." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : < 5 ans → rétinoblastome.\n- **B (Vrai)** : > 50 ans → lymphome.\n- **C (Vrai)** : Hyalite atypique → rechercher un différentiel néoplasique.\n- **D (Faux)** : L'UI du sujet jeune bien corticosensible est le tableau typique idiopathique (après bilan négatif).\n- **E (Vrai)** : Corticorésistance / absence d'OMC chez le sujet âgé sont des drapeaux rouges pour le lymphome."
  },
  {
    "question": "🔍 DIAGNOSTIC DIFFÉRENTIEL — Concernant l'endophtalmie candidosique comme diagnostic différentiel d'une hyalite, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Elle peut se présenter par une hyalite dense." },
      { "id": "B", "text": "Elle figure parmi les diagnostics différentiels infectieux d'une hyalite." },
      { "id": "C", "text": "Elle survient volontiers sur terrain à risque (immunodépression, cathéter, toxicomanie IV)." },
      { "id": "D", "text": "Elle relève d'un simple traitement anti-inflammatoire local sans antifongique." },
      { "id": "E", "text": "Elle est toujours bilatérale et symétrique chez le sujet immunocompétent." }
    ],
    "correctAnswers": ["A", "B", "C"],
    "explanation": "- **A (Vrai)** : La candidose oculaire peut donner une **hyalite dense**.\n- **B (Vrai)** : Elle figure parmi les diagnostics différentiels d'une hyalite (rétinite candidosique / endophtalmie).\n- **C (Vrai)** : Terrain à risque (immunodépression, cathéter, toxicomanie IV).\n- **D (Faux)** : Elle nécessite un **traitement antifongique** spécifique, non un simple anti-inflammatoire.\n- **E (Faux)** : Elle n'est pas systématiquement bilatérale/symétrique et survient surtout sur terrain fragilisé."
  },

  // ============================================================
  // 💊 PRISE EN CHARGE THÉRAPEUTIQUE (51–60)
  // ============================================================
  {
    "question": "💊 THÉRAPEUTIQUE — Quelles sont les indications de traitement d'une uvéite intermédiaire (au-delà du traitement étiologique spécifique) ?",
    "options": [
      { "id": "A", "text": "Retentissement fonctionnel important : baisse d'acuité visuelle ≤ 5/10 ou perte de plus de deux lignes." },
      { "id": "B", "text": "Signes de gravité anatomique : œdème maculaire, vascularite, papillite, néovascularisation périphérique." },
      { "id": "C", "text": "Toute UI, même asymptomatique et sans signe de gravité, doit être traitée d'emblée." },
      { "id": "D", "text": "En l'absence de retentissement fonctionnel invalidant et de signe de gravité, l'abstention avec surveillance est licite." },
      { "id": "E", "text": "Myodésopsies très invalidantes." }
    ],
    "correctAnswers": ["A", "B", "D", "E"],
    "explanation": "- **A (Vrai)** : BAV ≤ 5/10 ou perte > 2 lignes.\n- **B (Vrai)** : Signes de gravité anatomique (OMC, vascularite, papillite, néovascularisation).\n- **C (Faux)** : Une UI sans retentissement ni gravité **ne doit pas** être traitée systématiquement (abstention/surveillance/6 mois).\n- **D (Vrai)** : Abstention licite si pas de retentissement ni gravité.\n- **E (Vrai)** : Des myodésopsies très invalidantes peuvent justifier un traitement."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant la corticothérapie systémique de référence dans les UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Prednisone 0,5 à 1 mg/kg/j, maintenue 3 à 5 semaines." },
      { "id": "B", "text": "Décroissance progressive par paliers (ex. 10 mg/7-15 j jusqu'à 20 mg/j, puis 2 mg/15-30 j jusqu'à 10 mg/j)." },
      { "id": "C", "text": "Toute tentative de réduction sous 5 mg/j expose au risque d'insuffisance surrénalienne." },
      { "id": "D", "text": "Une dose d'entretien autour de 7 mg/j peut être maintenue au long cours avec réévaluation tous les 6 mois." },
      { "id": "E", "text": "L'arrêt doit être brutal dès disparition de l'inflammation pour limiter les effets indésirables." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Prednisone 0,5–1 mg/kg/j, 3–5 semaines.\n- **B (Vrai)** : Décroissance codifiée par paliers.\n- **C (Vrai)** : Sous 5 mg/j → risque d'insuffisance surrénalienne (informer patient + médecin traitant).\n- **D (Vrai)** : Entretien ≈ 7 mg/j possible au long cours, réévaluation/6 mois.\n- **E (Faux)** : L'arrêt **brutal est proscrit** ; la décroissance est lente et progressive."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — À partir de quels seuils de corticodépendance faut-il introduire un traitement d'épargne cortisonique (immunosuppresseur) ?",
    "options": [
      { "id": "A", "text": "Corticodépendance > 10 mg/j pendant plusieurs semaines." },
      { "id": "B", "text": "Corticodépendance > 7 mg/j pendant plus d'un an." },
      { "id": "C", "text": "Corticorésistance avérée." },
      { "id": "D", "text": "Dès la première prescription de corticoïdes, systématiquement." },
      { "id": "E", "text": "Effets secondaires inacceptables des corticoïdes." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : > 10 mg/j pendant plusieurs semaines.\n- **B (Vrai)** : > 7 mg/j pendant plus d'un an.\n- **C (Vrai)** : Corticorésistance.\n- **D (Faux)** : L'immunosuppresseur n'est **pas** systématique d'emblée ; il est réservé aux situations de corticodépendance/corticorésistance/intolérance.\n- **E (Vrai)** : Effets secondaires inacceptables des corticoïdes."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant les corticoïdes par voie péri-oculaire (sous-conjonctivale/sous-ténonienne, Kénacort® retard), quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Indiqués notamment pour un OMC, a fortiori unilatéral, et à visée d'épargne systémique." },
      { "id": "B", "text": "La concentration vitréenne obtenue est 3 à 12 fois plus élevée que par voie péribulbaire/orale (étude de Weijtens)." },
      { "id": "C", "text": "Injection type : 0,4 ml (soit 16 mg) sous la conjonctive bulbaire inférieure." },
      { "id": "D", "text": "Complications possibles : cataracte et hypertonie oculaire." },
      { "id": "E", "text": "Aucune surveillance de la pression intraoculaire n'est nécessaire après l'injection." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : OMC (surtout unilatéral) + épargne systémique.\n- **B (Vrai)** : Concentration vitréenne 3–12× supérieure (Weijtens).\n- **C (Vrai)** : 0,4 ml = 16 mg sous la conjonctive bulbaire inférieure (aiguille 25G).\n- **D (Vrai)** : Complications = cataracte, hypertonie (le retrait des cristaux sous-conjonctivaux normalise la PIO en cas de complication).\n- **E (Faux)** : Une surveillance de la PIO est **indispensable** (risque d'hypertonie cortisonée)."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant les implants/injections intravitréens de corticoïdes dans les UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Ozurdex® (implant biodégradable, 0,7 mg de dexaméthasone) est le seul implant intravitréen disponible en France dans cette indication, avec une durée d'action de 4 à 6 mois." },
      { "id": "B", "text": "Le Kénacort® retard IVT (triamcinolone 4 mg) a une durée d'action de 3 à 7 mois." },
      { "id": "C", "text": "Les implants de fluocinolone (Retisert®, Iluvien®) ont une durée d'action longue (24-36 mois) mais un risque élevé de cataracte et de chirurgie antiglaucomateuse." },
      { "id": "D", "text": "Les complications sont dominées par la cataracte et l'hypertonie/glaucome." },
      { "id": "E", "text": "Ces traitements sont dénués de tout risque de cataracte et de glaucome." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Ozurdex® 0,7 mg dexaméthasone, seul implant disponible en France, durée 4–6 mois.\n- **B (Vrai)** : Triamcinolone IVT 4 mg, durée 3–7 mois.\n- **C (Vrai)** : Fluocinolone (Retisert®/Iluvien®) longue durée (24–36 mois), risque élevé cataracte/chirurgie antiglaucomateuse.\n- **D (Vrai)** : Complications dominées par cataracte et hypertonie/glaucome.\n- **E (Faux)** : Le risque de cataracte et de glaucome est au contraire **majeur**."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant les immunosuppresseurs utilisés dans les UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "L'azathioprine (Imurel®) permet environ 90 % de rémission à 1 an dans les UI idiopathiques/pars planites, mais son délai d'action est long (médiane ≈ 6 mois)." },
      { "id": "B", "text": "Le mycophénolate mofétil agit plus rapidement que le méthotrexate et l'azathioprine." },
      { "id": "C", "text": "Le méthotrexate est l'immunosuppresseur de référence pour la sarcoïdose et l'arthrite juvénile idiopathique." },
      { "id": "D", "text": "Ces immunosuppresseurs ont une action différée d'au moins 6 semaines et doivent être initialement associés aux corticoïdes systémiques." },
      { "id": "E", "text": "Ils agissent tous en moins de 48 heures, permettant un arrêt immédiat des corticoïdes." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : AZA ≈ 90 % de rémission à 1 an, délai long (≈ 6 mois).\n- **B (Vrai)** : MMF agit plus vite (≈ 4 mois vs 4,8 et 6,5 mois pour MTX/AZA).\n- **C (Vrai)** : MTX = référence pour sarcoïdose et AJI.\n- **D (Vrai)** : Action différée ≥ 6 semaines, à associer initialement aux corticoïdes.\n- **E (Faux)** : Leur action est **différée** (≥ 6 semaines), sans effet immédiat permettant un arrêt brutal des corticoïdes."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant les biothérapies et immunomodulateurs dans les UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "Avant toute prescription d'anti-TNFα, il faut s'assurer de l'absence de pathologie démyélinisante associée (risque d'aggravation d'une SEP)." },
      { "id": "B", "text": "L'interféron-α2a est un traitement de choix des UI associées à la SEP, efficace sur l'inflammation et l'OMC réfractaire." },
      { "id": "C", "text": "Les anti-TNFα (adalimumab, infliximab) sont presque constamment et rapidement efficaces dans les UI sévères réfractaires, mais leur action est suspensive." },
      { "id": "D", "text": "L'anti-TNFα est le traitement de premier choix des UI associées à la SEP." },
      { "id": "E", "text": "Le rituximab et les immunoglobulines IV ont été rapportés comme options (études ouvertes/cas)." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Éliminer une pathologie démyélinisante avant anti-TNFα (risque d'aggravation d'une SEP).\n- **B (Vrai)** : IFN-α2a = traitement de choix des UI associées à la SEP.\n- **C (Vrai)** : Anti-TNFα presque constamment/rapidement efficaces mais action **suspensive**.\n- **D (Faux)** : Dans les UI associées à la SEP, c'est l'**interféron-α2a** qui est privilégié ; l'anti-TNFα est justement à éviter (risque démyélinisant).\n- **E (Vrai)** : Rituximab et IgIV rapportés (IgIV avec AMM Birdshot uniquement)."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant la cryothérapie et le laser argon dans les UI, quelles propositions sont exactes ?",
    "options": [
      { "id": "A", "text": "La cryothérapie des banquises est réservée aux formes graves de pars planite compliquées de néovascularisation de la banquise ou d'hémorragie intravitréenne." },
      { "id": "B", "text": "La cryothérapie expose à des complications (membrane épirétinienne, décollement de rétine, OMC, hémorragie intravitréenne)." },
      { "id": "C", "text": "Le laser argon (photocoagulation périphérique) est une alternative à la cryothérapie." },
      { "id": "D", "text": "Le laser argon diminue l'inflammation, la néovascularisation périphérique et l'œdème maculaire, mais augmente le risque de membrane épirétinienne." },
      { "id": "E", "text": "Ces traitements physiques sont des traitements de première intention de toute UI." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Cryothérapie réservée à la pars planite compliquée de néovascularisation de banquise ou d'hémorragie intravitréenne.\n- **B (Vrai)** : Risques : MER, DR, OMC, hémorragie.\n- **C (Vrai)** : Laser argon = alternative à la cryothérapie.\n- **D (Vrai)** : Diminue inflammation/néovascularisation/OMC, mais risque accru de MER.\n- **E (Faux)** : Ce sont des traitements de **deuxième ligne, formes graves**, non de première intention."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant la vitrectomie (pars plana) dans les UI, quels sont ses intérêts et indications ?",
    "options": [
      { "id": "A", "text": "Intérêt anti-inflammatoire (suppression du vitré inflammatoire), dont le rôle reste controversé." },
      { "id": "B", "text": "Intérêt optique (clarification des milieux)." },
      { "id": "C", "text": "Traitement des complications mécaniques : décollement de rétine, membrane épirétinienne, trou maculaire." },
      { "id": "D", "text": "Elle est le traitement médical de première intention de toute hyalite active." },
      { "id": "E", "text": "Elle peut réduire la fréquence des récurrences et le recours aux immunosuppresseurs dans certaines séries." }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "explanation": "- **A (Vrai)** : Anti-inflammatoire (rôle controversé).\n- **B (Vrai)** : Optique.\n- **C (Vrai)** : Complications mécaniques (DR, MER, trou maculaire).\n- **D (Faux)** : La vitrectomie est un traitement **chirurgical de 2ᵉ ligne / à visée mécanique**, non un traitement médical de première intention.\n- **E (Vrai)** : Réduction des récurrences et du recours aux immunosuppresseurs rapportée dans certaines séries."
  },
  {
    "question": "💊 THÉRAPEUTIQUE — Concernant la chirurgie de la cataracte au cours d'une UI, quelles précautions codifiées sont exactes ?",
    "options": [
      { "id": "A", "text": "Opérer sur un œil sans inflammation intraoculaire depuis au moins 3 mois (ou inflammation minimale sous traitement)." },
      { "id": "B", "text": "Corticothérapie périopératoire : prednisone 0,5 mg/kg/j 3 jours avant, solumédrol IVL 500 mg à 1 g en peropératoire, prednisone décroissante sur 6 semaines en postopératoire." },
      { "id": "C", "text": "Adjonction postopératoire de dexaméthasone collyre (6-12 gouttes/j) et d'un mydriatique de courte durée (prévention des synéchies)." },
      { "id": "D", "text": "Implant acrylique hydrophobe à anses en C placé dans le sac." },
      { "id": "E", "text": "Opérer en pleine poussée inflammatoire pour « traiter » l'inflammation par la chirurgie." }
    ],
    "correctAnswers": ["A", "B", "C", "D"],
    "explanation": "- **A (Vrai)** : Inflammation contrôlée ≥ 3 mois (ou minimale sous traitement).\n- **B (Vrai)** : Corticothérapie périopératoire codifiée (préop, peropératoire IVL, postop décroissant sur 6 semaines).\n- **C (Vrai)** : Dexaméthasone collyre 6–12 gouttes/j + mydriatique courte durée (prévention synéchies).\n- **D (Vrai)** : Implant acrylique hydrophobe à anses en C dans le sac.\n- **E (Faux)** : Opérer en pleine poussée est **contre-indiqué** ; la chirurgie se fait à distance d'une inflammation contrôlée."
  }
];

// Version markdown de secours (non utilisée si le QcmPlayer reçoit uiQcmData)
export const uiQcmMarkdown = '';
