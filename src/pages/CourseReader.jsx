import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mermaid from 'mermaid';
import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid } from '../data/coursesData';
import { memCourseMarkdown, memFichesMarkdown, memAlgorithmsMarkdown, memAlgoMermaid, memMindmapMarkdown, memMindmapMermaid } from '../data/memData';
import { vkhCourseMarkdown, vkhFichesMarkdown, vkhAlgorithmsMarkdown, vkhAlgoMermaid, vkhMindmapMarkdown, vkhMindmapMermaid } from '../data/vkhData';
import { noiCourseMarkdown, noiFichesMarkdown, noiAlgorithmsMarkdown, noiAlgoMermaid, noiMindmapMarkdown, noiMindmapMermaid } from '../data/noiData';
import { Save, MessageSquare, Copy, Check, PenTool, ChevronRight, ChevronLeft } from 'lucide-react';

const CourseReader = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [activeSection, setActiveSection] = useState('cours');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Dynamic course data selection
  const courseData = id === 'membranes-epimaculaires' ? {
    cours: memCourseMarkdown,
    fiches: memFichesMarkdown,
    algorithmes: memAlgorithmsMarkdown,
    algoMermaid: memAlgoMermaid,
    mindmapMarkdown: memMindmapMarkdown,
    mindmapMermaid: memMindmapMermaid
  } : id === 'vogt-koyanagi-harada' ? {
    cours: vkhCourseMarkdown,
    fiches: vkhFichesMarkdown,
    algorithmes: vkhAlgorithmsMarkdown,
    algoMermaid: vkhAlgoMermaid,
    mindmapMarkdown: vkhMindmapMarkdown,
    mindmapMermaid: vkhMindmapMermaid
  } : id === 'neuropathies-optiques-inflammatoires' ? {
    cours: noiCourseMarkdown,
    fiches: noiFichesMarkdown,
    algorithmes: noiAlgorithmsMarkdown,
    algoMermaid: noiAlgoMermaid,
    mindmapMarkdown: noiMindmapMarkdown,
    mindmapMermaid: noiMindmapMermaid
  } : {
    cours: courseMarkdown,
    fiches: fichesMarkdown,
    algorithmes: algorithmsMarkdown,
    algoMermaid: algoMermaid,
    mindmapMarkdown: mindmapMarkdown,
    mindmapMermaid: mindmapMermaid
  };

  const systemRole = `Tu es un professeur en ophtalmologie, chef de service au CHU de Paris. Tu enseignes en école de médecine de Paris. Ton objectif est d'aider un résident en ophtalmologie préparant son examen de fin de spécialité (DEMS). Tu dois être extrêmement rigoureux, didactique, et ne faire aucune erreur. Utilise des plans structurés, des listes et des jeux de couleurs ou emojis pour tes explications médicales.`;

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark' });
  }, []);

  useEffect(() => {
    if (activeSection === 'algorithmes' && courseData.algoMermaid) {
      setTimeout(() => {
        try {
          mermaid.run({ querySelector: '.mermaid' });
        } catch (e) {
          console.error("Mermaid error:", e);
        }
      }, 100);
    }
  }, [activeSection, courseData]);

  const createMarkup = (markdownText) => {
    if (!markdownText) return { __html: '<p style="color:var(--text-secondary)">Aucun contenu disponible pour cette section.</p>' };
    const rawMarkup = marked.parse(markdownText);
    return { __html: DOMPurify.sanitize(rawMarkup, { ADD_ATTR: ['target'] }) };
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem(`ophto_notes_${id}`);
    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      setNotes('');
    }
  }, [id]);

  const saveNotes = () => {
    localStorage.setItem(`ophto_notes_${id}`, notes);
    alert('Notes sauvegardées avec succès !');
  };

  const copyRole = () => {
    navigator.clipboard.writeText(systemRole);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      
      {/* Main Course Content */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        scrollBehavior: 'smooth'
      }}>
        {/* Section Tabs */}
        <div style={{
          display: 'flex', borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 2
        }}>
          {['cours', 'fiches', 'algorithmes'].map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              style={{
                padding: '1rem 1.5rem',
                borderBottom: activeSection === sec ? '2px solid var(--accent-primary)' : '2px solid transparent',
                color: activeSection === sec ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: activeSection === sec ? 600 : 400,
                textTransform: 'capitalize'
              }}
            >
              {sec === 'cours' ? 'Cours Magistral' : sec === 'fiches' ? 'Fiches Techniques' : 'Algorithmes'}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)}
              style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', color: 'var(--accent-primary)' }}
            >
              <ChevronLeft size={20} /> Ouvrir le panneau IA & Notes
            </button>
          )}
        </div>

        <div style={{ padding: '2rem' }}>
          {activeSection === 'cours' && (
            <div 
              className="course-content animate-fade-in"
              style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}
              dangerouslySetInnerHTML={createMarkup(courseData.cours)} 
            />
          )}
          {activeSection === 'fiches' && (
            <div 
              className="course-content animate-fade-in"
              style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}
              dangerouslySetInnerHTML={createMarkup(courseData.fiches)} 
            />
          )}
          {activeSection === 'algorithmes' && (
            <div 
              className="course-content animate-fade-in"
              style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}
            >
              <div dangerouslySetInnerHTML={createMarkup(courseData.algorithmes)} />
              
              {courseData.algoMermaid && (
                <div className="mermaid" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '2rem' }}>
                  {courseData.algoMermaid}
                </div>
              )}

              {courseData.mindmapMarkdown && <div dangerouslySetInnerHTML={createMarkup(courseData.mindmapMarkdown)} />}

              {courseData.mindmapMermaid && (
                <div className="mermaid" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  {courseData.mindmapMermaid}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar (Notes & AI) */}
      <div style={{ 
        width: sidebarOpen ? '350px' : '0px', 
        background: 'var(--bg-secondary)', 
        borderLeft: sidebarOpen ? '1px solid var(--border-color)' : 'none',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', minWidth: '350px' }}>
          <button
            onClick={() => setSidebarOpen(false)}
            style={{ padding: '0.5rem', color: 'var(--text-tertiary)', borderRight: '1px solid var(--border-color)' }}
            title="Réduire le panneau"
          >
            <ChevronRight size={20} />
          </button>
          <button 
            style={{ 
              flex: 1, padding: '1rem', 
              borderBottom: activeTab === 'notes' ? '2px solid var(--accent-primary)' : '2px solid transparent',
              color: activeTab === 'notes' ? 'var(--text-primary)' : 'var(--text-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}
            onClick={() => setActiveTab('notes')}
          >
            <PenTool size={18} /> Mes Notes
          </button>
          <button 
            style={{ 
              flex: 1, padding: '1rem', 
              borderBottom: activeTab === 'ai' ? '2px solid var(--accent-primary)' : '2px solid transparent',
              color: activeTab === 'ai' ? 'var(--text-primary)' : 'var(--text-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}
            onClick={() => setActiveTab('ai')}
          >
            <MessageSquare size={18} /> Assistant IA
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', minWidth: '350px' }}>
          
          {activeTab === 'notes' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Annotations du Cours</h3>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Prenez vos notes ici pendant la lecture du cours..."
                style={{
                  flex: 1,
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  padding: '1rem',
                  fontFamily: 'var(--font-body)',
                  resize: 'none',
                  outline: 'none',
                  lineHeight: '1.5'
                }}
              />
              <button 
                onClick={saveNotes}
                style={{
                  marginTop: '1rem',
                  background: 'var(--accent-primary)',
                  color: 'white',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: 600
                }}
              >
                <Save size={18} /> Sauvegarder
              </button>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Partage Gemini / Claude</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Copiez le rôle pré-défini ci-dessous et collez-le dans votre chat IA pour lui donner le contexte exact d'un Professeur d'Ophtalmologie.
              </p>
              
              <div style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                position: 'relative'
              }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontStyle: 'italic', marginBottom: '0.5rem' }}>Prompt Système :</p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', userSelect: 'all' }}>
                  {systemRole}
                </p>
                <button 
                  onClick={copyRole}
                  style={{
                    position: 'absolute', top: '0.5rem', right: '0.5rem',
                    background: 'var(--bg-secondary)', padding: '0.4rem',
                    borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                  title="Copier"
                >
                  {copied ? <Check size={16} color="var(--accent-secondary)" /> : <Copy size={16} />}
                </button>
              </div>

              <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--accent-primary)' }}>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Astuce :</strong> Une fois le rôle copié, demandez à l'IA de vous générer des QCM sur les IOI, ou de vous expliquer un point précis du cours.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CourseReader;
