# Ophtalmo Clinical Cards

MVP statique, mobile-first et installable comme PWA.

## Principes
- Aucun chatbot
- Aucun test
- Aucun contenu médical inventé
- Recherche locale
- Favoris et historique récents via localStorage
- Mode sombre
- Fonctionnement hors ligne après premier chargement

## Ajouter une fiche
Éditer `data.js` et ajouter un objet dans `OPHTALMO_DATA.sheets`.
Chaque fiche peut contenir : `practical`, `severity`, `diagnosis`, `workup`, `classification`, `decision`, `treatment`, `followup`, `pitfalls`.

## Lancer localement
Utiliser un petit serveur HTTP, par exemple :

```bash
python3 -m http.server 8080
```

puis ouvrir `http://localhost:8080`.
