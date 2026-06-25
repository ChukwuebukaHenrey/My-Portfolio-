import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Award, Droplets, ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, Layers, Terminal, AlertCircle } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0a0f1d] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Google AI Studio Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Side Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Prototypes crafted during my self-learning journey using <span className="text-white font-medium">Google AI Studio</span>. I am actively refining and scaling these architectures as I advance deeper into the React & Backend ecosystems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => {
            const isGrantBase = project.id === 'grantbase';
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Top decorative gradient glow */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
                        <div className="w-full h-full bg-[#0f172a] rounded-[15px] flex items-center justify-center text-white">
                          {isGrantBase ? <Award className="w-6 h-6 text-cyan-400" /> : <Droplets className="w-6 h-6 text-emerald-400" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          Built in {project.platform}
                        </span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-medium font-mono bg-slate-800/90 border border-slate-700 text-cyan-300 shrink-0">
                      {project.status}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-base font-semibold text-slate-200">
                      {project.tagline}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Features Preview */}
                  <div className="space-y-2 mb-8 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning note banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 hidden sm:block" />
            <p className="text-sm text-slate-300">
              <strong className="text-white">Continuous Learning Iteration:</strong> These projects were prototyped via Google AI Studio prompting and code extraction. I am currently finishing them up with manual full-stack backend integrations as I advance through The Odin Project.
            </p>
          </div>
          <a
            href="#roadmap"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors shrink-0"
          >
            View Roadmap
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0f172a] border border-slate-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Project Specification</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{selectedProject.title}</h3>
                <p className="text-sm text-slate-400 mt-0.5">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedProject.description}</p>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="font-semibold text-white block">Technical Implementation Strategy:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Prototyped user flows and component state with Google AI Studio.</li>
                  <li>Extracted clean HTML5 / Tailwind CSS / ES6+ modules.</li>
                  <li>Designing RESTful API endpoints and data persistence layer for production release.</li>
                  <li>Responsive layout tested across desktop, tablet, and mobile viewport breakpoints.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
