import re

file_path = 'src/pages/CourseReader.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports if missing
if 'vkhCourseMarkdown' not in content[:1000]:
    imports_to_add = """
import { vkhCourseMarkdown, vkhFichesMarkdown, vkhAlgorithmsMarkdown, vkhAlgoMermaid, vkhMindmapMarkdown, vkhMindmapMermaid, vkhClassificationsMarkdown, vkhClassificationsMermaid, vkhQcmMarkdown, vkhQcmData } from '../data/vkhData';
import { memCourseMarkdown, memFichesMarkdown, memAlgorithmsMarkdown, memAlgoMermaid, memMindmapMarkdown, memMindmapMermaid, memClassificationsMarkdown, memClassificationsMermaid } from '../data/memData';
import { noiCourseMarkdown, noiFichesMarkdown, noiAlgorithmsMarkdown, noiAlgoMermaid, noiMindmapMarkdown, noiMindmapMermaid, noiClassificationsMarkdown, noiClassificationsMermaid, noiQcmMarkdown, noiQcmData } from '../data/noiData';
import { hsvCourseMarkdown, hsvFichesMarkdown, hsvAlgorithmsMarkdown, hsvAlgoMermaid, hsvClassificationsMarkdown, hsvClassificationsMermaid } from '../data/hsvData';
"""
    # insert right after uveitesEnfantData import
    content = re.sub(r'(import.*uveitesEnfantData.*;)', r'\1\n' + imports_to_add.strip(), content)

# Add qcm and qcmData to vkh object
vkh_pattern = r"(id === 'vogt-koyanagi-harada' \? \{[^\}]+classificationsMermaid: vkhClassificationsMermaid)(\s*\})"
content = re.sub(vkh_pattern, r'\1,\n    qcm: vkhQcmMarkdown,\n    qcmData: vkhQcmData\2', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated CourseReader.jsx imports and vkh object')
