import { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  // GSAP Intro Sequence Trigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Shutter curtains slide up (if parent panel exists)
      tl.to(".hero-curtain-panel", {
        yPercent: -100,
        duration: 1.6,
        stagger: 0.12,
        ease: "power4.inOut"
      }, 0);

      // Fade/unfold split background halves
      tl.fromTo(".split-bg-left", 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.4, ease: "power4.inOut", transformOrigin: "left" }, 
        0
      );
      tl.fromTo(".split-bg-right", 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.4, ease: "power4.inOut", transformOrigin: "right" }, 
        0.1
      );

      // Zoom content wrapper
      tl.fromTo(".hero-content-wrap", 
        { scale: 1.1, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }, 
        0.2
      );

      // 3D/Fade reveal for Kinetic Text lines
      tl.fromTo(".kinetic-line-1", 
        { y: 50, opacity: 0, filter: "blur(8px)" }, 
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.0, ease: "power4.out" }, 
        0.4
      );
      tl.fromTo(".kinetic-center", 
        { scale: 0.9, opacity: 0, letterSpacing: "-0.04em" }, 
        { scale: 1, opacity: 1, letterSpacing: "0em", duration: 1.4, ease: "power4.out" }, 
        0.5
      );
      tl.fromTo(".kinetic-line-2", 
        { y: -50, opacity: 0, filter: "blur(8px)" }, 
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.0, ease: "power4.out" }, 
        0.6
      );

      // Scale-in the marquee borders and contents
      tl.fromTo(".marquee-container-wrapper", 
        { opacity: 0, scaleY: 0 }, 
        { opacity: 1, scaleY: 1, duration: 0.8, ease: "power2.out" }, 
        0.8
      );

      // Slide in actions from left/right
      tl.fromTo(".hero-action-panel-left", 
        { x: -30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        1.0
      );
      tl.fromTo(".hero-action-panel-right", 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        1.0
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen w-screen shrink-0 relative flex flex-col justify-between overflow-hidden select-none">
      
      {/* 🌓 Split-Screen Background Block */}
      <div className="absolute inset-0 flex pointer-events-none -z-20">
        {/* Left Half: Pure Black */}
        <div className="split-bg-left w-1/2 h-full bg-[#000000]" />
        {/* Right Half: Premium Soft Cream (#FAF9F5) in Light Mode, Pure White (#FFFFFF) in Dark Mode */}
        <div className="split-bg-right w-1/2 h-full bg-[#FAF9F5] dark:bg-[#FFFFFF] transition-colors duration-500" />
      </div>

      {/* ⚡ Purple Ambient Glow Orb (8b5cf6 at 5% opacity, blur 150px) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none -z-10" />

      {/* Global Hero Wrapper Container */}
      <div className="hero-content-wrap opacity-0 flex-1 flex flex-col justify-between h-full w-full">
        
        {/* Top Header / Branding Row (Always blended) */}
        <div className="w-full px-12 md:px-24 pt-12 flex justify-between items-center relative z-10 mix-blend-difference text-white">
          <span className="font-mono text-xs uppercase tracking-[0.25em]">Shaik Kemple Mohammed Sadiq</span>
          <span className="font-times italic text-sm tracking-wide lowercase">creative portfolio v2.0</span>
        </div>

        {/* Center Kinetic Typography Wrapper */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 mix-blend-difference text-white px-4">
          <div className="text-center flex flex-col items-center">
            
            {/* Header Line 1 ("we build custom") */}
            <div className="kinetic-line-1 opacity-0 overflow-hidden">
              <h2 className="font-times font-normal text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight lowercase">
                we build custom
              </h2>
            </div>

            {/* Center Heading ("WEBSITES") */}
            <div className="kinetic-center opacity-0 my-3 select-none">
              <h1 className="font-extrabold uppercase text-[12vw] sm:text-[13vw] xl:text-[14vw] leading-hero tracking-tight">
                WEBSITES
              </h1>
            </div>

            {/* Footer Line 2 ("that grow business") */}
            <div className="kinetic-line-2 opacity-0 overflow-hidden">
              <h3 className="font-times font-normal text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight lowercase">
                that grow business
              </h3>
            </div>

          </div>
        </div>

        {/* 🌓 Black & White Split Marquee (Color Inversion Area) */}
        <div className="marquee-container-wrapper opacity-0 w-full mb-24 relative z-10 mix-blend-difference flex flex-col gap-3 py-6 border-y border-white/20 select-none">
          
          {/* Row 1: Playfair Display Serif (font-times, font-normal) */}
          <div className="marquee-container w-full overflow-hidden flex">
            <div className="animate-marquee flex whitespace-nowrap gap-12 font-times font-normal text-white uppercase text-2xl sm:text-3xl tracking-[0.2em]">
              <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
              <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
            </div>
          </div>

          {/* Row 2: Monospace / Courier (font-mono, font-bold) */}
          <div className="marquee-container w-full overflow-hidden flex">
            <div className="animate-marquee flex whitespace-nowrap gap-12 font-mono font-bold text-white uppercase text-sm sm:text-base tracking-[0.35em]" style={{ animationDirection: "reverse" }}>
              <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
              <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
            </div>
          </div>

        </div>

        {/* Bottom Actions and Socials Panel */}
        <div className="w-full px-12 md:px-24 pb-12 grid grid-cols-2 relative z-10 mix-blend-difference text-white">
          
          {/* Left Side Actions (Over Black Half) */}
          <div className="hero-action-panel-left opacity-0 flex flex-col gap-3 justify-end items-start font-mono text-[10px] uppercase tracking-widest">
            <div className="flex gap-4">
              <a href="https://github.com/skmdsadiq1607" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5">
                GitHub <ArrowRight size={10} className="-rotate-45" />
              </a>
              <a href="https://www.linkedin.com/in/shaik-sadiq-b1650a377/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5">
                LinkedIn <ArrowRight size={10} className="-rotate-45" />
              </a>
            </div>
            <span className="text-white/40">// hyderabad, india</span>
          </div>

          {/* Right Side Actions (Over White/Cream Half) */}
          <div className="hero-action-panel-right opacity-0 flex flex-col gap-3 justify-end items-end">
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors font-mono text-[9px] uppercase tracking-widest font-bold">
                Selected Projects
              </a>
              <a href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                Contact <Mail size={10} />
              </a>
              <a 
                href="/ShaikKempleMohammedSadiqResume.pdf" 
                download 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-colors font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5"
              >
                Resume <Download size={10} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/50 mt-2">
              <span>Scroll to Enter</span>
              <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
