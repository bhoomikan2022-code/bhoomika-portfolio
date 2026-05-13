import { motion } from 'framer-motion';
import { Sparkles, Wand2 } from 'lucide-react';

function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 flex flex-col gap-4"
        >
          <p className="section-title">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Passionate about building impactful software at the intersection of AI, cloud, and data.
          </h2>
        </motion.div>
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.9fr_0.95fr]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-card">
            <div className="flex items-center gap-3 text-slate-200">
              <Wand2 className="h-5 w-5 text-cyan-300" />
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Professional Summary</p>
            </div>
            <div className="mt-6 space-y-5 text-slate-300">
              <p>
                I am a software engineering student driven by a deep passion for AI and cloud technologies. I love architecting solutions that combine data engineering, secure design, and elegant user experiences.
              </p>
              <p>
                My journey is grounded in building impactful applications that solve real problems, from intelligent analytics platforms to secure storage services. I embrace every opportunity to learn new frameworks, optimize systems, and contribute to great teams.
              </p>
              <p>
                I bring a continuous learning mindset, strong problem solving skills, and a dedication to polished implementation. My goal is to deliver modern software that is both technically robust and recruiter-ready.
              </p>
            </div>
          </div>
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-card">
            {[
              { label: 'Focus', value: 'AI, Cloud, and Data Engineering' },
              { label: 'Approach', value: 'Secure architecture, polished UI, reusable components' },
              { label: 'Mindset', value: 'Continuous learning, collaboration, problem solving' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-[1.75rem] border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
