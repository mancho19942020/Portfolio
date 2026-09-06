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
  unlockScrollPosition,
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
    const isRouteChange = activeEntryKey.current !== entryKey;
    activeEntryKey.current = entryKey;
    const snapshot =
      isRouteChange && navigationType === 'POP' ? getScrollPosition(entryKey) : null;
    const stabilizationTimers: number[] = [];
    let targetY = snapshot?.y ?? 0;

    const restore = () => {
      instantScrollTo(targetY);
    };

    if (snapshot) {
      restore();

      const settle = (resolveAnchor: boolean, isFinal: boolean) => {
        if (resolveAnchor && snapshot.anchorId && Number.isFinite(snapshot.anchorOffset)) {
          const anchor = document.getElementById(snapshot.anchorId);
          if (anchor) {
            targetY = window.scrollY + anchor.getBoundingClientRect().top - snapshot.anchorOffset!;
          }
        }

        restore();
        if (isFinal) unlockScrollPosition(entryKey);
      };

      // Hash history and Lenis can both emit late position updates after the
      // route commits. Reapply the same instant frame while they settle.
      [0, 50, 150, 350, 700].forEach((delay, index, delays) => {
        stabilizationTimers.push(
          window.setTimeout(
            () => settle(index === 1, index === delays.length - 1),
            delay,
          ),
        );
      });
    } else {
      restore();
      unlockScrollPosition(entryKey);
    }

    return () => {
      stabilizationTimers.forEach((timer) => window.clearTimeout(timer));
      unlockScrollPosition(entryKey);
    };
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
