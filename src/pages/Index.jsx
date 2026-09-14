import { useEffect } from "react";
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
  // Permanently lock to pure dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Reset scroll and disable automatic scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative bg-background text-foreground transition-colors duration-300 min-h-screen selection:bg-white selection:text-black">
      {/* Constellation Particle Layer */}
      <StarfieldBackground />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Fluid Vertical Scrollytelling Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TimelineSection />
        <Certifications />
        <LanguagesSection />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default Index;
