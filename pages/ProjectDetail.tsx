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
          className="mb-16 border-b border-border pb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {project.type}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            {project.subtitle}
          </p>
        </motion.div>

        {/* The Reusable Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          
          {/* Left Column: Metadata / Quick info could go here in future */}
          
          {/* Main Content Area */}
          <div className="md:col-span-12 space-y-16">
            {project.sections.map((section, index) => (
              <motion.section 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-6 mb-4">
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider w-full md:w-1/4 shrink-0">
                    {section.title}
                  </h2>
                  <div className="w-full md:w-3/4">
                    <p className="text-sm font-mono text-zinc-500 mb-4 border-l-2 border-zinc-800 pl-3">
                      {section.description}
                    </p>
                    
                    {/* Placeholder Block - Visual indicator that this is a template */}
                    <div className="p-8 rounded-lg border border-dashed border-zinc-800 bg-zinc-900/20 text-zinc-600 font-mono text-sm">
                      <span className="block mb-2 text-zinc-500 font-bold">[CONTENT PLACEHOLDER]</span>
                      {section.placeholderText}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border flex justify-between items-center text-zinc-500 font-mono text-xs">
          <span>{project.title}</span>
          <span>© 2025 Germán David Alvarez</span>
        </div>
      </main>
    </div>
  );
};