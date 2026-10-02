import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/* ───────────────────────────────────────────────
   1. VENETIAN BLINDS TRANSITION
   Horizontal bars that flip into view one by one
   ─────────────────────────────────────────────── */

const VenetianBar = ({ scrollYProgress, index, total }) => {
  const start = index * (0.6 / total);
  const end = start + 0.35;
  const rotateX = useTransform(scrollYProgress, [start, end], [90, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const isWhite = index % 2 === 0;

  return (
    <motion.div
      style={{ rotateX, opacity, perspective: 600 }}
      className={`w-full h-3 sm:h-4 ${isWhite ? 'bg-[#FFFFFF]' : 'bg-[#000000] border border-white/10'}`}
    />
  );
};

export const VenetianBlindsTransition = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const total = 8;

  return (
    <div ref={containerRef} className={`w-full py-8 sm:py-12 flex flex-col gap-1.5 overflow-hidden select-none pointer-events-none ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <VenetianBar key={i} scrollYProgress={scrollYProgress} index={i} total={total} />
      ))}
    </div>
  );
};

/* ───────────────────────────────────────────────
   2. INK BLEED TRANSITION
   Circle expanding from center on scroll
   ─────────────────────────────────────────────── */

export const InkBleedTransition = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale2 = useTransform(scrollYProgress, [0.15, 1], [0, 35]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 0.15]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.6, 1], [0, 0.6, 0.1]);

  return (
    <div ref={containerRef} className={`w-full h-[100px] flex items-center justify-center overflow-hidden relative select-none pointer-events-none ${className}`}>
      <motion.div
        style={{ scale: scale1, opacity: opacity1 }}
        className="w-6 h-6 bg-[#FFFFFF] rounded-full absolute"
      />
      <motion.div
        style={{ scale: scale2, opacity: opacity2 }}
        className="w-6 h-6 bg-[#000000] border border-white/20 rounded-full absolute"
      />
    </div>
  );
};

/* ───────────────────────────────────────────────
   3. DIAGONAL WIPE TRANSITION
   Angled gradient sweep across the viewport
   ─────────────────────────────────────────────── */

export const DiagonalWipeTransition = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const skewY = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className={`w-full h-[80px] overflow-hidden select-none pointer-events-none ${className}`}>
      <motion.div
        style={{ skewY, y: translateY, opacity }}
        className="w-full h-full bg-[#FFFFFF] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#000000] opacity-20" />
      </motion.div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   4. PIXEL GRID TRANSITION
   Grid of squares that scale in with staggered delay
   ─────────────────────────────────────────────── */

const PixelCell = ({ scrollYProgress, row, col, totalCols }) => {
  const index = row * totalCols + col;
  const offset = (index % 9) * 0.04;
  const cellScale = useTransform(scrollYProgress, [0 + offset, 0.5 + offset], [0, 1]);
  const cellOpacity = useTransform(scrollYProgress, [0 + offset, 0.5 + offset], [0, 1]);
  const isWhite = (row + col) % 2 === 0;

  return (
    <motion.div
      style={{ scale: cellScale, opacity: cellOpacity }}
      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${isWhite ? 'bg-[#FFFFFF]' : 'bg-[#FFFFFF]/20'}`}
    />
  );
};

export const PixelGridTransition = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const rows = 3;
  const cols = 16;

  return (
    <div ref={containerRef} className={`w-full py-6 flex flex-col items-center justify-center gap-2 overflow-hidden select-none pointer-events-none ${className}`}>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex justify-center gap-2 w-full">
          {Array.from({ length: cols }).map((_, c) => (
            <PixelCell key={c} scrollYProgress={scrollYProgress} row={r} col={c} totalCols={cols} />
          ))}
        </div>
      ))}
    </div>
  );
};

/* ───────────────────────────────────────────────
   5. KINETIC RIBBON TRANSITION (IMPROVED)
   Triple-track angled parallax marquee
   ─────────────────────────────────────────────── */

export const KineticRibbonTransition = ({ 
  text1 = "FULL STACK ARCHITECT //", 
  text2 = "CREATIVE ENGINEERING //", 
  text3 = "PROBLEM SOLVER //",
  rotate = -3,
  className = "" 
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const ribbonScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.04, 0.96]);

  const repeatText = (text) => Array(6).fill(text).join(" ");

  return (
    <div 
      ref={containerRef} 
      className={`w-full relative py-6 sm:py-10 overflow-hidden z-20 select-none pointer-events-none ${className}`}
      style={{ isolation: "isolate" }}
    >
      <motion.div 
        style={{ scale: ribbonScale }}
        className="w-[120vw] -ml-[10vw] flex flex-col gap-2 origin-center"
        data-rotate={rotate}
      >
        {/* Track 1: White bg, black text (italic Times) */}
        <div 
          className="w-full bg-[#FFFFFF] text-[#000000] py-2.5 sm:py-3 border-y border-black/10 overflow-hidden flex shadow-sm"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <motion.div 
            style={{ x: x1 }} 
            className="flex whitespace-nowrap gap-8 font-times font-normal italic uppercase text-base sm:text-xl md:text-2xl tracking-[0.15em]"
          >
            <span>{repeatText(text1)}</span>
          </motion.div>
        </div>

        {/* Track 2: Black bg, white text (mono bold) — reversed direction */}
        <div 
          className="w-full bg-[#000000] text-[#FFFFFF] py-2 sm:py-2.5 border-y border-white/10 overflow-hidden flex shadow-sm"
          style={{ transform: `rotate(${-rotate}deg)` }}
        >
          <motion.div 
            style={{ x: x2 }} 
            className="flex whitespace-nowrap gap-8 font-times font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.3em]"
          >
            <span>{repeatText(text2)}</span>
          </motion.div>
        </div>

        {/* Track 3: White bg, black text (light italic) */}
        <div 
          className="w-full bg-[#FFFFFF] text-[#000000]/70 py-2 sm:py-2.5 border-y border-black/10 overflow-hidden flex shadow-sm"
          style={{ transform: `rotate(${rotate * 0.5}deg)` }}
        >
          <motion.div 
            style={{ x: x3 }} 
            className="flex whitespace-nowrap gap-8 font-times italic uppercase text-xs sm:text-sm md:text-base tracking-[0.2em]"
          >
            <span>{repeatText(text3)}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
