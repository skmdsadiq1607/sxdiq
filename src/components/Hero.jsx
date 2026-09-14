import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Download, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
import TerminalConsole from "./TerminalConsole";

const roles = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Algorithmic Problem Solver",
  "Open Source Enthusiast",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 30 : 65);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Subtle 3D tilt tracking for hero titles
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none bg-black text-white"
    >
      {/* Dynamic Ambient Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[150px] pointer-events-none transition-transform duration-300 ease-out -z-10"
        style={{
          transform: `translate(${mousePos.x * 120}px, ${mousePos.y * 120}px) translate(-50%, -50%)`,
          left: "50%",
          top: "40%",
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-20 z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Software Engineer // Portfolio 2026
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest">
            B.Tech IT @ Anurag University // CGPA: 9.25
          </div>
        </motion.div>

        {/* Main Grid: Left Typography + Right Interactive Terminal */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            style={{ y: yParallax }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Massive Architectural Typography in Syne */}
            <div className="overflow-visible space-y-1 mb-6">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-black text-6xl sm:text-8xl xl:text-9xl leading-[0.88] uppercase tracking-tighter text-white select-none hover:tracking-normal transition-all duration-700"
              >
                SHAIK
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-black text-6xl sm:text-8xl xl:text-9xl leading-[0.88] uppercase tracking-tighter text-stroke select-none hover:text-white transition-all duration-700"
              >
                SADIQ<span className="text-white">.</span>
              </motion.h1>
            </div>

            {/* Role Typewriter with Terminal Indicator */}
            <div className="h-9 mb-6 font-mono text-base sm:text-lg text-white/80 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <span className="tracking-tight">{displayText}</span>
              <span className="terminal-cursor" />
            </div>

            {/* Bio Synopsis */}
            <p className="text-sm sm:text-base text-white/60 max-w-xl mb-10 leading-relaxed font-light">
              Crafting premium, high-performance web systems and full-stack architectures. Obsessed with clean engineering, micro-interactions, and algorithmic problem solving.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span>Selected Work</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn-secondary group"
              >
                <span>Contact Me</span>
                <Mail size={14} />
              </a>
              <a
                href="/ShaikKempleMohammedSadiqResume.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="btn-secondary group"
              >
                <span>Resume</span>
                <Download size={14} />
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-6 text-white/50 text-xs font-mono uppercase tracking-widest">
              <a
                href="https://github.com/skmdsadiq1607"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors duration-200"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-sadiq-b1650a377/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors duration-200"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">// Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <TerminalConsole />
          </motion.div>

        </div>
      </div>

      {/* Dual Opposing Infinite Marquee Tape */}
      <div className="w-full mt-16 border-y border-white/10 bg-black/60 backdrop-blur-md py-4 overflow-hidden flex flex-col gap-3 select-none">
        {/* Row 1: Forward Direction */}
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-syne font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-white/70">
          <span>SHAIK KEMPLE MOHAMMED SADIQ // FULL STACK ENGINEER // MERN SPECIALIST // ALGORITHMIC PROBLEM SOLVER //&nbsp;</span>
          <span>SHAIK KEMPLE MOHAMMED SADIQ // FULL STACK ENGINEER // MERN SPECIALIST // ALGORITHMIC PROBLEM SOLVER //&nbsp;</span>
        </div>
        {/* Row 2: Reverse Direction with outline typography */}
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
          <span>REACT.JS // NODE.JS // EXPRESS.JS // MONGODB // JAVA // DATA STRUCTURES // THREE.JS // TAILWIND CSS //&nbsp;</span>
          <span>REACT.JS // NODE.JS // EXPRESS.JS // MONGODB // JAVA // DATA STRUCTURES // THREE.JS // TAILWIND CSS //&nbsp;</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
