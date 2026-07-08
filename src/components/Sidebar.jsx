import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Search, Bookmark, Settings, MessageSquare, Layout, Activity, User, ChevronRight, Menu, X, Map, Brain, Image as ImageIcon, CheckSquare, Stethoscope, Scissors } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside 
      className={`sidebar-container ${isOpen ? 'open' : ''}`}
      style={{
        width: isOpen ? 'var(--sidebar-width)' : '80px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-color)',
        transition: 'width 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50
      }}
    >
      <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ 
          width: '40px', height: '40px', borderRadius: '10px', 
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
          <BookOpen color="white" size={20} />
        </div>
        {isOpen && (
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
            DEMS Ophto
          </h2>
        )}
      </div>
      
      <div style={{ padding: '1rem 0', flex: 1, overflowY: 'auto' }}>
        <ul style={{ listStyle: 'none', padding: '0 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          
          <NavItem to="/" icon={<Layout size={20} />} label="Dashboard" isOpen={isOpen} setIsOpen={setIsOpen} />
          
          <div style={{ margin: '1rem 0 0.5rem', padding: '0 1rem' }}>
            {isOpen && <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '1px' }}>Bibliothèque</span>}
          </div>
          
          <NavItem to="/courses" icon={<BookOpen size={20} />} label="Cours Magistraux" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/fiches" icon={<Map size={20} />} label="Fiches Techniques" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/algorithms" icon={<Brain size={20} />} label="Algorithmes" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/classifications" icon={<Layout size={20} />} label="Classification" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/imaging" icon={<ImageIcon size={20} />} label="Imagerie" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/qcm" icon={<CheckSquare size={20} />} label="QCM & Évaluation" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/cas-cliniques" icon={<Stethoscope size={20} />} label="Cas Cliniques" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavItem to="/chirurgie" icon={<Scissors size={20} />} label="Chirurgie" isOpen={isOpen} setIsOpen={setIsOpen} />
          
          <div style={{ margin: '1rem 0 0.5rem', padding: '0 1rem' }}>
            {isOpen && <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '1px' }}>Outils</span>}
          </div>
          
          <NavItem to="/ai-assistant" icon={<MessageSquare size={20} />} label="Assistant IA" isOpen={isOpen} setIsOpen={setIsOpen} />
        </ul>
      </div>
      
      <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
         <NavItem to="/settings" icon={<Settings size={20} />} label="Paramètres" isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, isOpen, setIsOpen }) => {
  const handleClick = () => {
    if (window.innerWidth <= 768 && setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <li>
      <NavLink
        to={to}
        onClick={handleClick}
        style={({ isActive }) => ({
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--radius-sm)',
          color: isActive ? 'white' : 'var(--text-secondary)',
          background: isActive ? 'var(--accent-primary-transparent)' : 'transparent',
          borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent',
          transition: 'all 0.2s',
          justifyContent: isOpen ? 'flex-start' : 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        })}
        title={!isOpen ? label : ''}
      >
        <span style={{ color: 'inherit', flexShrink: 0 }}>{icon}</span>
        {isOpen && <span>{label}</span>}
      </NavLink>
    </li>
  );
};

export default Sidebar;
