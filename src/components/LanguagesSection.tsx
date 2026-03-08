import { motion } from "framer-motion";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", gradient: "from-blue-500 to-indigo-400" },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", gradient: "from-orange-500 to-amber-400" },
  { name: "Telugu", level: "Native", emoji: "🗣️", gradient: "from-emerald-500 to-teal-400" },
];

const LanguagesSection = () => (
  <section className="section-padding bg-secondary/20 mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Communication</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Languages</h2>
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
            className="glass-card rounded-3xl px-10 py-7 flex flex-col items-center gap-3 elevated-shadow group relative overflow-hidden min-w-[160px]"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${l.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <span className="text-4xl mb-1">{l.emoji}</span>
            <span className="font-bold text-foreground text-lg">{l.name}</span>
            <span className="text-xs text-muted-foreground font-mono px-3 py-1 rounded-full bg-secondary">{l.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
