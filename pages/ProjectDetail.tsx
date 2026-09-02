import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectNarrativeChapter } from '../types';
import { NavBar } from '../components/NavBar';
import { ImageLightbox } from '../components/ImageLightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import nowAppResearchPdf from '../assets/docs/nowapp-research.pdf';

// Shared card shell — matches home page section cards
const CARD = 'section-card rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden';

// ─── Collapsible act card ─────────────────────────────────────────────────────
const ActCard: React.FC<{
  chapter: ProjectNarrativeChapter;
  index: number;
  defaultOpen?: boolean;
}> = ({ chapter, index, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasMore = chapter.paragraphs.length > 1 || (chapter.highlights?.length ?? 0) > 0;
  const contentId = `act-content-${index}`;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      {/* Always-visible header: label + title + first paragraph */}
      <div className="px-5 pt-5 pb-4">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5">
          {chapter.label}
        </p>
        <h3 className="text-base font-semibold text-zinc-100 leading-snug">
          {chapter.title}
        </h3>
        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
          {chapter.paragraphs[0]}
        </p>
      </div>

      {hasMore ? (
        <>
          {/* Expandable body */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id={contentId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-4">
                  {chapter.paragraphs.slice(1).map((para) => (
                    <p key={para} className="text-sm text-zinc-300 leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {chapter.highlights && chapter.highlights.length > 0 ? (
                    <div className="flex flex-col gap-2 pt-1">
                      {chapter.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 items-start rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                          <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle footer */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className="w-full px-5 py-3.5 border-t border-zinc-800 flex items-center justify-between gap-3 text-left hover:bg-zinc-800/20 transition-colors"
          >
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              {isOpen ? 'Collapse' : 'See details'}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-zinc-600 shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </>
      ) : (
        <div className="h-2" />
      )}
    </div>
  );
};

// ─── Fallback chapters for projects without custom narrative ──────────────────
const buildFallbackChapters = (project: (typeof PROJECTS)[number]): ProjectNarrativeChapter[] => {
  const focusHighlights = [
    ...project.narrative.challenge.painPoints,
    ...project.narrative.challenge.constraints,
  ];
  return [
    {
      label: 'Act 01',
      title: 'Context and product tension',
      paragraphs: [
        project.narrative.introduction.summary,
        project.narrative.challenge.summary,
      ],
      highlights: focusHighlights.slice(0, 5),
    },
    {
      label: 'Act 02',
      title: 'What discovery made clear',
      paragraphs: [
        'Discovery reframed the scope around concrete user behavior, operational limits, and the decisions users needed to make with confidence.',
      ],
      highlights: project.narrative.challenge.insights,
    },
    {
      label: 'Act 03',
      title: 'How the solution was shaped',
      paragraphs: [
        'The solution focused on reducing friction, introducing guidance at the right moments, and aligning design decisions with measurable product outcomes.',
      ],
      highlights: project.narrative.approach,
    },
    {
      label: 'Act 04',
      title: 'Impact and follow-through',
      paragraphs: [
        'Success was measured through adoption, execution quality, and confidence in decision making after release.',
      ],
      highlights: project.narrative.outcome,
    },
  ];
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const primaryImages = project.images.slice(0, 2);
  const secondaryImages = project.images.slice(2);
  const isCaseStudy = project.category === 'Freelance';
  const categoryLabel = isCaseStudy ? 'UX/UI case study' : project.category;
  const showNowAppResearch = project.id === 'freelance-1';
  const chapters = project.narrative.chapters ?? buildFallbackChapters(project);
  const snapshot = project.caseStudySnapshot;

  const sectionMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <NavBar />

      <main className="max-w-6xl mx-auto px-3 md:px-5 pt-20 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-4">

          {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
          <div className="space-y-3 md:space-y-4">

            {/* Card 1: Header — tag, title, subtitle, meta, summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={CARD}
            >
              <div className="px-6 md:px-10 py-10 space-y-5">
                {/* Company tag + project type */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-[10px] font-mono text-zinc-300${
                      isCaseStudy ? '' : ' uppercase'
                    }`}
                  >
                    {categoryLabel}
                  </span>
                  {!isCaseStudy && (
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                      {project.type}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1]">
                  {project.title}
                </h1>

                <p className="text-xl text-zinc-400 leading-relaxed">{project.subtitle}</p>

                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                  {project.narrative.introduction.company}
                  {' · '}
                  {project.narrative.introduction.industry}
                  {' · '}
                  {project.narrative.introduction.year}
                </p>

                <p className="text-lg text-zinc-200 leading-relaxed font-light">
                  {project.narrative.introduction.summary}
                </p>

                {showNowAppResearch && (
                  <a
                    href={nowAppResearchPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-reactive glow-button btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Review research document
                    <Search className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}

              </div>
            </motion.div>

            {snapshot && (
              <motion.section {...sectionMotion} className={CARD} aria-labelledby="case-snapshot-heading">
                <div className="px-6 md:px-10 py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                    <h2
                      id="case-snapshot-heading"
                      className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]"
                    >
                      Case study at a glance
                    </h2>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      Evidence before output
                    </p>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      ['Business problem', snapshot.businessProblem],
                      ['Discovery and constraints', snapshot.discoveryAndConstraints],
                      ['Key design decision', snapshot.keyDesignDecision],
                      ['Observed impact', snapshot.observedImpact],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4"
                      >
                        <dt className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                          {label}
                        </dt>
                        <dd className="mt-2 text-sm text-zinc-300 leading-relaxed">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.section>
            )}

            {/* Mobile images — first 2 */}
            {primaryImages.length > 0 && (
              <div className="lg:hidden space-y-3">
                {primaryImages.map((image, i) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="block w-full rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden cursor-zoom-in p-0 text-left"
                    aria-label={`Open image ${i + 1} of ${project.images.length}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Card 2: Role — title, responsibility cards, duration, tools */}
            <motion.div {...sectionMotion} className={CARD}>
              <div className="px-6 md:px-10 py-10 space-y-6">
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">Role</h2>

                <p className="text-lg text-zinc-200">{project.narrative.role.title}</p>

                {/* Each responsibility as its own card */}
                <div className="flex flex-col gap-2">
                  {project.narrative.role.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3.5"
                    >
                      <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Team — only when project credits collaborators */}
                {project.team && (
                  <div className="pt-2 space-y-4">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      Team
                    </p>
                    {project.team.note ? (
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.team.note}
                      </p>
                    ) : null}
                    <div className="flex flex-col gap-2">
                      {project.team.members.map((member) => (
                        <div
                          key={member.name}
                          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3.5"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                            <p className="text-sm text-zinc-200 font-semibold">
                              {member.name}
                            </p>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              {member.role}
                            </p>
                          </div>
                          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                            {member.contribution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Duration + Tools stacked below */}
                <div className="space-y-6 pt-2">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                      Duration
                    </p>
                    <p className="text-sm text-zinc-300">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">
                      Tools &amp; Tech
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3.5 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Case narrative — collapsible act cards */}
            <motion.div {...sectionMotion} className={CARD}>
              <div className="px-6 md:px-10 pt-10 pb-4">
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                  Case narrative
                </h2>
              </div>
              <div className="px-6 md:px-10 pb-10 space-y-3">
                {chapters.map((chapter, i) => (
                  <ActCard
                    key={`${chapter.label}-${chapter.title}`}
                    chapter={chapter}
                    index={i}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </motion.div>

            {/* Mobile images — rest */}
            {secondaryImages.length > 0 && (
              <div className="lg:hidden space-y-3">
                {secondaryImages.map((image, i) => {
                  const globalIndex = i + primaryImages.length;
                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setLightboxIndex(globalIndex)}
                      className="block w-full rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden cursor-zoom-in p-0 text-left"
                      aria-label={`Open image ${globalIndex + 1} of ${project.images.length}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN — sticky image panel ───────────────────────── */}
          <aside className="hidden lg:block">
            {/* data-lenis-prevent: opt this container out of global Lenis
                smooth-scroll so its internal overflow-y-auto can receive
                wheel events directly (Lenis steals them otherwise). */}
            <div
              data-lenis-prevent
              className="lg:sticky lg:top-24 space-y-3 lg:max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar"
            >
              {project.images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden cursor-zoom-in p-0 text-left"
                  aria-label={`Open image ${i + 1} of ${project.images.length}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </aside>
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          <span>
            {project.title} — {project.category}
          </span>
          <span>© 2025 Germán David Alvarez</span>
        </footer>
      </main>

      <ImageLightbox
        images={project.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => setLightboxIndex(i)}
      />
    </div>
  );
};
