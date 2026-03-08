import { motion } from "framer-motion";
import { Languages } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "Telugu", level: "Native" },
];

const LanguagesSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary font-mono text-sm mb-2">Communication</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Languages</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-full px-6 py-3 flex items-center gap-3 glow-shadow"
          >
            <Languages size={16} className="text-primary" />
            <span className="font-medium text-foreground">{l.name}</span>
            <span className="text-xs text-muted-foreground font-mono">({l.level})</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
