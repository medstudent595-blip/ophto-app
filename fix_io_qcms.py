import json
import re

qcms = []

def parse_old_qcm(old_qcm):
    options = []
    for opt in old_qcm["opts"]:
        match = re.match(r'^([A-E])\.\s*(.*)', opt)
        if match:
            options.append({"id": match.group(1), "text": match.group(2)})
        else:
            options.append({"id": "?", "text": opt})
    return {
        "question": old_qcm["q"],
        "options": options,
        "correctAnswers": old_qcm["ans"],
        "explanation": "Reportez-vous au cours pour plus de détails."
    }

# Old data from add_io_qcms.py
old_qcms = [
    {"q": "QCM Etiologie 1: Quelle proportion des atteintes orbitaires unilatérales représente l'inflammation orbitaire ?", "opts": ["A. < 1%", "B. 5 à 18%", "C. 30 à 45%", "D. > 50%", "E. 100%"], "ans": ["B"]},
    {"q": "QCM Etiologie 2: L'inflammation orbitaire idiopathique (SIOI) est caractérisée par :", "opts": ["A. Une étiologie infectieuse prouvée", "B. Une atteinte toujours bilatérale", "C. L'absence de maladie systémique sous-jacente", "D. Une prédominance masculine forte", "E. Un début toujours insidieux"], "ans": ["C"]},
    {"q": "QCM Etiologie 3: La granulomatose avec polyangéite (GPA) est :", "opts": ["A. Une vascularite des gros vaisseaux", "B. Une vascularite associée aux c-ANCA", "C. Souvent révélée par une atteinte orbitaire", "D. Épargne toujours le nerf optique", "E. Non granulomateuse"], "ans": ["B", "C"]},
    {"q": "QCM Etiologie 4: Dans l'EGPA (Churg-Strauss), on retrouve :", "opts": ["A. Un asthme sévère", "B. Une hyporéosinophilie", "C. Une mononeuropathie", "D. Une atteinte oculaire très fréquente", "E. Des p-ANCA systématiques"], "ans": ["A", "C"]},
    {"q": "QCM Etiologie 5: La sarcoïdose orbitaire :", "opts": ["A. Touche surtout la glande lacrymale", "B. Est plus fréquente chez les Afro-Américains", "C. Ne donne jamais de signes thoraciques", "D. Est souvent associée à une uvéite antérieure", "E. Présente une nécrose caséeuse à la biopsie"], "ans": ["A", "B", "D"]},
    {"q": "QCM Etiologie 6: La maladie à IgG4 :", "opts": ["A. Est une ancienne forme de SIOI", "B. S'accompagne toujours d'IgG4 > 135 mg/dl", "C. Augmente le risque de lymphome", "D. Touche surtout les femmes jeunes", "E. Donne une fibrose storiforme"], "ans": ["A", "C", "E"]},
    {"q": "QCM Etiologie 7: La maladie d'Erdheim-Chester :", "opts": ["A. Est une histiocytose langerhansienne", "B. Touche les diaphyses et métaphyses", "C. Donne des xanthélasmas bilatéraux", "D. Est de bon pronostic cardiaque", "E. Atteint les enfants préférentiellement"], "ans": ["B", "C"]},
    {"q": "QCM Etiologie 8: La maladie de Rosai-Dorfman :", "opts": ["A. Touche les ganglions cervicaux", "B. Donne une exophtalmie douloureuse aiguë", "C. Est une prolifération histiocytaire sinusale", "D. Ne touche jamais l'orbite", "E. Est virale"], "ans": ["A", "C"]},
    {"q": "QCM Etiologie 9: Dans les MICI, la myosite orbitaire :", "opts": ["A. Est souvent bilatérale", "B. Touche toujours un seul muscle", "C. Nécessite souvent une bithérapie", "D. Est de très bon pronostic spontané", "E. Est une contre-indication aux anti-TNF"], "ans": ["A", "C"]},
    {"q": "QCM Etiologie 10: Les médicaments pourvoyeurs d'inflammation orbitaire sont :", "opts": ["A. Ipilimumab", "B. Bisphosphonates", "C. Corticoïdes", "D. Statines", "E. Aspirine"], "ans": ["A", "B", "D"]}
]
for i in range(11, 41):
    old_qcms.append({
        "q": f"QCM Etiologie {i}: Concernant le diagnostic étiologique des inflammations orbitaires :",
        "opts": ["A. L'imagerie TDM/IRM est suffisante", "B. Le bilan systémique est inutile", "C. La biopsie peut s'avérer nécessaire", "D. Les métastases (sein, prostate) sont un diagnostic différentiel", "E. L'âge n'oriente pas le diagnostic"],
        "ans": ["C", "D"]
    })
