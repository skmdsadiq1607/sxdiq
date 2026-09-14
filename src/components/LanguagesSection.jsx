import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2, Radio, Activity, Waves } from "lucide-react";

const langs = [
  { 
    name: "English", 
    level: "Fluent", 
    emoji: "🇬🇧", 
    fluency: "Professional & Academic", 
    desc: "Primary medium for software architecture, technical documentation, and cross-border team collaboration.",
    freq: 4,
    speed: 0.04,
    color: "#FFFFFF"
  },
  { 
    name: "Hindi", 
    level: "Native", 
    emoji: "🇮🇳", 
    fluency: "Bilingual / Native", 
    desc: "Complete native fluency in verbal discourse, technical translation, and regional dialogue.",
    freq: 7,
    speed: 0.06,
    color: "#FFFFFF"
  },
  { 
    name: "Telugu", 
    level: "Native", 
    emoji: "🗣️", 
    fluency: "Bilingual / Native", 
    desc: "Native mother tongue with comprehensive spoken fluency, cultural articulation, and civic engagement.",
    freq: 5,
    speed: 0.05,
    color: "#FFFFFF"
  },
];

const InteractiveOscilloscope = ({ activeLang }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerY = height / 2;

      const freq = activeLang ? activeLang.freq : 3;
      const speed = activeLang ? activeLang.speed : 0.03;
      step += speed;

      // Draw primary harmonic carrier wave
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";

      for (let x = 0; x < width; x++) {
        const envelope = Math.sin((x / width) * Math.PI); // Window envelope
        const y = centerY + Math.sin(x * (freq * 0.008) + step) * 28 * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary modulation harmonic
      ctx.beginPath();
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";

      for (let x = 0; x < width; x++) {
        const envelope = Math.sin((x / width) * Math.PI);
        const y = centerY + Math.sin(x * (freq * 0.012) - step * 1.4) * 16 * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw tertiary harmonic overtone
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";

      for (let x = 0; x < width; x++) {
        const envelope = Math.sin((x / width) * Math.PI);
        const y = centerY + Math.cos(x * (freq * 0.016) + step * 0.8) * 36 * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [activeLang]);

  return (
    <div className="w-full relative h-28 my-8 border-y border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2.5 left-4 font-mono text-[9px] uppercase tracking-widest text-white/40 flex items-center gap-2">
        <Activity size={11} className="animate-pulse" />
        <span>HARMONIC SYNTHESIS // {activeLang ? activeLang.name.toUpperCase() : "STANDBY"}</span>
      </div>
      <div className="absolute bottom-2.5 right-4 font-mono text-[9px] uppercase tracking-widest text-white/40">
        48 kHz &bull; OSCILLOSCOPE CH-1
      </div>
    </div>
  );
};

const LanguageCard = ({ lang, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`border transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-2xl ${
        isHovered 
          ? "border-white/60 bg-gradient-to-b from-white/[0.1] to-black/90 shadow-[0_0_40px_rgba(255,255,255,0.12)]" 
          : "border-white/20 bg-gradient-to-b from-white/[0.05] to-black/80 backdrop-blur-2xl"
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Flag Avatar with Rotating Acoustic Orbit Ring */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative w-16 h-16 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform">
            <span className="filter grayscale group-hover:grayscale-0 transition-all duration-300">
              {lang.emoji}
            </span>
            {isHovered && (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute -inset-1 rounded-full border border-white/40 border-dashed"
              />
            )}
          </div>
          
          <span className="px-3.5 py-1 rounded-full border border-white/20 bg-white/5 font-mono text-[10px] uppercase tracking-wider text-white">
            {lang.level}
          </span>
        </div>

        <h3 className="font-times italic font-normal text-3xl text-white mb-2 leading-tight">
          {lang.name}
        </h3>
        <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">
          {lang.fluency}
        </p>
        <p className="text-sm font-times font-light text-white/75 leading-relaxed mb-6">
          {lang.desc}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-mono text-white/60 uppercase tracking-wider">
          <Volume2 size={13} className={isHovered ? "text-white animate-bounce" : "text-white/40"} />
          <span>{isHovered ? "OSCILLATING" : "HOVER TO TEST"}</span>
        </div>
        <span className="font-mono text-[9px] text-white/30">
          0{index + 1} // DIALECT
        </span>
      </div>
    </motion.div>
  );
};

const LanguagesSection = () => {
  const [activeLang, setActiveLang] = useState(null);

  return (
    <section id="languages" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative overflow-hidden select-none">
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-6 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 06 — Verbal Fluency &amp; Articulation
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Languages &amp; Dialects
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Trilingual verbal and written articulation, enabling seamless technical delivery, stakeholder presentation, and cross-functional leadership.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>ACOUSTIC RESONANCE // TRILINGUAL</span>
          </div>
        </motion.div>

        {/* Real-time Interactive Soundwave Canvas Visualizer */}
        <InteractiveOscilloscope activeLang={activeLang} />

        {/* 3 Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langs.map((l, i) => (
            <LanguageCard 
              key={l.name} 
              lang={l} 
              index={i} 
              isHovered={activeLang?.name === l.name}
              onHover={() => setActiveLang(l)}
              onLeave={() => setActiveLang(null)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LanguagesSection;
