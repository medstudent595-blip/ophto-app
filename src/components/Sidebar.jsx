import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Map, Settings, Search, Layout, Image as ImageIcon, MessageSquare, Brain } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside 
      style={{
        width: isOpen ? 'var(--sidebar-width)' : '80px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-color)',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10
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
          
          <NavItem to="/" icon={<Layout size={20} />} label="Dashboard" isOpen={isOpen} />
          
          <div style={{ margin: '1rem 0 0.5rem', padding: '0 1rem' }}>
            {isOpen && <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '1px' }}>Bibliothèque</span>}
          </div>
          
          <NavItem to="/courses" icon={<BookOpen size={20} />} label="Cours Magistraux" isOpen={isOpen} />
          <NavItem to="/fiches" icon={<Map size={20} />} label="Fiches Techniques" isOpen={isOpen} />
          <NavItem to="/algorithms" icon={<Brain size={20} />} label="Algorithmes" isOpen={isOpen} />
          <NavItem to="/classifications" icon={<Layout size={20} />} label="Classification" isOpen={isOpen} />
          <NavItem to="/imaging" icon={<ImageIcon size={20} />} label="Imagerie" isOpen={isOpen} />
          
          <div style={{ margin: '1rem 0 0.5rem', padding: '0 1rem' }}>
            {isOpen && <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '1px' }}>Outils</span>}
          </div>
          
          <NavItem to="/ai-assistant" icon={<MessageSquare size={20} />} label="Assistant IA" isOpen={isOpen} />
        </ul>
      </div>
      
      <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
         <NavItem to="/settings" icon={<Settings size={20} />} label="Paramètres" isOpen={isOpen} />
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, isOpen }) => {
  return (
    <li>
      <NavLink
        to={to}
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
