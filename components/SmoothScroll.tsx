import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Global Lenis instance. We keep a single reference so any module on the page
 * can call `smoothScrollToElement(id)` (replaces the old `scrollIntoView`
 * pattern) without threading the instance through props/context.
 */
let lenisInstance: Lenis | null = null;
let pageScrollLockDepth = 0;
let originalPageStyles: {
  htmlOverflow: string;
  htmlOverscrollBehavior: string;
  bodyOverflow: string;
  bodyOverscrollBehavior: string;
  bodyPaddingRight: string;
} | null = null;

const SCROLL_POSITION_PREFIX = 'portfolio-scroll-position:';
const lockedScrollEntries = new Set<string>();

export type ScrollSnapshot = {
  y: number;
  anchorId?: string;
  anchorOffset?: number;
};

export function scrollEntryKey(locationKey: string, pathname: string, search = '') {
  return `${locationKey}:${pathname}${search}`;
}

export function saveScrollPosition(entryKey: string, y = window.scrollY) {
  if (lockedScrollEntries.has(entryKey)) return;
  sessionStorage.setItem(`${SCROLL_POSITION_PREFIX}${entryKey}`, JSON.stringify({ y }));
}

export function lockScrollPosition(entryKey: string, snapshot: ScrollSnapshot) {
  sessionStorage.setItem(`${SCROLL_POSITION_PREFIX}${entryKey}`, JSON.stringify(snapshot));
  lockedScrollEntries.add(entryKey);
}

export function unlockScrollPosition(entryKey: string) {
  lockedScrollEntries.delete(entryKey);
}

export function getScrollPosition(entryKey: string) {
  const stored = sessionStorage.getItem(`${SCROLL_POSITION_PREFIX}${entryKey}`);
  if (stored === null) return null;

  try {
    const parsed = JSON.parse(stored) as ScrollSnapshot;
    return Number.isFinite(parsed.y) ? parsed : null;
  } catch {
    const legacyY = Number(stored);
    return Number.isFinite(legacyY) ? { y: legacyY } : null;
  }
}

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

export function lockPageScroll() {
  pageScrollLockDepth += 1;
  if (pageScrollLockDepth > 1) return;

  const html = document.documentElement;
  const body = document.body;
  const scrollbarGap = Math.max(0, window.innerWidth - html.clientWidth);

  originalPageStyles = {
    htmlOverflow: html.style.overflow,
    htmlOverscrollBehavior: html.style.overscrollBehavior,
    bodyOverflow: body.style.overflow,
    bodyOverscrollBehavior: body.style.overscrollBehavior,
    bodyPaddingRight: body.style.paddingRight,
  };

  lenisInstance?.stop();
  html.style.overflow = 'hidden';
  html.style.overscrollBehavior = 'none';
  body.style.overflow = 'hidden';
  body.style.overscrollBehavior = 'none';
  if (scrollbarGap > 0) body.style.paddingRight = `${scrollbarGap}px`;
}

export function unlockPageScroll() {
  pageScrollLockDepth = Math.max(0, pageScrollLockDepth - 1);
  if (pageScrollLockDepth > 0 || !originalPageStyles) return;

  const html = document.documentElement;
  const body = document.body;
  html.style.overflow = originalPageStyles.htmlOverflow;
  html.style.overscrollBehavior = originalPageStyles.htmlOverscrollBehavior;
  body.style.overflow = originalPageStyles.bodyOverflow;
  body.style.overscrollBehavior = originalPageStyles.bodyOverscrollBehavior;
  body.style.paddingRight = originalPageStyles.bodyPaddingRight;
  originalPageStyles = null;
  lenisInstance?.start();
}

/**
 * Mount once near the root. Initializes Lenis (lerp-interpolated smooth
 * scrolling) on the document, drives the rAF loop, and tears down on
 * unmount. `syncTouch: false` keeps mobile touch scrolling native, Lenis
 * smoothing on touch usually feels worse than the platform's own inertia.
 */
export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // honor user preference, no smoothing

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
