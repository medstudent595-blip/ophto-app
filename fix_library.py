import re
with open('src/pages/Library.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the VKH object's `has` property to include qcm: true
pattern = r"(\{ id: 'vogt-koyanagi-harada'.*?has: \{.*?classifications: true)(\s*\}\s*\})"
content = re.sub(pattern, r'\1, qcm: true\2', content)

with open('src/pages/Library.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Library.jsx")
