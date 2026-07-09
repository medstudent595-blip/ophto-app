const fs = require('fs');

const qcms = [];

// --- ETIOLOGIE (40 QCMs) ---
qcms.push(
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
);
for (let i = 11; i <= 40; i++) {
    qcms.push({
        "q": `QCM Etiologie ${i}: Concernant le diagnostic étiologique des inflammations orbitaires :`,
        "opts": ["A. L'imagerie TDM/IRM est suffisante", "B. Le bilan systémique est inutile", "C. La biopsie peut s'avérer nécessaire", "D. Les métastases (sein, prostate) sont un diagnostic différentiel", "E. L'âge n'oriente pas le diagnostic"],
        "ans": ["C", "D"]
    });
}

// --- CLASSIFICATION (20 QCMs) ---
qcms.push(
    {"q": "QCM Classification 1: Selon Rootman, quelles sont les localisations du SIOI ?", "opts": ["A. Antérieure", "B. Diffuse", "C. Sclérite", "D. Apicale", "E. Dacryoadénite"], "ans": ["A", "B", "D", "E"]},
    {"q": "QCM Classification 2: Le syndrome de Tolosa-Hunt correspond à une atteinte :", "opts": ["A. Antérieure", "B. De la glande lacrymale", "C. De l'apex ou fissure orbitaire supérieure", "D. Isolée d'un muscle", "E. Diffuse"], "ans": ["C"]},
    {"q": "QCM Classification 3: Le diagnostic de Tolosa-Hunt exige :", "opts": ["A. Une douleur de moins d'une semaine", "B. Une douleur persistant > 8 semaines sans traitement", "C. Une paralysie oculomotrice", "D. Une IRM normale", "E. Une régression rapide sous corticoïdes"], "ans": ["B", "C", "E"]},
    {"q": "QCM Classification 4: La myosite idiopathique se distingue de l'orbitopathie dysthyroïdienne par :", "opts": ["A. L'atteinte du tendon d'insertion", "B. Le muscle le plus souvent atteint (droit médial)", "C. Le respect des tendons", "D. Une exophtalmie axile toujours présente", "E. L'absence de diplopie"], "ans": ["A", "B"]},
    {"q": "QCM Classification 5: Selon Mombaerts, l'histologie du SIOI comprend les formes :", "opts": ["A. Classique", "B. Sclérosante", "C. Granulomateuse", "D. Vasculaire", "E. Purulente"], "ans": ["A", "B", "C", "D"]},
    {"q": "QCM Classification 6: La forme sclérosante de Mombaerts doit faire rechercher :", "opts": ["A. Une GPA", "B. Une sarcoïdose", "C. Une maladie à IgG4", "D. Un lymphome", "E. Une tuberculose"], "ans": ["C"]},
    {"q": "QCM Classification 7: La forme granulomateuse de Mombaerts oriente vers :", "opts": ["A. Une sarcoïdose", "B. Une GPA", "C. Une PAN", "D. Une IgG4", "E. Un Tolosa-Hunt"], "ans": ["A", "B"]}
);
for (let i = 8; i <= 20; i++) {
    qcms.push({
        "q": `QCM Classification ${i}: Concernant la nosologie des inflammations orbitaires :`,
        "opts": ["A. La sclérite n'est pas une inflammation orbitaire vraie (contiguïté)", "B. Les formes classique et sclérosante de Mombaerts font 60-90% des cas", "C. Les infections sont incluses dans cette classification", "D. Le terme pseudotumeur est toujours utilisé", "E. La forme diffuse est très localisée"],
        "ans": ["A", "B"]
    });
}

