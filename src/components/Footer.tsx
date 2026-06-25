import { PERSONAL_INFO } from '../data';
import { Terminal, ArrowUp, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Full Stack • Web3 • AI Engineering
            </span>
          </div>
        </div>

        {/* Center quote/note */}
        <p className="text-xs text-slate-500 text-center max-w-sm">
          Crafted with React & Tailwind CSS. Powered by self-learning and continuous iteration.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-800">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="p-2 hover:text-blue-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
