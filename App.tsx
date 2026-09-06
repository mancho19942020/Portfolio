import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProjectPresentation } from './components/ProjectPresentation';
import { CursorGlow } from './components/CursorGlow';
import {
  SmoothScroll,
  getScrollPosition,
  instantScrollTo,
  saveScrollPosition,
  scrollEntryKey,
} from './components/SmoothScroll';

// Each browser-history entry keeps its own exact position. POP navigation
// restores it immediately, while new pages start at the top.
const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const entryKey = scrollEntryKey(location.key, location.pathname, location.search);
  const activeEntryKey = useRef(entryKey);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    let frameId = 0;
    const rememberPosition = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        saveScrollPosition(activeEntryKey.current);
      });
    };

    window.addEventListener('scroll', rememberPosition, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      saveScrollPosition(activeEntryKey.current);
      window.removeEventListener('scroll', rememberPosition);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    activeEntryKey.current = entryKey;
    const savedPosition = navigationType === 'POP' ? getScrollPosition(entryKey) : null;
    instantScrollTo(savedPosition ?? 0);
  }, [entryKey, navigationType]);

  return null;
};

// Subtle Animated Background Component
const GlobalBackground = () => (
  <>
    <div className="fixed inset-0 -z-50 bg-[#0B0B0B]" />
  </>
);

const AppContent = () => {
  const location = useLocation();
  return (
    <>
      <ScrollManager />
      <div key={location.pathname} className="relative z-10">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/case" element={<ProjectPresentation />} />
          <Route path="/project/:id/presentation" element={<ProjectPresentation />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <SmoothScroll />
      <GlobalBackground />
      <CursorGlow />
      <AppContent />
    </HashRouter>
  );
};

export default App;
