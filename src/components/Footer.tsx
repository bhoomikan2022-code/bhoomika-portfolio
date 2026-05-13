import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="border-t border-white/10 bg-slate-950/70 px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">N Bhoomika</p>
          <p className="mt-3 text-sm text-slate-400">Integrated M.Tech Software Engineering Student at VIT Vellore.</p>
        </div>
        <p className="text-sm text-slate-500">Designed for recruiters with premium SaaS polish and dark glassmorphism.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
