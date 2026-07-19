import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Book, Filter, ArrowRight, Map, Brain, Layout, Image as ImageIcon, ClipboardList } from 'lucide-react';

export const allCourses = [
  { id: 'neuropathies-optiques-inflammatoires', title: 'Neuropathies Optiques Inflammatoires (NOI)', category: 'Neuro-Ophtalmologie', description: 'Diagnostic, bilan et prise en charge des NOI typiques et atypiques.', has: { cours: true, fiches: true, algorithms: true, classifications: true, qcm: true } },
  { id: 'vogt-koyanagi-harada', title: 'Maladie de Vogt-Koyanagi-Harada (VKH)', category: 'Uvéites', description: 'Diagnostic précoce et prise en charge de la panuvéite granulomateuse bilatérale.', has: { cours: true, fiches: true, algorithms: true, classifications: true, qcm: true } },
  { id: 'membranes-epimaculaires', title: 'Membranes Épirétiniennes Maculaires (MEM)', category: 'Rétine', description: 'Diagnostic OCT, critères pronostics et indications de la vitrectomie.', has: { cours: true, fiches: true, algorithms: true, classifications: true } },
  { id: 'inflammations-orbitaires', title: 'Orbitopathies Inflammatoires', category: 'Orbite', description: 'Arbre diagnostique des inflammations orbitaires idiopathiques et spécifiques.', has: { cours: true, fiches: true, algorithms: true, classifications: false, qcm: true } },
  { id: 'herpes-oculaire', title: 'Herpès Oculaire', category: 'Cornée', description: 'Physiopathologie, clinique et thérapeutique codifiée (Mise à jour 2025).', has: { cours: true, fiches: true, algorithms: true, classifications: true } },
  
  // Interactive HTML Courses - Uvéites
  { id: 'uveites-anterieures', title: 'Uvéites Antérieures', category: 'Uvéites', description: 'Cours magistral interactif, fiches techniques et algorithme de prise en charge des uvéites antérieures.', has: { cours: true, fiches: true, algorithms: true }, isInteractive: true, interactiveFile: 'Cours_Magistral_Uveites_Anterieures_interactif.html' },
  { id: 'uveites-intermediaires', title: 'Uvéites Intermédiaires', category: 'Uvéites', description: 'Cours magistral interactif, fiches techniques, algorithme de prise en charge et 60 QCM des uvéites intermédiaires.', has: { cours: true, fiches: true, algorithms: true, qcm: true }, isInteractive: true, interactiveFile: 'Cours_Magistral_Uveites_Intermediaires_interactif.html' },
  { id: 'uveites-posterieures-vascularites', title: 'Uvéites Postérieures et Vascularites', category: 'Uvéites', description: 'Cours magistral interactif, fiches techniques, algorithme de prise en charge et 140 QCM experts des uvéites postérieures et vascularites.', has: { cours: true, fiches: true, algorithms: true, qcm: true }, isInteractive: true, interactiveFile: 'Cours_Magistral_Uveites_Posterieures_et_Vascularites_interactif.html' },
  { id: 'uveo-meningites', title: 'Uvéo-méningites', category: 'Uvéites', description: 'Cours magistral interactif sur les uvéo-méningites.', has: { cours: true }, isInteractive: true, interactiveFile: 'Cours_Magistral_Uveo-meningites_interactif.html' },
  { id: 'uveites-orientation-diagnostique', title: 'Orientation Diagnostique des Uvéites', category: 'Uvéites', description: 'Cours magistral interactif, fiches techniques et algorithme de prise en charge de la démarche diagnostique.', has: { cours: true, fiches: true, algorithms: true }, isInteractive: true, interactiveFile: 'Cours_Magistral_Uveites_Orientation_Diagnostique_interactif.html' },
  
  // Interactive HTML Courses - Cas Cliniques
  { id: 'case3-vkh-mimic', title: 'Cas clinique #3 — Diagnostic masqué (VKH mimic)', category: 'Uvéites', description: 'Le diagnostic a changé en cours de route. Un cas clinique interactif sur la choriorétinopathie séreuse centrale atypique bulleuse.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case3_vkh_mimic.html' },
  { id: 'case2-neuroretinite', title: 'Cas clinique #2 — BAV unilatérale', category: 'Uvéites', description: 'Cas clinique interactif sur une neurorétinite avec étoile maculaire.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case2_neuroretinite.html' },
  { id: 'birdshot-case-2', title: 'Cas clinique Birdshot #2', category: 'Uvéites', description: 'Cas clinique interactif d\'entraînement sur la choriorétinopathie de Birdshot.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'birdshot_case_2.html' },
  { id: 'birdshot-case-1', title: 'Cas clinique Birdshot #1', category: 'Uvéites', description: 'Cas clinique interactif d\'entraînement sur la choriorétinopathie de Birdshot.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'birdshot_case_1.html' },
  { id: 'birdshot-case', title: 'Cas clinique Birdshot (Global)', category: 'Uvéites', description: 'Cas clinique interactif complet sur la choriorétinopathie de Birdshot.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'birdshot_case.html' },
  
  { id: 'case5-behcet', title: 'Cas clinique #5 — Maladie de Behçet', category: 'Uvéites', description: 'Cas clinique interactif sur la maladie de Behçet à expression oculaire.', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case5_diagnostic_masque.html' },
  { id: 'case6-vkh', title: 'Cas clinique #6 — Maladie de Vogt-Koyanagi-Harada', category: 'Uvéites', description: 'Cas clinique interactif sur la maladie de Vogt-Koyanagi-Harada (phase aiguë).', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case6_diagnostic_masque.html' },
  { id: 'case7-sarcoidose', title: 'Cas clinique #7 — Sarcoïdose oculaire', category: 'Uvéites', description: 'Cas clinique interactif sur la sarcoïdose oculaire (uvéite sarcoïdosique).', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case7_diagnostic_masque.html' },
  { id: 'case8-susac', title: 'Cas clinique #8 — Syndrome de Susac', category: 'Neuro-Ophtalmologie', description: 'Cas clinique interactif sur le syndrome de Susac (SICRET syndrome).', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case8_diagnostic_masque.html' },
  { id: 'case9-lymphome', title: 'Cas clinique #9 — Lymphome vitréo-rétinien', category: 'Uvéites', description: 'Cas clinique interactif sur le lymphome vitréo-rétinien primitif (pseudo-uvéite).', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case9_diagnostic_masque.html' },
  { id: 'case10-irvan', title: 'Cas clinique #10 — Syndrome IRVAN', category: 'Rétine', description: 'Cas clinique interactif sur le syndrome IRVAN (idiopathic retinitis, vasculitis, aneurysms and neuroretinitis).', has: { 'cas-cliniques': true }, isInteractive: true, interactiveFile: 'case10_diagnostic_masque.html' },

  // Imagerie — Atlas OCT interactifs
  { id: 'dmla-exsudative', title: 'DMLA Exsudative — Atlas OCT & OCT-A', category: 'Imagerie', description: 'Atlas interactif : séméiologie OCT structurel et OCT-angiographie de la DMLA néovasculaire (types 1, 2, 3, VPC).', has: { imaging: true } },

  // Placeholders for visual effect
  { id: 'glaucome-primitif-angle-ouvert', title: 'Glaucome Primitif à Angle Ouvert (GPAO)', category: 'Glaucome', description: 'Diagnostic, champ visuel et escalade thérapeutique.', has: { cours: false, fiches: false, algorithms: false, classifications: false } },
  { id: 'glaucome-congenital', title: 'Glaucome Congénital', category: 'Glaucome', description: 'Épidémiologie, diagnostic, glaucomes secondaires et prise en charge thérapeutique.', has: { cours: false, fiches: false, algorithms: false, classifications: false, qcm: true } },
  { id: 'retinopathie-diabetique', title: 'Rétinopathie Diabétique', category: 'Rétine', description: 'Classification, suivi et indications du laser/anti-VEGF.', has: { cours: false, fiches: false, algorithms: false, classifications: false } }
];

const categories = ['Toutes', 'Neuro-Ophtalmologie', 'Rétine', 'Uvéites', 'Orbite', 'Glaucome', 'Cornée', 'Imagerie'];

const Library = ({ type = 'cours' }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredCourses = allCourses.filter(course => {
    // Check content availability based on category (type)
    // If the view is "cours" or "Toutes", we show it if it has a course.
    if (type !== 'cours' && course.has && !course.has[type]) return false;

    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const titleMap = {
    cours: 'Cours Magistraux',
    fiches: 'Fiches Techniques',
    algorithms: 'Algorithmes Décisionnels',
    classifications: 'Classifications',
    imaging: 'Imagerie & Examens',
    'cas-cliniques': 'Cas Cliniques'
  };

  const iconMap = {
    cours: Book,
    fiches: Map,
    algorithms: Brain,
    classifications: Layout,
    imaging: ImageIcon,
    'cas-cliniques': ClipboardList
  };

  const TitleIcon = iconMap[type] || Book;
  const pageTitle = titleMap[type] || 'Bibliothèque';

  return (
    <div className="page-container animate-fade-in" style={{ height: '100%', overflowY: 'auto' }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <TitleIcon color="var(--accent-primary)" size={32} /> {pageTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Explorez l'ensemble du programme DEMS classé par spécialités.
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <div style={{ 
            flex: '1 1 300px', 
            position: 'relative' 
          }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un cours, une pathologie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            <Filter size={20} color="var(--text-tertiary)" style={{ marginRight: '0.5rem' }} />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  background: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${selectedCategory === cat ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                  whiteSpace: 'nowrap',
                  fontWeight: selectedCategory === cat ? 600 : 400
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '1.5rem',
        paddingBottom: '2rem'
      }}>
        {filteredCourses.length > 0 ? filteredCourses.map(course => (
          <div 
            key={course.id} 
            className="glass-panel" 
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => {
              if (course.isInteractive && (type === 'cours' || type === 'cas-cliniques')) {
                navigate(`/interactive/${course.id}`);
              } else if (type === 'imaging' || course.category === 'Imagerie') {
                navigate(`/imaging-reader/${course.id}`);
              } else {
                navigate(`/course/${course.id}?section=${type}`);
              }
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
              background: course.category === 'Rétine' ? '#ef4444' : 
                          course.category === 'Uvéites' ? '#3b82f6' : 
                          course.category === 'Orbite' ? '#8b5cf6' : 
                          course.category === 'Glaucome' ? '#10b981' : 
                          course.category === 'Imagerie' ? '#ec4899' : '#f59e0b'
            }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ 
                background: 'var(--bg-tertiary)', 
                padding: '0.25rem 0.75rem', 
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem', 
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}>
                {course.category}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>{course.title}</h3>
            
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', flex: 1, marginBottom: '1.5rem', lineHeight: '1.5' }}>
              {course.description}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontWeight: 500, fontSize: '0.9rem', marginTop: 'auto' }}>
              Accéder <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </div>
          </div>
        )) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-tertiary)' }}>
            <Book size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Aucun cours trouvé</h3>
            <p>Essayez de modifier vos critères de recherche ou de catégorie.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Library;
