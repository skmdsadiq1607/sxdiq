import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const KineticRibbonTransition = ({ 
  text1 = "FULL STACK ARCHITECT // DISTRIBUTED SYSTEMS // MERN & CLOUD // PROBLEM SOLVER //",
  text2 = "REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //",
  rotate = -2.5,
  bgColor = "bg-white",
  textColor = "text-black",
  direction = "left"
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  return (
    <div 
      ref={containerRef}
      className="w-full relative py-6 sm:py-8 overflow-hidden z-20 select-none pointer-events-none"
      style={{ isolation: "isolate" }}
    >
      <div 
        className="w-[115vw] -ml-[7.5vw] flex flex-col gap-2 shadow-2xl origin-center"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {/* Upper Ribbon Tape */}
        <div className="w-full bg-white text-black py-2.5 sm:py-3.5 border-y border-black/20 overflow-hidden flex shadow-lg">
          <motion.div 
            style={{ x: x1 }} 
            className="flex whitespace-nowrap gap-8 font-times font-normal italic uppercase text-base sm:text-xl md:text-2xl tracking-[0.2em]"
          >
            <span>{text1}</span>
            <span>{text1}</span>
            <span>{text1}</span>
            <span>{text1}</span>
          </motion.div>
        </div>

        {/* Lower Ribbon Tape (Inverted) */}
        <div className="w-full bg-black text-white py-2 sm:py-2.5 border-y border-white/20 overflow-hidden flex shadow-lg">
          <motion.div 
            style={{ x: x2 }} 
            className="flex whitespace-nowrap gap-8 font-mono font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.35em]"
          >
            <span>{text2}</span>
            <span>{text2}</span>
            <span>{text2}</span>
            <span>{text2}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KineticRibbonTransition;
