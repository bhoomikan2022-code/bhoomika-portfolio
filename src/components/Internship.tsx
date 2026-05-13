import { motion } from 'framer-motion';
import { Clock3, ShieldCheck, Sparkles } from 'lucide-react';

function Internship() {
  return (
    <section id="internship" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="section-title">Internship</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real-world experience in secure cloud backup and data resilience.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-card"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-cyan-300">Yoka Tech Solutions</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Intern</h3>
              <p className="mt-2 text-sm text-slate-400">May 2025 – Jun 2025 | Remote</p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
              <Clock3 className="h-4 w-4 text-sky-300" /> 6 weeks
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              'Built SecureVault, a secure cloud backup system using AES-256 encryption for protected data storage',
              'Implemented chunking and compression to reduce storage usage',
              'Developed SHA-based deduplication to prevent duplicate file storage',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center gap-3 text-cyan-300">
                  <ShieldCheck className="h-5 w-5" />
                  <p className="font-semibold text-slate-100">Responsibility</p>
                </div>
                <p className="mt-4 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-slate-300">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <p className="text-sm">Designed with a premium timeline aesthetic and polished interaction experience for hiring visibility.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Internship;
