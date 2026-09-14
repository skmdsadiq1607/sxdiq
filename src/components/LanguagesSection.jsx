import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";

const langs = [
  { name: "English", level: "Fluent", emoji: "🇬🇧", fluency: "Professional" },
  { name: "Hindi", level: "Native", emoji: "🇮🇳", fluency: "Bilingual / Native" },
  { name: "Telugu", level: "Native", emoji: "🗣️", fluency: "Bilingual / Native" },
];

const AudioWaveform = ({ isHovered, barCount = 7 }) => {
  return (
    <div className="flex items-center justify-center gap-1 h-9 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/70 w-full max-w-[140px]">
      {[...Array(barCount)].map((_, idx) => {
        const patterns = [
          ["30%", "85%", "40%", "100%", "30%"],
          ["50%", "100%", "35%", "80%", "50%"],
          ["70%", "35%", "90%", "50%", "95%"],
          ["90%", "55%", "100%", "35%", "75%"],
          ["60%", "90%", "40%", "95%", "45%"],
          ["40%", "75%", "55%", "85%", "35%"],
          ["25%", "65%", "40%", "80%", "30%"],
        ];
        const heights = patterns[idx % patterns.length];

        return (
          <motion.div
            key={idx}
            animate={{
              height: isHovered 
                ? heights 
                : heights.map(h => `${Math.max(25, parseInt(h) * 0.5)}%`),
            }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 0.7 + idx * 0.08 : 1.4 + idx * 0.12,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="w-1 rounded-full bg-foreground transition-all duration-300"
          />
        );
      })}
    </div>
  );
};

const LanguageCard = ({ lang, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-border/80 bg-card/90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-5 group transition-all duration-300 hover:border-foreground/50 hover:shadow-xl text-center relative overflow-hidden"
    >
      {/* Gentle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Floating Flag Avatar */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.2 + index * 0.4, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full border border-border/80 bg-secondary/40 flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform"
      >
        <span className="filter grayscale group-hover:grayscale-0 transition-all duration-300">
          {lang.emoji}
        </span>
      </motion.div>

      <div className="space-y-1">
        <h3 className="font-times italic font-normal text-xl text-foreground block">
          {lang.name}
        </h3>
        <span className="inline-block text-[10px] font-mono px-3 py-1 rounded-full border border-border/80 bg-secondary/60 text-foreground/80 tracking-wider uppercase font-semibold">
          {lang.level}
        </span>
      </div>

      {/* Live Audio Frequency Equalizer Waveform */}
      <div className="flex flex-col items-center gap-1.5 w-full pt-1">
        <AudioWaveform isHovered={isHovered} />
        <div className="flex items-center gap-1 text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1">
          <Volume2 size={11} className="text-foreground/60" />
          <span>{lang.fluency}</span>
        </div>
      </div>
    </motion.div>
  );
};

const LanguagesSection = () => (
  <section id="languages" className="min-h-screen w-full lg:w-[800px] shrink-0 flex items-center bg-black text-foreground noise-overlay py-12 px-6 md:px-16 border-r border-border relative overflow-hidden select-none">
    
    {/* 〰️ Acoustic Soundwave Resonance Ripples */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-25">
      <svg className="w-full h-64" viewBox="0 0 1000 200" preserveAspectRatio="none">
        <path d="M 0,100 Q 250,20 500,100 T 1000,100" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="8 6" />
        <path d="M 0,100 Q 250,180 500,100 T 1000,100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path d="M 0,100 Q 250,60 500,100 T 1000,100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>

    <div className="container mx-auto relative z-10 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="section-heading mb-12"
      >
        <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">// 08 — Verbal Fluency</span>
        <h2 className="font-times text-6xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight leading-none text-foreground">Languages</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {langs.map((l, i) => (
          <LanguageCard key={l.name} lang={l} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;
