import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Linkedin, Download, Mail } from 'lucide-react';
import cvPdf from '../assets/docs/german-david-alvarez-cv.pdf';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-3 md:px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isHome ? (
            <span className="px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[11px] font-semibold text-zinc-100 tracking-tight">
              Germán D. Alvarez
            </span>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="glow-reactive glow-button flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="glow-reactive glow-button btn-outline flex items-center gap-1.5 px-2.5 md:px-3.5 py-1.5 rounded-full border border-zinc-800 text-[11px] font-semibold text-zinc-400 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
          <a
            href="https://linkedin.com/in/germanalvarezg"
            target="_blank"
            rel="noreferrer"
            className="glow-reactive glow-button btn-outline flex items-center gap-1.5 px-2.5 md:px-3.5 py-1.5 rounded-full border border-zinc-800 text-[11px] font-semibold text-zinc-400 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href={cvPdf}
            download
            className="glow-reactive glow-button btn-outline flex items-center gap-1.5 px-2.5 md:px-3.5 py-1.5 rounded-full border border-zinc-800 text-[11px] font-semibold text-zinc-400 transition-colors"
            aria-label="Download CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">CV</span>
          </a>
          <a
            href="mailto:mancho19942010@hotmail.com"
            className="glow-reactive glow-button btn-outline flex items-center gap-1.5 px-2.5 md:px-3.5 py-1.5 rounded-full border border-zinc-800 text-[11px] font-semibold text-zinc-400 transition-colors"
            aria-label="Contact via email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
