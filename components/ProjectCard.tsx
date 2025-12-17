import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  large?: boolean; // For visual hierarchy
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, large = false }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className={`group relative block w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-zinc-900/80 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.thumbnailGradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

      <div className="relative p-6 h-full flex flex-col justify-between min-h-[280px]">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="inline-block px-2 py-1 bg-zinc-950/50 border border-zinc-800 rounded text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              {project.category}
            </span>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          </div>

          <h3 className="text-2xl font-bold text-zinc-100 mb-1 group-hover:translate-x-1 transition-transform">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-zinc-500 font-mono">
                /{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};