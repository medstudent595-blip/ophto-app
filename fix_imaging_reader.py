import re
with open('src/pages/ImagingReader.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
if 'dmlaClassificationsMermaid' in content:
    content = re.sub(r'dmlaClassificationsMermaid', '""', content)
    with open('src/pages/ImagingReader.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
