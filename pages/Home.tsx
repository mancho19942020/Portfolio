import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { NavBar } from '../components/NavBar';
import { LoadingImage } from '../components/LoadingImage';
import { HeroPhysics } from '../components/HeroPhysics';
import { resolvedLogos } from '../components/ToolsCarousel';
import { EXPERIENCE, PROJECTS, SKILLS } from '../constants';

const projectOrder = [
  '8020-roof',
  'phoenix',
  'habi-funnels',
  '8020-metrics-hub',
  '8020-property-list',
  '8020-buybox',
  'freelance-1',
];

const orderedProjects = PROJECTS
  .filter((project) => projectOrder.includes(project.id))
  .sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

function Ticker({ items, duration = 48, reverse = false, tools = false }: {
  items: Array<{ label: string; src?: string; darkContrast?: boolean }>;
  duration?: number;
  reverse?: boolean;
  tools?: boolean;
}) {
  return (
    <div className="dashboard-ticker" aria-label={items.map((item) => item.label).join(', ')}>
      <div
        className={'dashboard-ticker__track' + (reverse ? ' dashboard-ticker__track--reverse' : '')}
        style={{ animationDuration: String(duration) + 's' }}
        aria-hidden="true"
      >
        {[...items, ...items].map((item, index) => (
          <span className={'dashboard-pill' + (tools ? ' dashboard-pill--tool' : '')} key={item.label + index}>
            {item.src && <img src={item.src} alt="" data-dark-contrast={item.darkContrast || undefined} loading="lazy" />}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="dashboard-skeleton" aria-hidden="true">
      <div className="dashboard-skeleton__left">
        <div className="dashboard-skeleton__hero dashboard-skeleton__block">
          <i /><i /><i />
        </div>
        <div className="dashboard-skeleton__lower">
          <div className="dashboard-skeleton__experience">
            {EXPERIENCE.map((item) => <div className="dashboard-skeleton__block" key={item.company}><i /><i /></div>)}
          </div>
          <div className="dashboard-skeleton__skills dashboard-skeleton__block">
            <i /><i /><i /><i />
          </div>
        </div>
      </div>
      <div className="dashboard-skeleton__projects">
        {Array.from({ length: 4 }, (_, index) => <div className="dashboard-skeleton__block" key={index}><b /><i /><i /></div>)}
      </div>
    </div>
  );
}

export const Home: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), reduceMotion ? 0 : 650);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  // A small, slow peek makes the mobile project rail discoverable without
  // taking control away from a person who has started swiping it.
  useEffect(() => {
    const rail = projectsRef.current;
    if (!ready || !rail || reduceMotion || !window.matchMedia('(max-width: 699px)').matches) return;
    let stopped = false;
    let frame = 0;
    const stop = () => { stopped = true; cancelAnimationFrame(frame); };
    const startTimer = window.setTimeout(() => {
      const started = performance.now();
      const animate = (now: number) => {
        if (stopped) return;
        const progress = Math.min((now - started) / 4200, 1);
        rail.scrollLeft = 38 * Math.sin(Math.PI * progress);
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, 900);
    rail.addEventListener('pointerdown', stop, { once: true });
    rail.addEventListener('wheel', stop, { once: true });
    return () => {
      stop();
      window.clearTimeout(startTimer);
      rail.removeEventListener('pointerdown', stop);
      rail.removeEventListener('wheel', stop);
    };
  }, [ready, reduceMotion]);

  return (
    <div className="dashboard-page">
      <NavBar />
      <main className={'dashboard' + (ready ? ' dashboard--ready' : '') + (activeExperience !== null ? ' dashboard--experience-open' : '') + (hoveredProject ? ' dashboard--project-hovered' : '')}>
        <div className="dashboard__left">
          <section ref={heroRef} className={'dashboard-hero' + (activeExperience !== null ? ' is-condensed' : '')} aria-label="Introduction">
            <HeroPhysics containerRef={heroRef} active={ready} />
            <h1><span className="dashboard-hero__typed dashboard-hero__typed--name">Germán Alvarez</span></h1>
            <p className="dashboard-hero__description" aria-hidden={activeExperience !== null}>
              I design and build data-heavy B2B SaaS and mobile-first products, from research and metrics to production code.
            </p>
            <p className="dashboard-hero__role"><span className="dashboard-hero__typed dashboard-hero__typed--role">Sr. product designer</span></p>
          </section>

          <div className="dashboard__lower">
            <section className="dashboard-experience" aria-label="Experience">
              {EXPERIENCE.map((experience, index) => {
                const expanded = activeExperience === index;
                const condensed = activeExperience !== null && !expanded;
                const detailsId = 'dashboard-experience-' + index;
                return (
                  <article
                    key={experience.company}
                    className={'dashboard-experience__card' + (expanded ? ' is-expanded' : '') + (condensed ? ' is-condensed' : '')}
                    onClick={() => setActiveExperience(expanded ? null : index)}
                  >
                    <button
                      type="button"
                      className="dashboard-experience__trigger"
                      aria-expanded={expanded}
                      aria-controls={detailsId}
                    >
                      <span className="dashboard-experience__heading">
                        <strong>{experience.company}</strong>
                        <span>{experience.role}, {experience.period}</span>
                      </span>
                      <span className="dashboard-experience__subline" aria-hidden={condensed}>
                        <span>{experience.location || 'On-site · Bogotá'}</span>
                      </span>
                    </button>
                    <div id={detailsId} className="dashboard-experience__details" aria-hidden={!expanded}>
                      <ul>
                        {experience.description.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </div>
                    <ChevronDown size={15} className={'dashboard-experience__chevron' + (expanded ? ' is-expanded' : '')} aria-hidden="true" />
                  </article>
                );
              })}
            </section>

            <section className="dashboard-skills" aria-label="Skills and tools">
              <div className="dashboard-skills__tools">
                <Ticker items={resolvedLogos.slice(0, 10)} duration={92} tools />
                <Ticker items={resolvedLogos.slice(10, 20)} duration={98} reverse tools />
                <Ticker items={resolvedLogos.slice(20)} duration={104} tools />
              </div>
              <div className="dashboard-skills__groups">
                {SKILLS.map((group, index) => {
                  const midpoint = Math.ceil(group.items.length / 2);
                  return (
                    <div className="dashboard-skills__group" key={group.category}>
                      <h2>{group.category}</h2>
                      <Ticker items={group.items.slice(0, midpoint).map((label) => ({ label }))} duration={80 + index * 6} reverse={index === 1} />
                      <Ticker items={group.items.slice(midpoint).map((label) => ({ label }))} duration={88 + index * 6} reverse={index !== 1} />
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        <section className="dashboard-projects" aria-label="Selected projects">
          <div className="dashboard-projects__rail no-scrollbar" ref={projectsRef} data-lenis-prevent>
            {orderedProjects.map((project, index) => (
              <Link
                to={'/project/' + project.id}
                key={project.id}
                className={'dashboard-project' + (hoveredProject === project.id ? ' is-hovered' : '')}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocus={() => setHoveredProject(project.id)}
                onBlur={() => setHoveredProject(null)}
                aria-label={'View ' + project.title + ' project'}
              >
                <div className="dashboard-project__image">
                  <LoadingImage
                    src={project.coverImage?.src || project.images[0]?.src}
                    alt={project.coverImage?.alt || project.title}
                    wrapperClassName="dashboard-project__image-wrap"
                    className="dashboard-project__img"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                </div>
                <div className="dashboard-project__copy">
                  <h2>{project.showcaseTitle || project.title}</h2>
                  <p>{project.showcasePreview || project.subtitle}</p>
                </div>
                <span className="dashboard-project__arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </Link>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {!ready && (
            <motion.div className="dashboard-loading" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}>
              <DashboardSkeleton />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