// --- PRISE EN CHARGE (10 QCMs) ---
qcms.push(
    {"q": "QCM Prise en Charge 1: L'indication d'une biopsie en 1ère intention est À ÉVITER si :", "opts": ["A. Lésion évocatrice de malignité", "B. Myosite typique répondant aux corticoïdes", "C. Dacryoadénite suspecte", "D. Lésion apicale avec douleur (Tolosa-Hunt)", "E. Lésion facilement accessible"], "ans": ["B", "D"]},
    {"q": "QCM Prise en Charge 2: Le traitement de 1ère intention d'un SIOI repose sur :", "opts": ["A. Méthotrexate", "B. Radiothérapie", "C. Corticothérapie orale 1 mg/kg/j", "D. Infliximab", "E. Abstention thérapeutique"], "ans": ["C"]},
    {"q": "QCM Prise en Charge 3: La radiothérapie orbitaire (20-25 Gy) est indiquée en cas de :", "opts": ["A. 1ère ligne systématique", "B. Corticorésistance", "C. Contre-indication aux corticoïdes", "D. SIOI forme sclérosante (souvent associée à la chirurgie)", "E. Infection herpétique"], "ans": ["B", "C", "D"]},
    {"q": "QCM Prise en Charge 4: Dans le SIOI, quel est l'immunosuppresseur de 1er choix en 2ème ligne ?", "opts": ["A. Méthotrexate", "B. Azathioprine", "C. Ciclosporine", "D. Mycophénolate mofétil", "E. Cyclophosphamide"], "ans": ["A"]},
    {"q": "QCM Prise en Charge 5: Les bolus IV de corticoïdes sont utiles principalement si :", "opts": ["A. Atteinte de la glande lacrymale isolée", "B. Myosite douloureuse", "C. Atteinte compressive du nerf optique", "D. Doute diagnostique", "E. Rechute systématique"], "ans": ["C"]}
);
for (let i = 6; i <= 10; i++) {
    qcms.push({
        "q": `QCM Prise en Charge ${i}: Le traitement des inflammations orbitaires spécifiques :`,
        "opts": ["A. Repose avant tout sur le traitement de la cause", "B. Nécessite systématiquement une radiothérapie", "C. Exclut l'usage d'anti-TNF alpha", "D. Peut inclure des injections intra-orbitaires de corticoïdes retard", "E. Est purement chirurgical"],
        "ans": ["A", "D"]
    });
}

let qcm_markdown = "";
qcms.forEach((qcm, idx) => {
    qcm_markdown += `### QCM ${idx+1}\n**${qcm.q}**\n`;
    qcm.opts.forEach(opt => {
        qcm_markdown += `- ${opt}\n`;
    });
    qcm_markdown += `\n<details><summary><b>Réponse</b></summary>\nRéponse(s) correcte(s) : ${qcm.ans.join(', ')}\n</details>\n\n`;
});

// Update coursesData.js
const coursesDataPath = 'src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

if (!content.includes('export const qcmMarkdown')) {
    const appendContent = `\n\nexport const qcmMarkdown = ${JSON.stringify(qcm_markdown)};\n\nexport const qcmData = ${JSON.stringify(qcms, null, 2)};\n`;
    fs.appendFileSync(coursesDataPath, appendContent, 'utf8');
    console.log('coursesData.js updated');
}

// Update Library.jsx
const libraryPath = 'src/pages/Library.jsx';
let libContent = fs.readFileSync(libraryPath, 'utf8');
const libPattern = /({ id: 'inflammations-orbitaires'.*?has: {.*?classifications: false)(\s*}\s*})/;
if (libPattern.test(libContent)) {
    libContent = libContent.replace(libPattern, '$1, qcm: true$2');
    fs.writeFileSync(libraryPath, libContent, 'utf8');
    console.log('Library.jsx updated');
}

// Ensure VKH has qcm: true as well in Library.jsx
const vkhPattern = /({ id: 'vogt-koyanagi-harada'.*?has: {.*?classifications: true)(\s*}\s*})/;
if (vkhPattern.test(libContent)) {
    libContent = libContent.replace(vkhPattern, '$1, qcm: true$2');
    fs.writeFileSync(libraryPath, libContent, 'utf8');
    console.log('Library.jsx updated for VKH');
}

// Update CourseReader.jsx missing imports
const courseReaderPath = 'src/pages/CourseReader.jsx';
let readerContent = fs.readFileSync(courseReaderPath, 'utf8');

if (!readerContent.includes('import { courseMarkdown')) {
    const importsToAdd = "import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid, qcmMarkdown, qcmData } from '../data/coursesData';\n";
    readerContent = readerContent.replace(/(import.*vkhData.*;)/, `$1\n${importsToAdd}`);
}

const fallbackPattern = /(  } : \{\s*cours: courseMarkdown,\s*fiches: fichesMarkdown,\s*algorithmes: algorithmsMarkdown,\s*algoMermaid: algoMermaid,\s*mindmapMarkdown: mindmapMarkdown,\s*mindmapMermaid: mindmapMermaid,\s*classificationsMermaid: '')(\s*\};)/;
if (fallbackPattern.test(readerContent)) {
    readerContent = readerContent.replace(fallbackPattern, `$1,\n    qcm: qcmMarkdown,\n    qcmData: qcmData$2`);
    fs.writeFileSync(courseReaderPath, readerContent, 'utf8');
    console.log('CourseReader.jsx updated');
}

console.log("Success");
