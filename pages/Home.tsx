import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { ScrollReveal } from '../components/ScrollReveal';
import { ToolsCarousel } from '../components/ToolsCarousel';
import { InterestsRibbon } from '../components/InterestsRibbon';
import { SectionLabel } from '../components/SectionLabel';
import { DisplayMarquee } from '../components/DisplayMarquee';
import { PinnedReveal } from '../components/PinnedReveal';
import { ProjectShowcaseStack } from '../components/ProjectShowcase';
import { smoothScrollToElement } from '../components/SmoothScroll';
import { PROJECTS, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown, ChevronDown, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cvPdf from '../assets/docs/german-david-alvarez-cv.pdf';

type ExperienceItem = (typeof EXPERIENCE)[number];
type ExperienceItemWithSecondary = ExperienceItem & {
  secondaryRole?: string;
  secondaryPeriod?: string;
  secondaryLocation?: string;
};

// Shared card shell classes
const CARD = 'section-card rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden';

// ─── Experience card ──────────────────────────────────────────────────────────
const ExperienceCard: React.FC<{ exp: ExperienceItemWithSecondary; index: number }> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = `experience-details-${index}`;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-zinc-100 text-base mb-1">{exp.company}</h4>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm text-zinc-400">{exp.role}</span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-600">
              <span>{exp.period}</span>
              {exp.location ? <span>• {exp.location}</span> : null}
            </div>
            {exp.secondaryRole ? (
              <div className="mt-1.5">
                <span className="text-sm text-zinc-400">{exp.secondaryRole}</span>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-600">
                  <span>{exp.secondaryPeriod}</span>
                  {exp.secondaryLocation ? <span>• {exp.secondaryLocation}</span> : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={listId}
          className="shrink-0 p-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="sr-only">{isExpanded ? 'Collapse' : 'Expand'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            id={listId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-500 leading-relaxed max-w-sm list-disc pl-4">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

// ─── Capabilities list ───────────────────────────────────────────────────────
const CAPABILITIES = [
  'Product Strategy',
  'UX Research',
  'UX + UI Design',
  'Design Systems',
  'Prototyping',
  'AI-Augmented Workflows',
  'AI / ML Interfaces',
  'Data Visualization',
  'Full-stack Implementation',
  'Cross-functional Leadership',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export const Home: React.FC = () => {
  // Explicit cross-category showcase order. Titles not listed (e.g. "DM
  // campaign") are excluded from the home stack.
  const projectOrder = [
    "8020 ROOF",
    "Smart funnel",
    "BuyBox editor",
    "Metrics Hub",
    "Property view",
    "Now App",
  ];

  const orderedProjects = PROJECTS
    .filter(p => projectOrder.includes(p.title))
    .sort((a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title));

  // Restore scroll position on return from project detail
  useEffect(() => {
    const targetId = sessionStorage.getItem('scroll-target');
    if (!targetId) return;

    const tryScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ block: 'start' });
        sessionStorage.removeItem('scroll-target');
        sessionStorage.removeItem('scroll-home');
        return true;
      }
      return false;
    };

    if (tryScroll()) return;
    const retry = setTimeout(() => {
      if (!tryScroll()) {
        sessionStorage.removeItem('scroll-target');
        sessionStorage.removeItem('scroll-home');
      }
    }, 200);
    return () => clearTimeout(retry);
  }, []);

  const scrollToSection = (id: string) => {
    smoothScrollToElement(id);
  };

  return (
    <div className="min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <NavBar />

      <main className="max-w-6xl mx-auto px-3 md:px-5 pt-20 pb-6 space-y-3 md:space-y-4">

        {/* ── CARD 1: HERO ─────────────────────────────────────────────────── */}
        <div className={CARD}>
          <section className="min-h-[calc(100svh-5.5rem)] md:min-h-[calc(100vh-5.5rem)] flex flex-col justify-center gap-6 md:gap-8 py-10 sm:py-14 md:py-16">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 sm:px-10 md:px-20"
            >
              <SectionLabel>Senior Product Designer · Bogotá</SectionLabel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <DisplayMarquee text="Germán Alvarez" glyph="✦" repeats={6} durationSeconds={42} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 sm:px-10 md:px-20 flex flex-col gap-5 md:gap-6"
            >
              <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
                I design complex B2B web platforms and mobile-first acquisition journeys through scalable design systems and code-based prototyping.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex flex-col md:flex-row gap-3 flex-1">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="glow-reactive glow-button btn-outline px-7 py-3.5 border border-zinc-800 rounded-full font-semibold transition-colors text-sm w-full md:w-auto"
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => scrollToSection('work')}
                    className="glow-reactive glow-button btn-outline px-7 py-3.5 border border-zinc-800 rounded-full font-semibold transition-colors text-sm w-full md:w-auto"
                  >
                    View Work
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('cta')}
                    className="glow-reactive glow-button btn-primary px-7 py-3.5 font-semibold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] text-sm w-full md:w-auto"
                  >
                    Let's Talk
                  </button>
                </div>
                <ArrowDown className="hidden md:block text-zinc-700 w-5 h-5 animate-bounce flex-none" />
              </div>
            </motion.div>

          </section>
        </div>

        {/* ── TOOLS + INTERESTS ─────────────────────────────────────────────── */}
        {/* No card container — sits directly on the page background, matching
            the Capabilities section. */}
        <div className="scroll-mt-4">
          <section id="tools" className="px-6 sm:px-10 md:px-20 py-10">
            <ScrollReveal>
              <ToolsCarousel />
            </ScrollReveal>
          </section>
          <section id="interests" className="px-6 sm:px-10 md:px-20 py-10">
            <ScrollReveal>
              <InterestsRibbon />
            </ScrollReveal>
          </section>
        </div>

        {/* ── INTRO REVEAL (pinned) ─────────────────────────────────────────── */}
        {/* Standalone card without overflow-hidden so position:sticky works. */}
        <div id="intro" className="section-card rounded-3xl border border-zinc-800 bg-zinc-900 scroll-mt-4">
          <PinnedReveal
            pinHeight="220vh"
            topOffset="5rem"
            label={<SectionLabel>Intro</SectionLabel>}
            segments={[
              {
                text:
                  "I'm a product designer who turns complex data and vague business problems into practical products for the people using them and, increasingly, the AI agents that support them. I work across ",
              },
              {
                text:
                  'real-estate intelligence, marketing-pipeline tools, and AI-assisted product workflows',
                accent: true,
              },
              {
                text:
                  '. I like working methodically: turning conversations full of ambiguous ideas into milestones, owners, and a plan the team can actually ship.',
              },
            ]}
          />
        </div>

        {/* ── CARD 3: ABOUT / EXPERIENCE / EXPERTISE ────────────────────────── */}
        <div id="about" className={`${CARD} scroll-mt-4`}>
          <section className="px-6 sm:px-10 md:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">

            <div>
              <ScrollReveal>
                <div className="mb-8">
                  <SectionLabel>About</SectionLabel>
                </div>
                <p className="text-zinc-300 leading-relaxed text-lg md:text-xl font-light">
                  Senior Product Designer who turns ambiguous business and data problems into research-informed,
                  scalable B2B SaaS products. I connect business decisions, complex data, and intuitive interfaces
                  across acquisition journeys, internal operations, and data-heavy workflows. My work is grounded in
                  research, checked against data, and carried through to production.
                </p>
                <div className="mt-10 space-y-4">
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Education</h3>
                  <div className="space-y-4 text-sm text-zinc-400">
                    <div>
                      <p className="text-zinc-200">Industrial Designer</p>
                      <p className="text-zinc-500">Pontificia Universidad Javeriana</p>
                      <p className="text-zinc-600">2011 – 2016</p>
                    </div>
                    <div>
                      <p className="text-zinc-200">Master's in Branding and Brand Strategy, Design and Visual Communication</p>
                      <p className="text-zinc-500">OBS Business School</p>
                      <p className="text-zinc-600">2020 – 2021</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.2}>
                <div className="mb-8">
                  <SectionLabel>Experience</SectionLabel>
                </div>
                <div className="space-y-3">
                  {EXPERIENCE.map((exp, i) => (
                    <ExperienceCard key={i} exp={exp} index={i} />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.4}>
                <div className="mb-8">
                  <SectionLabel>Expertise</SectionLabel>
                </div>
                <div className="space-y-10">
                  {SKILLS.map((group, i) => (
                    <div key={i}>
                      <h5 className="text-sm font-bold text-zinc-300 mb-4">{group.category}</h5>
                      <div className="flex flex-wrap gap-2.5">
                        {group.items.map(skill => (
                          <span
                            key={skill}
                            className="skill-pill px-3.5 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono cursor-default"
                          >
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </section>
        </div>

        {/* ── CARD 4: SELECTED WORK ─────────────────────────────────────────── */}
        {/* No overflow-hidden so the sticky project stack can pin to the viewport */}
        <div id="work" className="section-card rounded-3xl border border-zinc-800 bg-zinc-900 scroll-mt-4">
          <ScrollReveal>
            <div className="px-6 sm:px-10 md:px-20 pt-12 md:pt-16 pb-2">
              <SectionLabel>Selected Work</SectionLabel>
            </div>
          </ScrollReveal>
          <div className="px-6 sm:px-10 md:px-20 pt-10 pb-14 md:pb-20">
            <ProjectShowcaseStack projects={orderedProjects} />
          </div>
        </div>

        {/* ── CAPABILITIES (What I do) ──────────────────────────────────────── */}
        {/* No card container — sits directly on the page background. */}
        <div id="capabilities" className="scroll-mt-4">
          <section className="px-6 sm:px-10 md:px-20 py-14 md:py-20">
            <ScrollReveal>
              <div className="flex flex-col gap-4 mb-10 md:mb-14">
                <SectionLabel>Capabilities</SectionLabel>
                <h2
                  className="font-bold tracking-tight text-zinc-100"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
                >
                  What I do.
                </h2>
              </div>

              <div className="capabilities-grid border-t border-zinc-800">
                {CAPABILITIES.map((item) => (
                  <div key={item} className="capability-row">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        </div>

        {/* ── CARD 5: CTA + FOOTER ──────────────────────────────────────────── */}
        <div id="cta" className={`${CARD} scroll-mt-4`}>
          {/* Closing marquee — the headline itself */}
          <div className="py-10 md:py-14 border-b border-zinc-800">
            <DisplayMarquee
              text="Let's build something scalable"
              glyph="✦"
              repeats={4}
              durationSeconds={48}
            />
          </div>
          <section className="px-6 sm:px-10 md:px-20 pt-12 md:pt-16 pb-10 text-center">
            <ScrollReveal>
              <div className="mb-10 flex justify-center">
                <SectionLabel>Get in touch</SectionLabel>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={cvPdf}
                  download
                  className="glow-reactive glow-button btn-outline inline-flex items-center justify-center gap-2 px-10 py-4 border border-zinc-800 font-semibold rounded-full transition-colors text-base w-full sm:w-auto whitespace-nowrap"
                  aria-label="Download CV"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href="https://calendly.com/mancho19942020/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-reactive glow-button btn-outline inline-flex items-center justify-center px-10 py-4 border border-zinc-800 font-semibold rounded-full transition-colors text-base w-full sm:w-auto whitespace-nowrap"
                >
                  Schedule meeting
                </a>
                <a
                  href="https://wa.me/573015247033"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-reactive glow-button btn-primary inline-flex items-center justify-center px-10 py-4 font-semibold rounded-full hover:scale-[1.02] transition-all text-base w-full sm:w-auto whitespace-nowrap"
                  aria-label="Contact via WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </section>
          <footer className="px-6 sm:px-10 md:px-20 pb-12 pt-8 text-center text-zinc-700 text-xs font-mono border-t border-zinc-800">
              <p>Designed and shipped end-to-end by Germán David Alvarez.</p>
              <p className="mt-2">© 2025 · Vibecoded with Claude Code, Cursor, GPT Codex, and Gemini.</p>
          </footer>
        </div>

      </main>
    </div>
  );
};
