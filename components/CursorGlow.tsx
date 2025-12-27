import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches;
    if (reducedMotion || coarsePointer) {
      return;
    }

    const root = document.documentElement;
    root.classList.add('cursor-enabled');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let dotX = targetX;
    let dotY = targetY;
    let glowX = targetX;
    let glowY = targetY;
    let rafId = 0;
    let hasMoved = false;
    let activeGlowEl: HTMLElement | null = null;

    const update = () => {
      // Smooth follow for glow, faster follow for dot.
      dotX += (targetX - dotX) * 0.35;
      dotY += (targetY - dotY) * 0.35;
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      rafId = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!hasMoved) {
        hasMoved = true;
        dotRef.current?.classList.add('is-visible');
        glowRef.current?.classList.add('is-visible');
      }

      const target = event.target as HTMLElement | null;
      const reactive = target?.closest?.('.glow-reactive') as HTMLElement | null;
      if (reactive !== activeGlowEl) {
        if (activeGlowEl) {
          activeGlowEl.style.removeProperty('--mx');
          activeGlowEl.style.removeProperty('--my');
        }
        activeGlowEl = reactive;
      }
      if (reactive) {
        const rect = reactive.getBoundingClientRect();
        const mx = event.clientX - rect.left;
        const my = event.clientY - rect.top;
        reactive.style.setProperty('--mx', `${mx}px`);
        reactive.style.setProperty('--my', `${my}px`);
      }
    };

    const handlePointerLeave = () => {
      if (activeGlowEl) {
        activeGlowEl.style.removeProperty('--mx');
        activeGlowEl.style.removeProperty('--my');
        activeGlowEl = null;
      }
    };

    rafId = window.requestAnimationFrame(update);
    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      root.classList.remove('cursor-enabled');
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};
