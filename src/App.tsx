/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import InterestsSection from './components/InterestsSection';
import LearningRoadmap from './components/LearningRoadmap';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <InterestsSection />
        <LearningRoadmap />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

