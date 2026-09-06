import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
  Lightbulb,
  Presentation,
  Target,
  Users,
  X,
} from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { ImageLightbox } from './ImageLightbox';
import { PRESENTATION_STORIES, type PresentationStory } from './presentationStories';

type SlideContext = { openImage: (index: number) => void };
type Slide = { title: string; render: (context: SlideContext) => React.ReactNode };

const EASE = [0.16, 1, 0.3, 1] as const;

const SlideFrame: React.FC<{
  eyebrow: string;
  title: string;
  lead?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ eyebrow, title, lead, icon, children }) => (
  <section className="presentation-slide">
    <header className="presentation-slide-header">
      <div className="presentation-eyebrow">{icon}<span>{eyebrow}</span></div>
      <h1 data-presentation-title="true" tabIndex={-1} className="presentation-title">{title}</h1>
      {lead ? <p className="presentation-lead">{lead}</p> : null}
    </header>
    <div className="presentation-slide-body">{children}</div>
  </section>
);

const Point: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="presentation-point">
    <span className="presentation-point-mark"><Check aria-hidden="true" /></span>
    <span>{children}</span>
  </li>
);

const ImageButton: React.FC<{
  project: Project;
  index: number;
  className?: string;
  onOpen: (index: number) => void;
}> = ({ project, index, className = '', onOpen }) => {
  const image = project.images[index];
  if (!image) return null;
  return (
    <button
      type="button"
      className={`presentation-image ${className}`}
      onClick={() => onOpen(index)}
      aria-label={`Open image: ${image.alt}`}
    >
      <img src={image.src} alt={image.alt} />
      {image.caption ? <span>{image.caption}</span> : null}
    </button>
  );
};

const buildSlides = (project: Project, story: PresentationStory): Slide[] => {
  const coverImage = project.coverImage ?? project.images[0];
  const coverTitle = project.showcaseTitle ?? project.title;
  const decisionImageIndex = project.images.length > 1 ? 1 : 0;
  const resultImageIndexes = project.images.length > 3
    ? [project.images.length - 2, project.images.length - 1]
    : project.images.map((_, imageIndex) => imageIndex).slice(-2);

  return [
    {
      title: coverTitle,
      render: () => (
        <section className="presentation-cover">
          {coverImage ? <img className="presentation-cover-image" src={coverImage.src} alt="" /> : null}
          <div className="presentation-cover-shade" />
          <div className="presentation-cover-copy">
            <p className="presentation-cover-meta">{project.narrative.introduction.company} · {project.narrative.introduction.year}</p>
            <h1 data-presentation-title="true" tabIndex={-1}>
              {story.coverLines
                ? story.coverLines.map((line) => <span key={line}>{line}</span>)
                : coverTitle}
            </h1>
            <p className="presentation-cover-thesis">{project.subtitle}</p>
            <div className="presentation-cover-details">
              <span>{project.narrative.role.title}</span>
              <span>{project.duration}</span>
              <span>{project.type}</span>
            </div>
          </div>
        </section>
      ),
    },
    {
      title: 'The stakes',
      render: () => (
        <SlideFrame eyebrow="01 · Context and success" title="What had to change" lead={story.stakes} icon={<Target aria-hidden="true" />}>
          <div className="presentation-two-column">
            <div className="presentation-callout">
              <p className="presentation-label">Success meant</p>
              <p className="presentation-callout-copy">{story.successDefinition}</p>
            </div>
            <div>
              <p className="presentation-label">What we intended to move</p>
              <ul className="presentation-point-list">{story.intendedMetrics.map((item) => <Point key={item}>{item}</Point>)}</ul>
            </div>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: 'Evidence and insight',
      render: () => (
        <SlideFrame eyebrow="02 · Evidence" title="What changed the direction" icon={<Eye aria-hidden="true" />}>
          <div className="presentation-two-column presentation-evidence-layout">
            <div>
              <p className="presentation-label">What we learned</p>
              <ul className="presentation-numbered-list">
                {story.evidence.map((item, itemIndex) => (
                  <li key={item}><span>{String(itemIndex + 1).padStart(2, '0')}</span><p>{item}</p></li>
                ))}
              </ul>
            </div>
            <div className="presentation-insight">
              <Lightbulb aria-hidden="true" />
              <p className="presentation-label">The insight</p>
              <blockquote>{story.insight}</blockquote>
            </div>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: 'Mental model',
      render: () => (
        <SlideFrame
          eyebrow="03 · Mental model"
          title="How I made sense of the problem"
          lead="The process changed with each case. This is the model that connected evidence to a product decision."
          icon={<Lightbulb aria-hidden="true" />}
        >
          <ol className="presentation-process">
            {story.process.map((step, stepIndex) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: stepIndex * 0.045, ease: EASE }}
              >
                <span className="presentation-process-number">{String(stepIndex + 1).padStart(2, '0')}</span>
                <div><h2>{step.title}</h2><p>{step.detail}</p></div>
              </motion.li>
            ))}
          </ol>
        </SlideFrame>
      ),
    },
    {
      title: 'Design decisions',
      render: ({ openImage }) => (
        <SlideFrame eyebrow="04 · Product decisions" title="What I chose and why" icon={<Presentation aria-hidden="true" />}>
          <div className="presentation-decision-layout">
            <div className="presentation-decisions">
              {story.decisions.map((decision, decisionIndex) => (
                <article key={decision.title}>
                  <span>{String(decisionIndex + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{decision.title}</h2>
                    <p>{decision.detail}</p>
                    {decision.tradeoff ? <small>Tradeoff: {decision.tradeoff}</small> : null}
                  </div>
                </article>
              ))}
            </div>
            <ImageButton project={project} index={decisionImageIndex} onOpen={openImage} className="presentation-image-tall" />
          </div>
        </SlideFrame>
      ),
    },
    {
      title: 'Build and collaboration',
      render: () => (
        <SlideFrame eyebrow="05 · Design to delivery" title="How the work got built" lead={`My role: ${project.narrative.role.title}`} icon={<Users aria-hidden="true" />}>
          <div className="presentation-build-layout">
            <ul className="presentation-point-list">{story.collaboration.map((item) => <Point key={item}>{item}</Point>)}</ul>
            <div className="presentation-handoff" aria-label="Collaboration model">
              <div><Lightbulb aria-hidden="true" /><span>Frame</span></div><span className="presentation-handoff-line" />
              <div><Presentation aria-hidden="true" /><span>Design</span></div><span className="presentation-handoff-line" />
              <div><Code2 aria-hidden="true" /><span>Build</span></div><span className="presentation-handoff-line" />
              <div><Eye aria-hidden="true" /><span>Learn</span></div>
            </div>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: 'Outcomes and next questions',
      render: ({ openImage }) => (
        <SlideFrame
          eyebrow="06 · Outcomes"
          title="What moved, and what did not"
          lead="Targets and verified results stay separate."
          icon={<Target aria-hidden="true" />}
        >
          <div className="presentation-results-layout">
            <div className="presentation-results-column presentation-results-observed">
              <p className="presentation-label">Observed</p>
              <ul>{story.observed.map((item) => <Point key={item}>{item}</Point>)}</ul>
            </div>
            <div className="presentation-results-column">
              <p className="presentation-label">Still to validate</p>
              <ul>{story.stillToValidate.map((item) => <Point key={item}>{item}</Point>)}</ul>
            </div>
            <div className="presentation-result-images">
              {resultImageIndexes.map((imageIndex) => (
                <ImageButton key={project.images[imageIndex]?.src ?? imageIndex} project={project} index={imageIndex} onOpen={openImage} />
              ))}
            </div>
          </div>
        </SlideFrame>
      ),
    },
  ];
};

const isInteractiveTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest('button, a, input, textarea, select, [role="button"], [contenteditable="true"]'));
};

