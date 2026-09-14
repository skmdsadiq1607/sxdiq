import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Sparkles, Globe } from "lucide-react";

const langs = [
  { 
    name: "English", 
    phonetic: "/ˈɪŋ.ɡlɪʃ/",
    level: "Fluent", 
    emoji: "🇬🇧", 
    fluency: "Professional & Academic", 
    desc: "Primary medium for software architecture, technical documentation, client communication, and cross-border engineering collaboration." 
  },
  { 
    name: "Hindi", 
    phonetic: "/ˈhɪn.diː/",
    level: "Native", 
    emoji: "🇮🇳", 
    fluency: "Bilingual / Native", 
    desc: "Complete native fluency in spoken dialogue, technical presentations, and cross-regional engineering collaboration." 
  },
  { 
    name: "Telugu", 
    phonetic: "/ˈtɛl.ʊ.ɡuː/",
    level: "Native", 
    emoji: "🗣️", 
    fluency: "Bilingual / Native", 
    desc: "Native mother tongue with comprehensive spoken fluency, cultural depth, and local community outreach." 
  },
];

const AudioBars = ({ active }) => {
  return (
    <div className="flex items-center gap-1 h-6">
      {[40, 80, 55, 100, 70, 35, 90, 60].map((height, i) => (
        <motion.span
          key={i}
          animate={active ? {
            height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
          } : {
            height: "25%",
          }}
          transition={active ? {
            repeat: Infinity,
            duration: 0.6 + i * 0.08,
            ease: "easeInOut",
            repeatType: "reverse",
          } : { duration: 0.3 }}
          className="w-1 rounded-full bg-white transition-all duration-300"
        />
      ))}
    </div>
  );
};

const LanguagesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="languages" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative overflow-hidden select-none">
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-16 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 06 — Verbal Fluency &amp; Communication
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Languages &amp; Articulation
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Trilingual communication capability facilitating international client discussions, team leadership, and technical writing.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>TRILINGUAL ARTICULATION</span>
          </div>
        </motion.div>

        {/* 3 Refined Typographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langs.map((l, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] group shadow-xl"
              >
                <div>
                  {/* Top Row: Avatar & Audio Equalizer Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl border border-white/25 bg-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform">
                      <span className="filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        {l.emoji}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3.5 py-1 rounded-full border border-white/20 bg-white/5 font-mono text-[10px] uppercase tracking-wider text-white">
                        {l.level}
                      </span>
                      <AudioBars active={isHovered} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-times italic font-normal text-3xl sm:text-4xl text-white leading-tight">
                      {l.name}
                    </h3>
                    <span className="font-mono text-xs text-white/40 tracking-wider">
                      {l.phonetic}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">
                    {l.fluency}
                  </p>

                  <p className="text-sm font-times font-light text-white/75 leading-relaxed mb-6">
                    {l.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <Volume2 size={13} /> {isHovered ? "Audio Active" : "Native Acoustic"}
                  </span>
                  <span>0{i + 1} // DIALECT</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LanguagesSection;
