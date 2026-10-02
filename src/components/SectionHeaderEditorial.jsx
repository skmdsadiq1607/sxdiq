import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-3 md:mr-5 inline-block">
      {children}
    </motion.span>
  );
};

const SectionHeaderEditorial = ({
  number = "01",
  tag = "// 01 — Section",
  headline = "A passionate developer turning ideas into reality",
  badge = null,
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
    offset: ["start 90%", "end 60%"]
  });
  const ruleScaleX = useTransform(ruleProgress, [0, 1], [0, 1]);

  const bgRef = useRef(null);
  const { scrollYProgress: bgProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(bgProgress, [0, 1], ["-20%", "20%"]);

  const words = headline.split(" ");
  const textColor = isWhiteBg ? "text-[#000000]" : "text-[#FFFFFF]";
  const watermarkColor = isWhiteBg ? "text-[#000000]/5" : "text-[#FFFFFF]/5";
  const ruleColor = isWhiteBg ? "bg-[#000000]/15" : "bg-[#FFFFFF]/15";
  const tagColor = isWhiteBg ? "text-[#000000]/50" : "text-[#FFFFFF]/50";

  return (
    <div ref={bgRef} className={`relative w-full ${className}`}>
      {/* Giant Parallax Number in Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 right-0 pointer-events-none z-0 select-none"
      >
        <h1 className={`text-[28vw] leading-none ${watermarkColor} font-times select-none tracking-tighter`}>
          {number}
        </h1>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col gap-5 mb-10">
        {/* Section Tag & Badge */}
        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs tracking-[0.3em] uppercase block ${tagColor}`}>
            {tag}
          </span>
          {badge && (
            <span className={`font-mono text-[10px] uppercase tracking-widest ${tagColor}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Scroll-Driven Word Reveal Headline */}
        <div ref={containerRef} className="max-w-4xl">
          <h2 className={`text-4xl sm:text-6xl lg:text-8xl font-times font-normal not-italic leading-tight tracking-tight flex flex-wrap ${textColor}`}>
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

        {/* Self-Drawing Horizontal Rule */}
        <div ref={ruleRef} className="w-full flex justify-end mt-2">
          <motion.div 
            style={{ scaleX: ruleScaleX, transformOrigin: "left" }}
            className={`w-full h-[1px] ${ruleColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeaderEditorial;
