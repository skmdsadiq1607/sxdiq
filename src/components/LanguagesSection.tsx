import { motion } from "framer-motion";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", color: "hsl(200 100% 55%)" },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", color: "hsl(30 100% 55%)" },
  { name: "Telugu", level: "Native", emoji: "🗣️", color: "hsl(160 80% 50%)" },
];

const LanguagesSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-langs-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(160 80% 50% / 0.3), transparent)' }} />

    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(160 80% 55%)' }}>Communication</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(160 80% 55%), hsl(200 100% 60%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Languages</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 150 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="rounded-3xl px-10 py-7 flex flex-col items-center gap-3 group relative overflow-hidden min-w-[160px] border border-border/20 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: `0 10px 40px -15px ${l.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: l.color }} />
            <span className="text-4xl mb-1">{l.emoji}</span>
            <span className="font-bold text-foreground text-lg">{l.name}</span>
            <span className="text-xs text-muted-foreground font-mono px-3 py-1 rounded-full bg-secondary/60">{l.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
