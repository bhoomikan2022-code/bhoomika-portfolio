import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Github, Monitor, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Project, projects } from '../data/projects';

type Props = {
  openProject: (project: Project) => void;
  projectTypes: string[];
};

function Projects({ openProject, projectTypes }: Props) {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => projects.filter((project) => filter === 'All' || project.type === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="section-title">Featured Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Premium project showcase with interactive filtering and modal details.
          </h2>
        </motion.div>
        <div className="mb-8 flex flex-wrap gap-3">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                filter === type
                  ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-glow'
                  : 'border border-slate-700 bg-slate-950/80 text-slate-300 hover:border-cyan-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="glass-card group rounded-[2rem] border border-white/10 p-8 shadow-card"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                      {project.type}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-slate-300">{project.subtitle}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300 shadow-glow">
                    <Monitor className="h-6 w-6 text-cyan-300" />
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-3 text-slate-300">
                  {project.features.slice(0, 3).map((feature) => (
                    <p key={feature} className="leading-7">• {feature}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    View details
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-400"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:border-violet-400"
                  >
                    <Sparkles size={16} /> Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
