import React, { useEffect, useMemo, useRef, useState } from 'react';

export interface PinnedRevealSegment {
  text: string;
  accent?: boolean;
}

interface PinnedRevealProps {
  segments: PinnedRevealSegment[];
  className?: string;
  /** Total scroll-runway height for the pinned section. Default 240vh. */
  pinHeight?: string;
  /** Sticky top offset of the pinned text within the viewport. Default 18vh. */
  topOffset?: string;
  /** Optional label rendered above the text inside the sticky pin. */
  label?: React.ReactNode;
}

/**
 * Sticky-pinned text whose words progressively light up as the user scrolls
 * through the outer container. Inspired by the intro on sidtorres.xyz, but
 * built so the text stays pinned for the whole scroll runway and segments
 * can be tagged as accent (orange) instead of bright (white).
 *
 * The outer div is tall (`pinHeight`); the inner sticks at `topOffset` and
 * holds the text. Scroll progress through the outer drives the reveal.
 */
export const PinnedReveal: React.FC<PinnedRevealProps> = ({
  segments,
  className = '',
  pinHeight = '240vh',
  topOffset = '18vh',
  label,
}) => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tokens = useMemo(() => {
    const result: Array<{ text: string; isWord: boolean; accent: boolean }> = [];
    segments.forEach(seg => {
      const parts = seg.text.split(/(\s+)/);
      parts.forEach(p => {
        if (p.length === 0) return;
        result.push({
          text: p,
          isWord: p.trim().length > 0,
          accent: seg.accent ?? false,
        });
      });
    });
    return result;
  }, [segments]);

  const totalWords = useMemo(() => tokens.filter(t => t.isWord).length, [tokens]);

  useEffect(() => {
    if (totalWords === 0) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setActiveIndex(totalWords);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const el = outerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewport = window.innerHeight || 1;

        // Progress runs from 0 (section top just hit viewport top) to 1
        // (section bottom about to reach viewport top). Matches the pinned
        // runway exactly so reveal completes right as sticky releases.
        const runway = Math.max(1, rect.height - viewport);
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / runway));

        setActiveIndex(Math.round(progress * totalWords));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [totalWords]);

  let wordCounter = 0;

  // Sticky inner fills the viewport below the offset so `justify-content: center`
  // visually centers the text in the available space (smoother exit when sticky releases).
  const innerStyle: React.CSSProperties = {
    top: topOffset,
    height: `calc(100vh - ${topOffset})`,
    minHeight: `calc(100vh - ${topOffset})`,
  };

  return (
    <div ref={outerRef} className="pinned-reveal-outer" style={{ minHeight: pinHeight }}>
      <div className="pinned-reveal-inner" style={innerStyle}>
        {label ? <div className="pinned-reveal-label">{label}</div> : null}
        <p className={`reveal-text reveal-text-display ${className}`}>
          {tokens.map((tok, i) => {
            if (!tok.isWord) return <span key={i}>{tok.text}</span>;
            const idx = wordCounter++;
            const isOn = idx < activeIndex;
            const cls = [
              'reveal-word',
              tok.accent ? 'reveal-word-accent' : '',
              isOn ? 'is-on' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <span key={i} className={cls}>
                {tok.text}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
