import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  Users,
  Home,
  Boxes,
  Sparkles,
  MessageSquareCode,
  PenTool,
  Figma,
  Quote,
  Maximize2,
  Target,
  Heart,
  AlertTriangle,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

import { ImageLightbox } from './ImageLightbox';
import logoDark from '../assets/logos/8020roof/8020roof-dark.svg';
import logoLight from '../assets/logos/8020roof/8020roof-light.svg';
import imgDashboard from '../assets/projects/8020roof/dashboard.webp';
import imgPropertyList from '../assets/projects/8020roof/property-list.webp';
import imgBuybox from '../assets/projects/8020roof/buybox.webp';
import imgBuyboxEdit from '../assets/projects/8020roof/buybox-edit.webp';
import imgFulfillment from '../assets/projects/8020roof/fulfillment.webp';
import imgDataCoverage from '../assets/projects/8020roof/data-coverage.webp';
import imgClientManagement from '../assets/projects/8020roof/client-management.webp';
import imgAsana from '../assets/projects/8020roof/asana-board.webp';
import imgResearchCover from '../assets/projects/8020roof/research-cover.webp';

// ─────────────────────────────────────────────────────────────────────────────
// 8020 ROOF — Business Case deck
//
// Full-screen, one-slide-at-a-time presentation for a product-design audience.
// SPINE FILE: all slide copy + chrome live here. House style:
//  · no em-dashes (reads human-written, commas instead)
//  · body text uses the full content width, never a narrow column
//  · clearly-labeled placeholder slots mark where real artifacts drop in later
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT = 'var(--accent-strong)';
const EASE = [0.16, 1, 0.3, 1] as const;

interface SlideCtx {
  openImages: (images: { src: string; alt: string }[], index: number) => void;
}

// ─── Theme-aware logo ────────────────────────────────────────────────────────
const useTheme = (): 'light' | 'dark' => {
  const read = () =>
    typeof document !== 'undefined' &&
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark';
  const [theme, setTheme] = useState<'light' | 'dark'>(read);
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setTheme(read()));
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return theme;
};

const RoofLogo: React.FC<{ className?: string }> = ({ className }) => {
  const theme = useTheme();
  return <img src={theme === 'light' ? logoLight : logoDark} alt="8020 Roof" className={className} />;
};

/** Small roof glyph (lucide has no roof icon). */
const RoofGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9.5h13V10" />
  </svg>
);

// ─── Building blocks ─────────────────────────────────────────────────────────

const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="section-label">{children}</span>
);

const In: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Slide: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`w-full max-w-6xl mx-auto ${className}`}>{children}</div>;

const SlideTitle: React.FC<{ children: React.ReactNode; sub?: string }> = ({ children, sub }) => (
  <>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]">
      {children}
    </h2>
    {sub ? <p className="mt-4 text-lg md:text-xl text-zinc-400 leading-relaxed">{sub}</p> : null}
  </>
);

const Card: React.FC<{ icon?: LucideIcon; title: string; body: string; badge?: string }> = ({
  icon: Icon,
  title,
  body,
  badge,
}) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-5 h-full">
    <div className="flex items-center gap-2.5 mb-3">
      {Icon ? (
        <span
          className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950/40 flex items-center justify-center shrink-0"
          style={{ color: ACCENT }}
        >
          <Icon className="w-4 h-4" />
        </span>
      ) : null}
      <h3 className="text-sm font-semibold text-zinc-100 leading-snug">{title}</h3>
      {badge ? (
        <span className="ml-auto text-[9px] font-mono uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded-full px-2 py-0.5">
          {badge}
        </span>
      ) : null}
    </div>
    <p className="text-[13px] text-zinc-400 leading-relaxed">{body}</p>
  </div>
);

const Stat: React.FC<{ value: string; label: string; compact?: boolean }> = ({
  value,
  label,
  compact,
}) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 h-full flex flex-col justify-center">
    <p className={`${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} font-bold tracking-tight text-white leading-none`}>
      {value}
    </p>
    <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 leading-relaxed">
      {label}
    </p>
  </div>
);

