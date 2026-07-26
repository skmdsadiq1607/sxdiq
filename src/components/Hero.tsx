import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Download, Github, Linkedin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import TerminalConsole from "./TerminalConsole";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground noise-overlay">
      {/* Editorial grid divisions */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-r border-border h-full" />
        <div className="border-r border-border h-full hidden sm:block" />
        <div className="border-r border-border h-full hidden sm:block" />
        <div className="h-full" />
      </div>

      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container mx-auto px-6 md:px-16 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-mono text-xs uppercase tracking-[0.25em] mb-4"
            >
              Shaik Kemple Mohammed Sadiq // Developer
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-4"
              >
                SHAIK
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-6 text-stroke"
                style={{
                  WebkitTextStroke: "1px currentColor",
                  color: "transparent"
                }}
              >
                SADIQ.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-8 mb-8 font-mono text-sm sm:text-base text-muted-foreground flex items-center"
            >
              <span className="mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="terminal-cursor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
            >
              Crafting premium high-performance web experiences using the MERN stack. IT student at Anurag University, Hyderabad, obsessed with algorithmic problem solving.
            </motion.p>

            {/* CTA Buttons - Flat Inversion Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 items-center mb-10"
            >
              <a href="#projects" className="solid-btn">
                Projects
              </a>
              <a href="#contact" className="solid-btn-inverted">
                Contact <Mail size={12} className="ml-2 inline" />
              </a>
              <a 
                href="/ShaikKempleMohammedSadiqResume.pdf" 
                download
                target="_blank"
                rel="noreferrer"
                className="solid-btn"
              >
                Resume <Download size={12} className="ml-2 inline" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
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
                  className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors duration-200"
                >
                  <s.icon size={14} />
                  <span>{s.label}</span>
                </a>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Console terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <TerminalConsole />
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-6 sm:left-16"
      >
        <a href="#about" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-xs uppercase tracking-widest">
          <span>Scroll Down</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
