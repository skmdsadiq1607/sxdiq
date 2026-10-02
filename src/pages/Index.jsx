import { useEffect } from "react";
import StarfieldBackground from "@/components/StarfieldBackground";
import StarCursorTrail from "@/components/StarCursorTrail";
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
import {
  VenetianBlindsTransition,
  InkBleedTransition,
  DiagonalWipeTransition,
  PixelGridTransition,
  KineticRibbonTransition,
} from "@/components/SectionTransitions";

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
      {/* Interactive Stardust Cursor Trail (Default cursor + trailing stars) */}
      <StarCursorTrail />

      {/* Constellation Particle Layer */}
      <StarfieldBackground />

      {/* Floating Glass Navbar with Active Section Tracking */}
      <Navbar />

      {/* Main Fluid Vertical Scrollytelling Sections with 5 Unique Bespoke Transitions */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 🌓 00: HERO (50/50 Dual-Layer Split Screen + Character Stagger + Mouse Parallax) */}
        <Hero />

        {/* 📰 01: ABOUT (High-Contrast Pure White Editorial Broadsheet + Scroll Word Reveal) */}
        <About />

        {/* ⚡ TRANSITION 01 -> 02: Venetian Blinds (Horizontal flipping bars revealing dark realm) */}
        <VenetianBlindsTransition />

        {/* 🪐 02: SKILLS (Interactive Orbital Ring Constellation Matrix) */}
        <Skills />

        {/* ⚡ TRANSITION 02 -> 03: Triple-Track Kinetic Ribbon Marquee */}
        <KineticRibbonTransition 
          text1="SELECTED WORK // PRODUCTION SOFTWARE SYSTEMS // HIGH-PERFORMANCE WEB APPS //"
          text2="KRUSHI MITRA // IGNITEXT // DEVELOPER PORTFOLIO // ARCHITECTURE & DEPLOYMENT //"
          text3="FULL STACK WEB DEVELOPMENT // ALGORITHMIC OPTIMIZATION // SCALABLE CLOUD SYSTEMS //"
          rotate={-2.5}
        />

        {/* 🏛️ 03: PROJECTS (Full-Width Runway with Scroll Parallax & Architectural Blueprints) */}
        <Projects />

        {/* ⚡ TRANSITION 03 -> 04: Pixel Grid Matrix (Staggered scaling grid squares) */}
        <PixelGridTransition />

        {/* ⚡ 04: TIMELINE & EXPERIENCE (Quantum Spacetime Conduit + Verified Credential Modals) */}
        <TimelineSection />

        {/* ⚡ TRANSITION 04 -> 05: Ink Bleed Ripple (Concentric expanding circles into Holographic Lens) */}
        <InkBleedTransition />

        {/* 🔮 05: CERTIFICATIONS (3D Vault, Fan-Out Deck & 12-Course Modal Archive) */}
        <Certifications />

        {/* 〰️ 06: LANGUAGES (Acoustic Phonetic Cards + Dynamic Audio Equalizers) */}
        <LanguagesSection />

        {/* ⚡ TRANSITION 06 -> 07: Diagonal Angular Sweep (Dynamic angled wipe into Split Screen) */}
        <DiagonalWipeTransition />

        {/* 📡 07: CONTACT (50/50 Dual Contrast Split Screen: Pure White Left / Pure Black Right) */}
        <Contact />
      </main>

      {/* Full-Screen "Ready to Collaborate?" CTA + Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
};

export default Index;
