import json
import os

artifact_dir = r"C:\Users\medst\.gemini\antigravity\brain\72b28ecf-be4e-40ba-aa3c-c2e37775f924"

qcms = [
    # SIOI Epidemio & Patho
    {"q": "Concernant l'épidémiologie de l'inflammation orbitaire, quelle affirmation est vraie ?", "opts": ["A. Elle représente la première cause d'atteinte orbitaire", "B. Elle représente 5 à 18 % des atteintes orbitaires unilatérales", "C. L'orbitopathie dysthyroïdienne en fait partie selon la classification de Rootman", "D. Les infections orbitaires y sont intégrées", "E. L'atteinte est toujours bilatérale chez l'adulte"], "ans": ["B"]},
    {"q": "Quel est le rang de l'inflammation orbitaire parmi les causes d'atteinte orbitaire ?", "opts": ["A. 1ère cause", "B. 2ème cause", "C. 3ème cause", "D. 4ème cause", "E. 5ème cause"], "ans": ["C"]},
    {"q": "Quelles sont les causes d'atteinte orbitaire qui précèdent l'inflammation orbitaire en fréquence ?", "opts": ["A. Rhabdomyosarcome", "B. Orbitopathie dysthyroïdienne", "C. Infiltrations lymphomateuses", "D. Hémangiome caverneux", "E. Cellulite orbitaire"], "ans": ["B", "C"]},
    {"q": "Concernant le syndrome inflammatoire orbitaire idiopathique (SIOI), lequel de ces énoncés est vrai ?", "opts": ["A. Il est défini par l'existence d'une maladie systémique associée", "B. C'est une inflammation restreinte à l'orbite d'étiologie inconnue", "C. Le terme 'pseudotumeur inflammatoire' est le seul actuellement recommandé", "D. Il se complique systématiquement d'une uvéite", "E. Il épargne toujours la glande lacrymale"], "ans": ["B"]},
    {"q": "Dans la pathogenèse du SIOI, l'hypothèse de Barrett et McCarty postule :", "opts": ["A. Une infection par le virus d'Epstein-Barr", "B. Une origine auto-immune avec auto-anticorps (Easton)", "C. Un trouble fibroprolifératif similaire à la sclérose médiastinale", "D. Une réponse allergique locale", "E. Une vascularite oblitérante primitive"], "ans": ["C"]},
    {"q": "L'hypothèse d'Easton pour la physiopathologie du SIOI suggère :", "opts": ["A. Une réponse à un agent infectieux des voies aériennes", "B. Des auto-anticorps dirigés contre les protéines des muscles oculomoteurs", "C. Un processus tumoral bénin", "D. Un mécanisme fibroprolifératif", "E. Une implication des IgG4"], "ans": ["B"]},
    
    # SIOI Clinique
    {"q": "Parmi les caractéristiques cliniques du SIOI, lesquelles sont justes ?", "opts": ["A. Atteinte unilatérale dans 90 à 95 % des cas", "B. Prédominance masculine nette", "C. Fréquence plus élevée de l'atteinte bilatérale chez l'enfant", "D. Évolution le plus souvent suraiguë", "E. Les cas pédiatriques représentent plus de 50% des SIOI"], "ans": ["A", "C"]},
    {"q": "Chez un patient suspect de SIOI, la présence d'un œdème papillaire au fond d'œil :", "opts": ["A. Élimine le diagnostic de SIOI", "B. Signe une neuropathie optique compressive ou infiltrative", "C. Est un signe de bénignité", "D. Est souvent associée à un déficit pupillaire afférent relatif", "E. Traduit une extension intracrânienne majeure"], "ans": ["B", "D"]},
    {"q": "Les signes d'appel cliniques généraux du SIOI comprennent :", "opts": ["A. Masse orbitaire", "B. Douleur orbitaire", "C. Baisse brutale d'acuité visuelle systématique", "D. Diplopie et troubles oculomoteurs", "E. Atteinte bilatérale d'emblée chez l'adulte"], "ans": ["A", "B", "D"]},
    {"q": "Dans le diagnostic du SIOI, la certitude absolue repose sur :", "opts": ["A. L'IRM orbitaire", "B. L'échographie mode B", "C. L'histologie (biopsie)", "D. Un bilan biologique négatif", "E. La régression sous AINS"], "ans": ["C"]},

    # Vascularites : GPA
    {"q": "La granulomatose avec polyangéite (GPA) :", "opts": ["A. Est une vascularite des gros vaisseaux", "B. Touche préférentiellement les reins et les voies aériennes", "C. Épargne le système respiratoire", "D. Est caractérisée par une nécrose granulomateuse", "E. S'associe aux p-ANCA dans 90% des cas"], "ans": ["B", "D"]},
    {"q": "Dans la GPA, l'atteinte orbitaire inflammatoire :", "opts": ["A. Touche environ 15% des patients", "B. Révèle la maladie dans 6,3% des cas", "C. Est le plus souvent bilatérale", "D. Se fait souvent par envahissement de contiguïté", "E. Est responsable de cécité dans 50% des cas touchés"], "ans": ["A", "B", "D", "E"]},
    {"q": "Le diagnostic biologique de la GPA est fortement orienté par la positivité :", "opts": ["A. Des p-ANCA anti-MPO", "B. Des c-ANCA anti-PR3", "C. Des anticorps anti-nucléaires", "D. Des anticorps anti-DNA natifs", "E. De l'enzyme de conversion de l'angiotensine"], "ans": ["B"]},
    {"q": "Dans les atteintes orbitaires isolées de la GPA, les ANCA :", "opts": ["A. Sont toujours positifs", "B. Sont moins souvent positifs que dans la forme systémique complète", "C. Sont de type p-ANCA", "D. N'ont aucune valeur diagnostique", "E. Sont recherchés uniquement par western blot"], "ans": ["B"]},

    # Vascularites : EGPA & PAN
    {"q": "La granulomatose à éosinophile avec polyangéite (EGPA) se caractérise par :", "opts": ["A. Un asthme sévère", "B. Une hyperéosinophilie", "C. Une atteinte orbitaire très fréquente", "D. Une mononeuropathie périphérique", "E. Une nécrose fibrinoïde de la paroi des gros vaisseaux"], "ans": ["A", "B", "D"]},
    {"q": "Concernant la périartérite noueuse (PAN), quelles propositions sont exactes ?", "opts": ["A. Vascularite de petit et moyen calibre", "B. L'atteinte oculaire est très fréquente", "C. Peut être associée aux hépatites B ou C", "D. Les atteintes rénales et cardiaques conditionnent le pronostic vital", "E. Elle est systématiquement associée aux c-ANCA"], "ans": ["A", "C", "D"]},
    {"q": "L'artérite à cellules géantes (maladie de Horton) :", "opts": ["A. Est une vascularite des petits vaisseaux", "B. Ne donne jamais d'atteinte inflammatoire orbitaire", "C. Est une vascularite granulomateuse des gros vaisseaux", "D. Des cas d'atteinte inflammatoire orbitaire ont été rapportés", "E. Est associée aux hépatites virales"], "ans": ["C", "D"]},

    # Sarcoïdose
    {"q": "Concernant l'épidémiologie de la sarcoïdose (données 2014) :", "opts": ["A. L'incidence est équivalente entre Afro-Américains et Caucasiens", "B. Elle débute le plus souvent après 60 ans", "C. 70 % des cas se déclarent entre 25 et 40 ans", "D. Il existe une prédominance féminine autour de la cinquantaine", "E. L'étiologie virale est démontrée"], "ans": ["C", "D"]},
    {"q": "Dans la sarcoïdose oculaire, l'atteinte la plus fréquente est :", "opts": ["A. La dacryoadénite", "B. La myosite orbitaire", "C. L'uvéite antérieure", "D. La sclérite nodulaire", "E. La choroïdite multifocale"], "ans": ["C"]},
    {"q": "Quelles sont les structures orbitaires les plus touchées par l'inflammation dans la sarcoïdose ?", "opts": ["A. L'apex orbitaire", "B. La glande lacrymale", "C. Le sac lacrymal", "D. L'orbite antérieure", "E. Le muscle droit inférieur"], "ans": ["B", "D"]},
    {"q": "Lors du diagnostic d'une atteinte orbitaire sarcoïdosique, quelle proportion de patients présente déjà une atteinte systémique ?", "opts": ["A. < 10 %", "B. 30 %", "C. 50 %", "D. 70 %", "E. 95 %"], "ans": ["D"]},
    {"q": "La sarcoïdose est caractérisée histologiquement par :", "opts": ["A. Un granulome avec nécrose caséeuse", "B. Des cellules de Touton", "C. Un granulome épithélioïde et gigantocellulaire SANS nécrose caséeuse", "D. Une infiltration lymphoplasmocytaire à IgG4+", "E. Une vascularite nécrosante"], "ans": ["C"]},

    # Histiocytoses
    {"q": "La maladie d'Erdheim-Chester est une histiocytose :", "opts": ["A. Langerhansienne", "B. Non langerhansienne", "C. D'origine infectieuse documentée", "D. Survenant préférentiellement dans la 1ère décennie", "E. Diagnostiquée vers la 5e décennie"], "ans": ["B", "E"]},
    {"q": "L'atteinte systémique typique de la maladie d'Erdheim-Chester comprend :", "opts": ["A. Une infiltration des diaphyses et métaphyses des os longs", "B. Le respect des épiphyses", "C. Une fibrose rétropéritonéale", "D. Un asthme sévère", "E. Une atteinte cardiaque et aortique assombrissant le pronostic"], "ans": ["A", "B", "C", "E"]},
    {"q": "L'atteinte orbitaire dans la maladie d'Erdheim-Chester se caractérise par :", "opts": ["A. Une exophtalmie le plus souvent unilatérale", "B. Des xanthélasmas bilatéraux", "C. Une exophtalmie bilatérale", "D. Une dacryoadénite aiguë purulente", "E. Une résolution spontanée systématique"], "ans": ["B", "C"]},
    {"q": "La maladie de Rosai-Dorfman (histiocytose sinusale) présente les caractéristiques suivantes :", "opts": ["A. Lésions extraganglionnaires possibles dans l'orbite", "B. Douleur orbitaire fulgurante", "C. Atteinte habituellement indolore et lentement progressive", "D. Prolifération histiocytaire dans les ganglions cervicaux", "E. Localisations extraconiques les plus fréquentes"], "ans": ["A", "C", "D"]},
    {"q": "Quelles sont les cellules histiocytaires chargées de lipides caractéristiques des xanthogranulomatoses ?", "opts": ["A. Cellules de Sternberg", "B. Cellules de Touton", "C. Cellules de Langhans", "D. Cellules de Müller", "E. Plasmocytes"], "ans": ["B"]},

    # IgG4
    {"q": "Parmi les éléments suivants, lesquels sont caractéristiques de la maladie à IgG4 ?", "opts": ["A. Elle touche préférentiellement les femmes", "B. Elle touche préférentiellement les hommes dans la soixantaine", "C. La glande lacrymale est souvent touchée (dacryoadénite sclérosante)", "D. Elle épargne le pancréas et l'arbre biliaire", "E. Une atteinte isolée à l'orbite est rare"], "ans": ["B", "C", "E"]},
    {"q": "Concernant les critères diagnostiques d'Okazaki et Umehara pour la maladie à IgG4 :", "opts": ["A. Le diagnostic DÉFINI nécessite la clinique, la biologie et l'histologie", "B. Le taux sanguin d'IgG4 doit être > 135 mg/dl", "C. Un taux d'IgG4 normal élimine formellement le diagnostic", "D. Une maladie POSSIBLE associe critères cliniques et biologiques (sans histologie)", "E. Une maladie PROBABLE associe clinique et histologie (sans hyper-IgG4)"], "ans": ["A", "B", "D", "E"]},
    {"q": "Quelles sont les associations cliniques importantes à connaître avec la maladie à IgG4 (actualisation 2025) ?", "opts": ["A. Association possible à la maladie de Crohn", "B. Association à la sclérose en plaques", "C. Risque majeur de développer un lymphome (SIR = 69,2)", "D. Protection contre les tumeurs malignes", "E. Antécédent de tumeur maligne comme possible facteur de risque"], "ans": ["A", "C", "E"]},
    {"q": "Sur le plan biologique et histologique, un patient avec maladie à IgG4 :", "opts": ["A. Peut avoir un taux sérique d'IgG4 normal (>40% des cas prouvés)", "B. Présente une fibrose d'aspect storiforme", "C. Présente un infiltrat riche en neutrophiles", "D. Présente > 10 plasmocytes IgG4+ par champ de haute résolution", "E. Nécessite le critère d'oblitération veinulaire sur une biopsie orbitaire"], "ans": ["A", "B", "D"]},

    # MICI & Iatrogénie & Infectieux & Paranéoplasique
    {"q": "Concernant la myosite orbitaire associée aux maladies inflammatoires de l'intestin (MICI) :", "opts": ["A. Elle est toujours unilatérale", "B. Elle touche un seul muscle dans un tiers des cas", "C. Elle est bilatérale dans un peu moins de la moitié des cas", "D. Sa symptomatologie est suggérée comme plus sévère que les myosites idiopathiques", "E. Elle nécessite souvent une bithérapie"], "ans": ["B", "C", "D", "E"]},
    {"q": "Parmi les médicaments suivants, lesquels sont pourvoyeurs d'inflammation orbitaire iatrogène ?", "opts": ["A. Ipilimumab", "B. Bisphosphonates", "C. Corticoïdes", "D. Statines", "E. Alemtuzumab"], "ans": ["A", "B", "D", "E"]},
    {"q": "Dans quel délai survient classiquement une myosite orbitaire induite par les bisphosphonates ?", "opts": ["A. 0 à 28 jours", "B. 3 à 6 mois", "C. 1 à 2 ans", "D. 5 à 10 ans", "E. Instantanément à l'injection"], "ans": ["A"]},
    {"q": "Quels agents infectieux sont réputés causer une inflammation orbitaire (myosite) ?", "opts": ["A. Virus de l'herpès (le plus fréquent)", "B. Borrelia burgdorferi (Lyme)", "C. Varicelle-zona", "D. Treponema pallidum", "E. Virus Coxsackie"], "ans": ["A", "B", "C", "E"]},
    {"q": "Le syndrome paranéoplasique orbitaire se caractérise typiquement par :", "opts": ["A. Une inflammation unilatérale d'un seul muscle", "B. Une lésion secondaire intramusculaire métastatique", "C. Une inflammation bilatérale touchant la plupart des muscles oculomoteurs", "D. Une évolution insensible à la corticothérapie", "E. Une association fréquente au cancer du poumon ou du sein"], "ans": ["C", "E"]},
    {"q": "Le traitement d'un syndrome paranéoplasique orbitaire repose sur :", "opts": ["A. L'exérèse chirurgicale des muscles atteints", "B. Le traitement de la lésion primaire cancéreuse", "C. La radiothérapie orbitaire systématique en première intention", "D. L'association éventuelle à une corticothérapie", "E. La plasmaphérèse exclusive"], "ans": ["B", "D"]},

    # Diagnostics différentiels de malignité
    {"q": "Parmi les affections tumorales malignes mimant une inflammation orbitaire chez l'adulte, on retrouve au premier rang :", "opts": ["A. Les lymphomes", "B. Le rhabdomyosarcome", "C. Les métastases de cancer du sein", "D. Les métastases de cancer de la prostate", "E. Le méningiome du nerf optique"], "ans": ["A", "C", "D"]},
    {"q": "Quelle lésion métastatique peut provoquer une énophtalmie paradoxale par rétraction du globe ?", "opts": ["A. Lymphome de bas grade", "B. Métastase scirrheuse du cancer du sein", "C. Métastase lytique de la prostate", "D. Rétinoblastome", "E. Chondrosarcome"], "ans": ["B"]},
    {"q": "Chez l'enfant, devant une inflammation orbitaire, les tumeurs malignes à éliminer en priorité sont :", "opts": ["A. Rhabdomyosarcome", "B. Métastase de neuroblastome", "C. Extension de rétinoblastome", "D. Métastase mammaire", "E. Carcinome épidermoïde conjonctival"], "ans": ["A", "B", "C"]}
]

md_content = "# QCMs Inflammation Orbitaire - Partie 1 : Étiologies\n\n"
md_content += "> [!IMPORTANT]\n> **Étiologies des inflammations orbitaires spécifiques et idiopathiques (40 QCMs)**\n\n"

for i, q in enumerate(qcms):
    md_content += f"### QCM {i+1}\n**{q['q']}**\n"
    for opt in q['opts']:
        md_content += f"- {opt}\n"
    md_content += f"\n<details><summary><b>Voir la réponse</b></summary>\nRéponse(s) correcte(s) : {', '.join(q['ans'])}\n</details>\n\n"

file_path = os.path.join(artifact_dir, "qcms_inflammation_orbitaire_etiologies.md")
with open(file_path, "w", encoding="utf-8") as f:
    f.write(md_content)

print("QCM artifact generated.")
