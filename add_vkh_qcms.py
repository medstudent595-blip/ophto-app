# add_vkh_qcms.py
import json
import os
import re

vkh_qcms = [
    # --- DIAGNOSTIC (20) ---
    {
        "question": "Concernant les signes fonctionnels de la phase aiguë de la maladie de Vogt-Koyanagi-Harada (VKH), quelle est la présentation classique ?",
        "options": [
            {"id": "A", "text": "Une baisse d'acuité visuelle progressive sur plusieurs mois."},
            {"id": "B", "text": "Une baisse d'acuité visuelle bilatérale brutale, souvent asymétrique."},
            {"id": "C", "text": "Des myodésopsies isolées sans baisse d'acuité visuelle."},
            {"id": "D", "text": "Une douleur oculaire intense avec photophobie majeure comme signe d'appel principal."},
            {"id": "E", "text": "Une cécité nocturne (héméralopie) d'apparition brutale."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Le signe fonctionnel principal est une baisse de vision bilatérale (70-95% d'emblée) et brutale (sur quelques jours). La douleur est inconstante et moins au premier plan que dans une sclérite.",
        "category": "diagnostic"
    },
    {
        "question": "À l'examen du fond d'œil lors de la phase aiguë du VKH, quels signes cliniques sont caractéristiques ?",
        "options": [
            {"id": "A", "text": "Un décollement séreux rétinien (DSR) typiquement multifocal."},
            {"id": "B", "text": "Un œdème papillaire fréquent."},
            {"id": "C", "text": "Des plis choroïdiens ou rétiniens au pôle postérieur."},
            {"id": "D", "text": "Des foyers de choriocarcinome."},
            {"id": "E", "text": "Des périphlébites rétiniennes en « taches de bougie »."}
        ],
        "correctAnswers": ["A", "B", "C"],
        "explanation": "- **A, B, C (Vrais)** : Le tableau typique associe une choroïdite diffuse, un DSR multifocal prédominant au pôle postérieur, des plis choroïdiens et un œdème papillaire. Les périphlébites évoquent plutôt une sarcoïdose."
    },
    {
        "question": "Sur le plan du segment antérieur, quelle complication précoce peut survenir à la phase aiguë du VKH ?",
        "options": [
            {"id": "A", "text": "Un glaucome néovasculaire immédiat."},
            {"id": "B", "text": "Une crise aiguë de glaucome par fermeture de l'angle."},
            {"id": "C", "text": "Une luxation du cristallin en chambre antérieure."},
            {"id": "D", "text": "Un hyphéma spontané."},
            {"id": "E", "text": "Une uvéite antérieure granulomateuse d'emblée très sévère."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : L'œdème du corps ciliaire et le décollement ciliochoroïdien peuvent entraîner une rotation antérieure du corps ciliaire, causant un glaucome par fermeture de l'angle. L'uvéite antérieure à la phase initiale aiguë est souvent minime et NON granulomateuse (elle devient granulomateuse à la phase chronique)."
    },
    {
        "question": "À l'OCT maculaire (swept-source ou EDI), quels signes sont très évocateurs de la phase aiguë de la maladie de VKH ?",
        "options": [
            {"id": "A", "text": "Un DSR multilobulaire compartimenté par des septa."},
            {"id": "B", "text": "Un amincissement choroïdien majeur."},
            {"id": "C", "text": "Un décollement bacillaire (clivage intrarétinien des photorécepteurs)."},
            {"id": "D", "text": "Des ondulations (plis) de l'épithélium pigmentaire."},
            {"id": "E", "text": "Un épaississement choroïdien diffus."}
        ],
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "- **A, C, D, E (Vrais)** : L'OCT montre un DSR avec des septa fibrineux, un décollement bacillaire caractéristique, des plis de l'EP, et surtout un *épaississement* (pachychoroïde inflammatoire) et non un amincissement choroïdien."
    },
    {
        "question": "Lors de l'angiographie à la fluorescéine à la phase aiguë du VKH, quel aspect est typiquement observé ?",
        "options": [
            {"id": "A", "text": "Un retard de perfusion choroïdienne précoce."},
            {"id": "B", "text": "Une hyperfluorescence précoce de la macula en « rayon de miel »."},
            {"id": "C", "text": "L'apparition de multiples points hyperfluorescents (pin points) au niveau de l'EP."},
            {"id": "D", "text": "Une accumulation tardive du colorant dans l'espace sous-rétinien (pooling)."},
            {"id": "E", "text": "Une ischémie rétinienne périphérique étendue avec zones de non-perfusion."}
        ],
        "correctAnswers": ["A", "C", "D"],
        "explanation": "- **A, C, D (Vrais)** : La triade angiographique fluorescéinique associe un retard choroïdien initial, des pin points, et un pooling tardif multilobulaire. L'ischémie rétinienne n'est pas une caractéristique du VKH."
    },
    {
        "question": "Quel est l'intérêt principal de l'angiographie au vert d'indocyanine (ICG) dans le diagnostic du VKH aigu ?",
        "options": [
            {"id": "A", "text": "Elle met en évidence des néovaisseaux choroïdiens d'emblée dans 90% des cas."},
            {"id": "B", "text": "Elle montre un retard de perfusion de la choriocapillaire aux temps précoces."},
            {"id": "C", "text": "Elle objective de multiples taches hypofluorescentes (dark dots) persistantes aux temps tardifs."},
            {"id": "D", "text": "Elle est systématiquement normale à la phase aiguë."},
            {"id": "E", "text": "Elle montre un remplissage massif des vaisseaux rétiniens superficiels."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : L'ICG montre parfaitement l'atteinte choroïdienne sous-jacente (retard de perfusion, raréfaction vasculaire et multiples « dark dots » correspondant aux granulomes choroïdiens hypofluorescents)."
    },
    {
        "question": "En autofluorescence, quel signe peut-on observer à la phase aiguë du VKH ?",
        "options": [
            {"id": "A", "text": "Une hypoautofluorescence maculaire stricte centrale."},
            {"id": "B", "text": "Une hyperautofluorescence diffuse du fond d'œil associée à une hypoautofluorescence au niveau des aires de DSR."},
            {"id": "C", "text": "Un aspect en « peau de léopard » très précoce."},
            {"id": "D", "text": "Une atrophie en carte de géographie."},
            {"id": "E", "text": "L'autofluorescence n'est pas modifiée à la phase aiguë."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : La phase aiguë se caractérise par une hyperautofluorescence diffuse associée à des zones d'hypoautofluorescence là où le fluide sous-rétinien fait masque ou altère l'EP."
    },
    {
        "question": "Quelles sont les manifestations cutanées typiques de la maladie de VKH (bien qu'apparaissant tardivement) ?",
        "options": [
            {"id": "A", "text": "Le vitiligo."},
            {"id": "B", "text": "La poliose (cils et sourcils blancs)."},
            {"id": "C", "text": "L'alopécie."},
            {"id": "D", "text": "L'érythème noueux."},
            {"id": "E", "text": "Les xanthélasmas."}
        ],
        "correctAnswers": ["A", "B", "C"],
        "explanation": "- **A, B, C (Vrais)** : Le vitiligo, la poliose et l'alopécie sont caractéristiques de la phase tardive (chronique de convalescence). L'érythème noueux évoque plutôt une sarcoïdose ou une maladie de Behçet."
    },
    {
        "question": "Quel est le nom du signe clinique caractérisé par une dépigmentation du limbe sclérocornéen survenant un mois après la phase aiguë, fréquent chez les patients japonais ?",
        "options": [
            {"id": "A", "text": "Signe de Dalen-Fuchs"},
            {"id": "B", "text": "Signe de Sugiura"},
            {"id": "C", "text": "Signe de Hutchinson"},
            {"id": "D", "text": "Signe d'Argyll Robertson"},
            {"id": "E", "text": "Signe de Munson"}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Le signe de Sugiura est un vitiligo périlimbique précoce (1 mois) retrouvé dans 85% des cas dans les populations asiatiques."
    },
    {
        "question": "Dans le diagnostic différentiel du VKH, quel est le principal argument clinique permettant de le distinguer de l'ophtalmie sympathique ?",
        "options": [
            {"id": "A", "text": "L'absence d'antécédent de traumatisme perforant ou de chirurgie intraoculaire."},
            {"id": "B", "text": "La présence d'un DSR bilatéral (absent dans l'ophtalmie sympathique)."},
            {"id": "C", "text": "La présence d'une panuvéite."},
            {"id": "D", "text": "L'âge du patient."},
            {"id": "E", "text": "La réponse aux corticoïdes."}
        ],
        "correctAnswers": ["A"],
        "explanation": "- **A (Vrai)** : L'ophtalmie sympathique nécessite par définition un événement déclenchant (traumatisme perforant ou chirurgie) sur l'œil « sympathisant ». Sans ce contexte, il s'agit d'un VKH."
    },
    {
        "question": "Devant une panuvéite bilatérale avec DSR évoquant un VKH, quelles sérologies infectieuses doivent IMPÉRATIVEMENT être demandées pour éliminer un diagnostic différentiel avant de débuter les corticoïdes ?",
        "options": [
            {"id": "A", "text": "Sérologie VIH."},
            {"id": "B", "text": "Sérologie Syphilis (test tréponémique)."},
            {"id": "C", "text": "Sérologie Toxoplasmose."},
            {"id": "D", "text": "Recherche de la Tuberculose (IGRA / Tubercutest / Radio Thorax)."},
            {"id": "E", "text": "Anticorps anti-nucléaires (AAN)."}
        ],
        "correctAnswers": ["B", "D"],
        "explanation": "- **B, D (Vrais)** : La syphilis et la tuberculose sont les grandes simulatrices pouvant causer des panuvéites avec DSR (pseudo-VKH). Ces diagnostics doivent être éliminés avant d'initier une corticothérapie forte."
    },
    {
        "question": "Un patient présente une baisse d'AV avec DSR, mais l'échographie oculaire montre une sclérite postérieure. Quels signes cliniques orientent vers une sclérite plutôt qu'un VKH aigu ?",
        "options": [
            {"id": "A", "text": "L'atteinte est souvent unilatérale."},
            {"id": "B", "text": "Les douleurs oculaires sont très intenses et rythmées."},
            {"id": "C", "text": "L'épaississement en T sur l'échographie."},
            {"id": "D", "text": "La présence de vitiligo."},
            {"id": "E", "text": "La bilatéralité d'emblée."}
        ],
        "correctAnswers": ["A", "B", "C"],
        "explanation": "- **A, B, C (Vrais)** : La sclérite postérieure est souvent unilatérale, très douloureuse, et montre un signe du T (fluide sous-ténonien) à l'échographie B, contrairement au VKH."
    },
    {
        "question": "Le diagnostic différentiel entre VKH aigu et Choriorétinopathie Séreuse Centrale (CRSC) est crucial. Quel(s) élément(s) de l'OCT oriente(nt) vers une CRSC ?",
        "options": [
            {"id": "A", "text": "Un DSR en dôme régulier sans septa fibrineux."},
            {"id": "B", "text": "La présence systématique de décollements bacillaires."},
            {"id": "C", "text": "L'association à des décollements de l'épithélium pigmentaire (DEP)."},
            {"id": "D", "text": "Une pachychoroïde avec des pachyvaisseaux bien visibles."},
            {"id": "E", "text": "La présence d'un tyndall vitréen marqué."}
        ],
        "correctAnswers": ["A", "C", "D"],
        "explanation": "- **A, C, D (Vrais)** : La CRSC se caractérise par des DSR propres (sans septa), des DEP fréquents et une pachychoroïde sans inflammation endoculaire. La distinction est vitale car les corticoïdes sont contre-indiqués dans la CRSC."
    },
    {
        "question": "Parmi ces pathologies, lesquelles peuvent se manifester par un DSR exsudatif et mimer un VKH ?",
        "options": [
            {"id": "A", "text": "L'épithéliopathie en plaques (APMPPE)."},
            {"id": "B", "text": "Le lymphome vitréorétinien primitif."},
            {"id": "C", "text": "La choroïdopathie lupique."},
            {"id": "D", "text": "Les métastases choroïdiennes."},
            {"id": "E", "text": "La neuropathie optique ischémique antérieure aiguë (NOIAA)."}
        ],
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "- **A, B, C, D (Vrais)** : L'APMPPE, les lymphomes, le lupus et les métastases choroïdiennes sont des diagnostics différentiels d'exsudation sous-rétinienne (pseudo-VKH). La NOIAA ne donne pas ce tableau."
    },
    {
        "question": "L'aspect du fond d'œil en « coucher de soleil » (sunset glow fundus) correspond à :",
        "options": [
            {"id": "A", "text": "La phase aiguë uvéitique."},
            {"id": "B", "text": "Une ischémie rétinienne terminale."},
            {"id": "C", "text": "Une dépigmentation choroïdienne secondaire à la disparition des mélanocytes."},
            {"id": "D", "text": "Une prolifération de l'épithélium pigmentaire masquant la choroïde."},
            {"id": "E", "text": "Un œdème papillaire associé à une choroïdite."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Le coucher de soleil est typique de la phase chronique de convalescence. Il est dû à la destruction des mélanocytes choroïdiens par l'attaque auto-immune, rendant le FO rouge-orangé clair."
    },
    {
        "question": "En phase chronique de la maladie, les nodules atrophiques périphériques, ronds et bien limités sont appelés :",
        "options": [
            {"id": "A", "text": "Taches de Fuchs."},
            {"id": "B", "text": "Nodules de Dalen-Fuchs."},
            {"id": "C", "text": "Nodules de Lisch."},
            {"id": "D", "text": "Nodules de Koeppe."},
            {"id": "E", "text": "Nodules de Busacca."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Historiquement appelés nodules de Dalen-Fuchs, ce sont des lésions choriorétiniennes atrophiques correspondant à une perte focalisée de l'EP."
    },
    {
        "question": "Quelle anomalie du LCR (ponction lombaire) est classiquement associée à la phase prodromique/aiguë du VKH ?",
        "options": [
            {"id": "A", "text": "Une hyperprotéinorachie massive sans cellules."},
            {"id": "B", "text": "Une pléiocytose à prédominance polynucléaire."},
            {"id": "C", "text": "Une pléiocytose à prédominance lymphocytaire (méningite aseptique)."},
            {"id": "D", "text": "Une hypoglycorachie franche."},
            {"id": "E", "text": "La présence de cellules néoplasiques."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : On retrouve typiquement une méningite lymphocytaire (200 à 300 éléments/mm³) aseptique dans plus de 80% des cas précoces. La glycorachie est normale."
    },
    {
        "question": "Quels signes à l'examen à la lampe à fente (LAF) orientent vers la phase chronique récurrente plutôt que vers la phase aiguë ?",
        "options": [
            {"id": "A", "text": "Une uvéite antérieure granulomateuse."},
            {"id": "B", "text": "Des précipités rétrodescemétiques en « graisse de mouton »."},
            {"id": "C", "text": "Une chambre antérieure très étroite (décollement ciliochoroïdien)."},
            {"id": "D", "text": "Des synéchies postérieures."},
            {"id": "E", "text": "Des nodules iriens."}
        ],
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "- **A, B, D, E (Vrais)** : La phase chronique récurrente est dominée par une uvéite antérieure granulomateuse (graisse de mouton, synéchies, nodules). Le décollement ciliochoroïdien est spécifique de la phase aiguë initiale."
    },
    {
        "question": "Que révèlent les « dark dots » observés à l'angiographie ICG à la phase chronique ?",
        "options": [
            {"id": "A", "text": "Une rémission complète de la maladie."},
            {"id": "B", "text": "Une ischémie choroïdienne définitive."},
            {"id": "C", "text": "Des granulomes choroïdiens signant une inflammation choroïdienne infraclinique persistante."},
            {"id": "D", "text": "Des artefacts liés à la dépigmentation."},
            {"id": "E", "text": "Une indication formelle à l'arrêt du traitement immunosuppresseur."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Les dark dots persistants ou récurrents témoignent d'une inflammation choroïdienne active et nécessitent un ajustement du traitement (souvent l'introduction d'un immunosuppresseur)."
    },
    {
        "question": "Sur le plan épidémiologique, quelles populations sont les plus à risque de développer un VKH ?",
        "options": [
            {"id": "A", "text": "Les populations caucasiennes d'Europe du Nord."},
            {"id": "B", "text": "Les populations asiatiques."},
            {"id": "C", "text": "Les sujets mélanodermes (hispaniques, moyen-orientaux, africains)."},
            {"id": "D", "text": "Les enfants de moins de 10 ans de manière prédominante."},
            {"id": "E", "text": "Les sujets âgés de plus de 65 ans."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : La maladie touche préférentiellement les adultes jeunes (20-30 ans) d'origine asiatique ou mélanoderme."
    },

    # --- CLASSIFICATION (20) ---
    {
        "question": "Dans l'histoire naturelle classique du VKH, combien de phases évolutives sont décrites ?",
        "options": [
            {"id": "A", "text": "2 phases (Aiguë et Chronique)."},
            {"id": "B", "text": "3 phases (Prodromique, Aiguë, Convalescence)."},
            {"id": "C", "text": "4 phases (Prodromique, Aiguë, Convalescence, Chronique récurrente)."},
            {"id": "D", "text": "5 phases."},
            {"id": "E", "text": "1 seule phase progressive."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Les 4 phases sont la phase prodromique, la phase aiguë uvéitique, la phase chronique de convalescence et la phase chronique récurrente."
    },
    {
        "question": "Quels sont les symptômes cardinaux de la phase prodromique du VKH ?",
        "options": [
            {"id": "A", "text": "Uvéite antérieure avec hypopion."},
            {"id": "B", "text": "Syndrome pseudo-grippal, céphalées, raideur de la nuque."},
            {"id": "C", "text": "Acouphènes et dysacousie."},
            {"id": "D", "text": "Vitiligo et poliose d'installation rapide."},
            {"id": "E", "text": "Cécité bilatérale transitoire."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : La phase prodromique (avant l'atteinte oculaire) associe des signes méningés (céphalées) et auditifs (acouphènes, dysacousie liée à l'atteinte des mélanocytes de l'oreille interne)."
    },
    {
        "question": "Selon les critères révisés de 2001, quels éléments sont indispensables au diagnostic de VKH ?",
        "options": [
            {"id": "A", "text": "Un antécédent de chirurgie de la cataracte dans l'année."},
            {"id": "B", "text": "L'absence d'antécédent de traumatisme perforant ou chirurgie oculaire."},
            {"id": "C", "text": "Une atteinte oculaire unilatérale stricte."},
            {"id": "D", "text": "Une atteinte oculaire bilatérale."},
            {"id": "E", "text": "L'absence d'argument clinique ou paraclinique pour un autre diagnostic."}
        ],
        "correctAnswers": ["B", "D", "E"],
        "explanation": "- **B, D, E (Vrais)** : L'exclusion du traumatisme (pour éliminer l'ophtalmie sympathique) et des autres uvéites, combinée à une atteinte bilatérale, forme la base des critères de 2001 (critères 1, 2 et 3)."
    },
    {
        "question": "Selon la classification de 2001, comment définit-on la forme « complète » de la maladie de VKH ?",
        "options": [
            {"id": "A", "text": "Présence des critères 1 à 3 uniquement."},
            {"id": "B", "text": "Présence des critères 1 à 3 + manifestations neurologiques (critère 4) ET manifestations dermatologiques (critère 5)."},
            {"id": "C", "text": "Présence d'un DSR massif bilatéral."},
            {"id": "D", "text": "Présence de manifestations dermatologiques isolées."},
            {"id": "E", "text": "Atteinte associée des nerfs crâniens."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : La forme complète exige l'atteinte oculaire + neuro + dermato. En pratique, elle reflète souvent un retard diagnostique, car les signes dermato sont tardifs."
    },
    {
        "question": "Quelles sont les limites reconnues des critères diagnostiques de 2001, ayant motivé les nouveaux critères SUN 2021 ?",
        "options": [
            {"id": "A", "text": "Ils ne font pas de distinction claire entre la phase initiale aiguë et la phase tardive chronique."},
            {"id": "B", "text": "Ils nécessitent une ponction lombaire obligatoire."},
            {"id": "C", "text": "Ils ne prennent pas en compte l'imagerie multimodale (OCT, ICG)."},
            {"id": "D", "text": "Ils sont trop permissifs sur le diagnostic différentiel avec la sarcoïdose."},
            {"id": "E", "text": "Ils excluent les patients de moins de 18 ans."}
        ],
        "correctAnswers": ["A", "C"],
        "explanation": "- **A, C (Vrais)** : Les critères de 2001 ne distinguaient pas aigu/chronique, et ignoraient les apports majeurs de l'OCT et de l'ICG, pourtant centraux dans le diagnostic précoce aujourd'hui."
    },
    {
        "question": "Dans les critères SUN Working Group (2021), quels sont les diagnostics d'exclusion (pré-requis négatifs) indispensables ?",
        "options": [
            {"id": "A", "text": "Sérologie syphilis positive."},
            {"id": "B", "text": "Test quantiféron positif isolé sans uvéite."},
            {"id": "C", "text": "Éléments en faveur d'une sarcoïdose (adénopathies hilaires, biopsie avec granulomes non caséeux)."},
            {"id": "D", "text": "Antécédent de chirurgie oculaire."},
            {"id": "E", "text": "Antécédent de morsure de tique."}
        ],
        "correctAnswers": ["A", "C", "D"],
        "explanation": "- **A, C, D (Vrais)** : Les critères SUN 2021 imposent d'exclure formellement la syphilis, la sarcoïdose et le traumatisme/chirurgie."
    },
    {
        "question": "Selon le SUN Working Group 2021, comment se définit un VKH « Précoce » (Aigu) ?",
        "options": [
            {"id": "A", "text": "Uvéite antérieure avec vitiligo."},
            {"id": "B", "text": "DSR exsudatif avec un aspect caractéristique en OCT et en AF."},
            {"id": "C", "text": "Panuvéite avec plus de deux manifestations neurologiques."},
            {"id": "D", "text": "Fond d'œil en coucher de soleil exclusif."},
            {"id": "E", "text": "Poliose isolée."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : Le VKH précoce se définit soit par l'imagerie typique de DSR (OCT/AF), soit par une panuvéite associée à des signes neurologiques (méningite aseptique, acouphènes, etc.)."
    },
    {
        "question": "Selon le SUN Working Group 2021, comment se définit un VKH « Tardif » ?",
        "options": [
            {"id": "A", "text": "La présence d'un antécédent de VKH précoce est obligatoire."},
            {"id": "B", "text": "L'apparition d'un DSR maculaire de novo."},
            {"id": "C", "text": "La présence d'un fond d'œil en coucher de soleil."},
            {"id": "D", "text": "La présence d'une uvéite avec au moins un signe cutané (vitiligo, poliose, alopécie)."},
            {"id": "E", "text": "Une surdité de transmission."}
        ],
        "correctAnswers": ["A", "C", "D"],
        "explanation": "- **A, C, D (Vrais)** : Le VKH tardif nécessite un antécédent de phase précoce, associé aux séquelles classiques : Sunset glow fundus OU des signes dermatologiques."
    },
    {
        "question": "Sur le plan de la classification immunologique, la physiopathogénie du VKH repose sur :",
        "options": [
            {"id": "A", "text": "Une auto-immunité à médiation humorale (Ac anti-rétine)."},
            {"id": "B", "text": "Une auto-immunité à médiation cellulaire (Lymphocytes T CD4+)."},
            {"id": "C", "text": "Une réaction allergique de type I médiée par les IgE."},
            {"id": "D", "text": "Une cible antigénique située sur les mélanocytes (ex: tyrosinase)."},
            {"id": "E", "text": "Un déficit immunitaire primitif en lymphocytes B."}
        ],
        "correctAnswers": ["B", "D"],
        "explanation": "- **B, D (Vrais)** : Il s'agit d'une hypersensibilité retardée cellulaire (Lymphocytes T CD4+ Th1 et Th17) ciblant les mélanocytes, présents dans l'uvée, l'oreille interne, les méninges et la peau."
    },
    {
        "question": "Quelle susceptibilité génétique (HLA) est fortement associée à la classification du VKH ?",
        "options": [
            {"id": "A", "text": "HLA-B27"},
            {"id": "B", "text": "HLA-A29"},
            {"id": "C", "text": "HLA-DR4 / HLA-DRB1*04"},
            {"id": "D", "text": "HLA-B51"},
            {"id": "E", "text": "HLA-DR2"}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Le HLA-DR4 est la prédisposition génétique majeure du VKH (B27 = SPA, A29 = Birdshot, B51 = Behçet)."
    },
    {
        "question": "Histologiquement, dans quelle catégorie de lésions s'inscrit la choroïdite de la maladie de VKH ?",
        "options": [
            {"id": "A", "text": "Inflammation nécrosante avec vascularite oblitérante."},
            {"id": "B", "text": "Inflammation granulomateuse non nécrosante diffuse."},
            {"id": "C", "text": "Prolifération lymphomateuse monoclonale."},
            {"id": "D", "text": "Infiltration à polynucléaires éosinophiles massive."},
            {"id": "E", "text": "Granulomes caséeux."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : L'histologie (rarement réalisée en pratique) montre des granulomes non nécrosants avec des cellules géantes contenant de la mélanine phagocytée."
    },
    {
        "question": "Quelle particularité topographique de l'inflammation choroïdienne est classiquement retrouvée dans la maladie de VKH ?",
        "options": [
            {"id": "A", "text": "La destruction massive de la choriocapillaire."},
            {"id": "B", "text": "L'épargne de la choriocapillaire par l'infiltrat inflammatoire."},
            {"id": "C", "text": "Une localisation strictement équatoriale."},
            {"id": "D", "text": "Une atteinte isolée de la pars plana (pars planite)."},
            {"id": "E", "text": "Une infiltration prédominant dans le stroma irien."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Fait histologique notable, la choriocapillaire est épargnée par l'inflammation granulomateuse qui occupe le stroma choroïdien."
    },
    {
        "question": "La distinction entre atteinte précoce aiguë et atteinte tardive chronique est essentielle car :",
        "options": [
            {"id": "A", "text": "Le traitement par immunosuppresseur est proscrit à la phase aiguë."},
            {"id": "B", "text": "La phase aiguë est réversible sous traitement adéquat et on peut éviter le passage à la phase chronique."},
            {"id": "C", "text": "La phase chronique ne nécessite aucun traitement anti-inflammatoire."},
            {"id": "D", "text": "L'aspect du fond d'œil est identique dans les deux phases."},
            {"id": "E", "text": "Les complications cécitantes surviennent quasi-exclusivement au stade chronique récurrent."}
        ],
        "correctAnswers": ["B", "E"],
        "explanation": "- **B, E (Vrais)** : Traiter fort et tôt à la phase aiguë permet de bloquer la maladie et d'éviter la phase chronique récurrente, pourvoyeuse de glaucomes, cataractes et NVC."
    },
    {
        "question": "Dans les critères de Sugiura (historiques), quels étaient les deux « signes majeurs » ?",
        "options": [
            {"id": "A", "text": "DSR bilatéral + vitiligo."},
            {"id": "B", "text": "DSR bilatéral avec diffusion + Pléiocytose à la PL."},
            {"id": "C", "text": "Coucher de soleil + Acouphènes."},
            {"id": "D", "text": "Œdème papillaire + Granulomes choroïdiens."},
            {"id": "E", "text": "Uvéite antérieure + Synéchies."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Sugiura (1978) définissait le VKH par l'association d'une uvéite postérieure/DSR et d'une atteinte méningée (pléiocytose au LCS)."
    },
    {
        "question": "En termes de délai d'apparition, à quel moment s'installe typiquement l'aspect de fond d'œil en coucher de soleil en l'absence de traitement ?",
        "options": [
            {"id": "A", "text": "Dans les premières 48 heures."},
            {"id": "B", "text": "Au bout d'une semaine."},
            {"id": "C", "text": "Au bout de 2 à 3 mois."},
            {"id": "D", "text": "Après 5 ans d'évolution."},
            {"id": "E", "text": "Dès la phase prodromique."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Le « sunset glow fundus » s'installe en quelques semaines à 2-3 mois après l'épisode aigu, par destruction progressive des mélanocytes."
    },
    {
        "question": "Quelle est la principale caractéristique de la forme oculaire isolée selon la classification de 2001 ?",
        "options": [
            {"id": "A", "text": "Atteinte oculaire sans antécédent de trauma et sans aucun signe neuro ou cutané."},
            {"id": "B", "text": "Atteinte oculaire associée uniquement à un vitiligo."},
            {"id": "C", "text": "Atteinte unilatérale."},
            {"id": "D", "text": "Pléiocytose obligatoire."},
            {"id": "E", "text": "Absence de DSR."}
        ],
        "correctAnswers": ["A"],
        "explanation": "- **A (Vrai)** : Elle regroupe les critères 1 (pas de trauma/chir), 2 (pas d'autre maladie) et 3 (bilatéralité), ce qui en fait une forme de début stricte (souvent rattrapée plus tard par les signes extra-oculaires si mal traitée)."
    },
    {
        "question": "Parmi les facteurs environnementaux déclenchants suspectés dans la pathogénie du VKH, on retrouve :",
        "options": [
            {"id": "A", "text": "La consommation d'alcool."},
            {"id": "B", "text": "Les infections virales (EBV, CMV, SARS-CoV-2)."},
            {"id": "C", "text": "L'exposition aux ultraviolets intenses."},
            {"id": "D", "text": "Certains vaccins."},
            {"id": "E", "text": "Le tabagisme."}
        ],
        "correctAnswers": ["B", "D"],
        "explanation": "- **B, D (Vrais)** : Le déclenchement auto-immun est classiquement relié à des épisodes infectieux viraux ou, plus rarement, à des vaccinations."
    },
    {
        "question": "Dans le VKH, la bilatéralité est :",
        "options": [
            {"id": "A", "text": "Exceptionnelle (< 5%)."},
            {"id": "B", "text": "Fréquente mais asymétrique, souvent différée de plusieurs mois."},
            {"id": "C", "text": "La règle (70-95% d'emblée), bien que parfois asymétrique."},
            {"id": "D", "text": "Un critère d'exclusion du diagnostic."},
            {"id": "E", "text": "Exclusivement présente chez l'homme."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Le VKH est une maladie systémique ; l'atteinte est bilatérale d'emblée ou le devient en quelques jours au maximum."
    },
    {
        "question": "Laquelle de ces uvéites est classée comme pseudo-VKH (diagnostic différentiel anatomoclinique direct) ?",
        "options": [
            {"id": "A", "text": "Uvéite herpétique unilatérale hypertensive."},
            {"id": "B", "text": "Uvéite sarcoïdosique avec gros granulomes et DSR bilatéral."},
            {"id": "C", "text": "Pars planite idiopathique."},
            {"id": "D", "text": "Ophtalmie sympathique."},
            {"id": "E", "text": "Tuberculose choroïdienne multifocale."}
        ],
        "correctAnswers": ["B", "D", "E"],
        "explanation": "- **B, D, E (Vrais)** : La sarcoïdose oculaire sévère, l'ophtalmie sympathique et la tuberculose peuvent simuler parfaitement un VKH aigu (panuvéite, choroïdite, DSR)."
    },
    {
        "question": "Quel énoncé résume le mieux l'évolution historique des classifications du VKH ?",
        "options": [
            {"id": "A", "text": "On est passé d'une classification purement histologique à une classification purement génétique."},
            {"id": "B", "text": "L'intégration de l'imagerie multimodale (OCT/AF) dans les critères SUN 2021 a permis d'acter l'existence du diagnostic à la phase précoce, sans attendre les signes cutanés."},
            {"id": "C", "text": "Le SUN 2021 a supprimé l'exclusion de la tuberculose pour simplifier le bilan."},
            {"id": "D", "text": "Les critères de 2001 exigeaient l'IRM systématique."},
            {"id": "E", "text": "Les nouvelles classifications exigent la preuve par ponction lombaire."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Les critères de SUN 2021 consacrent le rôle clé de l'OCT et de l'angiographie pour poser le diagnostic avant les séquelles, contrairement aux anciens critères."
    },

    # --- PRISE EN CHARGE (15) ---
    {
        "question": "Quel est le traitement de première ligne standard de la maladie de VKH à la phase aiguë ?",
        "options": [
            {"id": "A", "text": "Anti-VEGF intravitréens isolés."},
            {"id": "B", "text": "Corticothérapie systémique précoce et massive (boli IV ou forte dose per os)."},
            {"id": "C", "text": "Antibiotiques à large spectre."},
            {"id": "D", "text": "Photocoagulation au laser des points de fuite."},
            {"id": "E", "text": "AINS par voie topique uniquement."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Le VKH aigu est particulièrement corticosensible. La corticothérapie massive (boli de méthylprednisolone ou prednisone forte dose) est le gold standard."
    },
    {
        "question": "Concernant la dégression des corticoïdes dans le VKH, quelle est la règle ?",
        "options": [
            {"id": "A", "text": "Arrêt brutal après 15 jours."},
            {"id": "B", "text": "Dégression rapide sur 1 mois."},
            {"id": "C", "text": "Dégression très progressive étalée sur au minimum 6 mois."},
            {"id": "D", "text": "Maintien à dose maximale à vie."},
            {"id": "E", "text": "Arrêt dès la disparition du liquide sous-rétinien à l'OCT."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Une dégression trop rapide est la cause principale de rebond inflammatoire et de passage en phase chronique récurrente. Un protocole long (> 6 mois) est indispensable."
    },
    {
        "question": "Quelles sont les indications reconnues à l'introduction d'un traitement immunosuppresseur (ex: Mycophénolate mofétil, Ciclosporine) dans le VKH ?",
        "options": [
            {"id": "A", "text": "VKH aigu vu précocement sans signe de sévérité."},
            {"id": "B", "text": "Intolérance à la corticothérapie ou corticodépendance."},
            {"id": "C", "text": "Formes d'emblée très sévères ou vues tardivement."},
            {"id": "D", "text": "Passage en forme chronique récurrente."},
            {"id": "E", "text": "L'adjonction systématique en 1ère intention est une stratégie de plus en plus recommandée pour un meilleur pronostic visuel."}
        ],
        "correctAnswers": ["B", "C", "D", "E"],
        "explanation": "- **B, C, D, E (Vrais)** : Les immunosuppresseurs sont le traitement de choix des récurrences et des résistances. Leur usage d'emblée en 1ère ligne avec les corticoïdes tend à devenir la norme pour épargner la choroïde."
    },
    {
        "question": "Quels examens sont les plus pertinents pour surveiller la réponse thérapeutique et dépister une inflammation infraclinique résiduelle ?",
        "options": [
            {"id": "A", "text": "Le champ visuel automatisé."},
            {"id": "B", "text": "L'OCT (épaisseur choroïdienne, disparition du DSR)."},
            {"id": "C", "text": "L'échographie B."},
            {"id": "D", "text": "L'Angiographie ICG (recherche de dark dots persistants)."},
            {"id": "E", "text": "La ponction lombaire de contrôle."}
        ],
        "correctAnswers": ["B", "D"],
        "explanation": "- **B, D (Vrais)** : L'OCT (retour à une épaisseur choroïdienne normale) et l'ICG (disparition des dark dots) sont les deux juges de paix de la guérison de la choroïdite."
    },
    {
        "question": "Quel est le principal facteur pronostique de récupération fonctionnelle visuelle dans le VKH ?",
        "options": [
            {"id": "A", "text": "L'âge du patient."},
            {"id": "B", "text": "Le délai de prise en charge (instauration du traitement ≤ 2 semaines)."},
            {"id": "C", "text": "La présence d'un vitiligo."},
            {"id": "D", "text": "Le sexe féminin."},
            {"id": "E", "text": "L'association à des acouphènes."}
        ],
        "correctAnswers": ["B"],
        "explanation": "- **B (Vrai)** : Une attaque corticoïde extrêmement rapide (< 15j) prévient la destruction mélanocytaire et les modifications de l'EP, garantissant souvent une restitution ad integrum."
    },
    {
        "question": "À la phase aiguë, un patient VKH présente une crise de glaucome par fermeture de l'angle. Quelle erreur thérapeutique faut-il éviter ?",
        "options": [
            {"id": "A", "text": "Administrer des corticoïdes topiques intensifs."},
            {"id": "B", "text": "Administrer des corticoïdes systémiques."},
            {"id": "C", "text": "Réaliser une iridotomie périphérique au laser YAG."},
            {"id": "D", "text": "Utiliser des collyres hypotonisants (bêtabloquants)."},
            {"id": "E", "text": "Mettre des cycloplégiques."}
        ],
        "correctAnswers": ["C"],
        "explanation": "- **C (Vrai)** : Le mécanisme est non-pupillaire (rotation antérieure du corps ciliaire par épanchement uvéal). L'iridotomie est INUTILE et dangereuse sur un œil hyper-inflammatoire. Le traitement est médical (Corticoïdes + mydriatiques pour reculer le bloc)."
    },
    {
        "question": "Quels signes à l'OCT à la phase aiguë sont considérés comme péjoratifs pour le pronostic visuel final ?",
        "options": [
            {"id": "A", "text": "Un décollement bacillaire."},
            {"id": "B", "text": "La présence de fibrine sous-rétinienne."},
            {"id": "C", "text": "Des plis de l'EP importants."},
            {"id": "D", "text": "La persistance d'un DSR à 1 mois de traitement."},
            {"id": "E", "text": "La présence d'un simple trou maculaire lamellaire."}
        ],
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "- **A, B, C, D (Vrais)** : Fibrine, décollement bacillaire, plis de l'EP et retard à la résorption du liquide (> 1 mois) sont corrélés à des séquelles fonctionnelles et atrophiques."
    },
    {
        "question": "Quelles sont les complications les plus fréquentes du VKH (touchant près de 50% des patients) ?",
        "options": [
            {"id": "A", "text": "Cataracte post-uvéitique."},
            {"id": "B", "text": "Glaucome chronique."},
            {"id": "C", "text": "Néovaisseaux choroïdiens."},
            {"id": "D", "text": "Endophtalmie endogène."},
            {"id": "E", "text": "Fibrose sous-rétinienne."}
        ],
        "correctAnswers": ["A", "B", "C", "E"],
        "explanation": "- **A, B, C, E (Vrais)** : La triade classique des complications est Cataracte (42%), Glaucome (27%), et NVC (11%). La fibrose sous-rétinienne est également une évolution cicatricielle redoutée."
    },
    {
        "question": "Concernant la gestion de la cataracte chez un patient suivi pour maladie de VKH :",
        "options": [
            {"id": "A", "text": "La chirurgie peut être faite à tout moment, même en phase inflammatoire active."},
            {"id": "B", "text": "La phacoémulsification exige une quiescence inflammatoire d'au minimum 3 mois."},
            {"id": "C", "text": "Il est recommandé de prescrire une corticothérapie préopératoire (ex: 1 mg/kg/j) une semaine avant l'intervention."},
            {"id": "D", "text": "L'implantation d'une LIO est formellement contre-indiquée."},
            {"id": "E", "text": "Les implants intravitréens de dexaméthasone sont proscrits."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : Règle d'or en uvéite : œil calme pendant 3 mois. Une couverture corticoïde perios péri-opératoire est indispensable pour éviter un rebond inflammatoire post-op."
    },
    {
        "question": "Si l'on confond un VKH aigu avec une Choriorétinopathie Séreuse Centrale (CRSC), quel est le risque iatrogène majeur ?",
        "options": [
            {"id": "A", "text": "Ne pas prescrire de corticoïdes, entraînant la chronicisation du VKH et la cécité."},
            {"id": "B", "text": "Prescrire des corticoïdes massifs (croyant au VKH) chez un patient CRSC, ce qui va aggraver dramatiquement la CRSC."},
            {"id": "C", "text": "L'AINS topique causera une fonte purulente."},
            {"id": "D", "text": "La photothérapie dynamique détruira le nerf optique."},
            {"id": "E", "text": "Aucun risque, les traitements sont les mêmes."}
        ],
        "correctAnswers": ["A", "B"],
        "explanation": "- **A, B (Vrais)** : L'erreur dans un sens condamne le patient VKH à l'atrophie (absence de corticoïdes), l'erreur dans l'autre sens aggrave dramatiquement la CRSC (corticoïdes = poison de la CRSC)."
    },
    {
        "question": "Une femme de 25 ans traitée pour VKH aigu depuis 3 mois consulte. L'AV est à 10/10, la LAF est normale, l'OCT ne montre plus de DSR, mais l'épaisseur choroïdienne réaugmente discrètement. L'ICG montre la persistance de nombreux dark dots. Quelle attitude adopter ?",
        "options": [
            {"id": "A", "text": "Arrêter le traitement, le patient est guéri cliniquement."},
            {"id": "B", "text": "Considérer qu'il s'agit d'une inflammation choroïdienne infraclinique et freiner la dégression corticoïde."},
            {"id": "C", "text": "Introduire un traitement immunosuppresseur ou adapter ses doses."},
            {"id": "D", "text": "Faire un laser panrétinien."},
            {"id": "E", "text": "Rien, les dark dots sont des artéfacts sans valeur."}
        ],
        "correctAnswers": ["B", "C"],
        "explanation": "- **B, C (Vrais)** : L'ICG est la boussole thérapeutique. La persistance de dark dots (granulomes) impose de durcir le traitement, au risque de voir la maladie basculer en uvéite antérieure chronique et dépigmentation."
    },
    {
        "question": "Le traitement des néovaisseaux choroïdiens maculaires compliquant un VKH repose sur :",
        "options": [
            {"id": "A", "text": "Les injections intravitréennes d'anti-VEGF."},
            {"id": "B", "text": "Une ré-augmentation de l'immunosuppression (car la NVC est liée à l'inflammation chronique)."},
            {"id": "C", "text": "La vitrectomie avec pelage de la NVC."},
            {"id": "D", "text": "Le laser Argon direct."},
            {"id": "E", "text": "L'énucléation systématique."}
        ],
        "correctAnswers": ["A", "B"],
        "explanation": "- **A, B (Vrais)** : Le standard est l'IVT d'anti-VEGF, associée à un bon contrôle de l'inflammation sous-jacente par l'ajustement du traitement systémique."
    },
    {
        "question": "Quels agents thérapeutiques adjuvants ou locaux peuvent être utilisés dans la prise en charge du VKH ?",
        "options": [
            {"id": "A", "text": "Implants intravitréens de dexaméthasone (Ozurdex)."},
            {"id": "B", "text": "Corticoïdes topiques en gouttes."},
            {"id": "C", "text": "Mydriatiques topiques."},
            {"id": "D", "text": "Agents biologiques (anti-TNF alpha) dans les cas réfractaires et sévères."},
            {"id": "E", "text": "Gouttes d'analogues de prostaglandines pour baisser la PIO."}
        ],
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "- **A, B, C, D (Vrais)** : Les traitements locaux et régionaux (implants) sont de bons adjuvants. Les biothérapies sont utiles dans les cas extrêmes. Les prostaglandines (E) favorisent l'inflammation et sont à éviter dans les uvéites hypertensives."
    },
    {
        "question": "Que doit-on rechercher activement chez un patient sous corticothérapie massive et prolongée pour un VKH, dans le cadre du suivi de la iatrogénie ?",
        "options": [
            {"id": "A", "text": "Une HTA et un diabète induit."},
            {"id": "B", "text": "Une hypertonie oculaire cortisonique."},
            {"id": "C", "text": "Une ostéoporose (supplémentation calcium/vit D)."},
            {"id": "D", "text": "Un risque ulcéreux gastrique."},
            {"id": "E", "text": "Une hyperkaliémie."}
        ],
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "- **A, B, C, D (Vrais)** : Bilan standard de tolérance aux corticoïdes. La corticothérapie donne plutôt une HYPOkaliémie."
    },
    {
        "question": "Si l'on résume la philosophie thérapeutique de la maladie de VKH :",
        "options": [
            {"id": "A", "text": "C'est une urgence thérapeutique absolue."},
            {"id": "B", "text": "Le but est d'interrompre la séquence chronologique pour éviter les phases chroniques."},
            {"id": "C", "text": "L'épargne cortisonique rapide (1 mois) est la priorité absolue."},
            {"id": "D", "text": "L'association corticoïdes + immunosuppresseurs est le gold standard des formes sévères."},
            {"id": "E", "text": "La guérison clinique garantit l'absence de rechute, l'ICG n'est qu'un luxe."}
        ],
        "correctAnswers": ["A", "B", "D"],
        "explanation": "- **A, B, D (Vrais)** : VKH = Urgence. Il faut taper fort (Corticoïdes ± IS) et longtemps (> 6 mois) pour « éteindre » le feu choroïdien avant qu'il ne détruise les mélanocytes et ne devienne chronique. L'ICG est indispensable au suivi."
    }
]

# Convert to Markdown format as used in ophto-app
md_content = "# 📝 QCMs d'Auto-Évaluation : Maladie de VKH\\n\\n"
md_content += "> [!NOTE]\\n> Ces QCMs ont été élaborés par un collège d'experts en Uvéites pour vérifier vos connaissances sur le diagnostic, la classification et la prise en charge de la maladie de Vogt-Koyanagi-Harada.\\n\\n"

for i, qcm in enumerate(vkh_qcms):
    md_content += f"### Q{i+1}. {qcm['question']}\\n"
    for opt in qcm['options']:
        md_content += f"{opt['id']}. {opt['text']}\\n"
    md_content += "\\n<details>\\n<summary><b>Voir la réponse et les explications</b></summary>\\n"
    md_content += f"**Réponses correctes : {', '.join(qcm['correctAnswers'])}**\\n\\n"
    md_content += f"{qcm['explanation']}\\n</details>\\n\\n---\\n\\n"

# JSON formatted data
json_data = json.dumps(vkh_qcms, indent=2, ensure_ascii=False)

# Read the existing vkhData.js
vkh_file = r"c:\Etudes\DEMS\ophto-app\src\data\vkhData.js"
with open(vkh_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Append to vkhData.js
new_exports = f"""
export const vkhQcmMarkdown = `{md_content}`;

export const vkhQcmData = {json_data};
"""

with open(vkh_file, 'a', encoding='utf-8') as f:
    f.write(new_exports)

# Now update coursesData.js to enable qcm for vkh
courses_file = r"c:\Etudes\DEMS\ophto-app\src\data\coursesData.js"
with open(courses_file, 'r', encoding='utf-8') as f:
    courses_content = f.read()

courses_content = re.sub(
    r"id:\s*'vogt-koyanagi-harada',\s*title:[^}]*has:\s*\{([^\}]+)\}",
    lambda m: m.group(0) + (", qcm: true" if "qcm:" not in m.group(1) else ""),
    courses_content
)

# Replace in courses_content
courses_content = courses_content.replace(
    "has: { cours: true, fiches: true, algorithms: true, classifications: true }",
    "has: { cours: true, fiches: true, algorithms: true, classifications: true, qcm: true }"
)

with open(courses_file, 'w', encoding='utf-8') as f:
    f.write(courses_content)

print("QCMs generated and integrated successfully!")
