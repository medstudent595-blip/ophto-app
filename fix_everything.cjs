const fs = require('fs');
let content = fs.readFileSync('src/pages/CourseReader.jsx', 'utf8');

// 1. Fix coursesData import to include qcmMarkdown and qcmData
content = content.replace(
    /import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid } from '\.\.\/data\/coursesData';/,
    "import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid, qcmMarkdown, qcmData } from '../data/coursesData';"
);

// 2. Fix vkhData import to include vkhQcmMarkdown and vkhQcmData
content = content.replace(
    /import { vkhCourseMarkdown, vkhFichesMarkdown, vkhAlgorithmsMarkdown, vkhAlgoMermaid, vkhMindmapMarkdown, vkhMindmapMermaid, vkhClassificationsMarkdown, vkhClassificationsMermaid } from '\.\.\/data\/vkhData';/,
    "import { vkhCourseMarkdown, vkhFichesMarkdown, vkhAlgorithmsMarkdown, vkhAlgoMermaid, vkhMindmapMarkdown, vkhMindmapMermaid, vkhClassificationsMarkdown, vkhClassificationsMermaid, vkhQcmMarkdown, vkhQcmData } from '../data/vkhData';"
);

// 3. Re-add uveitesEnfant import if missing
if (!content.includes('uveitesEnfantData')) {
    const uveitesImport = "import { uveitesEnfantCourseMarkdown, uveitesEnfantFichesMarkdown, uveitesEnfantAlgorithmsMarkdown, uveitesEnfantClassificationsMarkdown } from '../data/uveitesEnfantData';\n";
    content = content.replace(/(import { memCourseMarkdown.*?)/, `${uveitesImport}$1`);
}

// 4. Update VKH block to include QCMs
const vkhBlockPattern = /(  } : id === 'vogt-koyanagi-harada' \? \{\s*cours: vkhCourseMarkdown,\s*fiches: vkhFichesMarkdown,\s*algorithmes: vkhAlgorithmsMarkdown,\s*algoMermaid: vkhAlgoMermaid,\s*mindmapMarkdown: vkhMindmapMarkdown,\s*mindmapMermaid: vkhMindmapMermaid,\s*classificationsMarkdown: vkhClassificationsMarkdown,\s*classificationsMermaid: vkhClassificationsMermaid)(\s*\})/;
content = content.replace(vkhBlockPattern, `$1,\n    qcm: vkhQcmMarkdown,\n    qcmData: vkhQcmData$2`);

// 5. Re-add uveites-enfant block if missing
if (!content.includes("id === 'uveites-enfant'")) {
    const uveitesBlock = `  const courseData = id === 'uveites-enfant' ? {
    cours: uveitesEnfantCourseMarkdown,
    fiches: uveitesEnfantFichesMarkdown,
    algorithmes: uveitesEnfantAlgorithmsMarkdown,
    algoMermaid: '',
    mindmapMarkdown: '',
    mindmapMermaid: '',
    classificationsMarkdown: uveitesEnfantClassificationsMarkdown,
    classificationsMermaid: ''
  } : id === 'membranes-epimaculaires' ? {`;
    content = content.replace(/  const courseData = id === 'membranes-epimaculaires' \? \{/, uveitesBlock);
}

fs.writeFileSync('src/pages/CourseReader.jsx', content, 'utf8');
console.log('CourseReader.jsx completely fixed!');
