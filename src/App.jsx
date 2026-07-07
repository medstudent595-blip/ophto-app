import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import CourseReader from './pages/CourseReader';
import Library from './pages/Library';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="main-content">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} theme={theme} toggleTheme={toggleTheme} />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/course/:id" element={<CourseReader />} />
            <Route path="/courses" element={<Library />} />
            <Route path="/fiches" element={<div className="page-container animate-fade-in"><h1>Fiches Techniques</h1><p>En construction...</p></div>} />
            <Route path="/algorithms" element={<div className="page-container animate-fade-in"><h1>Algorithmes Décisionnels</h1><p>En construction...</p></div>} />
            <Route path="/imaging" element={<div className="page-container animate-fade-in"><h1>Imagerie & Examens</h1><p>En construction...</p></div>} />
            <Route path="/ai-assistant" element={<div className="page-container animate-fade-in"><h1>Assistant IA</h1><p>En construction...</p></div>} />
            <Route path="/settings" element={<div className="page-container animate-fade-in"><h1>Paramètres</h1><p>En construction...</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
