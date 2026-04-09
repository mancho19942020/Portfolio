import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { ScrollReveal } from '../components/ScrollReveal';
import { ToolsCarousel } from '../components/ToolsCarousel';
import { InterestsRibbon } from '../components/InterestsRibbon';
import { PROJECTS, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

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

// ─── Project card (carousel) ──────────────────────────────────────────────────
const WorkCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const previewImage = project.images[project.previewImageIndex ?? 0] ?? project.images[0];

  // Always dark translucent — bypasses light-mode CSS overrides
  const badgeStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    color: 'rgba(255, 255, 255, 0.92)',
    borderColor: 'rgba(255, 255, 255, 0.14)',
  };

  return (
    <Link
      to={`/project/${project.id}`}
      onClick={() => {
        sessionStorage.setItem('scroll-home', String(window.scrollY));
        sessionStorage.setItem('scroll-target', `project-${project.id}`);
      }}
      id={`project-${project.id}`}
      className="group flex-none w-[300px] md:w-[380px] rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col glow-reactive glow-card"
    >
      <div className="relative flex-none overflow-hidden bg-zinc-800" style={{ height: '220px' }}>
        {previewImage && (
          <img
            src={previewImage.src}
            alt={previewImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ objectPosition: project.previewImagePosition ?? 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
        <span
          className="absolute top-4 left-4 text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm"
          style={badgeStyle}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="absolute top-4 right-4 text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm uppercase tracking-widest"
          style={badgeStyle}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
        <div>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
            {project.type}
          </p>
          <h4 className="text-lg md:text-xl font-bold text-zinc-100 leading-snug transition-colors duration-200">
            {project.title}
          </h4>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-2">
            {project.narrative.introduction.summary}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-zinc-800">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[9px] font-mono text-zinc-600">/{tag}</span>
            ))}
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all duration-200 flex-none" />
        </div>
      </div>
    </Link>
  );
};

