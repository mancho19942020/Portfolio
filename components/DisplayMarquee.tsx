import React from 'react';

interface DisplayMarqueeProps {
  text: string;
  glyph?: string;
  repeats?: number;
  durationSeconds?: number;
  ariaLabel?: string;
}

/**
 * Bookend-style display marquee. The text + glyph repeats horizontally
 * on an infinite loop with fade-edge masking. Inspired by the hero/footer
 * marquees on sidtorres.xyz but built to scale responsively.
 */
export const DisplayMarquee: React.FC<DisplayMarqueeProps> = ({
  text,
  glyph = '✦',
  repeats = 6,
  durationSeconds = 40,
  ariaLabel,
}) => {
  const items = Array.from({ length: repeats });
  const style = { ['--marquee-duration' as string]: `${durationSeconds}s` } as React.CSSProperties;

  return (
    <div className="display-marquee-viewport" aria-label={ariaLabel ?? text} role="marquee">
      <div className="display-marquee-track" style={style}>
        {items.map((_, i) => (
          <span key={i} className="display-marquee-item" aria-hidden={i > 0}>
            {text} <span className="display-marquee-glyph">{glyph}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
