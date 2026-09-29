import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Linkedin, Download, Mail } from 'lucide-react';

const CV_PDF_PATH = '/German-David-Alvarez-CV.pdf';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={`portfolio-nav ${isHome ? 'portfolio-nav--home' : ''}`} aria-label="Main navigation">
      {!isHome && (
        <Link to="/" className="portfolio-nav__back" aria-label="Back to portfolio">
          <ArrowLeft size={15} aria-hidden="true" /> <span>Back</span>
        </Link>
      )}
      <div className="portfolio-nav__actions">
        <button
          type="button"
          onClick={() => setTheme((previous) => previous === 'light' ? 'dark' : 'light')}
          className="portfolio-nav__button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={14} aria-hidden="true" /> : <Sun size={14} aria-hidden="true" />}
        </button>
        <a href="https://linkedin.com/in/germanalvarezg" target="_blank" rel="noreferrer" className="portfolio-nav__button" aria-label="LinkedIn profile" title="LinkedIn profile">
          <Linkedin size={14} aria-hidden="true" />
        </a>
        <a href="mailto:germanproduct94@gmail.com" className="portfolio-nav__button" aria-label="Contact by email" title="Contact by email">
          <Mail size={14} aria-hidden="true" />
        </a>
        <a href={CV_PDF_PATH} download="German-David-Alvarez-CV.pdf" className="portfolio-nav__button portfolio-nav__cv" aria-label="Download CV" title="Download CV">
          <Download size={14} aria-hidden="true" /><span>CV</span>
        </a>
      </div>
    </nav>
  );
};
