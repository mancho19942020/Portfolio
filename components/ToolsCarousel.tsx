import React from 'react';

interface ToolLogoItem {
  label: string;
  file: string;
  /** Dark marks need a light treatment on the dark dashboard surface. */
  darkContrast?: boolean;
}

interface ToolLogoResolved extends ToolLogoItem {
  src: string;
}

const LOGO_FILES = import.meta.glob('../assets/logos/tools/*.{svg,png}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const TOOL_LOGOS: ToolLogoItem[] = [
  { label: 'Claude Code', file: 'claude-code.svg', darkContrast: true },
  { label: 'ChatGPT', file: 'chatgpt.svg', darkContrast: true },
  { label: 'Codex', file: 'codex.svg', darkContrast: true },
  { label: 'Gemini', file: 'gemini.svg' },
  { label: 'Cursor', file: 'cursor.svg', darkContrast: true },
  { label: 'Anti-gravity', file: 'anti-gravity.svg' },
  { label: 'Jira', file: 'jira.svg' },
  { label: 'Asana', file: 'asana.svg' },
  { label: 'Confluence', file: 'confluence.svg', darkContrast: true },
  { label: 'Notion', file: 'notion.svg', darkContrast: true },
  { label: 'Illustrator', file: 'illustrator.svg', darkContrast: true },
  { label: 'Photoshop', file: 'photoshop.svg', darkContrast: true },
  { label: 'Premiere Pro', file: 'premiere-pro.svg', darkContrast: true },
  { label: 'Figma', file: 'figma.svg' },
  { label: 'Figma Make', file: 'figma-make.svg' },
  { label: 'Google Analytics', file: 'google-analytics.svg' },
  { label: 'BigQuery', file: 'bigquery.svg' },
  { label: 'AWS', file: 'aws.svg', darkContrast: true },
  { label: 'Clarity', file: 'clarity.svg', darkContrast: true },
  { label: 'React', file: 'react.svg' },
  { label: 'Tailwind CSS', file: 'tailwindcss.svg' },
  { label: 'Next.js', file: 'nextjs.svg', darkContrast: true },
  { label: 'Nuxt', file: 'nuxt.svg' },
  { label: 'Terminal', file: 'terminal.svg' },
  { label: 'Warp', file: 'warp.svg' },
  { label: 'GitHub', file: 'github.svg', darkContrast: true },
  { label: 'Git', file: 'git.svg' },
  { label: 'Zoom', file: 'zoom.svg' },
  { label: 'Hotjar', file: 'hotjar.svg' },
  { label: 'Google Slides', file: 'google-slides.svg' }
];

export const resolvedLogos: ToolLogoResolved[] = TOOL_LOGOS
  .map((item) => ({
    ...item,
    src: LOGO_FILES[`../assets/logos/tools/${item.file}`]
  }))
  .filter((item) => Boolean(item.src));

const LogoRow: React.FC<{ items: ToolLogoResolved[]; duration: number }> = ({ items, duration }) => {
  const loopedItems = [...items, ...items];
  return (
    <div className="tools-marquee-viewport">
      <div
        className="tools-marquee-track"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {loopedItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="tools-logo-pill">
            <img src={item.src} alt={`${item.label} logo`} className="tool-logo-image" data-dark-contrast={item.darkContrast || undefined} loading="lazy" />
            <span className="text-[11px] tracking-[0.01em] text-zinc-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ToolsCarousel: React.FC = () => {
  if (resolvedLogos.length === 0) {
    return null;
  }

  return (
    <div className="space-y-5">
      <p className="text-xs text-zinc-500 tracking-[0.03em]">Tool stack</p>

      <div className="tools-marquee-shell">
        <LogoRow items={resolvedLogos} duration={90} />
      </div>
    </div>
  );
};
