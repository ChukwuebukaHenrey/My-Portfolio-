import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Terminal, Github, Linkedin, Twitter, Mail, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#090d16]/85 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white text-base flex items-center gap-1.5">
              Henry <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-normal hidden sm:inline-block">FullStack</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-0.5 tracking-wider uppercase">Chukwuebuka Favour</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions / Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-slate-800">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:opacity-95 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Build</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-800/60 text-slate-300 rounded-lg">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-800/60 text-slate-300 rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="p-2 bg-slate-800/60 text-slate-300 rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
