import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mediumZoom from 'medium-zoom';
import { ArrowLeft, List, X, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { imagingDmlaData } from '../data/imagingDmlaData';

const ImagingReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [activeSection, setActiveSection] = useState(0);
  const contentRefs = useRef([]);

  // Fetch appropriate chapters based on ID
  const dmlaChapters = Object.values(imagingDmlaData).sort((a, b) => a.id.localeCompare(b.id));
  const chapters = id === 'dmla' ? dmlaChapters : [];

  useEffect(() => {
    // Initialize zoom for images
    const timeout = setTimeout(() => {
      mediumZoom('.imaging-content img', {
        margin: 24,
        background: 'var(--bg-primary)'
      });
    }, 500);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [id, chapters]);

  // Intersection Observer for highlighting active section in TOC
  useEffect(() => {
    if (chapters.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [chapters]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    if (contentRefs.current[index]) {
      contentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const createMarkup = (markdownText) => {
    if (!markdownText) return { __html: '' };
    const rawMarkup = marked.parse(markdownText);
    const wrappedTables = rawMarkup.replace(/<table/g, '<div class="table-wrapper"><table').replace(/<\/table>/g, '</table></div>');
    return { __html: DOMPurify.sanitize(wrappedTables, { ADD_ATTR: ['target'] }) };
  };

  if (!chapters || chapters.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem', textAlign: 'center' }}>
        <ImageIcon size={64} style={{ opacity: 0.2, marginBottom: '1rem' }} />
        <h2>Contenu non trouvé</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Cet atlas n'est pas encore disponible.</p>
        <button 
          onClick={() => navigate('/imaging')}
          style={{ marginTop: '1rem', background: 'var(--accent-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-sm)' }}
        >
          Retour à l'Imagerie
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden', position: 'relative' }}>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Table of Contents Sidebar */}
      <div style={{ 
        width: sidebarOpen ? (window.innerWidth <= 768 ? '80%' : '300px') : '0px', 
        background: 'var(--bg-secondary)', 
        borderRight: sidebarOpen ? '1px solid var(--border-color)' : 'none',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        position: window.innerWidth <= 768 ? 'absolute' : 'relative',
        height: '100%',
        zIndex: 50,
        boxShadow: window.innerWidth <= 768 && sidebarOpen ? '4px 0 15px rgba(0,0,0,0.2)' : 'none'
      }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '300px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <List size={20} color="var(--accent-primary)" /> Sommaire
          </h3>
          {window.innerWidth <= 768 && (
            <button onClick={() => setSidebarOpen(false)} style={{ color: 'var(--text-secondary)' }}>
              <X size={20} />
            </button>
          )}
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 0', minWidth: '300px' }}>
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                background: activeSection === idx ? 'var(--accent-primary-transparent)' : 'transparent',
                borderLeft: activeSection === idx ? '3px solid var(--accent-primary)' : '3px solid transparent',
                color: activeSection === idx ? 'var(--accent-primary)' : 'var(--text-primary)',
                fontWeight: activeSection === idx ? 600 : 400,
                transition: 'all 0.2s',
                lineHeight: '1.4'
              }}
            >
              <span style={{ marginRight: '0.5rem', opacity: 0.5 }}>{idx + 1}.</span>
              <span style={{ flex: 1 }}>{chap.title}</span>
              {activeSection === idx && <ChevronRight size={16} />}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        display: 'flex',
        flexDirection: 'column',
        scrollBehavior: 'smooth',
        background: 'var(--bg-primary)'
      }}>
        
        {/* Topbar for Reader */}
        <div style={{
          display: 'flex', borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 10,
          padding: '0.5rem 1rem', alignItems: 'center', gap: '1rem'
        }}>
          <button
            onClick={() => navigate('/imaging')}
            style={{
              padding: '0.5rem',
              display: 'flex', alignItems: 'center',
              color: 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)'
            }}
            title="Retour à l'imagerie"
          >
            <ArrowLeft size={20} />
          </button>
          
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem', background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)'
              }}
            >
              <List size={18} /> Sommaire
            </button>
          )}

          <div style={{ flex: 1, textAlign: 'center', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {id === 'dmla' ? 'Atlas OCT : DMLA' : 'Atlas d\'Imagerie'}
          </div>
        </div>

        {/* Chapters Content */}
        <div style={{ padding: '2rem', maxWidth: '850px', margin: '0 auto', width: '100%', paddingBottom: '10rem' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-primary-transparent)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
              IMAGERIE & OCT
            </span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{id === 'dmla' ? 'Atlas OCT : DMLA' : 'Atlas d\'Imagerie'}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>L'intégralité du chapitre, structurée pour une lecture fluide entre textes et images.</p>
          </div>

          <div className="imaging-content">
            {chapters.map((chap, idx) => (
              <div 
                key={idx} 
                ref={(el) => (contentRefs.current[idx] = el)}
                data-index={idx}
                style={{ marginBottom: '4rem', scrollMarginTop: '80px' }}
              >
                <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                  {idx + 1}. {chap.title}
                </h2>
                <div 
                  className="markdown-body"
                  dangerouslySetInnerHTML={createMarkup(chap.content)} 
                  style={{ fontSize: '1.1rem', lineHeight: '1.7' }}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ImagingReader;
