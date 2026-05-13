import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="section-title">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s connect and build your next high-impact project.
          </h2>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-card"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Reach out</p>
            <div className="mt-8 space-y-6 text-slate-300">
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4">
                <Mail className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium text-white">bhoomikan667@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4">
                <Phone className="h-5 w-5 text-violet-300" />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium text-white">+91 70136 98378</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/bhoomika-n-921ba9259"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 transition hover:border-violet-400"
                >
                  <Linkedin className="h-5 w-5 text-violet-300" /> LinkedIn
                </a>
                <a
                  href="https://github.com/bhoomikan2022-code"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 transition hover:border-cyan-400"
                >
                  <Github className="h-5 w-5 text-cyan-300" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            action="mailto:bhoomikan667@gmail.com"
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-card"
          >
            <div className="grid gap-5">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your next project..."
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Send message
                <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
