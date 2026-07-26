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

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  // Recalculate track width on resize and render
  useEffect(() => {
    if (loading) return;

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
  }, [loading]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <>
      <CinematicLoader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div ref={containerRef} className="relative bg-background text-foreground transition-colors duration-300 overflow-x-clip" style={{ height: "650vh" }}>
          
          {/* Constellation Particle Layer */}
          <StarfieldBackground />

          <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
          
          {/* Sticky view frame */}
          <div className="sticky top-0 h-screen overflow-hidden flex items-center z-10">
            
            {/* Horizontal Track wrapper */}
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
    </>
  );
};

export default Index;
