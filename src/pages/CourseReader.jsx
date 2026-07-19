import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mermaid from 'mermaid';
import mediumZoom from 'medium-zoom';
import { courseMarkdown, fichesMarkdown, algorithmsMarkdown, algoMermaid, mindmapMarkdown, mindmapMermaid, qcmMarkdown, qcmData } from '../data/coursesData';
import { uveitesEnfantCourseMarkdown, uveitesEnfantFichesMarkdown, uveitesEnfantAlgorithmsMarkdown, uveitesEnfantClassificationsMarkdown } from '../data/uveitesEnfantData';
import { memCourseMarkdown, memFichesMarkdown, memAlgorithmsMarkdown, memAlgoMermaid, memMindmapMarkdown, memMindmapMermaid, memClassificationsMarkdown, memClassificationsMermaid } from '../data/memData';
import { vkhCourseMarkdown, vkhFichesMarkdown, vkhAlgorithmsMarkdown, vkhAlgoMermaid, vkhMindmapMarkdown, vkhMindmapMermaid, vkhClassificationsMarkdown, vkhClassificationsMermaid, vkhQcmMarkdown, vkhQcmData } from '../data/vkhData';
import { noiCourseMarkdown, noiFichesMarkdown, noiAlgorithmsMarkdown, noiAlgoMermaid, noiMindmapMarkdown, noiMindmapMermaid, noiClassificationsMarkdown, noiClassificationsMermaid, noiQcmMarkdown, noiQcmData } from '../data/noiData';
import { hsvCourseMarkdown, hsvFichesMarkdown, hsvAlgorithmsMarkdown, hsvAlgoMermaid, hsvClassificationsMarkdown, hsvClassificationsMermaid } from '../data/hsvData';
import { uaFichesMarkdown, uaAlgorithmsMarkdown, uaAlgoMermaid, uiFichesMarkdown, uiAlgorithmsMarkdown, uiAlgoMermaid, uodFichesMarkdown, uodAlgorithmsMarkdown, uodAlgoMermaid, upvFichesMarkdown, upvAlgorithmsMarkdown, upvAlgoMermaid } from '../data/uveitesMagistralData';
import { glaucomeQcmMarkdown, glaucomeQcmData } from '../data/glaucomeCongenitalData';
import { uiQcmData } from '../data/uveitesIntermediairesQcmData';
import { uveitePosterieureData } from '../data/uveitePosterieureData';

import QcmPlayer from '../components/QcmPlayer';
import { Save, MessageSquare, Copy, Check, PenTool, ChevronRight, ChevronLeft, ArrowLeft, Hammer } from 'lucide-react';

