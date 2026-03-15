import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", color: "hsl(200 100% 55%)", percent: 90 },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", color: "hsl(30 100% 55%)", percent: 100 },
  { name: "Telugu", level: "Native", emoji: "🗣️", color: "hsl(160 80% 50%)", percent: 100 },
];

const LanguagesSection = () => (
  <section className="section-padding relative overflow-hidden noise-overlay" style={{ background: 'var(--section-langs-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(160 80% 50% / 0.3), transparent)' }} />
    <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(160 80% 50% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(160 80% 55%)' }}>Communication</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(160 80% 55%), hsl(200 100% 60%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Languages</h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 150 }}
            whileHover={{ y: -10, scale: 1.04 }}
            className="rounded-3xl p-8 flex flex-col items-center gap-4 group relative overflow-hidden premium-glass text-center"
            style={{ boxShadow: `0 10px 40px -15px ${l.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: l.color }} />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700" style={{ background: l.color }} />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-5xl mb-1">{l.emoji}</span>
              <div>
                <span className="font-bold text-foreground text-xl block">{l.name}</span>
                <span className="text-sm text-muted-foreground">{l.level}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: l.color }}
                />
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${l.color}12`, border: `1px solid ${l.color}25` }}>
                <MessageCircle size={18} style={{ color: l.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
