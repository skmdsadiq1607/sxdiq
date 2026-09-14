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
import KineticRibbonTransition from "@/components/KineticRibbonTransition";

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
    <div className="relative bg-black text-white transition-colors duration-300 min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      {/* Constellation Particle Layer */}
      <StarfieldBackground />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Fluid Vertical Scrollytelling Sections with Angled Kinetic Marquee Transitions */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 🌓 00: HERO (50/50 Dual-Layer Split Screen) */}
        <Hero />

        {/* 📰 01: ABOUT (High-Contrast Pure White Editorial Broadsheet) */}
        <About />

        {/* ⚡ TRANSITION 01 -> 02: Angled Dual-Track Marquee Ribbon */}
        <KineticRibbonTransition 
          text1="FULL STACK ARCHITECTURE // DISTRIBUTED SYSTEMS // MERN & CLOUD // PROBLEM SOLVER //"
          text2="REACT NODE EXPRESS MONGODB NEXTJS GSAP THREEJS DSA ALGORITHMS CLEAN CODE //"
          rotate={-3}
        />

        {/* 🪐 02: SKILLS (High-Impact Monolith Matrix) */}
        <Skills />

        {/* ⚡ TRANSITION 02 -> 03: Angled Dual-Track Marquee Ribbon */}
        <KineticRibbonTransition 
          text1="SELECTED WORK // PRODUCTION SOFTWARE SYSTEMS // HIGH-PERFORMANCE WEB APPS //"
          text2="KRUSHI MITRA // IGNITEXT // DEVELOPER PORTFOLIO // ARCHITECTURE & DEPLOYMENT //"
          rotate={2.5}
        />

        {/* 🏛️ 03: PROJECTS (3D Monolith Perspective Runway) */}
        <Projects />

        {/* ⚡ TRANSITION 03 -> 04: Quantum Trajectory Ribbon */}
        <KineticRibbonTransition 
          text1="ACADEMIC MILESTONES // LEADERSHIP & STUDENT COMMUNITIES // HACKATHON ARENA //"
          text2="ANURAG UNIVERSITY // CSI SB // IGNITEXT // SALESFORCE AGENTX // DATA DYNAMO //"
          rotate={-2.5}
        />

        {/* ⚡ 04: TIMELINE & EXPERIENCE (Quantum Spacetime Conduit) */}
        <TimelineSection />

        {/* ⚡ TRANSITION 04 -> 05: Credentials Ribbon */}
        <KineticRibbonTransition 
          text1="ACCREDITED EXPERTISE // IIT KHARAGPUR // INFOSYS SPRINGBOARD // 2026 //"
          text2="NPTEL ELITE SILVER // JAVA FOUNDATION // 12 COURSE COMPLETION VAULT //"
          rotate={3}
        />

        {/* 🔮 05: CERTIFICATIONS (3D Vault & Fan-Out Deck) */}
        <Certifications />

        {/* 〰️ 06: LANGUAGES (Acoustic Phonetic Cards) */}
        <LanguagesSection />

        {/* ⚡ TRANSITION 06 -> 07: Transmission Ribbon */}
        <KineticRibbonTransition 
          text1="AVAILABLE FOR FULL-TIME OPPORTUNITIES // OPEN TO COLLABORATION // DISPATCH //"
          text2="FULL STACK WEB DEVELOPMENT // PROBLEM SOLVING // SOFTWARE ENGINEERING //"
          rotate={-2}
        />

        {/* 📡 07: CONTACT (Clean Editorial Transmission Canvas) */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default Index;
