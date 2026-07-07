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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recentCourses.map(course => (
            <div key={course.id} className="glass-panel" style={{
              padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => navigate(`/course/${course.id}`)}
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{
                  background: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)',
                  color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'
                }}>
                  {course.category}
                </div>
                <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{course.title}</h4>
              </div>
              <ArrowRight size={20} color="var(--text-tertiary)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