const CourseReader = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [activeSection, setActiveSection] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('section') || 'cours';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Font size state
  const [fontSize, setFontSize] = useState(14);

  // Highlighter function
  const handleHighlight = () => {
    try {
      if (window.getSelection().toString().length > 0) {
        document.designMode = 'on';
        // 'hiliteColor' is for some browsers, 'backColor' for others
        document.execCommand('backColor', false, '#ffeb3b');
        document.execCommand('hiliteColor', false, '#ffeb3b');
        document.designMode = 'off';
        window.getSelection().removeAllRanges();
      } else {
        alert("Veuillez d'abord sélectionner du texte à surligner.");
      }
    } catch (err) {
      console.error("Erreur de surlignage:", err);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [location.search]);

  // Dynamic course data selection
  const courseData = id === 'uveites-enfant' ? {
    cours: uveitesEnfantCourseMarkdown,
    fiches: uveitesEnfantFichesMarkdown,
    algorithmes: uveitesEnfantAlgorithmsMarkdown,
    algoMermaid: '',
    mindmapMarkdown: '',
    mindmapMermaid: '',
    classificationsMarkdown: uveitesEnfantClassificationsMarkdown,
    classificationsMermaid: ''
  } : id === 'membranes-epimaculaires' ? {
    cours: memCourseMarkdown,
    fiches: memFichesMarkdown,
    algorithmes: memAlgorithmsMarkdown,
    algoMermaid: memAlgoMermaid,
    mindmapMarkdown: memMindmapMarkdown,
    mindmapMermaid: memMindmapMermaid,
    classificationsMarkdown: memClassificationsMarkdown,
    classificationsMermaid: memClassificationsMermaid
  } : id === 'vogt-koyanagi-harada' ? {
    cours: vkhCourseMarkdown,
    fiches: vkhFichesMarkdown,
    algorithmes: vkhAlgorithmsMarkdown,
    algoMermaid: vkhAlgoMermaid,
    mindmapMarkdown: vkhMindmapMarkdown,
    mindmapMermaid: vkhMindmapMermaid,
    classificationsMarkdown: vkhClassificationsMarkdown,
    classificationsMermaid: vkhClassificationsMermaid,
    qcm: vkhQcmMarkdown,
    qcmData: vkhQcmData
  } : id === 'neuropathies-optiques-inflammatoires' ? {
    cours: noiCourseMarkdown,
    fiches: noiFichesMarkdown,
    algorithmes: noiAlgorithmsMarkdown,
    algoMermaid: noiAlgoMermaid,
    mindmapMarkdown: noiMindmapMarkdown,
    mindmapMermaid: noiMindmapMermaid,
    classificationsMarkdown: noiClassificationsMarkdown,
    classificationsMermaid: noiClassificationsMermaid,
    qcm: noiQcmMarkdown,
    qcmData: noiQcmData
  } : id === 'herpes-oculaire' ? {
    cours: hsvCourseMarkdown,
    fiches: hsvFichesMarkdown,
    algorithmes: hsvAlgorithmsMarkdown,
    algoMermaid: hsvAlgoMermaid,
    mindmapMarkdown: '',
    mindmapMermaid: '',
    classificationsMarkdown: hsvClassificationsMarkdown,
    classificationsMermaid: hsvClassificationsMermaid
  } : id === 'uveites-anterieures' ? {
    cours: `# 🎓 Cours Magistral Interactif\n\nCe cours dispose d'une version interactive complète (diaporama, animations, quiz).\n\n[▶ Ouvrir le cours magistral interactif complet](/interactive/uveites-anterieures)`,
    fiches: uaFichesMarkdown,
    algorithmes: uaAlgorithmsMarkdown,
    algoMermaid: uaAlgoMermaid,
    mindmapMarkdown: '',
    mindmapMermaid: ''
  } : id === 'uveites-intermediaires' ? {
    cours: `# 🎓 Cours Magistral Interactif\n\nCe cours dispose d'une version interactive complète (diaporama, animations, quiz).\n\n[▶ Ouvrir le cours magistral interactif complet](/interactive/uveites-intermediaires)`,
    fiches: uiFichesMarkdown,
    algorithmes: uiAlgorithmsMarkdown,
    algoMermaid: uiAlgoMermaid,
    mindmapMarkdown: '',
    mindmapMermaid: '',
    qcmData: uiQcmData
  } : id === 'uveites-orientation-diagnostique' ? {
    cours: `# 🎓 Cours Magistral Interactif\n\nCe cours dispose d'une version interactive complète (diaporama, animations, quiz).\n\n[▶ Ouvrir le cours magistral interactif complet](/interactive/uveites-orientation-diagnostique)`,
    fiches: uodFichesMarkdown,
    algorithmes: uodAlgorithmsMarkdown,
    algoMermaid: uodAlgoMermaid,
    mindmapMarkdown: '',
    mindmapMermaid: ''
  } : id === 'uveites-posterieures-vascularites' ? {
    cours: `# 🎓 Cours Magistral Interactif\n\nCe cours dispose d'une version interactive complète (diaporama, animations, quiz).\n\n[▶ Ouvrir le cours magistral interactif complet](/interactive/uveites-posterieures-vascularites)`,
    fiches: upvFichesMarkdown,
    algorithmes: upvAlgorithmsMarkdown,
    algoMermaid: upvAlgoMermaid,
    mindmapMarkdown: '',
    mindmapMermaid: '',
    qcmData: uveitePosterieureData
  } : id === 'glaucome-congenital' ? {
    cours: '',
    fiches: '',
    algorithmes: '',
    algoMermaid: '',
    mindmapMarkdown: '',
    mindmapMermaid: '',
    classificationsMarkdown: '',
    classificationsMermaid: '',
    qcm: glaucomeQcmMarkdown,
    qcmData: glaucomeQcmData
  } : {
    cours: courseMarkdown,
    fiches: fichesMarkdown,
    algorithmes: algorithmsMarkdown,
    algoMermaid: algoMermaid,
    mindmapMarkdown: mindmapMarkdown,
    mindmapMermaid: mindmapMermaid,
    classificationsMermaid: '',
    qcm: qcmMarkdown,
    qcmData: qcmData
  };

  const allSections = ['cours', 'fiches', 'algorithmes', 'classifications', 'qcm', 'cas-cliniques', 'chirurgie'];

  const EmptyState = ({ moduleName }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-secondary)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-color)', margin: '2rem auto', maxWidth: '600px' }} className="animate-fade-in">
      <Hammer size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', opacity: 0.8 }} />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{moduleName} en construction</h3>
      <p style={{ fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>Nous préparons activement ce module. Il sera disponible très prochainement pour enrichir vos révisions.</p>
    </div>
  );

  const systemRole = `Tu es un professeur en ophtalmologie, chef de service au CHU de Paris. Tu enseignes en école de médecine de Paris. Ton objectif est d'aider un résident en ophtalmologie préparant son examen de fin de spécialité (DEMS). Tu dois être extrêmement rigoureux, didactique, et ne faire aucune erreur. Utilise des plans structurés, des listes et des jeux de couleurs ou emojis pour tes explications médicales.`;

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark' });
  }, []);

  // Initialize zoom for images
  useEffect(() => {
    const timeout = setTimeout(() => {
      mediumZoom('.course-content img', {
        margin: 24,
        background: 'var(--bg-primary)'
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, [activeSection, courseData]);

  useEffect(() => {
    if (activeSection === 'algorithmes' && courseData.algoMermaid) {
      setTimeout(() => {
        try {
          mermaid.run({ querySelector: '.mermaid' });
          // Initialize zoom for mermaid SVGs after rendering
          setTimeout(() => {
            mediumZoom('.mermaid svg', { margin: 24, background: 'var(--bg-primary)' });
          }, 300);
        } catch (e) {
          console.error("Mermaid error:", e);
        }
      }, 100);
    } else if (activeSection === 'classifications' && courseData.mindmapMermaid) {
      setTimeout(() => {
        try {
          mermaid.run({ querySelector: '.mermaid' });
          // Initialize zoom for mermaid SVGs after rendering
          setTimeout(() => {
            mediumZoom('.mermaid svg', { margin: 24, background: 'var(--bg-primary)' });
          }, 300);
        } catch (e) {
          console.error("Mermaid error:", e);
        }
      }, 100);
    }
  }, [activeSection, courseData]);

  const createMarkup = (markdownText) => {
    if (!markdownText) return { __html: '<p style="color:var(--text-secondary)">Aucun contenu disponible pour cette section.</p>' };
    const rawMarkup = marked.parse(markdownText);
    const wrappedTables = rawMarkup.replace(/<table/g, '<div class="table-wrapper"><table').replace(/<\/table>/g, '</table></div>');
    return { __html: DOMPurify.sanitize(wrappedTables, { ADD_ATTR: ['target'] }) };
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
        <div className="course-tabs-container" style={{
          display: 'flex', borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 2,
          overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch'
        }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: '0 1.25rem',
              display: 'flex', alignItems: 'center',
              color: 'var(--text-secondary)',
              borderRight: '1px solid var(--border-color)',
              flexShrink: 0
            }}
            title="Retour"
          >
            <ArrowLeft size={20} />
          </button>
          {allSections.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              style={{
                padding: '1rem 1.5rem',
                borderBottom: activeSection === sec ? '2px solid var(--accent-primary)' : '2px solid transparent',
                color: activeSection === sec ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: activeSection === sec ? 600 : 400,
                textTransform: 'capitalize',
                flexShrink: 0
              }}
            >
              {sec === 'cours' ? 'Cours Magistral' : sec === 'fiches' ? 'Fiches Techniques' : sec === 'algorithmes' ? 'Algorithmes' : sec === 'classifications' ? 'Classifications' : sec === 'qcm' ? 'QCM' : sec === 'cas-cliniques' ? 'Cas Cliniques' : 'Chirurgie'}
            </button>
          ))}
          <div style={{ flex: 1, minWidth: '1rem' }} />
          <div className="course-tools" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '1.5rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} style={{ padding: '0.25rem 0.75rem', color: 'var(--text-primary)', borderRight: '1px solid var(--border-color)' }}>A-</button>
              <button onClick={() => setFontSize(Math.min(24, fontSize + 2))} style={{ padding: '0.25rem 0.75rem', color: 'var(--text-primary)' }}>A+</button>
            </div>
            <button 
              onClick={handleHighlight} 
              style={{ background: 'rgba(245, 158, 11, 0.2)', color: 'var(--accent-warning)', border: '1px solid var(--accent-warning)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-sm)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              title="Sélectionnez du texte puis cliquez ici"
            >
              <PenTool size={16} /> <span className="hide-mobile">Surligner</span>
            </button>
          </div>
          {!sidebarOpen && (
            <button 
              className="open-notes-btn"
              onClick={() => setSidebarOpen(true)}
              style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}
            >
              <ChevronLeft size={20} /> <span className="hide-mobile">Notes & IA</span>
            </button>
          )}
        </div>

        <div style={{ padding: '1rem 2rem', fontSize: `${fontSize}px` }}>
          {activeSection === 'cours' && (
            courseData.cours ? (
              <div 
                className="course-content animate-fade-in"
                style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}
                dangerouslySetInnerHTML={createMarkup(courseData.cours)} 
              />
            ) : (
              <EmptyState moduleName="Cours Magistral" />
            )
          )}
          {activeSection === 'fiches' && (
            courseData.fiches ? (
              <div 
                className="course-content animate-fade-in"
                style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}
                dangerouslySetInnerHTML={createMarkup(courseData.fiches)} 
              />
            ) : (
              <EmptyState moduleName="Fiches Techniques" />
            )
          )}
          {activeSection === 'algorithmes' && (
            courseData.algorithmes || courseData.algoMermaid ? (
              <div 
                className="course-content animate-fade-in"
                style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}
              >
                {courseData.algorithmes && <div dangerouslySetInnerHTML={createMarkup(courseData.algorithmes)} />}
                
                {courseData.algoMermaid && (
                  <div className="mermaid" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '2rem', marginTop: courseData.algorithmes ? '2rem' : '0' }}>
                    {courseData.algoMermaid}
                  </div>
                )}
              </div>
            ) : (
              <EmptyState moduleName="Algorithmes" />
            )
          )}
          {activeSection === 'classifications' && (
            courseData.classificationsMarkdown || courseData.mindmapMarkdown || courseData.mindmapMermaid || courseData.classificationsMermaid ? (
              <div 
                className="course-content animate-fade-in"
                style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}
              >
                {courseData.mindmapMarkdown && <div dangerouslySetInnerHTML={createMarkup(courseData.mindmapMarkdown)} />}
                {courseData.mindmapMermaid && (
                  <div className="mermaid" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '2rem', marginTop: courseData.mindmapMarkdown ? '2rem' : '0' }}>
                    {courseData.mindmapMermaid}
                  </div>
                )}
                {courseData.classificationsMarkdown && <div dangerouslySetInnerHTML={createMarkup(courseData.classificationsMarkdown)} style={{ marginTop: '2rem' }} />}
                {courseData.classificationsMermaid && (
                  <div className="mermaid" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
                    {courseData.classificationsMermaid}
                  </div>
                )}
              </div>
            ) : (
              <EmptyState moduleName="Classifications" />
            )
          )}
          {activeSection === 'qcm' && (
            courseData.qcmData ? (
              <QcmPlayer qcmData={courseData.qcmData} />
            ) : courseData.qcm ? (
              <div 
                className="course-content animate-fade-in"
                style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}
                dangerouslySetInnerHTML={createMarkup(courseData.qcm)} 
              />
            ) : (
              <EmptyState moduleName="QCM & Évaluation" />
            )
          )}
          {activeSection === 'cas-cliniques' && <EmptyState moduleName="Cas Cliniques" />}
          {activeSection === 'chirurgie' && <EmptyState moduleName="Chirurgie" />}
        </div>
      </div>

      {/* Right Sidebar (Notes & AI) */}
      <div className={`notes-sidebar ${sidebarOpen ? 'open' : ''}`} style={{ 
        width: sidebarOpen ? '350px' : '0px', 
        background: 'var(--bg-secondary)', 
        borderLeft: sidebarOpen ? '1px solid var(--border-color)' : 'none',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'width 0.3s ease, transform 0.3s ease',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', minWidth: '100%' }}>
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
