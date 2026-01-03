import React, { useLayoutEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorGlow } from './components/CursorGlow';

// Restores scroll position on back/forward navigation
const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());
  const locationKey = `${location.pathname}${location.search}${location.hash}`;

  useLayoutEffect(() => {
    return () => {
      positions.current.set(locationKey, window.scrollY);
    };
  }, [locationKey]);

  useLayoutEffect(() => {
    if (location.pathname === '/') {
      const targetId = sessionStorage.getItem('scroll-target');
      if (targetId) {
        return;
      }

      const stored = sessionStorage.getItem('scroll-home');
      if (stored !== null) {
        const y = Number(stored);
        sessionStorage.removeItem('scroll-home');
        window.scrollTo(0, Number.isNaN(y) ? 0 : y);
        return;
      }
    }

    if (navigationType === 'POP') {
      const savedPosition = positions.current.get(locationKey);
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [locationKey, navigationType]);

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
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ScrollManager />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <GlobalBackground />
      <CursorGlow />
      <AppContent />
    </HashRouter>
  );
};

export default App;
