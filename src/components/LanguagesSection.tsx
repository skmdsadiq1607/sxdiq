import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧" },
  { name: "Hindi", level: "Native", emoji: "🇮🇳" },
  { name: "Telugu", level: "Native", emoji: "🗣️" },
];

const LanguagesSection = () => (
  <section className="section-padding bg-secondary/20 mesh-bg">
    <div className="container mx-auto max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Communication</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Languages</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-5">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl px-8 py-5 flex items-center gap-4 elevated-shadow card-hover"
          >
            <span className="text-2xl">{l.emoji}</span>
            <div>
              <span className="font-semibold text-foreground block">{l.name}</span>
              <span className="text-xs text-muted-foreground font-mono">{l.level}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
