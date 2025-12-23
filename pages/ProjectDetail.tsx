import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { NavBar } from '../components/NavBar';
import { motion } from 'framer-motion';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-zinc-100 selection:bg-zinc-700 selection:text-white pb-20">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 pt-32">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-400">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
              {project.type}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Project Metadata Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-zinc-900 mb-20"
        >
          <div>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Role</h4>
            <p className="text-sm text-zinc-300">{project.role}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Duration</h4>
            <p className="text-sm text-zinc-300">{project.duration}</p>
          </div>
          <div className="col-span-2">
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Tools & Tech</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/50">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="space-y-24">
          {project.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
            >
              <div className="md:col-span-4">
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-4">
                  {section.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {section.description}
                </p>
              </div>

              <div className="md:col-span-8">
                {section.content ? (
                  <div className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light">
                    {section.content}
                  </div>
                ) : (
                  <div className="p-10 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/10 text-zinc-600 font-mono text-sm group-hover:border-zinc-700 transition-colors">
                    <span className="block mb-4 text-zinc-500 font-bold opacity-50">[CONTENT STRATEGY PENDING]</span>
                    {section.placeholderText}
                  </div>
                )}

                {section.image && (
                  <div className="mt-12 aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                    {/* Image space */}
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <footer className="mt-40 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          <span>{project.title} — {project.category}</span>
          <span>© 2025 Germán David Alvarez</span>
        </footer>
      </main>
    </div>
  );
};