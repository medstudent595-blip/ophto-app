import re

with open('c:/Etudes/DEMS/Cours_Uveites_de_l_enfant_DES_1.html', 'r', encoding='utf-8') as f:
    html = f.read()

style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
styles = style_match.group(1) if style_match else ''

with open('c:/Etudes/DEMS/ophto-app/src/extracted_styles.css', 'w', encoding='utf-8') as f:
    f.write(styles)

body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
body_content = body_match.group(1) if body_match else ''
body_content_escaped = body_content.replace('`', '\\`').replace('$', '\\$')

js_content = f"""export const uveitesEnfantCourseMarkdown = `\n{body_content_escaped}\n`;\n\n"""
js_content += f"""export const uveitesEnfantFichesMarkdown = `\n# Fiches Techniques (Uvéites de l'enfant)\n\n*(Contenu à venir)*\n`;\n\n"""
js_content += f"""export const uveitesEnfantAlgorithmsMarkdown = `\n# Algorithmes (Uvéites de l'enfant)\n\n*(Contenu à venir)*\n`;\n\n"""
js_content += f"""export const uveitesEnfantClassificationsMarkdown = `\n# Classifications (Uvéites de l'enfant)\n\n*(Contenu à venir)*\n`;\n"""

with open('c:/Etudes/DEMS/ophto-app/src/data/uveitesEnfantData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print('Extracted successfully')
