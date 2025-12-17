import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { PROJECTS, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Home: React.FC = () => {
  // Filter projects by category
  const reiProjects = PROJECTS.filter(p => p.category === '8020REI');
  const habiProjects = PROJECTS.filter(p => p.category === 'Habi');
  const personalProjects = PROJECTS.filter(p => p.category === 'Personal');

  // Hero Text Rotation Logic
  const titles = ["Scalable Systems", "AI-driven Platforms"];
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
        <section className="min-h-[90vh] flex flex-col justify-center pt-32 pb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1]">
              Product Designer building <br />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -50, opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 text-zinc-500 block"
                  >
                    {titles[index]}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-16 font-light">
              I design and simplify complex desktop and mobile products through scalable design systems and vibecoding-driven workflows.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="flex gap-6 items-center"
            >
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 bg-zinc-100 text-black font-semibold rounded-sm hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border border-zinc-800 rounded-sm hover:border-zinc-500 transition-colors text-zinc-400 hover:text-white"
              >
                About Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="absolute bottom-12 left-6 md:left-12"
          >
            <ArrowDown className="text-zinc-700 w-6 h-6 animate-bounce" />
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="py-40 md:py-64 border-t border-zinc-900 scroll-mt-24">
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Selected Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">8020REI Projects</h3>
              <p className="text-zinc-400 max-w-xl text-lg font-light leading-relaxed">
                Major initiatives: Redesigns of core features, 0-to-1 product launches, and the foundational Kairo Design System.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Habi Projects</h3>
              <p className="text-zinc-500 text-lg">Optimization of acquisition funnels and internal operational tools.</p>
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
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-400">Personal Exploration</h3>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {personalProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1} className="col-span-1">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ABOUT & EXPERIENCE SECTION */}
        <section id="about" className="py-40 md:py-64 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 scroll-mt-24">
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
            </ScrollReveal>
          </div>

          <div className="md:col-span-4">
            <ScrollReveal delay={0.2}>
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Experience</h2>
              <div className="space-y-12">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="group">
                    <h4 className="font-semibold text-zinc-100 group-hover:text-white transition-colors text-lg mb-1">{exp.company}</h4>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-base text-zinc-400">{exp.role}</span>
                      <span className="text-xs font-mono text-zinc-600">{exp.period}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                      {exp.description[0]}
                    </p>
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
        <section className="py-40 md:py-64 border-t border-zinc-900 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Let's build something scalable.</h2>
            <a href="mailto:mancho19942010@hotmail.com" className="inline-block px-12 py-5 bg-zinc-100 text-black font-bold rounded-sm hover:bg-white hover:scale-[1.02] transition-all text-lg">
              Get in Touch
            </a>
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