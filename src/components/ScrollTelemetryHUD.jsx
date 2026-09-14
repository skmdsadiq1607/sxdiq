import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { Activity } from "lucide-react";

const SECTORS = [
  { id: "hero", label: "GENESIS", code: "01", range: [0, 0.12] },
  { id: "about", label: "IDENTITY", code: "02", range: [0.12, 0.25] },
  { id: "skills", label: "ARSENAL", code: "03", range: [0.25, 0.38] },
  { id: "projects", label: "ARCHIVES", code: "04", range: [0.38, 0.58] },
  { id: "leadership", label: "CHRONOLOGY", code: "05", range: [0.58, 0.78] },
  { id: "certifications", label: "CREDENTIALS", code: "06", range: [0.78, 0.88] },
  { id: "languages", label: "LINGUISTICS", code: "07", range: [0.88, 0.94] },
  { id: "contact", label: "TRANSMISSION", code: "08", range: [0.94, 1.0] },
];

const ScrollTelemetryHUD = ({ scrollYProgress, scrollVelocity }) => {
  const [currentSector, setCurrentSector] = useState(SECTORS[0]);
  const [rawVelocity, setRawVelocity] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothVelocity = useSpring(scrollVelocity || 0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    let scrollTimeout;

    const unsubscribeProgress = scrollYProgress.onChange((v) => {
      setProgressPercent(Math.round(v * 100));

      const active = SECTORS.find(s => v >= s.range[0] && v <= s.range[1]) || SECTORS[SECTORS.length - 1];
      setCurrentSector(active);

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 250);
    });

    const unsubscribeVelocity = smoothVelocity.onChange((vel) => {
      setRawVelocity(Math.min(999, Math.round(Math.abs(vel))));
    });

    return () => {
      unsubscribeProgress();
      unsubscribeVelocity();
      clearTimeout(scrollTimeout);
    };
  }, [scrollYProgress, smoothVelocity]);

  const handleJumpToSector = (sectorId) => {
    const el = document.getElementById(sectorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none select-none w-auto max-w-[94vw]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-auto bg-black/85 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-4 text-white font-mono text-[10px] tracking-wider transition-all duration-300 hover:border-white/40"
      >
        {/* Radar Signal Pulse */}
        <div className="flex items-center gap-2 pr-2 border-r border-white/15">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 ${isScrolling ? "duration-500" : "duration-1000"}`}></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[9px] uppercase tracking-widest text-white/60 hidden sm:inline font-semibold">
            TELEMETRY
          </span>
        </div>

        {/* Active Sector Coordinates */}
        <div className="flex items-center gap-2">
          <span className="text-white/40">SEC {currentSector.code} //</span>
          <span className="font-bold text-white tracking-widest uppercase transition-all">
            {currentSector.label}
          </span>
        </div>

        {/* Live Velocity Speedometer */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
          <Activity size={10} className={`text-white transition-transform ${isScrolling ? "scale-125" : "scale-100"}`} />
          <span className="text-white font-bold tracking-widest">
            {String(rawVelocity).padStart(3, "0")}
          </span>
          <span className="text-white/40 text-[8px] uppercase">PX/S</span>
        </div>

        {/* Quantum Micro-Tick Progress Meter */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/15">
          <div className="w-16 h-1.5 rounded-full bg-white/15 overflow-hidden hidden sm:block relative">
            <motion.div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="font-bold text-white text-[9px]">
            {String(progressPercent).padStart(2, "0")}%
          </span>
        </div>

        {/* Interactive Sector Jump Dots */}
        <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-white/15">
          {SECTORS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleJumpToSector(sec.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                currentSector.id === sec.id ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-white/30 hover:bg-white/70"
              }`}
              title={`Jump to ${sec.label}`}
              aria-label={`Jump to ${sec.label}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollTelemetryHUD;
