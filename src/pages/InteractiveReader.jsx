import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from './Library';
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';

const InteractiveReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const course = allCourses.find(c => c.id === id);
  
  if (!course || !course.interactiveFile) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Cours introuvable</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: 'white', borderRadius: 'var(--radius-md)' }}>
          Retour
        </button>
      </div>
    );
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: isFullscreen ? '100vh' : '100%',
      position: isFullscreen ? 'fixed' : 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: isFullscreen ? 9999 : 1,
      background: 'var(--bg-primary)'
    }}>
      {/* Header toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => isFullscreen ? setIsFullscreen(false) : navigate(-1)}
            style={{
              display: 'flex', alignItems: 'center',
              color: 'var(--text-secondary)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)'
            }}
            title="Retour"
            className="hover-bg-tertiary"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 style={{ fontSize: '1.2rem', margin: 0 }}>{course.title}</h2>
        </div>
        
        <button
          onClick={toggleFullscreen}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)'
          }}
        >
          {isFullscreen ? <><Minimize2 size={18} /> Quitter le plein écran</> : <><Maximize2 size={18} /> Plein écran</>}
        </button>
      </div>

      {/* Iframe container */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <iframe
          src={`/courses/${course.interactiveFile}`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          title={course.title}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
};

export default InteractiveReader;