// ─── Static scrollable carousel ───────────────────────────────────────────────
const ProjectCarousel: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigateCarousel = (direction: -1 | 1) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = 380 + 20;
    container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Desktop nav buttons */}
      <div className="hidden md:flex justify-end gap-2 mb-4 px-6 md:px-10">
        <button
          type="button"
          onClick={() => navigateCarousel(-1)}
          aria-label="Previous project"
          className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/40 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors glow-reactive"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => navigateCarousel(1)}
          aria-label="Next project"
          className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/40 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors glow-reactive"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll track — card's overflow-hidden clips the edges */}
      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-10 pb-10"
      >
        {projects.map((project, i) => (
          <WorkCard key={project.id} project={project} index={i} />
        ))}
        <div className="flex-none w-2 shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export const Home: React.FC = () => {

  const reiOrder = ["Metrics Hub", "BuyBox editor redesign", "Properties view redesign", "DM campaign"];
  const habiOrder = ["Smart funnel", "Internal Ops"];

  const reiProjects = PROJECTS.filter(p => p.category === '8020REI').sort(
    (a, b) => reiOrder.indexOf(a.title) - reiOrder.indexOf(b.title)
  );
  const habiProjects = PROJECTS.filter(
    p => p.category === 'Habi' && p.title !== 'Internal Ops'
  ).sort((a, b) => habiOrder.indexOf(a.title) - habiOrder.indexOf(b.title));
  const freelanceProjects = PROJECTS.filter(p => p.category === 'Freelance').slice(0, 1);
  const orderedProjects = [...reiProjects, ...habiProjects, ...freelanceProjects];

  const titles = [
    { desktop: "ai-driven platforms",    mobileLine1: "ai-driven",       mobileLine2: "platforms"   },
    { desktop: "prop-tech solutions",    mobileLine1: "prop-tech",       mobileLine2: "solutions"   },
    { desktop: "investor platforms",     mobileLine1: "investor",        mobileLine2: "platforms"   },
    { desktop: "operational dashboards", mobileLine1: "operational",     mobileLine2: "dashboards"  },
    { desktop: "high-stakes tools",      mobileLine1: "high-stakes",     mobileLine2: "tools"       },
    { desktop: "workflow-heavy SaaS",    mobileLine1: "workflow-heavy",  mobileLine2: "SaaS"        },
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [titles.length]);

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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <NavBar />

      <main className="max-w-6xl mx-auto px-3 md:px-5 pt-20 pb-6 space-y-3 md:space-y-4">

        {/* ── CARD 1: HERO ─────────────────────────────────────────────────── */}
        <div className={CARD}>
          <section className="px-6 md:px-10 min-h-[calc(100svh-5.5rem)] md:min-h-[calc(100vh-5.5rem)] flex flex-col py-14 md:py-20">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col gap-10 md:gap-12">

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <h1
                    className="font-bold tracking-tight"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
                  >
                    <span className="text-zinc-500">
                      <span className="block md:hidden">Designing</span>
                      <span className="block md:hidden">and building</span>
                      <span className="hidden md:block">Designing and building</span>
                    </span>
                    <span aria-live="polite" aria-atomic="true">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={titleIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className="block"
                        >
                          <span className="hidden md:block whitespace-nowrap">
                            {titles[titleIndex].desktop}
                          </span>
                          <span className="block md:hidden">
                            <span className="block">{titles[titleIndex].mobileLine1}</span>
                            <span className="block">{titles[titleIndex].mobileLine2}</span>
                          </span>
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </h1>

                  <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
                    I design and simplify complex desktop and mobile products through scalable design systems and vibecoding-driven workflows.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.0 }}
                >
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

              </div>
            </div>
          </section>
        </div>

        {/* ── CARD 2: TOOLS + INTERESTS ─────────────────────────────────────── */}
        <div className={CARD}>
          <section id="tools" className="px-6 md:px-10 py-10">
            <ScrollReveal>
              <ToolsCarousel />
            </ScrollReveal>
          </section>
          <div className="border-t border-zinc-800" />
          <section id="interests" className="px-6 md:px-10 py-10">
            <ScrollReveal>
              <InterestsRibbon />
            </ScrollReveal>
          </section>
        </div>

        {/* ── CARD 3: ABOUT + EXPERIENCE + EXPERTISE ────────────────────────── */}
        <div id="about" className={`${CARD} scroll-mt-4`}>
          <section className="px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">About</h2>
                <p className="text-zinc-300 leading-relaxed mb-8 text-lg md:text-xl font-light">
                  With over 7 years of experience, I bridge the gap between complex data and intuitive interfaces.
                  My work is grounded in research, validated by data, and accelerated by AI tools.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed">
                  I thrive in environments where I can build scalable products
                  and collaborate closely with engineering to ship polished, performant software.
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

            <div className="md:col-span-4">
              <ScrollReveal delay={0.2}>
                <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Experience</h2>
                <div className="space-y-3">
                  {EXPERIENCE.map((exp, i) => (
                    <ExperienceCard key={i} exp={exp} index={i} />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-4">
              <ScrollReveal delay={0.4}>
                <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Expertise</h2>
                <div className="space-y-10">
                  {SKILLS.map((group, i) => (
                    <div key={i}>
                      <h5 className="text-sm font-bold text-zinc-300 mb-4">{group.category}</h5>
                      <div className="flex flex-wrap gap-2.5">
                        {group.items.map(skill => (
                          <span
                            key={skill}
                            className="px-3.5 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono cursor-default"
                          >
                            {skill}
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
        <div id="work" className={`${CARD} scroll-mt-4`}>
          <ScrollReveal>
            <div className="px-6 md:px-10 pt-10 pb-2">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Selected Work</h2>
              <p className="text-zinc-500 text-sm font-light md:hidden">Swipe to browse · tap to open</p>
              <p className="text-zinc-500 text-sm font-light hidden md:block">Use arrows to browse · click to open</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ProjectCarousel projects={orderedProjects} />
          </ScrollReveal>
        </div>

        {/* ── CARD 5: CTA + FOOTER ──────────────────────────────────────────── */}
        <div id="cta" className={`${CARD} scroll-mt-4`}>
          <section className="px-6 md:px-10 pt-16 md:pt-20 pb-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-10">Let's build something scalable.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          <footer className="px-6 md:px-10 pb-12 pt-8 text-center text-zinc-700 text-xs font-mono border-t border-zinc-800">
            <ScrollReveal>
              <p>Built with Cursor, GPT codex, Claude and Gemini.</p>
              <p className="mt-2">© 2025 Germán David Alvarez.</p>
            </ScrollReveal>
          </footer>
        </div>

      </main>
    </div>
  );
};
