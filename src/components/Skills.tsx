import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { Database, Code2, Layers, Cpu } from 'lucide-react';

const icons = {
  Languages: Code2,
  'Frameworks & Tools': Layers,
  Databases: Database,
  'Data & ML': Cpu,
};

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="section-title">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Modern skill systems crafted for scale and clarity.
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = icons[group.title as keyof typeof icons];
            return (
              <motion.div
                key={group.title}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="glass-card group rounded-[2rem] border border-white/10 p-6 shadow-card"
              >
                <div className="flex items-center gap-3 text-slate-100">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">Core competencies and specialist tools.</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition group-hover:border-sky-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
