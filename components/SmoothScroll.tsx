import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Global Lenis instance. We keep a single reference so any module on the page
 * can call `smoothScrollToElement(id)` (replaces the old `scrollIntoView`
 * pattern) without threading the instance through props/context.
 */
let lenisInstance: Lenis | null = null;

/**
 * Smooth-scroll to a DOM element by id, accounting for the fixed nav.
 * Falls back to native `scrollIntoView` if Lenis hasn't initialized yet
 * (e.g. during the brief window before `useEffect` runs).
 */
export function smoothScrollToElement(id: string, options?: { offset?: number }) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = options?.offset ?? -80; // matches fixed navbar height

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Jump to a y-position with no animation (used by route scroll restoration
 * where we want the saved position to appear instantly on back/forward).
 */
export function instantScrollTo(y: number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(y, { immediate: true });
  } else {
    window.scrollTo(0, y);
  }
}

/**
 * Mount once near the root. Initializes Lenis (lerp-interpolated smooth
 * scrolling) on the document, drives the rAF loop, and tears down on
 * unmount. `syncTouch: false` keeps mobile touch scrolling native — Lenis
 * smoothing on touch usually feels worse than the platform's own inertia.
 */
export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // honor user preference — no smoothing

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
    });

    lenisInstance = lenis;

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
};
