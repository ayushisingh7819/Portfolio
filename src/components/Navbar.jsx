import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, setIsDark, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'tech', 'languages', 'experience', 'achievements', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'My Projects', href: '#projects', id: 'projects' },
    { name: 'Tech Stack', href: '#tech', id: 'tech' },
    { name: 'Languages', href: '#languages', id: 'languages' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold tracking-tight text-base sm:text-lg group"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform" />
          <span className="font-sans uppercase text-sm tracking-wider font-bold">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-sm"
            title="View Digital CV Interactive Preview"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View CV</span>
          </button>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-4 shadow-xl animate-fade-in transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                <FileText className="w-4 h-4" />
                View Digital CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
