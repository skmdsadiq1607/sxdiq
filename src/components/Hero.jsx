import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Download, Github, Linkedin } from "lucide-react";
import gsap from "gsap";
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

  // Kinetic typography outline expansion based on scroll (runs on scroll in desktop mode)
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

  // GSAP Intro Sequence Trigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Shutter curtains slide up (these are in the parent container, handled if present)
      tl.to(".hero-curtain-panel", {
        yPercent: -100,
        duration: 1.6,
        stagger: 0.12,
        ease: "power4.inOut"
      }, 0);

      // 2. Ambient Glow Expansion
      tl.fromTo([".hero-glow-1", ".hero-glow-2"],
        { scale: 0.1, opacity: 0 },
        { scale: 1.0, opacity: 0.25, duration: 2.2, stagger: 0.2, ease: "power3.out" },
        0.3
      );

      // 3. Camera Zoom content container
      tl.fromTo(".hero-content-container",
        { scale: 1.15, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 1.8, ease: "power4.out" },
        0.1
      );

      // 4. Staggered 3D word/character reveal
      tl.fromTo(".hero-reveal-char",
        { rotateX: -90, y: 40, z: -100, filter: "blur(12px)", scale: 0.8, opacity: 0 },
        { rotateX: 0, y: 0, z: 0, filter: "blur(0px)", scale: 1.0, opacity: 1, duration: 1.2, stagger: 0.025, ease: "back.out(1.7)" },
        0.4
      );

      // 5. Horizontal Laser Sweep Line
      tl.fromTo(".hero-sweep-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.3, duration: 2.0, ease: "power3.inOut" },
        0.5
      );

      // 6. Subtext Fade & Slide
      tl.fromTo(".hero-subtext",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 },
        0.8
      );

      // 7. Bouncy CTA buttons pop in
      tl.fromTo(".hero-btn",
        { scale: 0.3, opacity: 0, y: 40 },
        { scale: 1.0, opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1.0, 0.75)" },
        0.9
      );

      // 8. Navbar slide down
      tl.fromTo(".global-nav",
        { yPercent: -100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        0.6
      );
    });

    return () => ctx.revert();
  }, []);

  const renderChars = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="hero-reveal-char inline-block"
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border relative overflow-hidden">
      
      {/* 2. Ambient Glow Orbs */}
      <div className="hero-glow-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-zinc-800/10 dark:bg-zinc-100/5 blur-[120px] pointer-events-none -z-10 opacity-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-zinc-800/10 dark:bg-zinc-100/5 blur-[100px] pointer-events-none -z-10 opacity-0 transform translate-x-1/2 translate-y-1/2" />

      {/* Editorial grid divisions */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20 -z-10">
        <div className="border-r border-border h-full" />
        <div className="border-r border-border h-full" />
        <div className="border-r border-border h-full" />
        <div className="h-full" />
      </div>

      <div className="container mx-auto relative z-10 pt-16 hero-content-container opacity-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
              Shaik Kemple Mohammed Sadiq // Developer
            </p>

            {/* Title word 1 */}
            <div className="overflow-visible" style={{ perspective: 1200 }}>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-2 select-none">
                {renderChars("SHAIK")}
              </h1>
            </div>
            
            {/* Title word 2 (Outline text with dynamic scroll expand) */}
            <motion.div 
              style={{ scale, letterSpacing, opacity: fadeOut, perspective: 1200 }} 
              className="overflow-visible" 
            >
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-6 text-stroke kinetic-outline-text select-none">
                {renderChars("SADIQ.")}
              </h1>
            </motion.div>

            {/* 5. Horizontal Laser Sweep Line */}
            <div className="hero-sweep-line h-[1px] bg-foreground/20 my-4 w-full origin-left opacity-0" />

            <div className="h-8 mb-8 font-mono text-sm sm:text-base text-zinc-500 flex items-center">
              <span className="mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="terminal-cursor" />
            </div>

            <p className="hero-subtext text-sm sm:text-base text-zinc-500 max-w-xl mb-10 leading-relaxed font-light opacity-0">
              Crafting premium high-performance web experiences using the MERN stack. IT student at Anurag University, Hyderabad, obsessed with algorithmic problem solving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <div className="hero-btn opacity-0">
                <a href="#projects" className="solid-btn shimmer-btn">
                  Projects
                </a>
              </div>
              <div className="hero-btn opacity-0">
                <a href="#contact" className="solid-btn-inverted shimmer-btn">
                  Contact <Mail size={12} className="ml-2 inline" />
                </a>
              </div>
              <div className="hero-btn opacity-0">
                <a 
                  href="/ShaikKempleMohammedSadiqResume.pdf" 
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="solid-btn shimmer-btn"
                >
                  Resume <Download size={12} className="ml-2 inline" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
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
            </div>
          </div>

          {/* Right Column (Console with Laser scanline overlay) */}
          <div className="lg:col-span-5 flex justify-center w-full relative">
            <div className="relative overflow-hidden w-full max-w-lg">
              <div className="laser-scanner text-white/10" />
              <TerminalConsole />
            </div>
          </div>

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
