import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", color: "hsl(200 100% 55%)", proficiency: 90 },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", color: "hsl(30 100% 55%)", proficiency: 95 },
  { name: "Telugu", level: "Native", emoji: "🗣️", color: "hsl(160 80% 50%)", proficiency: 100 },
];

const LanguagesSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-langs-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(160 80% 50% / 0.3), transparent)' }} />

    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(160 80% 55%)' }}>Communication</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(160 80% 55%), hsl(200 100% 60%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Languages</h2>
        <p className="text-muted-foreground mt-4">Languages I speak and communicate in</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 150 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="rounded-3xl p-8 flex flex-col items-center gap-4 group relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm cursor-default"
            style={{ boxShadow: `0 10px 40px -15px ${l.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: l.color }} />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700" style={{ background: l.color }} />
            
            <span className="text-5xl mb-1">{l.emoji}</span>
            <span className="font-bold text-foreground text-lg">{l.name}</span>
            
            {/* Circular progress */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" />
                <motion.circle
                  cx="18" cy="18" r="15.5" fill="none"
                  strokeWidth="3" strokeLinecap="round"
                  style={{ stroke: l.color }}
                  strokeDasharray={`${2 * Math.PI * 15.5}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 15.5 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 15.5 * (1 - l.proficiency / 100) }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold font-mono" style={{ color: l.color }}>{l.proficiency}%</span>
              </div>
            </div>

            <span className="text-xs text-muted-foreground font-mono px-3 py-1.5 rounded-full border border-border/30 bg-secondary/40">{l.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
