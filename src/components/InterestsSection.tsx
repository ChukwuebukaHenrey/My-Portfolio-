import { INTERESTS } from '../data';
import { Blocks, Cpu, Palette, FileText, Code2, Sparkles, ArrowRight } from 'lucide-react';

export default function InterestsSection() {
  return (
    <section id="interests" className="py-24 bg-[#090d16] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            Multipotentialite Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering & Creative Interests
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Technology is not siloed. My self-learning philosophy embraces cross-pollination across foundational systems, decentralized ledgers, intelligent agents, and aesthetic interface design.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {INTERESTS.map((interest, idx) => {
            // Make first and last item span 2 columns on larger screens for bento feel
            const isWide = idx === 0 || idx === 3;
            
            return (
              <div
                key={interest.id}
                className={`group relative rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between overflow-hidden ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Subtle top right badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`p-3.5 rounded-2xl border ${interest.color}`}>
                    {interest.id === 'blockchain' && <Blocks className="w-6 h-6" />}
                    {interest.id === 'ai-engineering' && <Cpu className="w-6 h-6" />}
                    {interest.id === 'ui-ux' && <Palette className="w-6 h-6" />}
                    {interest.id === 'tech-writing' && <FileText className="w-6 h-6" />}
                    {interest.id === 'software-engineering' && <Code2 className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400">
                    {interest.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 my-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                {/* Bottom interactive hint */}
                <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Self-Directed Track</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400 opacity-0 group-hover:opacity-100" />
                </div>

              </div>
            );
          })}

        </div>

        {/* Skill Matrix Summary Bar */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          <div className="pt-4 sm:pt-0">
            <span className="text-2xl font-extrabold text-white block font-mono">JavaScript</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Primary Language Focus</span>
          </div>
          <div className="pt-4 sm:pt-0">
            <span className="text-2xl font-extrabold text-cyan-400 block font-mono">React Ecosystem</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Active Target Stack</span>
          </div>
          <div className="pt-4 sm:pt-0">
            <span className="text-2xl font-extrabold text-indigo-400 block font-mono">Node / Express</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Odin Project Backend</span>
          </div>
        </div>

      </div>
    </section>
  );
}
