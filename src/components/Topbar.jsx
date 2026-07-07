import React, { useState, useEffect } from 'react';
import { Menu, Bell, User, Moon, Sun, Download } from 'lucide-react';

const Topbar = ({ toggleSidebar, theme, toggleTheme }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <header className="topbar-container" style={{
      height: 'var(--navbar-height)',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          onClick={toggleSidebar}
          style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <Menu size={24} />
        </button>
        <div className="topbar-search" style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          padding: '0.5rem 1rem',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: '300px'
        }}>
          <span style={{ color: 'var(--text-tertiary)' }}>Rechercher un cours...</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {deferredPrompt && (
          <button
            onClick={handleInstallClick}
            style={{
              background: 'var(--accent-primary)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Download size={18} />
            <span className="topbar-user-info">Installer l'App</span>
          </button>
        )}
        <button 
          onClick={toggleTheme}
          style={{ color: 'var(--text-secondary)', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button style={{ color: 'var(--text-secondary)', position: 'relative' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', top: '-2px', right: '-2px',
            background: 'var(--accent-danger)', width: '8px', height: '8px', borderRadius: '50%'
          }}></span>
        </button>
        <div className="topbar-user-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Dr. User</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Résident Ophtalmo</span>
          </div>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)'
          }}>
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
