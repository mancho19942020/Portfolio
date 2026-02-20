import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectNarrativeChapter } from '../types';
import { NavBar } from '../components/NavBar';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import nowAppResearchPdf from '../assets/docs/nowapp-research.pdf';

const buildFallbackChapters = (project: (typeof PROJECTS)[number]): ProjectNarrativeChapter[] => {
  const focusHighlights = [...project.narrative.challenge.painPoints, ...project.narrative.challenge.constraints];
  return [
    {
      label: 'Act 01',
      title: 'Context and product tension',
      paragraphs: [
        project.narrative.introduction.summary,
        project.narrative.challenge.summary
      ],
      highlights: focusHighlights.slice(0, 5)
    },
    {
      label: 'Act 02',
      title: 'What discovery made clear',
      paragraphs: [
        'Discovery reframed the scope around concrete user behavior, operational limits, and the decisions users needed to make with confidence.'
      ],
      highlights: project.narrative.challenge.insights
    },
    {
      label: 'Act 03',
      title: 'How the solution was shaped',
      paragraphs: [
        'The solution focused on reducing friction, introducing guidance at the right moments, and aligning design decisions with measurable product outcomes.'
      ],
      highlights: project.narrative.approach
    },
    {
      label: 'Act 04',
      title: 'Impact and follow-through',
      paragraphs: [
        'Success was measured through adoption, execution quality, and confidence in decision making after release.'
      ],
      highlights: project.narrative.outcome
    }
  ];
};

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const primaryImages = project.images.slice(0, 2);
  const secondaryImages = project.images.slice(2);
  const isCaseStudy = project.category === 'Freelance';
  const categoryLabel = isCaseStudy ? 'UX/UI case study' : project.category;
  const showNowAppResearch = project.id === 'freelance-1';
  const chapters = project.narrative.chapters ?? buildFallbackChapters(project);

  return (
    <div className="min-h-screen bg-background text-zinc-100 selection:bg-zinc-700 selection:text-white pb-20">
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-16">
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-400${isCaseStudy ? '' : ' uppercase'}`}>
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
              <p className="text-xl text-zinc-400 leading-relaxed">
                {project.subtitle}
              </p>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">
                {project.narrative.introduction.company} • {project.narrative.introduction.industry} • {project.narrative.introduction.year}
              </div>
              <p className="text-lg text-zinc-200 leading-relaxed font-light">
                {project.narrative.introduction.summary}
              </p>
              {showNowAppResearch && (
                <div>
                  <a
                    href={nowAppResearchPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-reactive glow-button btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-semibold transition-colors"
                  >
                    Review research document
                    <Search className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </motion.section>

            <div className="lg:hidden space-y-6">
              {primaryImages.map((image) => (
                <div key={image.src} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">Role</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-lg text-zinc-200">{project.narrative.role.title}</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {project.narrative.role.responsibilities.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Duration</p>
                    <p className="text-sm text-zinc-300">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Tools & Tech</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/50">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">Case narrative</h2>
              <div className="space-y-8">
                {chapters.map((chapter, index) => (
                  <article key={`${chapter.label}-${chapter.title}`} className="relative pl-7 sm:pl-9 border-l border-zinc-800/80">
                    <span className="absolute -left-[8px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border border-zinc-700" />
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{chapter.label}</p>
                    <h3 className="mt-2 text-xl text-zinc-100 leading-tight">
                      {index + 1}. {chapter.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {chapter.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {chapter.highlights && chapter.highlights.length > 0 ? (
                      <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc pl-5">
                        {chapter.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </motion.section>

            <div className="lg:hidden space-y-6">
              {secondaryImages.map((image) => (
                <div key={image.src} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6">
              {project.images.map((image) => (
                <div key={image.src} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </aside>
        </div>

        <footer className="mt-40 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          <span>{project.title} — {project.category}</span>
          <span>© 2025 Germán David Alvarez</span>
        </footer>
      </main>
    </div>
  );
};
