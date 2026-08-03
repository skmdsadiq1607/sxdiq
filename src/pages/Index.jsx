import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CinematicLoader from "@/components/CinematicLoader";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TimelineSection from "@/components/TimelineSection";
import Certifications from "@/components/Certifications";
import LanguagesSection from "@/components/LanguagesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);



  // Detect mobile viewports
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Recalculate track width on resize and render for desktop horizontal track
  useEffect(() => {
    if (loading || isMobile) return;

    const handleResize = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    const timeout = setTimeout(handleResize, 300);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [loading, isMobile]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <>
      <CinematicLoader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="relative bg-background text-foreground transition-colors duration-300">
          
          {/* Shutter Curtain Staggered Panels */}
          <div className="fixed inset-0 pointer-events-none z-40 flex">
            <div className="hero-curtain-panel flex-1 h-full bg-zinc-950 border-r border-zinc-900" />
            <div className="hero-curtain-panel flex-1 h-full bg-zinc-950 border-r border-zinc-900" />
            <div className="hero-curtain-panel flex-1 h-full bg-zinc-950" />
          </div>

          {/* Constellation Particle Layer */}
          <StarfieldBackground />

          <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

          {isMobile ? (
            /* Standard vertical scrolling layout for mobile & tablet */
            <div className="min-h-screen pt-20 flex flex-col gap-1 z-10 relative">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <TimelineSection />
              <Certifications />
              <LanguagesSection />
              <Contact />
              <Footer />
            </div>
          ) : (
            /* Sticky horizontal scrolling layout for desktop */
            <div ref={containerRef} className="relative overflow-x-clip" style={{ height: "650vh" }}>
              <div className="sticky top-0 h-screen overflow-hidden flex items-center z-10">
                <motion.div 
                  ref={trackRef} 
                  style={{ x }} 
                  className="flex h-screen"
                >
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <TimelineSection />
                  <Certifications />
                  <LanguagesSection />
                  <Contact />
                  <Footer />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Index;
