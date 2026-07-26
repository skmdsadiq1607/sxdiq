import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Download, Github, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TerminalConsole from "./TerminalConsole";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Kinetic typography outline expansion based on scroll
  const letterSpacing = useTransform(scrollYProgress, [0, 0.1], ["0.01em", "0.25em"]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.15]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
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
      }, isDeleting ? 30 : 60);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section ref={heroRef} className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border relative">
      {/* Editorial grid divisions */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
        <div className="border-r border-border h-full" />
        <div className="border-r border-border h-full" />
        <div className="border-r border-border h-full" />
        <div className="h-full" />
      </div>

      <div className="container mx-auto relative z-10 pt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.p
              style={{ opacity: fadeOut }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] mb-4"
            >
              Shaik Kemple Mohammed Sadiq // Developer
            </motion.p>

            <motion.div style={{ scale, opacity: fadeOut }} className="overflow-visible">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-4"
              >
                SHAIK
              </motion.h1>
            </motion.div>
            
            <motion.div style={{ scale, letterSpacing, opacity: fadeOut }} className="overflow-visible">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-6 text-stroke kinetic-outline-text"
              >
                SADIQ.
              </motion.h1>
            </motion.div>

            <motion.div
              style={{ opacity: fadeOut }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-8 mb-8 font-mono text-sm sm:text-base text-zinc-500 flex items-center"
            >
              <span className="mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="terminal-cursor" />
            </motion.div>

            <motion.p
              style={{ opacity: fadeOut }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base text-zinc-500 max-w-xl mb-10 leading-relaxed font-light"
            >
              Crafting premium high-performance web experiences using the MERN stack. IT student at Anurag University, Hyderabad, obsessed with algorithmic problem solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              style={{ opacity: fadeOut }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 items-center mb-10"
            >
              <a href="#projects" className="solid-btn shimmer-btn">
                Projects
              </a>
              <a href="#contact" className="solid-btn-inverted shimmer-btn">
                Contact <Mail size={12} className="ml-2 inline" />
              </a>
              <a 
                href="/ShaikKempleMohammedSadiqResume.pdf" 
                download
                target="_blank"
                rel="noreferrer"
                className="solid-btn shimmer-btn"
              >
                Resume <Download size={12} className="ml-2 inline" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              style={{ opacity: fadeOut }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-foreground font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors duration-200"
                >
                  <s.icon size={14} />
                  <span>{s.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Console with Laser scanline overlay) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="lg:col-span-5 flex justify-center w-full relative"
          >
            <div className="relative overflow-hidden w-full max-w-lg">
              <div className="laser-scanner text-white/10" />
              <TerminalConsole />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator for horizontal translation */}
      <div className="absolute bottom-8 left-12 md:left-24 flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase tracking-widest pointer-events-none">
        <span>Scroll Down / Swipe to scroll horizontally</span>
        <ArrowRight size={12} className="animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
