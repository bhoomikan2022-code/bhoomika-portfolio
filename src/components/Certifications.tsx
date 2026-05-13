import { motion } from 'framer-motion';
import { Award, Bookmark } from 'lucide-react';
import { certifications } from '../data/certifications';

const iconMap = {
  'AWS Certified Cloud Practitioner': Award,
  'IBM Machine Learning with Python': Award,
  'Microsoft Power BI Desktop for Business Intelligence': Bookmark,
};

function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="section-title">Certifications</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Verified credentials that reinforce my cloud, AI, and BI expertise.
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.title as keyof typeof iconMap] || Award;
            return (
              <motion.div
                key={cert.title}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-card"
              >
                <div className="flex items-center gap-3 text-slate-100">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                </div>
                <p className="mt-5 text-slate-300">{cert.description}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500">{cert.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
