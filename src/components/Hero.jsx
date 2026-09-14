import { useRef, useEffect } from "react";
import { Mail, Download, ArrowRight } from "lucide-react";
import gsap from "gsap";

const HeroInner = ({ isDarkLayer }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 md:px-24">

      {/* Center Center Text (Kinetic Typography style) */}
      <div className="flex-1 flex flex-col justify-center items-center my-auto">
        <div className="text-center flex flex-col items-center">
          <div className="kinetic-center my-2 sm:my-4">
            <h1 className="font-times font-normal text-[clamp(3rem,8.5vw,10rem)] leading-[0.92] tracking-tight text-center">
              <span className="block">Shaik Kemple</span>
              <span className="block mt-1 sm:mt-2">Mohammed Sadiq</span>
            </h1>
          </div>
          <div className="kinetic-line-2 mt-2 sm:mt-4">
            <h2 className="font-times font-normal italic text-[clamp(1.15rem,2.5vw,2.25rem)] tracking-wide opacity-80 whitespace-nowrap">
              Full Stack Developer
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee Placeholder (maintains identical flex layout height in base & overlay layers) */}
      <div className="w-full my-auto flex flex-col gap-2.5 py-4 border-y border-transparent invisible pointer-events-none select-none" aria-hidden="true">
        <div className="w-full overflow-hidden flex">
          <div className="flex whitespace-nowrap gap-12 font-times font-normal uppercase text-lg sm:text-2xl md:text-3xl tracking-[0.2em]">
            <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
          </div>
        </div>
        <div className="w-full overflow-hidden flex">
          <div className="flex whitespace-nowrap gap-12 font-mono font-bold uppercase text-xs sm:text-sm tracking-[0.35em]">
            <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        {/* Left: GitHub, LinkedIn, location */}
        <div className="hero-action-panel-left flex flex-col gap-2 justify-end items-start font-mono text-[10px] uppercase tracking-widest text-white">
          <div className="flex gap-4 items-center">
            <a 
              href="https://github.com/skmdsadiq1607" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:underline flex items-center gap-1.5 transition-opacity hover:opacity-80 text-white"
            >
              GitHub <ArrowRight size={10} className="-rotate-45" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shaik-sadiq-b1650a377/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:underline flex items-center gap-1.5 transition-opacity hover:opacity-80 text-white"
            >
              LinkedIn <ArrowRight size={10} className="-rotate-45" />
            </a>
          </div>
          <span className="opacity-40 text-white">// hyderabad, india</span>
        </div>

        {/* Right: Selected Projects, Contact, Resume */}
        <div className="hero-action-panel-right flex flex-col gap-2.5 justify-end items-start sm:items-end">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
            <a 
              href="#projects" 
              className={`px-4 py-2 rounded-full border transition-all font-mono text-[9px] uppercase tracking-widest font-semibold ${
                isDarkLayer 
                  ? "border-white/40 text-white hover:bg-white hover:text-black hover:border-white" 
                  : "border-black/30 text-black hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              Selected Projects
            </a>
            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-full border transition-all font-mono text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
                isDarkLayer 
                  ? "border-white/40 text-white hover:bg-white hover:text-black hover:border-white" 
                  : "border-black/30 text-black hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              Contact <Mail size={10} />
            </a>
            <a 
              href="/ShaikKempleMohamedSadiqResume.pdf" 
              download 
              target="_blank" 
              rel="noreferrer" 
              className={`px-4 py-2 rounded-full border transition-all font-mono text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
                isDarkLayer 
                  ? "bg-white text-black border-white hover:bg-transparent hover:text-white" 
                  : "bg-black text-white border-black hover:bg-transparent hover:text-black"
              }`}
            >
              Resume <Download size={10} />
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50">
            <span>Scroll to Enter</span>
            <ArrowRight size={12} className="animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const dividerRef = useRef(null);

  // GSAP Entrance Transition
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Animate split overlay reveal
      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
          { clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)", duration: 1.2, ease: "power4.inOut" },
          0
        );
      }

      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 1.2, ease: "power4.inOut" },
          0
        );
      }

      // Staggered reveal for typography
      tl.from(".kinetic-center", { scale: 0.96, opacity: 0, duration: 1.0, ease: "power3.out" }, 0.4);
      tl.from(".kinetic-line-2", { y: -20, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.6);
      tl.from(".marquee-container-wrapper", { opacity: 0, duration: 0.8, ease: "power2.out" }, 0.7);
      tl.from(".hero-action-panel-left", { x: -20, opacity: 0, duration: 0.6, ease: "power3.out" }, 0.9);
      tl.from(".hero-action-panel-right", { x: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, 0.9);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen h-screen w-full lg:w-screen shrink-0 relative overflow-hidden select-none">
      {/* 🌓 BASE LAYER: Solid Black Background, Pure White Content */}
      <div className="absolute inset-0 w-full h-full bg-[#000000] text-[#FFFFFF] z-0 overflow-hidden">
        <HeroInner isDarkLayer={true} />
      </div>

      {/* 🌓 OVERLAY LAYER: Solid White Background, Pure Black Content */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 w-full h-full bg-[#FFFFFF] text-[#000000] z-10 overflow-hidden"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
      >
        <HeroInner isDarkLayer={false} />
      </div>

      {/* 🌓 UNIFIED SINGLE MARQUEE LAYER */}
      <div 
        className="absolute inset-0 w-full h-full flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 md:px-24 pointer-events-none"
        style={{ isolation: "auto" }}
      >
        {/* Invisible Center Spacer */}
        <div className="flex-1 my-auto invisible pointer-events-none select-none" aria-hidden="true" />

        {/* The Single Unified Marquee (mix-blend-mode: difference in section stacking context) */}
        <div 
          className="marquee-container-wrapper relative z-20 pointer-events-auto w-full my-auto flex flex-col gap-2.5 py-4 border-y border-white/20 select-none text-white"
          style={{ mixBlendMode: "difference" }}
        >
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee flex whitespace-nowrap gap-12 font-times font-normal uppercase text-lg sm:text-2xl md:text-3xl tracking-[0.2em]">
              <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
              <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
            </div>
          </div>
          <div className="w-full overflow-hidden flex">
            <div 
              className="animate-marquee flex whitespace-nowrap gap-12 font-mono font-bold uppercase text-xs sm:text-sm tracking-[0.35em]" 
              style={{ animationDirection: "reverse" }}
            >
              <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
              <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
            </div>
          </div>
        </div>

        {/* Invisible Footer Spacer (empty layout placeholder, no text) */}
        <div className="w-full h-14 invisible pointer-events-none select-none" aria-hidden="true" />
      </div>

      {/* Center 1px Divider Line */}
      <div 
        ref={dividerRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-neutral-500/30 z-30 pointer-events-none origin-top" 
      />

      {/* Ambient Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
