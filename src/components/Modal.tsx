import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
  onClose: () => void;
};

function Modal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-card"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sky-400">Project details</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-slate-400">{project.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-300 transition hover:bg-slate-800"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-8 space-y-6 text-slate-300">
            <div className="grid gap-3 sm:grid-cols-3">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-2xl bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {project.features.map((point) => (
                <p key={point} className="flex items-start gap-3 text-slate-300 leading-7">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              View Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
