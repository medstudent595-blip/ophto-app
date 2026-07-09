const fs = require('fs');
let content = fs.readFileSync('src/pages/CourseReader.jsx', 'utf8');

// Remove dmlaData import
content = content.replace(/import { dmlaCourseMarkdown.*? } from '\.\.\/data\/dmlaData';\n/, '');

// Remove dmla object from courseData switch
const dmlaPattern = /\s*: id === 'dmla' \? {\s*cours: dmlaCourseMarkdown,\s*fiches: dmlaFichesMarkdown,\s*algorithmes: dmlaAlgorithmsMarkdown,\s*algoMermaid: dmlaAlgoMermaid,\s*mindmapMarkdown: dmlaMindmapMarkdown,\s*mindmapMermaid: dmlaMindmapMermaid,\s*classificationsMarkdown: dmlaClassificationsMarkdown,\s*classificationsMermaid: dmlaClassificationsMermaid\s*}/g;
content = content.replace(dmlaPattern, '');

fs.writeFileSync('src/pages/CourseReader.jsx', content, 'utf8');
console.log('Fixed dmlaData bug from git restore');
