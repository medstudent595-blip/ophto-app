import re
with open('src/pages/CourseReader.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the dmla block with an empty string
pattern = r"\s*: id === 'dmla' \? \{\s*cours: dmlaCourseMarkdown,\s*fiches: dmlaFichesMarkdown,\s*algorithmes: dmlaAlgorithmsMarkdown,\s*algoMermaid: dmlaAlgoMermaid,\s*mindmapMarkdown: dmlaMindmapMarkdown,\s*mindmapMermaid: dmlaMindmapMermaid,\s*classificationsMarkdown: dmlaClassificationsMarkdown,\s*classificationsMermaid: dmlaClassificationsMermaid(\s*,\s*qcm:\s*dmlaQcmMarkdown\s*,\s*qcmData:\s*dmlaQcmData)?\s*\}"
content = re.sub(pattern, '', content)

with open('src/pages/CourseReader.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('DMLA block removed')
