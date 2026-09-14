import StarfieldBackground from "@/components/StarfieldBackground";
import CustomCursor from "@/components/CustomCursor";
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
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Interactive Magnetic Fluid Cursor */}
      <CustomCursor />

      {/* Interactive Canvas Constellation & Mouse Spotlight */}
      <StarfieldBackground />

      {/* Luxury Floating Glass Navbar */}
      <Navbar />

      {/* Main Fluid Vertical Scrollytelling Sections */}
      <main className="relative z-10 flex flex-col">
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
