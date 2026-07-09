import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import CourseReader from './pages/CourseReader';
import ImagingReader from './pages/ImagingReader';
import Library from './pages/Library';
import InteractiveReader from './pages/InteractiveReader';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // Handle resize to auto-close sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <div className="app-container">
        {/* Overlay for mobile */}
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="main-content">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} theme={theme} toggleTheme={toggleTheme} />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/imaging" element={<Library type="imaging" />} />
            <Route path="/qcm" element={<Library type="qcm" />} />
            <Route path="/cas-cliniques" element={<Library type="cas-cliniques" />} />
            <Route path="/chirurgie" element={<Library type="chirurgie" />} />
            <Route path="/course/:id" element={<CourseReader />} />
            <Route path="/interactive/:id" element={<InteractiveReader />} />
            <Route path="/imaging-reader/:id" element={<ImagingReader />} />
            <Route path="/courses" element={<Library />} />
            <Route path="/fiches" element={<Library type="fiches" />} />
            <Route path="/algorithms" element={<Library type="algorithms" />} />
            <Route path="/classifications" element={<Library type="classifications" />} />
            <Route path="/ai-assistant" element={<div className="page-container animate-fade-in"><h1>Assistant IA</h1><p>Bientôt disponible...</p></div>} />
            <Route path="/settings" element={<div className="page-container animate-fade-in"><h1>Paramètres</h1><p>Bientôt disponible...</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
