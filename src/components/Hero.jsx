import { useRef, useEffect } from "react";
import { Mail, Download, ArrowRight } from "lucide-react";
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

      // Slide left and right backgrounds
      tl.fromTo(".split-left", 
        { width: "0%" }, 
        { width: "50%", duration: 1.4, ease: "power4.inOut" }, 
        0
      );
      tl.fromTo(".split-right", 
        { width: "0%" }, 
        { width: "50%", duration: 1.4, ease: "power4.inOut" }, 
        0.1
      );

      // Fade-in kinetic typography lines
      tl.fromTo(".kinetic-line-1", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.0, ease: "power4.out" }, 
        0.5
      );
      tl.fromTo(".kinetic-center", 
        { scale: 0.9, opacity: 0, letterSpacing: "-0.04em" }, 
        { scale: 1, opacity: 1, letterSpacing: "0em", duration: 1.4, ease: "power4.out" }, 
        0.6
      );
      tl.fromTo(".kinetic-line-2", 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.0, ease: "power4.out" }, 
        0.7
      );

      // Scale-in the marquee block
      tl.fromTo(".marquee-container-wrapper", 
        { opacity: 0, scaleY: 0 }, 
        { opacity: 1, scaleY: 1, duration: 0.8, ease: "power2.out" }, 
        0.9
      );

      // Slide in actions
      tl.fromTo(".hero-action-panel-left", 
        { x: -30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        1.1
      );
      tl.fromTo(".hero-action-panel-right", 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        1.1
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen w-screen shrink-0 relative overflow-hidden select-none">
      
      {/* 🌓 LEFT HALF (Solid Black Background, White Text) */}
      <div className="split-left absolute left-0 top-0 h-full bg-[#000000] text-[#FFFFFF] overflow-hidden z-10 border-r border-white/10" style={{ width: "50%" }}>
        {/* Inner container takes exact full viewport width and is aligned left */}
        <div className="w-screen h-full flex flex-col justify-between py-12 px-12 md:px-24 absolute left-0 top-0">
          
          {/* Header */}
          <div className="w-full flex justify-between items-center text-white/90">
            <span className="font-mono text-xs uppercase tracking-[0.25em]">Shaik Kemple Mohammed Sadiq</span>
            <span className="font-times italic text-xs tracking-wide text-white/50">creative portfolio v2.0</span>
          </div>

          {/* Center Center Text (Kinetic Typography style) */}
          <div className="flex-1 flex flex-col justify-center items-center text-white">
            <div className="text-center flex flex-col items-center">
              <div className="kinetic-line-1 opacity-0">
                <h2 className="font-times font-semibold text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight">
                  shaik kemple mohammed
                </h2>
              </div>
              <div className="kinetic-center opacity-0 my-3">
                <h1 className="font-extrabold uppercase text-[12vw] sm:text-[13vw] xl:text-[14vw] leading-hero tracking-tight">
                  SADIQ
                </h1>
              </div>
              <div className="kinetic-line-2 opacity-0">
                <h3 className="font-times font-semibold text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight">
                  full stack developer
                </h3>
              </div>
            </div>
          </div>

          {/* Marquees */}
          <div className="marquee-container-wrapper opacity-0 w-full mb-12 flex flex-col gap-3 py-6 border-y border-white/10">
            <div className="w-full overflow-hidden flex">
              <div className="animate-marquee flex whitespace-nowrap gap-12 font-times font-normal text-white uppercase text-2xl sm:text-3xl tracking-[0.2em]">
                <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
                <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
              </div>
            </div>
            <div className="w-full overflow-hidden flex">
              <div className="animate-marquee flex whitespace-nowrap gap-12 font-mono font-bold text-white uppercase text-sm sm:text-base tracking-[0.35em]" style={{ animationDirection: "reverse" }}>
                <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
                <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="grid grid-cols-2 text-white">
            <div className="hero-action-panel-left opacity-0 flex flex-col gap-3 justify-end items-start font-mono text-[10px] uppercase tracking-widest">
              <div className="flex gap-4">
                <a href="https://github.com/skmdsadiq1607" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-white">
                  GitHub <ArrowRight size={10} className="-rotate-45" />
                </a>
                <a href="https://www.linkedin.com/in/shaik-sadiq-b1650a377/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-white">
                  LinkedIn <ArrowRight size={10} className="-rotate-45" />
                </a>
              </div>
              <span className="text-white/40">// hyderabad, india</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🌓 RIGHT HALF (Premium Soft Cream Background, Black Text) */}
      <div className="split-right absolute right-0 top-0 h-full bg-[#FAF9F5] dark:bg-white text-[#000000] overflow-hidden z-10" style={{ width: "50%" }}>
        {/* Inner container takes exact full viewport width and is aligned right */}
        <div className="w-screen h-full flex flex-col justify-between py-12 px-12 md:px-24 absolute right-0 top-0">
          
          {/* Header */}
          <div className="w-full flex justify-between items-center text-black/90">
            <span className="font-mono text-xs uppercase tracking-[0.25em]">Shaik Kemple Mohammed Sadiq</span>
            <span className="font-times italic text-xs tracking-wide text-black/50">creative portfolio v2.0</span>
          </div>

          {/* Center Center Text (Kinetic Typography style) */}
          <div className="flex-1 flex flex-col justify-center items-center text-black">
            <div className="text-center flex flex-col items-center">
              <div className="kinetic-line-1 opacity-0">
                <h2 className="font-times font-semibold text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight">
                  shaik kemple mohammed
                </h2>
              </div>
              <div className="kinetic-center opacity-0 my-3">
                <h1 className="font-extrabold uppercase text-[12vw] sm:text-[13vw] xl:text-[14vw] leading-hero tracking-tight">
                  SADIQ
                </h1>
              </div>
              <div className="kinetic-line-2 opacity-0">
                <h3 className="font-times font-semibold text-3xl sm:text-6xl xl:text-7xl leading-none tracking-tight">
                  full stack developer
                </h3>
              </div>
            </div>
          </div>

          {/* Marquees */}
          <div className="marquee-container-wrapper opacity-0 w-full mb-12 flex flex-col gap-3 py-6 border-y border-black/10">
            <div className="w-full overflow-hidden flex">
              <div className="animate-marquee flex whitespace-nowrap gap-12 font-times font-normal text-black uppercase text-2xl sm:text-3xl tracking-[0.2em]">
                <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
                <span>SHAIK SADIQ // DESIGNER & DEVELOPER // PROBLEM SOLVER // CREATIVE WEB ENGINEERING //&nbsp;</span>
              </div>
            </div>
            <div className="w-full overflow-hidden flex">
              <div className="animate-marquee flex whitespace-nowrap gap-12 font-mono font-bold text-black uppercase text-sm sm:text-base tracking-[0.35em]" style={{ animationDirection: "reverse" }}>
                <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
                <span>REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //&nbsp;</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="grid grid-cols-2 text-black">
            <div className="col-start-2 hero-action-panel-right opacity-0 flex flex-col gap-3 justify-end items-end">
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#projects" className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors font-mono text-[9px] uppercase tracking-widest font-bold">
                  Selected Projects
                </a>
                <a href="#contact" className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                  Contact <Mail size={10} />
                </a>
                <a 
                  href="/ShaikKempleMohammedSadiqResume.pdf" 
                  download 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black border border-black transition-colors font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5"
                >
                  Resume <Download size={10} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-black/50 mt-2">
                <span>Scroll to Enter</span>
                <ArrowRight size={12} className="animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Ambient Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none z-0" />

    </section>
  );
};

export default Hero;
