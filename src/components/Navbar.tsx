import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Internship', href: '#internship' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/40 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-sm shadow-glow">
            NB
          </span>
          Portfolio
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800">
            Contact
            <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/bhoomikan2022-code" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-900 hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/bhoomika-n-921ba9259" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-900 hover:text-white">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
