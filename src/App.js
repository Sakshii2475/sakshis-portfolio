// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (err) => {
      console.error('Global Error Caught:', err);
      setError(err);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h1>Something went wrong!</h1>
          <p style={{ color: 'red' }}>{error ? error.message : 'An unexpected error occurred.'}</p>
          <p>Please try refreshing the page. If the issue persists, there might be a problem with the code.</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          {/* Add more routes if you expand the site */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;