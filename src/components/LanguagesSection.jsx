import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", percent: 90 },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", percent: 100 },
  { name: "Telugu", level: "Native", emoji: "🗣️", percent: 100 },
];

const LanguagesSection = () => (
  <section className="min-h-screen w-[700px] shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-16 border-r border-border">
    <div className="container mx-auto relative z-10 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">Communication</span>
        <h2>Languages</h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-border p-6 flex flex-col items-center gap-4 group transition-all duration-300 hover:border-foreground hover:bg-secondary/40 text-center"
            style={{ borderRadius: "0px" }}
          >
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
              <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{l.emoji}</span>
              <div>
                <span className="font-bold uppercase tracking-wide text-foreground text-base block">{l.name}</span>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mt-1">{l.level}</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1 border border-border bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-foreground"
                />
              </div>
              <div className="w-6 h-6 border border-border flex items-center justify-center text-foreground mt-2">
                <MessageCircle size={10} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