const Frame: React.FC<{
  src?: string;
  alt?: string;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, placeholder, className = '', onClick }) => {
  if (src) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden text-left ${onClick ? 'cursor-zoom-in' : ''} ${className}`}
      >
        <img src={src} alt={alt ?? ''} className="w-full h-full object-cover" loading="lazy" />
        {onClick ? (
          <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        ) : null}
      </button>
    );
  }
  return (
    <div
      className={`rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 flex items-center justify-center p-6 ${className}`}
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 text-center leading-relaxed">
        {placeholder ?? 'Image slot'}
      </p>
    </div>
  );
};

// ─── Internal carousel (shared by personas + screens) ────────────────────────
const Carousel: React.FC<{ count: number; render: (i: number) => React.ReactNode }> = ({
  count,
  render,
}) => {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((prev) => (prev + n + count) % count);
  return (
    <div>
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {render(i)}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Item ${n + 1}`}
              className="p-1"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{ width: n === i ? 20 : 7, height: 7, background: n === i ? ACCENT : 'rgb(82 82 91)' }}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="glow-reactive glow-button w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="glow-reactive glow-button w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Persona data ────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    tier: 'P1',
    name: 'The trusting client',
    role: 'Roofing-company owner or marketer',
    line: 'Buys the outcome, not the data. Cannot build a target list, and should not have to.',
    goals: 'Open any property and defend the recommendation to a homeowner, without calling us.',
    motivators: 'Trust and simplicity. A clear reason behind every property, never the word "Unknown".',
    challenges: 'No time or skill to assemble a list. Needs the platform to decide, with a defensible why.',
    sources: 'The platform itself, and the customer-success team.',
  },
  {
    tier: 'P2',
    name: 'The operator',
    role: 'CSM or marketing lead',
    line: 'Runs the monthly list. Knows buy boxes, channels, and what a clean list looks like.',
    goals: 'Configure a Buy Box, preview reach, run a cycle, and download lists they trust.',
    motivators: 'Control and speed. Deliver a real marketing list end to end, without a spreadsheet.',
    challenges: 'Manual assembly, last-minute scope changes, splitting channels by hand.',
    sources: 'The Buy Box editor and the fulfillment cycle.',
  },
  {
    tier: 'P3',
    name: 'The advanced',
    role: 'Power operator or super-admin',
    line: 'Wants the depth, and trusts nothing blindly.',
    goals: 'Run multi-Buy-Box cycles, audit lists and scores, and control county access.',
    motivators: 'Proving the list is right, then widening or rebuilding it without engineering help.',
    challenges: 'Coverage and confidence diagnostics, FIPS access control, no room for silent errors.',
    sources: 'Admin and FIPS tools, super-admin diagnostics.',
  },
];

