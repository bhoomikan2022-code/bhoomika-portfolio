import { motion } from 'framer-motion';
import { Briefcase, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'AI, Cloud & Data Engineering Enthusiast',
  'Integrated M.Tech Software Engineering Student',
  'Future-Focused Developer',
];

function Hero() {
  const [roleText, setRoleText] = useState(roles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((value) => (value + 1) % roles.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setRoleText(roles[currentIndex]);
  }, [currentIndex]);

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 pb-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-glow">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Premium portfolio crafted for recruiters and AI-forward teams.
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-300">N Bhoomika</span>.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Integrated M.Tech Software Engineering Student at VIT Vellore building sleek, secure, and intelligent applications with AI, cloud, and modern data engineering practices.
              </p>
              <p className="text-base uppercase tracking-[0.22em] text-slate-400">{roleText}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Briefcase size={18} /> Hire Me
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white"
              >
                <Download size={18} /> Resume
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-xl">
              <a
                href="https://github.com/bhoomikan2022-code"
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-700 bg-slate-950/80 p-5 transition hover:border-cyan-400"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-cyan-300 transition group-hover:text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Code portfolio</p>
                    <p className="font-semibold text-slate-100">GitHub</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bhoomika-n-921ba9259"
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-700 bg-slate-950/80 p-5 transition hover:border-violet-400"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-violet-300 transition group-hover:text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Professional network</p>
                    <p className="font-semibold text-slate-100">LinkedIn</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="glass-card relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),_transparent_20%)]" />
              <div className="relative flex flex-col gap-5 rounded-[2rem] bg-slate-950/80 p-6">
                <div className="flex items-center justify-between text-slate-200">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">Profile</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Live portfolio preview</h2>
                  </div>
                  <span className="inline-flex rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                    VIT Vellore
                  </span>
                </div>
                <div className="rounded-[1.75rem] border border-slate-800/90 bg-slate-900/70 p-5 text-slate-300 shadow-glow">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-sky-400 to-violet-500" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">N Bhoomika</p>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                        Building elegant SaaS-style experiences with secure engineering, AI-assisted workflows, and polished UI interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['AI', 'Cloud', 'Data', 'Engineering'].map((skill) => (
                    <div key={skill} className="rounded-3xl border border-slate-800/90 bg-slate-950/75 p-4 text-center">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
