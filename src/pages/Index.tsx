import { useState, useEffect } from "react";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
  );
};

export default Index;
