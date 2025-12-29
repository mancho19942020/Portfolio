import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { PROJECTS, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const habiProjects = PROJECTS.filter(p => p.category === 'Habi').sort(
    (a, b) => habiOrder.indexOf(a.title) - habiOrder.indexOf(b.title)
  );
  const freelanceProjects = PROJECTS.filter(p => p.category === 'Freelance').slice(0, 1);

  // Hero Text Rotation Logic
  const titles = [
    "PropTech Solutions",
    "Investor-focused platforms",
    "Operational dashboards",
    "High-stakes decision tools",
    "Workflow-heavy SaaS",
    "AI-driven platforms"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500); // Slow, relaxed timing
    return () => clearInterval(timer);
  }, [titles.length]);

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
        <section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col relative pt-16 pb-16">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl flex flex-col gap-8 md:gap-10"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Designing and building <br />
                  <div className="relative min-h-[2.4em] md:min-h-0 md:h-[1.2em] md:overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -50, opacity: 0, filter: 'blur(8px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:absolute md:top-0 md:left-0 text-zinc-500 block w-full whitespace-normal break-words"
                      >
                        {titles[index]}.
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h1>

                <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light">
                  I design and simplify complex desktop and mobile products through scalable design systems and vibecoding-driven workflows..
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
                      onClick={() => scrollToSection('work')}
                      className="glow-reactive glow-button w-full min-[770px]:w-44 px-8 py-4 border border-zinc-800 rounded-sm hover:border-zinc-500 transition-colors text-zinc-400 hover:text-white"
                    >
                      View Work
                    </button>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="glow-reactive glow-button w-full min-[770px]:w-44 px-8 py-4 border border-zinc-800 rounded-sm hover:border-zinc-500 transition-colors text-zinc-400 hover:text-white"
                    >
                      About Me
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('cta')}
                      className="glow-reactive glow-button w-full min-[770px]:w-44 px-8 py-4 bg-zinc-100 text-black font-semibold rounded-sm hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] col-span-2 min-[770px]:col-span-1"
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

        {/* PROJECTS SECTION */}
        <section id="work" className="py-32 md:py-48 border-t border-zinc-900 scroll-mt-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Selected Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">8020REI</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
                PropTech data provider
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 md:mb-32">
            {reiProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1} className={i === 0 || i === 3 ? "md:col-span-2" : "col-span-1"}>
                <ProjectCard project={project} large={i === 0 || i === 3} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Habi</h3>
              <p className="text-zinc-400 text-lg">PropTech mobile-first service provider for sellers and buyers</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 md:mb-32">
            {habiProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1} className="col-span-1">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Case study</h3>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
            {freelanceProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1} className="md:col-span-2">
                <ProjectCard project={project} large />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ABOUT & EXPERIENCE SECTION */}
        <section id="about" className="py-32 md:py-48 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 scroll-mt-24">
          <div className="md:col-span-4">
            <ScrollReveal>
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">About</h2>
              <p className="text-zinc-300 leading-relaxed mb-8 text-lg md:text-xl font-light">
                With over 7 years of experience, I bridge the gap between complex data and intuitive interfaces.
                My work is grounded in research, validated by data, and accelerated by AI tools.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                I thrive in environments where I can build scalable design systems (like Kairo)
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
              <div className="space-y-12">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="group">
                    <h4 className="font-semibold text-zinc-100 group-hover:text-white transition-colors text-lg mb-1">{exp.company}</h4>
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-base text-zinc-400">{exp.role}</span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-zinc-600">
                        <span>{exp.period}</span>
                        {exp.location ? <span>• {exp.location}</span> : null}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-zinc-500 leading-relaxed max-w-sm list-disc pl-4">
                      {exp.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
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
                        <span key={skill} className="px-3.5 py-1.5 rounded-sm bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono hover:border-zinc-700 hover:text-zinc-300 transition-colors cursor-default">
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

        {/* CTA */}
        <section id="cta" className="py-32 md:py-48 border-t border-zinc-900 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Let's build something scalable.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573015247033"
                className="glow-reactive glow-button inline-flex items-center justify-center px-10 py-4 bg-zinc-100 text-black font-bold rounded-sm hover:bg-white hover:scale-[1.02] transition-all text-base"
                aria-label="Contact via WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href="https://calendly.com/your-handle/meeting"
                target="_blank"
                rel="noreferrer"
                className="glow-reactive glow-button inline-flex items-center justify-center px-10 py-4 border border-zinc-800 text-zinc-200 font-semibold rounded-sm hover:border-zinc-500 hover:text-white transition-colors text-base"
              >
                Schedule meeting
              </a>
            </div>
          </ScrollReveal>
        </section>

        <footer className="py-20 text-center text-zinc-700 text-xs font-mono">
          <ScrollReveal>
            <p>© 2025 Germán David Alvarez.</p>
          </ScrollReveal>
        </footer>

      </main>
    </div>
  );
};
