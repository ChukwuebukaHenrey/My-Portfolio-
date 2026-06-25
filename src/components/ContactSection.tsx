import { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Send, Copy, Check, Github, Linkedin, Twitter, Sparkles, Terminal, MapPin, Globe } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Whether you want to discuss full-stack developer roles, Web3 / Blockchain projects, AI engineering prototypes, or technical writing opportunities — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Copy Card */}
            <div className="p-8 rounded-3xl glass-panel relative overflow-hidden space-y-6">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600" />
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Direct Email Access</span>
                  <h3 className="text-lg font-bold text-white">Send me an Email</h3>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate mr-2">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-mono transition-all shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Stats & Specs */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                Availability & Base
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Location: <strong className="text-white">{PERSONAL_INFO.location}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Status: <strong className="text-emerald-400">{PERSONAL_INFO.availability}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Focus: <strong className="text-white">React, Node.js, Web3 & AI</strong></span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/60 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-700/60 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your note and will respond to <strong className="text-cyan-300">{formData.email || 'your email'}</strong> promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono font-medium text-slate-300 uppercase">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder:text-slate-600 text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-medium text-slate-300 uppercase">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder:text-slate-600 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-300 uppercase">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Frontend Developer Role / Side Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder:text-slate-600 text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-slate-300 uppercase">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Henry, I saw GrantBase and wanted to chat about..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder:text-slate-600 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
