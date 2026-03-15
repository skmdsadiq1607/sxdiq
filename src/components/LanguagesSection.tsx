import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", color: "hsl(200 100% 55%)", percent: 90 },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", color: "hsl(30 100% 55%)", percent: 100 },
  { name: "Telugu", level: "Native", emoji: "🗣️", color: "hsl(160 80% 50%)", percent: 100 },
];

const LanguagesSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-langs-bg)' }}>
    <div className="absolute inset-0 grid-lines opacity-30" />

    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8" style={{ background: 'hsl(160 80% 50% / 0.5)' }} />
          <p className="text-sm font-mono tracking-widest uppercase" style={{ color: 'hsl(160 80% 50%)' }}>Communication</p>
          <div className="h-px w-8" style={{ background: 'hsl(160 80% 50% / 0.5)' }} />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Languages </span>
          <span style={{ background: 'linear-gradient(135deg, hsl(160 80% 50%), hsl(200 100% 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>I speak</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl p-7 flex flex-col items-center gap-4 group relative overflow-hidden premium-glass text-center"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: l.color }} />

            <span className="text-4xl">{l.emoji}</span>
            <div>
              <span className="font-semibold text-foreground text-lg block">{l.name}</span>
              <span className="text-xs text-muted-foreground">{l.level}</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1 rounded-full bg-secondary/60 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.percent}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: l.color }}
              />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${l.color}10`, border: `1px solid ${l.color}15` }}>
              <MessageCircle size={14} style={{ color: l.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
