import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { ScrollReveal } from '../components/ScrollReveal';
import { InterestsRibbon } from '../components/InterestsRibbon';
import { PROJECTS, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ExperienceItem = (typeof EXPERIENCE)[number];
type ExperienceItemWithSecondary = ExperienceItem & {
  secondaryRole?: string;
  secondaryPeriod?: string;
  secondaryLocation?: string;
};

const ExperienceCard: React.FC<{ exp: ExperienceItemWithSecondary; index: number }> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = `experience-details-${index}`;

  return (
    <div className="rounded-sm border border-zinc-800 bg-zinc-900/40 px-3 py-3">
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
          <span className="sr-only">{isExpanded ? 'Collapse experience details' : 'Expand experience details'}</span>
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

export const Home: React.FC = () => {
  // Filter projects by category
  const reiOrder = [
    "BuyBox editor redesign",
    "Property list and view redesign",
    "Kairo design system",
    "DM Automation"
  ];
  const habiOrder = ["Smart funnel", "Internal Ops"];

  const reiProjects = PROJECTS.filter(p => p.category === '8020REI').sort(
    (a, b) => reiOrder.indexOf(a.title) - reiOrder.indexOf(b.title)
  );
  const habiProjects = PROJECTS.filter(
    p => p.category === 'Habi' && p.title !== 'Internal Ops'
  ).sort((a, b) => habiOrder.indexOf(a.title) - habiOrder.indexOf(b.title));
  const freelanceProjects = PROJECTS.filter(p => p.category === 'Freelance').slice(0, 1);
  const initialWorkProject = reiProjects[0] ?? habiProjects[0] ?? freelanceProjects[0];
  const [activeProjectId, setActiveProjectId] = useState(initialWorkProject?.id ?? '');
  const activeProject = PROJECTS.find((project) => project.id === activeProjectId) ?? initialWorkProject;

  const workSections = [
    {
      title: '8020REI',
      description: 'PropTech, direct mail automation, skip trace and predictive data provider',
      projects: reiProjects
    },
    {
      title: 'Habi',
      description: 'PropTech mobile-first service provider for sellers and buyers',
      projects: habiProjects
    },
    {
      title: 'Case study',
      description: '',
      projects: freelanceProjects
    }
  ];

  // Hero Text Rotation Logic
  const titles = [
    { mobileTop: "ai-driven", mobileBottom: "platforms", desktop: "ai-driven platforms" },
    { mobileTop: "prop-tech", mobileBottom: "solutions", desktop: "prop-tech solutions" },
    { mobileTop: "investor-focused", mobileBottom: "platforms", desktop: "investor-focused platforms" },
    { mobileTop: "operational", mobileBottom: "dashboards", desktop: "operational dashboards" },
    { mobileTop: "high-stakes", mobileBottom: "decision tools", desktop: "high-stakes decision tools" },
    { mobileTop: "workflow-heavy", mobileBottom: "SaaS", desktop: "workflow-heavy SaaS" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500); // Slow, relaxed timing
    return () => clearInterval(timer);
  }, [titles.length]);

  useEffect(() => {
    const targetId = sessionStorage.getItem('scroll-target');
    if (!targetId) {
      return;
    }

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

    if (tryScroll()) {
      return;
    }

    const retry = setTimeout(() => {
      if (!tryScroll()) {
        sessionStorage.removeItem('scroll-target');
        sessionStorage.removeItem('scroll-home');
      }
    }, 200);

    return () => clearTimeout(retry);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white pb-32">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HERO SECTION */}
        <section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col relative pt-24 md:pt-16 pb-16">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl flex flex-col gap-8 md:gap-10"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.1]">
                  <span className="text-zinc-500 block md:inline">Designing</span>
                  <span className="text-zinc-500 block md:inline md:ml-2">and building</span>
                  <br />
                  <div className="relative min-h-[2.4em] md:min-h-0 md:h-[1.2em] md:overflow-hidden -mt-8 md:mt-0">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -50, opacity: 0, filter: 'blur(8px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:absolute md:top-0 md:left-0 text-zinc-100 block w-full whitespace-normal break-words"
                      >
                        <span className="block md:hidden">{titles[index].mobileTop}</span>
                        <span className="block md:hidden">{titles[index].mobileBottom}</span>
                        <span className="hidden md:inline">{titles[index].desktop}</span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h1>

                <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light">
                  I design and simplify complex desktop and mobile products through scalable design systems and vibecoding-driven workflows.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="flex flex-col gap-8 w-full"
              >
                <div className="flex flex-col gap-6 min-[770px]:flex-row min-[770px]:items-center">
                  <div className="grid grid-cols-2 gap-4 w-full min-[770px]:flex min-[770px]:w-auto min-[770px]:items-center">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="glow-reactive glow-button btn-outline w-full min-[770px]:w-44 px-8 py-4 border border-zinc-800 rounded-sm font-semibold transition-colors"
                    >
                      About Me
                    </button>
                    <button
                      onClick={() => scrollToSection('work')}
                      className="glow-reactive glow-button btn-outline w-full min-[770px]:w-44 px-8 py-4 border border-zinc-800 rounded-sm font-semibold transition-colors"
                    >
                      View Work
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('cta')}
                      className="glow-reactive glow-button btn-primary w-full min-[770px]:w-44 px-8 py-4 font-semibold rounded-sm transition-all hover:scale-[1.02] active:scale-[0.98] col-span-2 min-[770px]:col-span-1"
                    >
                      Let's Talk
                    </button>
                  </div>
                  <div className="w-full flex items-center py-6 min-[770px]:py-0 min-[770px]:w-auto min-[770px]:ml-auto">
                    <ArrowDown className="text-zinc-700 w-6 h-6 animate-bounce" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTERESTS RIBBON */}
        <section id="interests" className="py-10 md:py-12 scroll-mt-24">
          <ScrollReveal>
            <InterestsRibbon />
          </ScrollReveal>
        </section>

        {/* ABOUT & EXPERIENCE SECTION */}
        <section id="about" className="py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 scroll-mt-24">
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
                    <p className="text-zinc-200">Master’s in Branding and Brand Strategy, Design and Visual Communication</p>
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
              <div className="space-y-4">
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
                        <span key={skill} className="px-3.5 py-1.5 rounded-sm bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono cursor-default">
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

        {/* PROJECTS SECTION */}
        <section id="work" className="py-24 md:py-36 scroll-mt-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Selected Work</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-16">
            <div className="space-y-12">
              {workSections.map((section, sectionIndex) => (
                <ScrollReveal key={section.title} delay={sectionIndex * 0.1}>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">{section.title}</h3>
                      {section.description ? (
                        <p className="text-zinc-500 text-sm md:text-base font-light mt-2 max-w-2xl">
                          {section.description}
                        </p>
                      ) : null}
                    </div>
                    <ol>
                      {section.projects.map((project, projectIndex) => {
                        const isActive = project.id === activeProject?.id;
                        return (
                          <li key={project.id} className="border-t border-zinc-800 first:border-t-0">
                            <Link
                              to={`/project/${project.id}`}
                              onClick={() => {
                                sessionStorage.setItem('scroll-home', String(window.scrollY));
                                sessionStorage.setItem('scroll-target', `project-${project.id}`);
                              }}
                              onMouseEnter={() => setActiveProjectId(project.id)}
                              onFocus={() => setActiveProjectId(project.id)}
                              id={`project-${project.id}`}
                              aria-current={isActive ? 'true' : undefined}
                              className={`group flex items-start gap-4 py-4 transition-colors ${isActive ? 'text-zinc-100' : 'text-zinc-300 hover:text-zinc-100'}`}
                            >
                              <span className="mt-1 text-[10px] font-mono tracking-widest text-zinc-500">
                                {String(projectIndex + 1).padStart(2, '0')}
                              </span>
                              <div className="flex-1">
                                <h4 className="text-lg md:text-xl font-semibold">
                                  {project.title}
                                </h4>
                                <p className="text-xs md:text-sm text-zinc-500 font-medium">
                                  {project.subtitle}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono text-zinc-500">
                                      /{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-2">
                  <AnimatePresence mode="wait">
                    {activeProject?.images?.[0] ? (
                      <motion.img
                        key={activeProject.id}
                        src={activeProject.images[0].src}
                        alt={activeProject.images[0].alt}
                        className="h-[420px] w-full rounded-xl object-cover"
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      />
                    ) : null}
                  </AnimatePresence>
                </div>
                {activeProject ? (
                  <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{activeProject.category}</span>
                    <span>{activeProject.title}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 md:py-36 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Let's build something scalable.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/mancho19942020/30min"
                target="_blank"
                rel="noreferrer"
                className="glow-reactive glow-button btn-outline inline-flex items-center justify-center px-12 py-4 border border-zinc-800 font-semibold rounded-sm transition-colors text-base w-full sm:w-60 whitespace-nowrap"
              >
                Schedule meeting
              </a>
              <a
                href="https://wa.me/573015247033"
                target="_blank"
                rel="noreferrer"
                className="glow-reactive glow-button btn-primary inline-flex items-center justify-center px-12 py-4 font-semibold rounded-sm hover:scale-[1.02] transition-all text-base w-full sm:w-60 whitespace-nowrap"
                aria-label="Contact via WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </section>

        <footer className="py-20 text-center text-zinc-700 text-xs font-mono">
          <ScrollReveal>
            <p>This portfolio was built using only free resources and AI agents, such as ChatGPT Codex, Gemini Pro and Cursor as code editor.</p>
            <p className="mt-2">© 2025 Germán David Alvarez.</p>
          </ScrollReveal>
        </footer>

      </main>
    </div>
  );
};
