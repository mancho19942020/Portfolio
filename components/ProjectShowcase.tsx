import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { saveScrollPosition, scrollEntryKey } from './SmoothScroll';

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

/**
 * Full-width modern project showcase card. Image on one side, text on the
 * other. Alternates left/right on desktop for rhythm. Stacks (image first)
 * on mobile.
 */
export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index }) => {
  const location = useLocation();
  const previewImage =
    project.coverImage ?? project.images[project.previewImageIndex ?? 0] ?? project.images[0];

  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');
  const { year, company, industry, summary } = project.narrative.introduction;
  const showcaseTitle = project.showcaseTitle ?? project.title;
  const showcasePreview = project.showcasePreview ?? summary;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="showcase-card h-full"
    >
      <Link
        to={`/project/${project.id}`}
        onClick={() => {
          saveScrollPosition(
            scrollEntryKey(location.key, location.pathname, location.search),
            window.scrollY,
          );
        }}
        id={`project-${project.id}`}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 h-full`}>
          {/* Media, 30% of card height on mobile (less visual hierarchy);
              60% of card width on desktop (lg:flex-row layout). */}
          <div className="showcase-media shrink-0 grow-0 basis-[30%] lg:shrink lg:grow lg:basis-3/5">
            {previewImage && (
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                style={{ objectPosition: project.previewImagePosition ?? 'center' }}
              />
            )}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-start justify-between gap-2">
              <span className="showcase-overline text-white/90 drop-shadow">{number}</span>
              <span className="showcase-overline text-white/90 drop-shadow text-right">
                {project.category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 lg:basis-2/5 min-h-0 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col gap-3 lg:gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 showcase-meta">
              <span>({year})</span>
              <span aria-hidden>·</span>
              <span>{company}</span>
              <span aria-hidden>·</span>
              <span>{industry}</span>
            </div>

            <h3
              className="font-bold text-zinc-100 tracking-tight"
              style={{
                fontSize: 'clamp(1.25rem, 2.4vw, 2rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              {showcaseTitle}
            </h3>

            <p
              className="text-zinc-400 line-clamp-6 lg:line-clamp-7"
              style={{
                fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)',
                lineHeight: 1.5,
              }}
            >
              {showcasePreview}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map(tag => (
                <span key={tag} className="showcase-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <span className="showcase-cta">
                View case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

interface ProjectShowcaseStackProps {
  projects: Project[];
}

/**
 * Sticky stacked-card scroll. Each project pins to the top of the viewport at
 * a progressively larger offset (stair-step), so later cards land on top of
 * earlier ones with the previous cards peeking out behind, like a pile of
 * paper. The whole section runs ~N viewports tall to give each card scroll
 * runway to enter; after the last card finishes piling, the next section
 * (What I do) takes over.
 */
export const ProjectShowcaseStack: React.FC<ProjectShowcaseStackProps> = ({ projects }) => {
  return (
    <div className="project-stack">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="project-stack-slot"
          style={{
            top: `calc(5rem + ${i * 0.6}rem)`,
            zIndex: i + 1,
          }}
        >
          <ProjectShowcase project={project} index={i} />
        </div>
      ))}
    </div>
  );
};
