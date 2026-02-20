import React from 'react';

interface ToolLogoItem {
  label: string;
  file: string;
}

interface ToolLogoResolved extends ToolLogoItem {
  src: string;
}

const LOGO_FILES = import.meta.glob('../assets/logos/tools/*.{svg,png}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const TOOL_LOGOS: ToolLogoItem[] = [
  { label: 'Claude Code', file: 'claude-code.svg' },
  { label: 'ChatGPT', file: 'chatgpt.svg' },
  { label: 'Codex', file: 'codex.svg' },
  { label: 'Gemini', file: 'gemini.svg' },
  { label: 'Cursor', file: 'cursor.svg' },
  { label: 'Anti-gravity', file: 'anti-gravity.svg' },
  { label: 'Jira', file: 'jira.svg' },
  { label: 'Asana', file: 'asana.svg' },
  { label: 'Confluence', file: 'confluence.svg' },
  { label: 'Notion', file: 'notion.svg' },
  { label: 'Illustrator', file: 'illustrator.svg' },
  { label: 'Photoshop', file: 'photoshop.svg' },
  { label: 'Premiere Pro', file: 'premiere-pro.svg' },
  { label: 'Figma', file: 'figma.svg' },
  { label: 'Figma Make', file: 'figma-make.svg' },
  { label: 'Google Analytics', file: 'google-analytics.svg' },
  { label: 'BigQuery', file: 'bigquery.svg' },
  { label: 'AWS', file: 'aws.svg' },
  { label: 'Clarity', file: 'clarity.svg' },
  { label: 'React', file: 'react.svg' },
  { label: 'Tailwind CSS', file: 'tailwindcss.svg' },
  { label: 'Next.js', file: 'nextjs.svg' },
  { label: 'Nuxt', file: 'nuxt.svg' },
  { label: 'Terminal', file: 'terminal.svg' },
  { label: 'Warp', file: 'warp.svg' },
  { label: 'GitHub', file: 'github.svg' },
  { label: 'Git', file: 'git.svg' },
  { label: 'Zoom', file: 'zoom.svg' },
  { label: 'Hotjar', file: 'hotjar.svg' },
  { label: 'Google Slides', file: 'google-slides.svg' }
];

const resolvedLogos: ToolLogoResolved[] = TOOL_LOGOS
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
            <img src={item.src} alt={`${item.label} logo`} className="tool-logo-image" loading="lazy" />
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-zinc-400">{item.label}</span>
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
      <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.22em]">Tool Stack</p>

      <div className="tools-marquee-shell">
        <LogoRow items={resolvedLogos} duration={90} />
      </div>
    </div>
  );
};