const PresentationDeck: React.FC<{ project: Project; story: PresentationStory }> = ({ project, story }) => {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const slides = useMemo(() => buildSlides(project, story), [project, story]);
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<number | null>(null);

  const lightboxOpen = lightboxIndex !== null;
  const goTo = useCallback((next: number, nextDirection: number) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, next));
    setSlide((current) => current[0] === bounded ? current : [bounded, nextDirection]);
  }, [slides.length]);
  const paginate = useCallback((amount: number) => goTo(index + amount, amount), [goTo, index]);
  const exit = useCallback(() => navigate(`/project/${project.id}`), [navigate, project.id]);

  useEffect(() => stageRef.current?.focus(), []);

  useEffect(() => {
    window.clearTimeout(titleRef.current ?? undefined);
    titleRef.current = window.setTimeout(() => {
      const headings = document.querySelectorAll<HTMLElement>('[data-presentation-title="true"]');
      headings[headings.length - 1]?.focus({ preventScroll: true });
    }, reducedMotion ? 0 : 220);
    return () => window.clearTimeout(titleRef.current ?? undefined);
  }, [index, reducedMotion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxOpen) return;
      if (event.key === 'Escape') { exit(); return; }
      if (isInteractiveTarget(event.target)) return;
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        paginate(1);
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        paginate(-1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        goTo(0, -1);
      } else if (event.key === 'End') {
        event.preventDefault();
        goTo(slides.length - 1, 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [exit, goTo, lightboxOpen, paginate, slides.length]);

  const variants = {
    enter: (value: number) => ({ opacity: 0, x: reducedMotion ? 0 : value > 0 ? 22 : -22 }),
    center: { opacity: 1, x: 0 },
    exit: (value: number) => ({ opacity: 0, x: reducedMotion ? 0 : value > 0 ? -22 : 22 }),
  };

  return (
    <div
      ref={stageRef}
      tabIndex={-1}
      role="region"
      aria-label={`${project.title} presentation`}
      className="presentation-stage"
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (lightboxOpen || touchStart.current === null) return;
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStart.current;
        if (Math.abs(delta) > 60) paginate(delta < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <header className="presentation-controls presentation-controls-top">
        <span aria-hidden="true" />
        <div className="presentation-counter" aria-live="polite"><Presentation aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span></div>
        <button type="button" onClick={exit} className="presentation-icon-button" aria-label="Exit presentation" data-tooltip="Exit presentation"><X aria-hidden="true" /></button>
      </header>

      <div className="presentation-viewport">
        <AnimatePresence custom={direction} mode="sync" initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: EASE }}
            className="presentation-motion-layer"
          >
            {slides[index].render({ openImage: setLightboxIndex })}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="presentation-controls presentation-controls-bottom">
        <button type="button" onClick={() => paginate(-1)} disabled={index === 0} className="presentation-icon-button" aria-label="Previous slide"><ChevronLeft aria-hidden="true" /></button>
        <div className="presentation-progress" aria-hidden="true"><span style={{ width: `${((index + 1) / slides.length) * 100}%` }} /></div>
        <button type="button" onClick={() => paginate(1)} disabled={index === slides.length - 1} className="presentation-icon-button" aria-label="Next slide"><ChevronRight aria-hidden="true" /></button>
      </footer>

      <ImageLightbox images={project.images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  );
};

export const ProjectPresentation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((candidate) => candidate.id === id);
  const story = id ? PRESENTATION_STORIES[id] : undefined;

  if (!project || !story) return <Navigate to="/" replace />;
  return <PresentationDeck key={project.id} project={project} story={story} />;
};