const PersonaCard: React.FC<{ p: (typeof PERSONAS)[number] }> = ({ p }) => {
  const rows: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Target, label: 'Goals', value: p.goals },
    { icon: Heart, label: 'Motivators', value: p.motivators },
    { icon: AlertTriangle, label: 'Challenges', value: p.challenges },
    { icon: BookOpen, label: 'Sources of information', value: p.sources },
  ];
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        {/* Profile rail */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950/30">
          <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: ACCENT }}>
            {p.tier}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white leading-tight">{p.name}</h3>
          <p className="mt-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500">{p.role}</p>
          <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{p.line}</p>
        </div>
        {/* Sections */}
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {rows.map((r) => (
            <div key={r.label}>
              <div className="flex items-center gap-2 mb-1.5" style={{ color: ACCENT }}>
                <r.icon className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{r.label}</span>
              </div>
              <p className="text-[13px] text-zinc-300 leading-relaxed">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Journey map ─────────────────────────────────────────────────────────────
const JOURNEY = [
  { stage: 'Onboard the client', doing: 'Scope counties and FIPS, set the account up.', touch: ['Admin', 'County access'], emotion: 0.45, better: 'Guided setup, access enforced server-side.' },
  { stage: 'Define the Buy Box', doing: 'Translate the client target into simple rules.', touch: ['Buy Box editor'], emotion: 0.62, better: 'Complexity hidden, an easy path to a target.' },
  { stage: 'Build the monthly list', doing: 'Run the cycle, watch reach against the universe.', touch: ['Fulfillment'], emotion: 0.34, better: 'Five clear stages, reach preview before running.' },
  { stage: 'Audit and investigate', doing: 'Check quality, open any property to verify.', touch: ['Property list', 'Property detail'], emotion: 0.55, better: 'QA walls flag bad rows before delivery.' },
  { stage: 'Deliver and justify', doing: 'Download channel lists, explain every choice.', touch: ['Exports', 'Score panel'], emotion: 0.85, better: 'Channel-ready files, a defensible why per property.' },
];

const JourneyMap: React.FC = () => {
  const n = JOURNEY.length;
  const pts = JOURNEY.map((s, i) => ({
    x: ((i + 0.5) / n) * 100,
    y: 30 - s.emotion * 22 - 4,
  }));
  const poly = pts.map((p) => `${p.x},${p.y}`).join(' ');
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0,1fr))` }}>
        {/* Stage headers */}
        {JOURNEY.map((s, i) => (
          <div key={s.stage} className={`px-4 py-3 border-b border-zinc-800 ${i ? 'border-l' : ''}`}>
            <span className="text-[10px] font-mono" style={{ color: ACCENT }}>{`0${i + 1}`}</span>
            <p className="mt-1 text-[13px] font-semibold text-zinc-100 leading-snug">{s.stage}</p>
          </div>
        ))}
        {/* Doing */}
        {JOURNEY.map((s, i) => (
          <div key={s.stage} className={`px-4 py-3 border-b border-zinc-800 ${i ? 'border-l' : ''}`}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">Doing</p>
            <p className="text-[12px] text-zinc-400 leading-relaxed">{s.doing}</p>
          </div>
        ))}
        {/* Touchpoints */}
        {JOURNEY.map((s, i) => (
          <div key={s.stage} className={`px-4 py-3 border-b border-zinc-800 ${i ? 'border-l' : ''}`}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">Touchpoint</p>
            <div className="flex flex-wrap gap-1">
              {s.touch.map((t) => (
                <span key={t} className="text-[10px] font-mono text-zinc-300 border border-zinc-800 rounded-full px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Emotion curve */}
      <div className="relative px-0 py-3 border-b border-zinc-800">
        <p className="absolute left-4 top-3 text-[10px] font-mono uppercase tracking-widest text-zinc-600">Feeling</p>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-16">
          <polyline points={poly} fill="none" stroke={'rgb(82 82 91)'} strokeWidth={0.6} />
          <polyline points={poly} fill="none" stroke={ACCENT} strokeWidth={0.6} opacity={0.9} />
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={1.1} fill={ACCENT} />
          ))}
        </svg>
      </div>
      {/* Opportunities */}
      <div className="grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0,1fr))` }}>
        {JOURNEY.map((s, i) => (
          <div key={s.stage} className={`px-4 py-3 ${i ? 'border-l border-zinc-800' : ''}`}>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>
              We make it better
            </p>
            <p className="text-[12px] text-zinc-400 leading-relaxed">{s.better}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Transformation loop (8020REI → 8020 Roof) ───────────────────────────────
const REI_FEATURES = ['Dashboard', 'Property list', 'Buy Box', 'Fulfillment', 'Rapid Response', 'Buyers list', 'Edit deals'];
const ROOF_FEATURES = [
  { name: 'Dashboard', isNew: false },
  { name: 'Property list', isNew: false },
  { name: 'Buy Box', isNew: false },
  { name: 'Fulfillment', isNew: false },
  { name: 'Door knocking', isNew: true },
];

const FeaturePanel: React.FC<{ label: string; badge: string; children: React.ReactNode }> = ({
  label,
  badge,
  children,
}) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 h-full">
    <div className="flex items-baseline justify-between gap-2 mb-4">
      <span className="text-[13px] font-mono uppercase tracking-widest" style={{ color: ACCENT }}>
        {label}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{badge}</span>
    </div>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const TransformLoop: React.FC = () => {
  const reduce = useReducedMotion();
  const glow = 'color-mix(in srgb, var(--accent-strong) 60%, transparent)';
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
        <FeaturePanel label="8020REI" badge="The proven core">
          {REI_FEATURES.map((f) => (
            <span key={f} className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 text-[12px] text-zinc-300">
              {f}
            </span>
          ))}
        </FeaturePanel>

        {/* Connector */}
        <div className="flex md:flex-col items-center justify-center gap-2 md:w-40">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 md:mb-1">best practices</span>
          <div className="hidden md:flex flex-col gap-3 w-full">
            {[0, 0.8, 1.6].map((delay) => (
              <div key={delay} className="relative h-px w-full bg-zinc-800">
                <motion.span
                  className="absolute top-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: ACCENT, transform: 'translateY(-50%)' }}
                  initial={{ left: '0%', opacity: 0 }}
                  animate={reduce ? { left: '50%', opacity: 1 } : { left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                  transition={reduce ? {} : { duration: 2.4, repeat: Infinity, ease: 'linear', delay }}
                />
              </div>
            ))}
          </div>
          <ArrowRight className="md:hidden w-5 h-5 rotate-90" style={{ color: ACCENT }} />
        </div>

        <FeaturePanel label="8020 Roof" badge="The new vertical">
          {ROOF_FEATURES.map((f) =>
            f.isNew ? (
              <motion.span
                key={f.name}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium"
                style={{ border: `1px solid ${glow}`, color: 'var(--accent-strong)' }}
                animate={reduce ? {} : { boxShadow: [`0 0 0px ${glow}`, `0 0 12px ${glow}`, `0 0 0px ${glow}`] }}
                transition={reduce ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {f.name}
                <span className="text-[9px] font-mono uppercase tracking-widest rounded-full px-1.5 py-0.5" style={{ background: 'var(--accent-strong)', color: '#0a0a0a' }}>
                  new
                </span>
              </motion.span>
            ) : (
              <span key={f.name} className="rounded-full border border-zinc-700 bg-zinc-950/40 px-3 py-1.5 text-[12px] text-zinc-200">
                {f.name}
              </span>
            ),
          )}
        </FeaturePanel>
      </div>
      <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
        We carried 8020REI's proven toolkit into roofing, reshaped each surface for a different user, and added a
        new feature built for the field: door knocking.
      </p>
    </div>
  );
};

// ─── The slides ──────────────────────────────────────────────────────────────
interface SlideDef {
  title: string;
  render: (ctx: SlideCtx) => React.ReactNode;
}

// The four headline tools, shown as feature cards.
const FEATURES = [
  { src: imgDashboard, alt: '8020 Roof dashboard', name: 'Dashboard', body: 'Built around roofing distress signals, not investor equity.' },
  { src: imgPropertyList, alt: '8020 Roof property list', name: 'Property list', body: 'The same surface as 8020REI, ranked for a roofer.' },
  { src: imgBuybox, alt: '8020 Roof Buy Box', name: 'Buy Box', body: 'The target audience, simplified to its smallest set of rules.' },
  { src: imgFulfillment, alt: '8020 Roof fulfillment', name: 'Fulfillment', body: 'The internal pipeline that emits the monthly channel lists.' },
];

const SLIDES: SlideDef[] = [
  // 00 · COVER ----------------------------------------------------------------
  {
    title: 'Cover',
    render: () => (
      <Slide>
        <div className="relative text-center flex flex-col items-center">
          {/* soft accent glow behind the mark */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-3xl h-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-strong) 18%, transparent), transparent 70%)' }}
          />
          <In>
            <RoofLogo className="relative h-14 md:h-20 w-auto" />
          </In>
          <In delay={0.12}>
            <div className="relative mt-8 inline-block rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-2.5">
              <p className="text-sm md:text-base text-zinc-300">
                A new business vertical, designed and shipped on code, with AI as the accelerator.
              </p>
            </div>
          </In>
          <In delay={0.26}>
            <p className="relative mt-10 text-[11px] font-mono uppercase tracking-widest text-zinc-600">
              Use the arrow keys to move, Esc to exit
            </p>
          </In>
        </div>
      </Slide>
    ),
  },

  // 01 · THE MANDATE ----------------------------------------------------------
  {
    title: 'The mandate',
    render: () => (
      <Slide>
        <In>
          <Kicker>The mandate</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="8020REI, our real-estate data business, is thriving. Clients are satisfied, so the company is expanding into new verticals: Direct Mail, and Roofing.">
              A healthy business decided to grow
            </SlideTitle>
          </In>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          <In delay={0.16}>
            <Card
              icon={Home}
              title="The core is winning"
              body="8020REI generates marketing lists for real-estate investors, and it works, which is exactly why leadership greenlit new verticals."
            />
          </In>
          <In delay={0.24}>
            <Card
              icon={Sparkles}
              title="Roofing, handed to me"
              body="Direct Mail went to a larger team. Roofing came to me, since I lead design on 8020REI and know the data business deeply."
            />
          </In>
          <In delay={0.32}>
            <Card
              icon={Target}
              title="The bet"
              body="Prove a small, mostly non-technical product team can ship a production vertical, without hiring a dedicated frontend or backend engineer."
            />
          </In>
        </div>
      </Slide>
    ),
  },

  // 02 · THE REFRAME ----------------------------------------------------------
  {
    title: 'The reframe',
    render: () => (
      <Slide>
        <In>
          <Kicker>The reframe</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Same company, same data engine, a different customer with different jobs. The work was to point what we already own at a new vertical.">
              A shared engine, a different customer
            </SlideTitle>
          </In>
        </div>

        {/* Aligned leverage diagram */}
        <div className="mt-8 grid lg:grid-cols-[1fr_auto_1fr] items-stretch gap-3">
          <In delay={0.16}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 h-full">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950/40 flex items-center justify-center" style={{ color: ACCENT }}>
                  <Home className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">8020REI</span>
              </div>
              <p className="text-base font-semibold text-zinc-100">A proven engine</p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                100M+ property records and a scoring algorithm, already built for real-estate investors.
              </p>
            </div>
          </In>
          <In delay={0.26} className="flex items-center justify-center">
            <div className="flex lg:flex-col items-center gap-2 py-2">
              <ArrowRight className="w-6 h-6 lg:rotate-0" style={{ color: ACCENT }} />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 text-center">
                leverage<br className="hidden lg:block" /> &amp; adapt
              </span>
            </div>
          </In>
          <In delay={0.36}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 h-full">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-950/40 flex items-center justify-center" style={{ color: ACCENT }}>
                  <RoofGlyph className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">8020 Roof</span>
              </div>
              <p className="text-base font-semibold text-zinc-100">Pointed at roofs</p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                The same data and algorithm, tuned to what a roofer needs: finding roofs that need replacing.
              </p>
            </div>
          </In>
        </div>

        {/* Wedge strip, full width, aligned */}
        <In delay={0.46}>
          <div
            className="mt-3 rounded-2xl border bg-zinc-900/40 px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2"
            style={{ borderColor: 'color-mix(in srgb, var(--accent-strong) 32%, transparent)' }}
          >
            <span className="text-[11px] font-mono uppercase tracking-widest shrink-0" style={{ color: ACCENT }}>
              The wedge
            </span>
            <p className="text-zinc-200 text-[15px] leading-relaxed">
              Competitors sell leads one at a time. Because we own the data and the algorithm, we sell the whole
              county, so clients can play with it freely. That offer does not exist anywhere else.
            </p>
          </div>
        </In>
      </Slide>
    ),
  },

  // 03 · DISCOVERY ------------------------------------------------------------
  {
    title: 'Discovery',
    render: () => (
      <Slide>
        <In>
          <Kicker>Discovery</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Discovery ran on two tracks at once, and both started from a question, not an answer.">
              Listen to the business, interrogate the industry
            </SlideTitle>
          </In>
        </div>

        <div className="mt-7 grid md:grid-cols-2 gap-3">
          <In delay={0.16}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-6 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950/40 flex items-center justify-center" style={{ color: ACCENT }}>
                  <Users className="w-4 h-4" />
                </span>
                <h3 className="text-base font-semibold text-zinc-100">Track 1, the vision</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Conversations with the CEO, the COO, the Director of Product and the customer-success managers
                who run the roofing accounts by hand today, plus two roofers we work with directly. The goal was
                to capture where this business is headed and what good looks like to the people closest to it.
              </p>
            </div>
          </In>
          <In delay={0.24}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-6 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950/40 flex items-center justify-center" style={{ color: ACCENT }}>
                  <Search className="w-4 h-4" />
                </span>
                <h3 className="text-base font-semibold text-zinc-100">Track 2, the industry</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A coordinated set of AI agents dug into the roofing vertical, the competitors, their websites and
                pricing, and how the business actually moves money. It fed a 120-source sweep that I read,
                audited, and turned into decisions.
              </p>
            </div>
          </In>
        </div>

        {/* Operating principle as a 3-step flow */}
        <In delay={0.34}>
          <div className="mt-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-2">The operating principle</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                ['Start with the question', 'Name what we actually need to know before touching a screen.'],
                ['Research to answer it', 'Gather evidence from the business and the industry until the question closes.'],
                ['Decide how to visualize it', 'Turn the answer into a product decision you can see and defend.'],
              ].map(([t, d], i) => (
                <div key={t} className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-4">
                  <span className="text-[11px] font-mono" style={{ color: ACCENT }}>{`0${i + 1}`}</span>
                  <p className="mt-1 text-sm font-semibold text-zinc-100">{t}</p>
                  <p className="mt-1.5 text-[12px] text-zinc-400 leading-relaxed">{d}</p>
                  {i < 2 ? (
                    <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 z-10" style={{ color: ACCENT }} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </In>
      </Slide>
    ),
  },

  // 04 · THE RESEARCH ---------------------------------------------------------
  {
    title: 'The research',
    render: () => (
      <Slide>
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div>
            <In>
              <Kicker>The evidence library</Kicker>
            </In>
            <div className="mt-5">
              <In delay={0.08}>
                <SlideTitle sub="The research became a living knowledge base, where every finding ties to a decision, and every decision ties to where it lives in the product.">
                  Research that defends every decision
                </SlideTitle>
              </In>
            </div>

            {/* Data -> Decision -> In the platform, as a pill flow */}
            <In delay={0.18}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {['Data', 'Decision', 'In the platform'].map((p, i) => (
                  <React.Fragment key={p}>
                    <span
                      className="rounded-full border px-3.5 py-1.5 text-[12px] font-mono"
                      style={{
                        borderColor: 'color-mix(in srgb, var(--accent-strong) 35%, transparent)',
                        color: 'var(--accent-strong)',
                      }}
                    >
                      {p}
                    </span>
                    {i < 2 ? <ArrowRight className="w-4 h-4 text-zinc-600" /> : null}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                The reasoning that justifies every choice. Each claim also carries an honesty badge: live,
                simulated, or roadmap.
              </p>
            </In>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              <In delay={0.26}><Stat compact value="120+" label="Sources swept" /></In>
              <In delay={0.32}><Stat compact value="108,598" label="US roofing firms sized" /></In>
              <In delay={0.38}><Stat compact value="3" label="Proto-personas" /></In>
            </div>
          </div>

          <In delay={0.22}>
            <a
              href="https://roofing-knowledge-base.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="glow-reactive group relative block rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden aspect-[4/3] w-full"
            >
              <img
                src={imgResearchCover}
                alt="8020 Roof UX research knowledge base, a 16-slide readout"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
              />
              <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                  16-slide research readout
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[11px] font-mono text-white/90 group-hover:text-white transition-colors">
                  Open the research <ExternalLink className="w-3 h-3" />
                </span>
              </span>
            </a>
          </In>
        </div>
      </Slide>
    ),
  },

  // 05 · PERSONAS -------------------------------------------------------------
  {
    title: 'Proto-personas',
    render: () => (
      <Slide>
        <In>
          <Kicker>Who we build for</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Not job titles, but skill tiers of whoever operates the platform. They are the lens for every decision about what to build.">
              Three users, sorted by how much they know
            </SlideTitle>
          </In>
        </div>
        <In delay={0.18}>
          <div className="mt-7">
            <Carousel count={PERSONAS.length} render={(i) => <PersonaCard p={PERSONAS[i]} />} />
          </div>
        </In>
      </Slide>
    ),
  },

  // 06 · JOURNEY MAP ----------------------------------------------------------
  {
    title: 'The journey',
    render: () => (
      <Slide>
        <In>
          <Kicker>The operator journey</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Personas first, then the journey, the path an operator walks to turn a client target into a delivered marketing list.">
              From who, to how it has to flow
            </SlideTitle>
          </In>
        </div>
        <In delay={0.18}>
          <div className="mt-6">
            <JourneyMap />
          </div>
        </In>
      </Slide>
    ),
  },

  // 07 · HEAD START -----------------------------------------------------------
  {
    title: 'The head start',
    render: () => (
      <Slide>
        <In>
          <Kicker>Standing on 8020REI</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="8020REI gave us a proven toolkit. We took its best practices, reshaped them for a different user, and grew a new vertical.">
              An unfair head start, used deliberately
            </SlideTitle>
          </In>
        </div>
        <In delay={0.18}>
          <div className="mt-7">
            <TransformLoop />
          </div>
        </In>
      </Slide>
    ),
  },

  // 08 · DESIGN SYSTEM --------------------------------------------------------
  {
    title: 'One system',
    render: () => (
      <Slide>
        <In>
          <Kicker>One design system</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="We did not build a design system from scratch. We started from shadcn, a robust, open, customizable component foundation, and made it our own.">
              One design system for every vertical
            </SlideTitle>
          </In>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          <In delay={0.16}>
            <Card
              icon={Boxes}
              title="Started from shadcn"
              body="An existing, battle-tested component library. If it is good, you do not break what works, you build on it."
            />
          </In>
          <In delay={0.22}>
            <Card
              icon={PenTool}
              title="Customized for our users"
              body="We adapted the components, aligned them to the brand, and tuned them for the roofing experience."
            />
          </In>
          <In delay={0.28}>
            <Card
              icon={Sparkles}
              title="Brought the Kairo best practices"
              body="Data tables, the Buy Box principles, and the information hierarchy that makes both readable."
            />
          </In>
        </div>
        <In delay={0.36}>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-zinc-400 text-base leading-relaxed">
              The craft shifted from building every component by hand to efficiency and experience. One system,
              customized for Roof, keeps every vertical on one brand. The plan is to bring 8020REI into the same
              monorepo and share it too.
            </p>
            <a
              href="https://www.shadcn-svelte.com/"
              target="_blank"
              rel="noreferrer"
              className="glow-reactive glow-button btn-outline shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 text-[12px] font-mono uppercase tracking-widest text-zinc-300"
            >
              View shadcn <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </In>
      </Slide>
    ),
  },

  // 09 · THE TOOLS ------------------------------------------------------------
  {
    title: 'The tools',
    render: (ctx) => (
      <Slide>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <In>
            <Kicker>Designing the tools</Kicker>
          </In>
          <In>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 border border-dashed border-zinc-700 rounded-full px-3 py-1">
              Screens to be updated
            </span>
          </In>
        </div>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="We designed directly on the existing infrastructure. Fully functional prototypes, not hypothetical ones, in several versions per screen. We tested them with clients and stakeholders, and decided in code.">
              Designed on real data, decided in code
            </SlideTitle>
          </In>
        </div>
        <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {FEATURES.map((f, i) => (
            <In key={f.name} delay={0.16 + i * 0.06}>
              <div className="flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                <Frame
                  src={f.src}
                  alt={f.alt}
                  className="aspect-[16/10] w-full rounded-none border-0"
                  onClick={() => ctx.openImages(FEATURES, i)}
                />
                <div className="p-4 flex-1">
                  <p className="text-sm font-semibold text-zinc-100">{f.name}</p>
                  <p className="mt-1.5 text-[12px] text-zinc-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            </In>
          ))}
        </div>
      </Slide>
    ),
  },

  // 10 · AI WORKFLOW ----------------------------------------------------------
  {
    title: 'AI design workflow',
    render: () => (
      <Slide>
        <In>
          <Kicker>The AI design workflow</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Three ways of designing, chosen by the problem in front of me. The same hand runs through all of them, my criteria deciding what is right.">
              How the design actually got made
            </SlideTitle>
          </In>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          <In delay={0.16}>
            <Card
              icon={MessageSquareCode}
              title="Prompt in code"
              body="Iterate on real UI directly in the codebase with Claude Code, the fastest path when the change is well understood."
              badge="Speed"
            />
          </In>
          <In delay={0.24}>
            <Card
              icon={PenTool}
              title="Prototype to explore"
              body="When a flow is uncertain, build it as a prototype in Claude or Pencil to feel how it works before committing it to code."
              badge="Explore"
            />
          </In>
          <In delay={0.32}>
            <Card
              icon={Figma}
              title="Figma for precision"
              body="When I want exact control without prompt iterating, take the screen into Figma through the MCP, edit by hand, and bring it back, generating tokens and components on the way."
              badge="Precision"
            />
          </In>
        </div>
        <In delay={0.42}>
          <div className="mt-7 flex items-center gap-3">
            <Sparkles className="w-5 h-5 shrink-0" style={{ color: ACCENT }} />
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
              AI changes the speed of iteration. The criteria, reading everything, auditing, deciding, and
              communicating, stays human.
            </p>
          </div>
        </In>
      </Slide>
    ),
  },

  // 11 · PLANNING BASED ON DEMOS ----------------------------------------------
  {
    title: 'Planning based on demos',
    render: (ctx) => (
      <Slide>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <In>
              <Kicker>How we run it</Kicker>
            </In>
            <div className="mt-5">
              <In delay={0.08}>
                <SlideTitle sub="A board of demos, two a week, each with a written definition of done. We build to the demo, ship the MVP, then open the next pipeline against real clients.">
                  Planning based on demos
                </SlideTitle>
              </In>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <In delay={0.18}><Stat value="Mon + Thu" label="Demo cadence" /></In>
              <In delay={0.24}><Stat value="DoD" label="Written per card" /></In>
            </div>
            <In delay={0.32}>
              <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
                Underneath it all, an obsession with documentation. Every meeting, decision and build session is
                written down, a knowledge library the AI reads so we stay aligned on exactly where we are.
              </p>
            </In>
          </div>
          <In delay={0.26}>
            <Frame
              src={imgAsana}
              alt="The Asana demo board"
              className="aspect-[4/3] w-full"
              onClick={() => ctx.openImages([{ src: imgAsana, alt: 'The Asana demo board' }], 0)}
            />
          </In>
        </div>
      </Slide>
    ),
  },

  // 12 · TODAY ----------------------------------------------------------------
  {
    title: 'Today',
    render: () => (
      <Slide>
        <In>
          <Kicker>Where it landed</Kicker>
        </In>
        <div className="mt-5">
          <In delay={0.08}>
            <SlideTitle sub="Two pilot clients live in production, and the manual spreadsheet handoff retired.">
              From Excel by hand to a self-serve platform
            </SlideTitle>
          </In>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          <In delay={0.16}><Stat value="2" label="Clients live in production" /></In>
          <In delay={0.22}><Stat value="~6 wks" label="To retire the Excel handoff" /></In>
          <In delay={0.28}><Stat value="5-stage" label="Monthly fulfillment pipeline" /></In>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <In delay={0.34}><Stat compact value="~10k" label="Direct mail, per cycle (avg)" /></In>
          <In delay={0.4}><Stat compact value="~5k" label="Cold calling, per cycle (avg)" /></In>
          <In delay={0.46}><Stat compact value="~2k" label="SMS, per cycle (avg)" /></In>
        </div>
        <In delay={0.54}>
          <p className="mt-5 text-zinc-400 text-base leading-relaxed">
            It replaces a manual process that used to be assembled by hand in Excel, and it runs behind backend
            QA walls that audit the data, so the product ships at the best quality we can deliver.
          </p>
        </In>
      </Slide>
    ),
  },

  // 13 · THESIS ---------------------------------------------------------------
  {
    title: 'The thesis',
    render: () => (
      <Slide>
        <div className="flex flex-col items-center text-center">
          <In>
            <Quote className="w-8 h-8" style={{ color: ACCENT }} />
          </In>
          <In delay={0.12}>
            <p className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight text-white leading-[1.2] max-w-4xl">
              AI let everyone here build product. What it did not change is the criteria and the expertise,
              and now design owns the whole business, end to end, not just the screens.
            </p>
          </In>
          <In delay={0.24}>
            <p className="mt-6 text-[11px] font-mono uppercase tracking-widest text-zinc-600">
              Working quote, final wording to come
            </p>
          </In>
        </div>
      </Slide>
    ),
  },
];

// ─── Deck shell ──────────────────────────────────────────────────────────────
export const BusinessCaseDeck: React.FC = () => {
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const touchStartX = useRef<number | null>(null);

  // shared lightbox
  const [lbImages, setLbImages] = useState<{ src: string; alt: string }[]>([]);
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const lbOpen = lbIndex !== null;
  const openImages = useCallback((images: { src: string; alt: string }[], i: number) => {
    setLbImages(images);
    setLbIndex(i);
  }, []);

  const total = SLIDES.length;
  const exit = useCallback(() => navigate('/project/8020-roof'), [navigate]);

  const go = useCallback(
    (next: number, direction: number) => {
      if (next < 0 || next >= total) return;
      setState([next, direction]);
    },
    [total],
  );
  const paginate = useCallback((direction: number) => go(index + direction, direction), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lbOpen) return; // lightbox owns the keyboard while open
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        paginate(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        paginate(-1);
      } else if (e.key === 'Escape') {
        exit();
      } else if (e.key === 'Home') {
        go(0, -1);
      } else if (e.key === 'End') {
        go(total - 1, 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paginate, exit, go, total, lbOpen]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? 64 : -64 }),
    center: { opacity: 1, x: 0 },
    leave: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? -64 : 64 }),
  };

  return (
    <div
      className="fixed inset-0 z-40 overflow-hidden"
      style={{
        background: 'var(--app-bg)',
        backgroundImage: 'var(--app-bg-gradient), var(--grid-bg)',
        backgroundSize: 'auto, 56px 56px',
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (lbOpen || touchStartX.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
        if (Math.abs(dx) > 60) paginate(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-16 px-5 md:px-10 flex items-center justify-between">
        <button
          onClick={exit}
          className="glow-reactive glow-button flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Back to case</span>
        </button>

        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          <span style={{ color: ACCENT }}>{String(index + 1).padStart(2, '0')}</span>
          <span className="text-zinc-700">/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        <button
          onClick={exit}
          aria-label="Exit presentation"
          className="glow-reactive glow-button w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Slide stage */}
      <div className="absolute inset-0 pt-16 pb-20">
        <AnimatePresence custom={dir} mode="wait" initial={false}>
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="leave"
            transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
            className="w-full h-full overflow-y-auto no-scrollbar"
          >
            <div className="min-h-full flex flex-col items-center justify-center px-5 md:px-10 py-10">
              {SLIDES[index].render({ openImages })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 h-20 px-5 md:px-10 flex items-center justify-between">
        <button
          onClick={() => paginate(-1)}
          disabled={index === 0}
          aria-label="Previous slide"
          className="glow-reactive glow-button w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-300 transition-opacity disabled:opacity-25"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center">
          {SLIDES.map((s, i) => (
            <button key={s.title} onClick={() => go(i, i > index ? 1 : -1)} aria-label={`Go to slide ${i + 1}: ${s.title}`} className="group p-1.5">
              <span
                className="block rounded-full transition-all duration-300"
                style={{ width: i === index ? 22 : 7, height: 7, background: i === index ? ACCENT : 'rgb(82 82 91)' }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={index === total - 1}
          aria-label="Next slide"
          className="glow-reactive glow-button w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-300 transition-opacity disabled:opacity-25"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <ImageLightbox
        images={lbImages}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onNavigate={(i) => setLbIndex(i)}
      />
    </div>
  );
};

export default BusinessCaseDeck;
