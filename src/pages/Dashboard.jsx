import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Map, Brain, Image as ImageIcon, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Cours Magistraux (DEMS)',
      description: 'Retrouvez tous les cours structurés pour la préparation à l\'examen.',
      icon: <BookOpen size={28} color="var(--accent-primary)" />,
      path: '/courses',
      bg: 'rgba(59, 130, 246, 0.1)',
      border: 'rgba(59, 130, 246, 0.2)'
    },
    {
      title: 'Fiches Techniques',
      description: 'Procédures, protocoles et mémos rapides pour la pratique.',
      icon: <Map size={28} color="var(--accent-secondary)" />,
      path: '/fiches',
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.2)'
    },
    {
      title: 'Algorithmes Décisionnels',
      description: 'Arbres diagnostiques et thérapeutiques interactifs.',
      icon: <Brain size={28} color="var(--accent-warning)" />,
      path: '/algorithms',
      bg: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.2)'
    },
    {
      title: 'Imagerie & Examens',
      description: 'Atlas d\'imagerie, OCT, angiographies avec critères diagnostiques.',
      icon: <ImageIcon size={28} color="var(--accent-danger)" />,
      path: '/imaging',
      bg: 'rgba(239, 68, 68, 0.1)',
      border: 'rgba(239, 68, 68, 0.2)'
    }
  ];

  const recentCourses = [
    { id: 'vogt-koyanagi-harada', title: 'Maladie de Vogt-Koyanagi-Harada (VKH)', category: 'Uvéites' },
    { id: 'membranes-epimaculaires', title: 'Membranes Épirétiniennes Maculaires (MEM)', category: 'Rétine' },
    { id: 'inflammations-orbitaires', title: 'Orbitopathies Inflammatoires', category: 'Orbite' }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Bienvenue, Dr. User 👋</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Prêt pour vos révisions DEMS d'aujourd'hui ?
        </p>
      </div>

      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem', marginBottom: '3rem' 
      }}>
        {sections.map((sec, idx) => (
          <div key={idx} className="glass-panel" style={{
            padding: '1.5rem',
            display: 'flex', flexDirection: 'column',
            cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
          }}
          onClick={() => navigate(sec.path)}
          >
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: sec.bg, border: `1px solid ${sec.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              {sec.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{sec.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>
              {sec.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
              Explorer <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Reprendre la lecture</h2>
          <button style={{ color: 'var(--accent-primary)' }}>Voir tout</button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {recentCourses.map((course, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem',
              cursor: 'pointer'
            }} onClick={() => navigate(`/course/${course.id}`)}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={20} color="var(--accent-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem' }}>{course.title}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{course.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* APK Download Section */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--accent-primary-transparent)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Application Mobile (APK)</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Téléchargez la version Android de DEMS Ophto pour réviser hors-ligne et sur mobile avec une fluidité optimale.</p>
        </div>
        <a 
          href="/ophto-app.apk" 
          download 
          style={{ 
            background: 'var(--accent-primary)', color: 'white', padding: '0.75rem 1.5rem', 
            borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem',
            textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ArrowRight size={20} style={{ transform: 'rotate(90deg)' }} />
          Télécharger l'APK
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
