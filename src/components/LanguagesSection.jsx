import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Sparkles, Globe } from "lucide-react";
import SectionHeaderEditorial from "@/components/SectionHeaderEditorial";

const langs = [
  { 
    name: "English", 
    phonetic: "/ˈɪŋ.ɡlɪʃ/",
    level: "Fluent", 
    emoji: "🇬🇧", 
    fluency: "Professional Working Proficiency", 
    desc: "Fluent in spoken and written English. Used for technical discussions, software documentation, and presentations." 
  },
  { 
    name: "Hindi", 
    phonetic: "/ˈhɪn.diː/",
    level: "Native", 
    emoji: "🇮🇳", 
    fluency: "Native / Bilingual", 
    desc: "Native spoken and written fluency in Hindi for everyday communication and collaboration." 
  },
  { 
    name: "Telugu", 
    phonetic: "/ˈtɛl.ʊ.ɡuː/",
    level: "Native", 
    emoji: "🗣️", 
    fluency: "Native Mother Tongue", 
    desc: "Native mother tongue with full spoken and written fluency." 
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
          className={`w-1 rounded-full transition-all duration-300 ${
            active ? "bg-[#0052FF] shadow-[0_0_8px_#0052FF]" : "bg-white/40"
          }`}
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
        
        {/* Section Header */}
        <SectionHeaderEditorial
          number="06"
          label="06 / Languages"
          headline="Languages I speak and communicate in"
          isWhiteBg={false}
          className="mb-14"
        />

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
                className="border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0052FF]/60 hover:shadow-[0_0_35px_rgba(0,82,255,0.2)] group shadow-xl"
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
                      <span className="px-3.5 py-1 rounded-full border border-white/20 bg-white/5 font-mono text-[10px] uppercase tracking-wider text-white group-hover:border-[#0052FF]/50 transition-colors">
                        {l.level}
                      </span>
                      <AudioBars active={isHovered} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-times not-italic font-normal text-3xl sm:text-4xl text-white leading-tight">
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
                    <Volume2 size={13} /> {isHovered ? "Audio Active" : "Spoken & Written"}
                  </span>
                  <span>0{i + 1}</span>
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
