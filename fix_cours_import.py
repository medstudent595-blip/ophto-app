import re

file_path = 'src/pages/CourseReader.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

if 'import { courseMarkdown' not in content:
    imports_to_add = "import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid, qcmMarkdown, qcmData } from '../data/coursesData';\n"
    content = re.sub(r'(import.*vkhData.*;)', r'\1\n' + imports_to_add, content)

# update the fallback object to use qcmMarkdown and qcmData
fallback_pattern = r"(  } : \{\s*cours: courseMarkdown,\s*fiches: fichesMarkdown,\s*algorithmes: algorithmsMarkdown,\s*algoMermaid: algoMermaid,\s*mindmapMarkdown: mindmapMarkdown,\s*mindmapMermaid: mindmapMermaid,\s*classificationsMermaid: '')(\s*\};)"
content = re.sub(fallback_pattern, r'\1,\n    qcm: qcmMarkdown,\n    qcmData: qcmData\2', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('CourseReader.jsx fixed')
