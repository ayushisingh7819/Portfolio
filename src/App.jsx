import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-light-bg text-light-primary dark:bg-dark-bg dark:text-dark-primary font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {/* Sticky Top Navbar */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <TechStack />
        <Languages />
        <Experience />
        <Achievements onOpenCert={(cert) => setActiveCert(cert)} />
        <Certifications
          activeCert={activeCert}
          setActiveCert={setActiveCert}
        />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal Lightbox */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}