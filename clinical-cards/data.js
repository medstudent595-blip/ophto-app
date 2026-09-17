const OPHTALMO_DATA = {
  categories: [
    { id: 'cornee', name: 'Cornée', icon: '◉' },
    { id: 'glaucome', name: 'Glaucome', icon: '◌' },
    { id: 'retine', name: 'Rétine', icon: '◎' },
    { id: 'uveites', name: 'Uvéites', icon: '✦' },
    { id: 'neuro', name: 'Neuro-ophtalmo', icon: '⌬' },
    { id: 'pediatrie', name: 'Pédiatrie / Strabisme', icon: '↔' },
    { id: 'orbite', name: 'Paupières / Orbite', icon: '◇' },
    { id: 'trauma', name: 'Traumatologie', icon: '⚡' },
    { id: 'refraction', name: 'Réfraction', icon: '±' },
    { id: 'cataracte', name: 'Cataracte', icon: '◐' }
  ],

  sheets: [
    {
      id: 'modele-fiche',
      title: 'Modèle de fiche clinique',
      category: 'cornee',
      tags: ['modèle', 'structure', 'fiche'],
      pinned: true,
      emergency: false,
      summary: 'Exemple de structure — aucune donnée médicale n’est encore intégrée.',
      source: 'Aucune source clinique intégrée — modèle uniquement.',
      sections: {
        practical: ['Contenu clinique à intégrer depuis une source validée.'],
        severity: ['Critères de gravité à extraire du document source.'],
        diagnosis: ['Interrogatoire', 'Signes fonctionnels', 'Examen clinique', 'Critères diagnostiques'],
        workup: ['Examens indispensables', 'Examens conditionnels', 'Examens non systématiques'],
        classification: ['Classification / score / grade si applicable'],
        decision: ['Algorithme décisionnel codifié à construire depuis la source'],
        treatment: ['1re intention', 'Alternatives', 'Indications interventionnelles', 'Contre-indications'],
        followup: ['Paramètres à surveiller', 'Délai du contrôle', 'Critères d’escalade'],
        pitfalls: ['Pièges diagnostiques ou thérapeutiques documentés']
      }
    }
  ],

  tools: [
    { id: 'classifications', title: 'Classifications', subtitle: 'Grades, scores et stades validés' },
    { id: 'regles', title: 'Règles pratiques', subtitle: 'Règles de conduite et décisions codifiées' },
    { id: 'valeurs', title: 'Valeurs de référence', subtitle: 'Valeurs normales et seuils utiles' },
    { id: 'formules', title: 'Formules', subtitle: 'Calculs utiles en consultation' }
  ]
};