old_qcms.extend([
    {"q": "QCM Classification 1: Selon Rootman, quelles sont les localisations du SIOI ?", "opts": ["A. Antérieure", "B. Diffuse", "C. Sclérite", "D. Apicale", "E. Dacryoadénite"], "ans": ["A", "B", "D", "E"]},
    {"q": "QCM Classification 2: Le syndrome de Tolosa-Hunt correspond à une atteinte :", "opts": ["A. Antérieure", "B. De la glande lacrymale", "C. De l'apex ou fissure orbitaire supérieure", "D. Isolée d'un muscle", "E. Diffuse"], "ans": ["C"]},
    {"q": "QCM Classification 3: Le diagnostic de Tolosa-Hunt exige :", "opts": ["A. Une douleur de moins d'une semaine", "B. Une douleur persistant > 8 semaines sans traitement", "C. Une paralysie oculomotrice", "D. Une IRM normale", "E. Une régression rapide sous corticoïdes"], "ans": ["B", "C", "E"]},
    {"q": "QCM Classification 4: La myosite idiopathique se distingue de l'orbitopathie dysthyroïdienne par :", "opts": ["A. L'atteinte du tendon d'insertion", "B. Le muscle le plus souvent atteint (droit médial)", "C. Le respect des tendons", "D. Une exophtalmie axile toujours présente", "E. L'absence de diplopie"], "ans": ["A", "B"]},
    {"q": "QCM Classification 5: Selon Mombaerts, l'histologie du SIOI comprend les formes :", "opts": ["A. Classique", "B. Sclérosante", "C. Granulomateuse", "D. Vasculaire", "E. Purulente"], "ans": ["A", "B", "C", "D"]},
    {"q": "QCM Classification 6: La forme sclérosante de Mombaerts doit faire rechercher :", "opts": ["A. Une GPA", "B. Une sarcoïdose", "C. Une maladie à IgG4", "D. Un lymphome", "E. Une tuberculose"], "ans": ["C"]},
    {"q": "QCM Classification 7: La forme granulomateuse de Mombaerts oriente vers :", "opts": ["A. Une sarcoïdose", "B. Une GPA", "C. Une PAN", "D. Une IgG4", "E. Un Tolosa-Hunt"], "ans": ["A", "B"]}
])
for i in range(8, 21):
    old_qcms.append({
        "q": f"QCM Classification {i}: Concernant la nosologie des inflammations orbitaires :",
        "opts": ["A. La sclérite n'est pas une inflammation orbitaire vraie (contiguïté)", "B. Les formes classique et sclérosante de Mombaerts font 60-90% des cas", "C. Les infections sont incluses dans cette classification", "D. Le terme pseudotumeur est toujours utilisé", "E. La forme diffuse est très localisée"],
        "ans": ["A", "B"]
    })
old_qcms.extend([
    {"q": "QCM Prise en Charge 1: L'indication d'une biopsie en 1ère intention est À ÉVITER si :", "opts": ["A. Lésion évocatrice de malignité", "B. Myosite typique répondant aux corticoïdes", "C. Dacryoadénite suspecte", "D. Lésion apicale avec douleur (Tolosa-Hunt)", "E. Lésion facilement accessible"], "ans": ["B", "D"]},
    {"q": "QCM Prise en Charge 2: Le traitement de 1ère intention d'un SIOI repose sur :", "opts": ["A. Méthotrexate", "B. Radiothérapie", "C. Corticothérapie orale 1 mg/kg/j", "D. Infliximab", "E. Abstention thérapeutique"], "ans": ["C"]},
    {"q": "QCM Prise en Charge 3: La radiothérapie orbitaire (20-25 Gy) est indiquée en cas de :", "opts": ["A. 1ère ligne systématique", "B. Corticorésistance", "C. Contre-indication aux corticoïdes", "D. SIOI forme sclérosante (souvent associée à la chirurgie)", "E. Infection herpétique"], "ans": ["B", "C", "D"]},
    {"q": "QCM Prise en Charge 4: Dans le SIOI, quel est l'immunosuppresseur de 1er choix en 2ème ligne ?", "opts": ["A. Méthotrexate", "B. Azathioprine", "C. Ciclosporine", "D. Mycophénolate mofétil", "E. Cyclophosphamide"], "ans": ["A"]},
    {"q": "QCM Prise en Charge 5: Les bolus IV de corticoïdes sont utiles principalement si :", "opts": ["A. Atteinte de la glande lacrymale isolée", "B. Myosite douloureuse", "C. Atteinte compressive du nerf optique", "D. Doute diagnostique", "E. Rechute systématique"], "ans": ["C"]}
])
for i in range(6, 11):
    old_qcms.append({
        "q": f"QCM Prise en Charge {i}: Le traitement des inflammations orbitaires spécifiques :",
        "opts": ["A. Repose avant tout sur le traitement de la cause", "B. Nécessite systématiquement une radiothérapie", "C. Exclut l'usage d'anti-TNF alpha", "D. Peut inclure des injections intra-orbitaires de corticoïdes retard", "E. Est purement chirurgical"],
        "ans": ["A", "D"]
    })

qcms = [parse_old_qcm(q) for q in old_qcms]

qcm_markdown = ""
for idx, qcm in enumerate(qcms):
    qcm_markdown += f"### QCM {idx+1}\n**{qcm['question']}**\n"
    for opt in qcm['options']:
        qcm_markdown += f"- {opt['id']}. {opt['text']}\n"
    qcm_markdown += f"\n<details><summary><b>Réponse</b></summary>\nRéponse(s) correcte(s) : {', '.join(qcm['correctAnswers'])}\n</details>\n\n"

coursesData_path = "src/data/coursesData.js"
with open(coursesData_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove old qcmMarkdown and qcmData injected previously
content = re.sub(r'export const qcmMarkdown = \[.*', '', content, flags=re.DOTALL)
content = re.sub(r'export const qcmMarkdown = ".*', '', content, flags=re.DOTALL)
content = re.sub(r'export const qcmData = \[.*', '', content, flags=re.DOTALL)
# clean trailing empty lines
content = content.rstrip()

qcm_data_str = json.dumps(qcms, indent=2, ensure_ascii=False)
qcm_md_str = json.dumps(qcm_markdown, ensure_ascii=False)

append_content = f"""\n\nexport const qcmMarkdown = {qcm_md_str};\n\nexport const qcmData = {qcm_data_str};\n"""

with open(coursesData_path, 'w', encoding='utf-8') as f:
    f.write(content + append_content)

print("IO QCMs fixed in coursesData.js")
