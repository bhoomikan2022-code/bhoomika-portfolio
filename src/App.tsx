import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Modal from './components/Modal';
import { projects, Project } from './data/projects';

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectTypes = useMemo(
    () => Array.from(new Set(['All', ...projects.map((project) => project.type)])),
    []
  );

  return (
    <div className="relative overflow-hidden text-slate-100">
      <ScrollProgress />
      <div className="particle-bg" aria-hidden="true">
        {[...Array(14)].map((_, index) => {
          const size = 14 + index * 4;
          return (
            <span
              key={index}
              className="particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `rgba(56, 189, 248, ${0.12 + index * 0.03})`,
                left: `${(index * 7) % 92}%`,
                top: `${(index * 11) % 90}%`,
                animationDelay: `${index * 0.9}s`,
              }}
            />
          );
        })}
      </div>
      <Navbar />
      <main className="relative isolate">
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects openProject={setActiveProject} projectTypes={projectTypes} />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <AnimatePresence>
        {activeProject && (
          <Modal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
