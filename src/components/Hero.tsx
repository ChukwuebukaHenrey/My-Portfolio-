import { PERSONAL_INFO } from '../data';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, Blocks, Palette, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const highlights = [
    { text: "The Odin Project Graduate Track", icon: Terminal, color: "text-amber-400" },
    { text: "Google AI Studio Prototyper", icon: Sparkles, color: "text-purple-400" },
    { text: "JavaScript to React & Backend", icon: Code2, color: "text-cyan-400" },
    { text: "Web3 & Blockchain Enthusiast", icon: Blocks, color: "text-emerald-400" }
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] md:w-[800px] md:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Chukwuebuka Favour Henry
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Bio story */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I’ve been learning full stack development through <strong className="text-slate-200 font-semibold">The Odin Project</strong> and self-directed engineering courses on YouTube. My core stack is rooted in <strong className="text-cyan-400 font-semibold">JavaScript</strong>, actively transitioning into the <strong className="text-blue-400 font-semibold">React ecosystem</strong> and robust backend architectures.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
                    <IconComponent className={`w-4 h-4 shrink-0 ${item.color}`} />
                    <span className="text-xs font-medium text-slate-300">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <span>Explore AI Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#interests"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                <span>My Tech Spectrum</span>
              </a>
            </div>

          </div>

          {/* Hero Profile Card / Code Terminal Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              <div className="relative rounded-2xl bg-[#0f172a]/90 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">chukwuebuka-config.ts</span>
                  <div className="w-12" /> {/* spacer */}
                </div>

                {/* Code snippet simulation */}
                <div className="font-mono text-xs sm:text-sm space-y-3 text-left overflow-x-auto leading-relaxed">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Chukwuebuka Favour Henry"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">foundation:</span> <span className="text-amber-300">"The Odin Project"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-cyan-300">"JavaScript"</span>, 
                    <span className="text-cyan-300">"React"</span>, 
                    <span className="text-cyan-300">"Node.js"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">aiStudioPrototypes:</span> [
                    <span className="text-indigo-300">"GrantBase"</span>, 
                    <span className="text-teal-300">"WiseDrop"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passions:</span> [
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-pink-300">"Blockchain Tech"</span>,<br />
                    <span className="text-purple-300">"AI Engineering"</span>,<br />
                    <span className="text-amber-300">"UI/UX Design"</span>,<br />
                    <span className="text-sky-300">"Technical Writing"</span>
                  </div>
                  <div className="pl-4">]</div>
                  <div>&#125;;</div>
                </div>

                {/* Current Learning Callout */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-300">Status: Finishing Up AI Studio Side Projects</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">v1.0.4</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
