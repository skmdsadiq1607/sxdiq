import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import LanguagesSection from "@/components/LanguagesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    // Check if user has saved dark mode choice or system matches dark
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

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

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Leadership />
          <Hackathons />
          <Certifications />
          <LanguagesSection />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
