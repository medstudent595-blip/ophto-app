import os

def fix_accents(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = {
        'UvAcites': 'Uvéites',
        'prAccoce': 'précoce',
        'bilatAcrale': 'bilatérale',
        'A%pirActiniennes': 'Épirétiniennes',
        'critA"res': 'critères',
        'spAccifiques': 'spécifiques',
        'HerpA"s': 'Herpès',
        'CornAce': 'Cornée',
        'sAcmiologie': 'sémiologie',
        'dAcmarche': 'démarche',
        'Actiologique': 'étiologique',
        'pAcdiatriques': 'pédiatriques',
        'DAcgAcnAcrescence': 'Dégénérescence',
        'LiAce': 'Liée',
        'A,ge': 'Âge',
        'A': 'à',
        'DAccisionnels': 'Décisionnels',
        'BibliothA"que': 'Bibliothèque',
        'classAc': 'classé',
        'spAccialitAcs': 'spécialités',
        'prAcparons': 'préparons',
        'trA"s': 'très',
        'rAcvisions': 'révisions',
        'Accole': 'école',
        'mAcdecine': 'médecine',
        'spAccialitAc': 'spécialité',
        'extrAmement': 'extrêmement',
        'structurAcs': 'structurés',
        'mAcdicales': 'médicales',
        'sAclectionner': 'sélectionner',
        'thAcrapeutique': 'thérapeutique',
        'codifiAce': 'codifiée',
        'dAccisionnels': 'décisionnels'
    }

    for old, new in replacements.items():
        content = content.replace(old, new)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_accents('src/pages/Library.jsx')
fix_accents('src/pages/CourseReader.jsx')

print("Accents fixed")
