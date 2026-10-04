import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-3 md:mr-5 inline-block will-change-transform">
      {children}
    </motion.span>
  );
};

const SectionHeaderEditorial = ({
  number = "01",
  label = null,
  tag = "About",
  headline = "Turning ideas into reality with clean code and modern web technologies",
  isWhiteBg = false,
  className = "",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"]
  });

  const ruleRef = useRef(null);
  const { scrollYProgress: ruleProgress } = useScroll({
    target: ruleRef,
    offset: ["start 92%", "end 65%"]
  });
  const ruleScaleX = useTransform(ruleProgress, [0, 1], [0, 1]);

  const bgRef = useRef(null);
  const { scrollYProgress: bgProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(bgProgress, [0, 1], ["-12%", "12%"]);

  const words = headline.split(" ");
  const textColor = isWhiteBg ? "text-[#000000]" : "text-[#FFFFFF]";
  const watermarkColor = isWhiteBg ? "text-black/[0.04]" : "text-white/[0.04]";
  const tagColor = isWhiteBg ? "text-black/60" : "text-white/60";

  const displayLabel = label || tag;

  return (
    <div ref={bgRef} className={`relative w-full overflow-hidden ${className}`}>
      {/* Giant Parallax Number Watermark — elegantly scaled & non-colliding */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute -top-6 right-2 sm:right-6 pointer-events-none z-0 select-none"
        aria-hidden="true"
      >
        <span className={`text-[clamp(6rem,16vw,14rem)] leading-none ${watermarkColor} font-times font-normal select-none tracking-tighter block`}>
          {number}
        </span>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col gap-5 mb-8">
        {/* Clean Section Label — No AI badges */}
        <div className="flex items-center">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shadow-[0_0_8px_rgba(0,82,255,0.85)]" />
            <span className={`font-mono text-xs tracking-[0.25em] uppercase block ${tagColor}`}>
              {displayLabel}
            </span>
          </div>
        </div>

        {/* Scroll-Driven Word Reveal Headline */}
        <div ref={containerRef} className="max-w-4xl">
          <h2 className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-times font-normal not-italic leading-[1.08] tracking-tight flex flex-wrap ${textColor}`}>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>

        {/* Self-Drawing Horizontal Rule with Cobalt Accent */}
        <div ref={ruleRef} className="w-full flex items-center justify-between mt-3">
          <motion.div 
            style={{ scaleX: ruleScaleX, transformOrigin: "left" }}
            className={`w-full h-[1px] ${
              isWhiteBg 
                ? "bg-gradient-to-r from-[#0047AB]/70 via-black/15 to-transparent" 
                : "bg-gradient-to-r from-[#0052FF]/90 via-white/20 to-transparent"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeaderEditorial;
