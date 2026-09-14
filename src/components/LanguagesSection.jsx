import { motion } from "framer-motion";
import { MessageCircle, Globe2 } from "lucide-react";

const langs = [
  { name: "English", level: "Professional Working Proficiency", tag: "Fluent (90%)", percent: 90 },
  { name: "Hindi", level: "Native & Bilingual Fluency", tag: "Native (100%)", percent: 100 },
  { name: "Telugu", level: "Native & Mother Tongue", tag: "Native (100%)", percent: 100 },
];

const LanguagesSection = () => (
  <section id="languages" className="py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-black text-white">
    <div className="max-w-7xl mx-auto relative z-10">
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">
          <Globe2 size={12} className="text-white animate-spin-slow" />
          06 // COMMUNICATION
        </span>
        <h2>LANGUAGES &amp; DIALECTS</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-8 flex flex-col justify-between group hover:border-white/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <MessageCircle size={18} />
              </div>
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] text-[10px] font-mono text-white/70 uppercase tracking-widest">
                {l.tag}
              </span>
            </div>

            <div>
              <h3 className="font-syne font-bold text-2xl uppercase tracking-tight text-white mb-1">
                {l.name}
              </h3>
              <p className="text-xs font-mono text-white/50 uppercase tracking-wider mb-6">
                {l.level}
              </p>

              {/* Progress Line */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: "easeOut" }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default LanguagesSection;
