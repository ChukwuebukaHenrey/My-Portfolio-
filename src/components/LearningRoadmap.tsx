import { ROADMAP } from '../data';
import { CheckCircle2, Compass, ArrowRight, Flame, BookOpen, Terminal, Sparkles } from 'lucide-react';

export default function LearningRoadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#0a0f1d] relative border-y border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Learning & Execution Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Self-taught engineering requires rigorous discipline. Here is how I structure my curriculum between <span className="text-white font-medium">The Odin Project</span>, intensive YouTube tutorials, and hands-on AI prototyping.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Vertical connecting line on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {ROADMAP.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = step.status === 'Completed';
              const isCurrent = step.status === 'Current Focus';

              return (
                <div key={step.number} className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                  
                  {/* Left Column */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:text-right lg:order-1' : 'lg:order-3'}`}>
                    <div className={`rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 relative ${
                      isCurrent ? 'border-cyan-500/40 bg-slate-900/80 shadow-xl shadow-cyan-500/5' : ''
                    }`}>
                      
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
                        <span className="text-3xl font-black font-mono text-slate-500">
                          #{step.number}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                          isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          isCurrent ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 animate-pulse' :
                          'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'lg:justify-end' : ''}`}>
                        {step.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Center Circle Node */}
                  <div className="z-10 lg:order-2 flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg ${
                      isCompleted ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30' :
                      isCurrent ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white ring-4 ring-cyan-500/20 shadow-cyan-500/40' :
                      'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isCurrent ? <Flame className="w-6 h-6 animate-bounce" /> : <BookOpen className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Right Spacer Column for even items / Content for odd items */}
                  <div className={`w-full lg:w-[45%] hidden lg:block ${isEven ? 'lg:order-3' : 'lg:order-1'}`} />

                </div>
              );
            })}
          </div>

        </div>

        {/* Callout quote */}
        <div className="mt-20 max-w-2xl mx-auto text-center p-8 rounded-3xl bg-[#090d16] border border-slate-800 relative">
          <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-4 opacity-80" />
          <blockquote className="text-base sm:text-lg font-medium text-slate-300 italic mb-3">
            "I have been learning JavaScript with the aim of getting better and moving into the React ecosystem, then backend. My side projects GrantBase and WiseDrop are living labs that I will finish up as I continue to learn."
          </blockquote>
          <span className="text-xs font-mono text-slate-500">— Chukwuebuka Favour Henry</span>
        </div>

      </div>
    </section>
  );
}
