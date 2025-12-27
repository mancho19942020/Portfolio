import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Layers, ArrowLeft } from 'lucide-react';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-black">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isHome ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-zinc-400">GD</span>
              </div>
              <span className="font-semibold tracking-tight text-sm text-zinc-100 hidden sm:block">
                Germán David Alvarez
              </span>
            </div>
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

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/germanalvarezg"
            target="_blank"
            rel="noreferrer"
            className="glow-reactive glow-button text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:mancho19942010@hotmail.com"
            className="glow-reactive glow-button text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};
