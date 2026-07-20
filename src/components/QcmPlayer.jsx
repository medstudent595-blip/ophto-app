import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, AlertCircle, Grid, X } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(marked(html || ''))
  };
};

const QcmPlayer = ({ qcmData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersState, setAnswersState] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  if (!qcmData || qcmData.length === 0) {
    return <div>Aucune question disponible.</div>;
  }

  const question = qcmData[currentIndex];
  const currentState = answersState[currentIndex] || { selectedOptions: [], isValidated: false, isCorrect: false };
  const { selectedOptions, isValidated, isCorrect } = currentState;
  const score = Object.values(answersState).filter(s => s.isCorrect).length;
  const answeredCount = Object.values(answersState).filter(s => s.isValidated).length;

  const toggleOption = (id) => {
    if (isValidated) return;
    const newOptions = selectedOptions.includes(id) 
      ? selectedOptions.filter(opt => opt !== id)
      : [...selectedOptions, id];
    
    setAnswersState({
      ...answersState,
      [currentIndex]: { ...currentState, selectedOptions: newOptions }
    });
  };

  const handleValidate = () => {
    if (selectedOptions.length === 0) return;
    
    const sortedSelected = [...selectedOptions].sort();
    const sortedCorrect = [...question.correctAnswers].sort();
    
    const correct = sortedSelected.length === sortedCorrect.length && 
                    sortedSelected.every((val, index) => val === sortedCorrect[index]);
                      
    setAnswersState({
      ...answersState,
      [currentIndex]: { ...currentState, isValidated: true, isCorrect: correct }
    });
  };

  const handleNext = () => {
    if (currentIndex < qcmData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswersState({});
    setShowResults(false);
  };

  const jumpToQuestion = (index) => {
    setCurrentIndex(index);
    setShowGrid(false);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="qcm-results animate-fade-in" style={{
        maxWidth: '800px', margin: '2rem auto', padding: '3rem',
        background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
        textAlign: 'center', border: '1px solid var(--border-color)'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Résultats du Quiz</h2>
        <div style={{
          fontSize: '4rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '2rem'
        }}>
          {score} <span style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>/ {qcmData.length}</span>
        </div>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          {score === qcmData.length ? 'Parfait ! Excellente maîtrise du sujet.' : 
           score >= qcmData.length * 0.7 ? 'Très bon score !' : 
           score >= qcmData.length * 0.5 ? 'Pas mal, mais des révisions sont nécessaires.' : 
           'Il faut revoir ce chapitre !'}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={handleRestart}
            style={{
              padding: '1rem 2rem', background: 'var(--accent-primary)', color: 'white',
              borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: '1.1rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer'
            }}
          >
            <RotateCcw size={20} /> Recommencer le Quiz
          </button>
          <button 
            onClick={() => setShowResults(false)}
            style={{
              padding: '1rem 2rem', background: 'var(--bg-tertiary)', color: 'var(--text-primary)',
              borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: '1.1rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-color)', cursor: 'pointer'
            }}
          >
            Retourner aux questions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="qcm-player animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem', position: 'relative' }}>
      
      {/* Navigation Grid Overlay */}
      {showGrid && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100%',
          background: 'var(--bg-primary)', zIndex: 10, padding: '2rem',
          borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Navigation des QCMs</h3>
            <button onClick={() => setShowGrid(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <X size={28} />
            </button>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {qcmData.map((_, idx) => {
              const state = answersState[idx];
              let bgColor = 'var(--bg-secondary)';
              let color = 'var(--text-primary)';
              let border = '1px solid var(--border-color)';

              if (idx === currentIndex) {
                border = '2px solid var(--accent-primary)';
              }
              if (state?.isValidated) {
                bgColor = state.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
                color = state.isCorrect ? '#10b981' : '#ef4444';
                border = `1px solid ${state.isCorrect ? '#10b981' : '#ef4444'}`;
                if (idx === currentIndex) border = `2px solid ${state.isCorrect ? '#10b981' : '#ef4444'}`;
              }

              return (
                <button
                  key={idx}
                  onClick={() => jumpToQuestion(idx)}
                  style={{
                    width: '40px', height: '40px', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: bgColor, color: color, border: border,
                    fontWeight: 600, cursor: 'pointer', fontSize: '1rem'
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
             <button 
                onClick={() => setShowResults(true)}
                style={{
                  padding: '0.75rem 1.5rem', background: 'var(--text-primary)', color: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)', fontWeight: 600, border: 'none', cursor: 'pointer'
                }}
              >
                Terminer et voir les résultats
              </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button 
          onClick={() => setShowGrid(!showGrid)}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
            padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)', fontWeight: 600, cursor: 'pointer'
          }}
        >
          <Grid size={18} /> 
          <span className="hide-mobile">Grille (Q. {currentIndex + 1}/{qcmData.length})</span>
          <span className="show-mobile-only">{currentIndex + 1}/{qcmData.length}</span>
        </button>
        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          Score : {score}/{answeredCount}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '6px', background: 'var(--border-color)', borderRadius: '3px', marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ 
          width: `${(answeredCount / qcmData.length) * 100}%`, 
          height: '100%', 
          background: 'var(--accent-primary)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Question Text */}
      <div style={{ 
        fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', 
        lineHeight: 1.6, marginBottom: '2.5rem' 
      }}>
        {question.question}
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {question.options.map((opt) => {
          const isSelected = selectedOptions.includes(opt.id);
          const isCorrectAnswer = question.correctAnswers.includes(opt.id);
          
          let borderColor = isSelected ? 'var(--accent-primary)' : 'var(--border-color)';
          let bgColor = isSelected ? 'rgba(59, 130, 246, 0.05)' : 'var(--bg-primary)';
          let icon = null;

          if (isValidated) {
            if (isCorrectAnswer) {
              borderColor = '#10b981'; // green
              bgColor = 'rgba(16, 185, 129, 0.1)';
              icon = <CheckCircle2 size={24} color="#10b981" />;
            } else if (isSelected && !isCorrectAnswer) {
              borderColor = '#ef4444'; // red
              bgColor = 'rgba(239, 68, 68, 0.1)';
              icon = <XCircle size={24} color="#ef4444" />;
            }
          }

          return (
            <div 
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                padding: '1.25rem', border: `2px solid ${borderColor}`,
                borderRadius: 'var(--radius-md)', background: bgColor,
                cursor: isValidated ? 'default' : 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ 
                width: '24px', height: '24px', flexShrink: 0,
                borderRadius: '4px', border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                background: isSelected ? 'var(--accent-primary)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '0.1rem',
                ...(isValidated && isCorrectAnswer && { background: '#10b981', borderColor: '#10b981' }),
                ...(isValidated && isSelected && !isCorrectAnswer && { background: '#ef4444', borderColor: '#ef4444' })
              }}>
                {isSelected && <CheckCircle2 size={16} color="white" />}
              </div>
              <div style={{ flex: 1, fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700, marginRight: '0.5rem' }}>{opt.id}.</span>
                {opt.text}
              </div>
              {isValidated && icon && (
                <div style={{ flexShrink: 0 }}>{icon}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Validation Area */}
      {!isValidated ? (
        <button 
          onClick={handleValidate}
          disabled={selectedOptions.length === 0}
          style={{
            width: '100%', padding: '1.25rem', marginBottom: '2rem',
            background: selectedOptions.length > 0 ? 'var(--accent-primary)' : 'var(--border-color)',
            color: selectedOptions.length > 0 ? 'white' : 'var(--text-secondary)',
            borderRadius: 'var(--radius-md)', border: 'none',
            fontSize: '1.1rem', fontWeight: 600, cursor: selectedOptions.length > 0 ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease'
          }}
        >
          Valider ma réponse
        </button>
      ) : (
        <div className="animate-fade-in" style={{ marginBottom: '2rem' }}>
          <div style={{
            background: 'var(--bg-secondary)', padding: '2rem',
            borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)'
          }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
              <AlertCircle size={20} color="var(--accent-primary)" /> Explication détaillée
            </h4>
            <div 
              className="course-content" 
              style={{ fontSize: '1.05rem', lineHeight: 1.6 }}
              dangerouslySetInnerHTML={createMarkup(question.explanation)}
            />
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            flex: 1, padding: '1rem',
            background: 'var(--bg-secondary)', color: currentIndex === 0 ? 'var(--text-tertiary)' : 'var(--text-primary)',
            borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)',
            fontSize: '1.1rem', fontWeight: 600, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          <ArrowLeft size={20} /> <span className="hide-mobile">Précédent</span>
        </button>
        
        <button 
          onClick={handleNext}
          style={{
            flex: 1, padding: '1rem',
            background: 'var(--text-primary)', color: 'var(--bg-primary)',
            borderRadius: 'var(--radius-md)', border: 'none',
            fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          {currentIndex < qcmData.length - 1 ? (
            <><span className="hide-mobile">Suivant</span> <ArrowRight size={20} /></>
          ) : (
            'Voir résultats'
          )}
        </button>
      </div>

    </div>
  );
};

export default QcmPlayer;
