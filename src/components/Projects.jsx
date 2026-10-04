import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, CheckCircle2, Terminal } from 'lucide-react';
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/portfolio-preview.png"; 
import ignitextImg from "@/assets/ignitext.png";
import SectionHeaderEditorial from "@/components/SectionHeaderEditorial";

const projectsData = [
  {
    id: "01",
    title: "Krushi Mitra",
    subtitle: "AI-Powered Farming Assistant",
    description: "An intelligent platform empowering farmers with multi-language support, real-time disease detection, localized weather intelligence, and comprehensive soil analysis for optimized yields.",
    tech: ["HTML5", "CSS3", "JavaScript", "Vite.js", "AI APIs", "Netlify"],
    demo: "https://krushi-mitra-unquadtrium.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    image: krushiImg,
    architecture: [
      "Gemini AI integration for real-time crop disease diagnosis & treatment guidelines",
      "Dynamic weather intelligence aggregation pipeline with micro-climate alerts",
      "Computer Vision processing heuristics for localized soil analysis",
      "Progressive Web App (PWA) deployment strategy for offline rural utility"
    ]
  },
  {
    id: "02",
    title: "IgniteXT",
    subtitle: "Student Community Platform",
    description: "A centralized hub for students providing shared study notes, vibrant communities, live event tracking, and cross-college networking opportunities to foster academic growth.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    demo: "https://ignitext2026.vercel.app/",
    github: "https://github.com/skmdsadiq1607/IgniteXT-StudentCommunity",
    image: ignitextImg,
    architecture: [
      "React-based component architecture with dynamic route pre-fetching",
      "Tailwind CSS for responsive, monochrome editorial aesthetics",
      "Integrated cloud repository for community-driven study materials & circulars",
      "Synchronized calendar event system for cross-departmental academic hackathons"
    ]
  },
  {
    id: "03",
    title: "Developer Portfolio",
    subtitle: "High-Art Personal Canvas",
    description: "An award-winning personal showcase engineered with performant animations, precise typography, and a stripped-down monochrome design language to highlight creative engineering.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://sxdiq.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    image: smartCityImg,
    architecture: [
      "Dual-layer 50/50 kinetic typography rendering with optimized DOM updates",
      "Framer Motion & Lenis driven scroll-linked choreography across 7 chapters",
      "Strict typographic scale utilizing Times New Roman & JetBrains Mono",
      "Interactive 3D Fibonacci orbital sphere & integrated Unix shell console"
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isEven = index % 2 !== 0;

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center py-24 sm:py-32 border-b border-white/10 font-times overflow-hidden">
      {/* Massive Background Number Watermark */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,22vw,22rem)] font-bold text-white/[0.025] select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        {project.id}
      </div>

      {/* Atmospheric Cobalt Ambient Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#0047AB]/[0.07] blur-[150px] pointer-events-none z-0" />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-14 lg:gap-20`}>
        
        {/* Image Section */}
        <div 
          className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div style={{ y }} className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[72vh] overflow-hidden rounded-3xl bg-neutral-950">
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`} 
            />
            {/* White overlay shimmer sweep */}
            <div className={`absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12 z-20 pointer-events-none`} />
            <div className="absolute inset-0 border border-white/20 rounded-3xl z-30 pointer-events-none group-hover:border-[#0052FF]/60 transition-colors" />
            
            {/* View Project badge */}
            <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[9px] uppercase tracking-widest z-30 flex items-center gap-1.5 shadow-lg group-hover:border-[#0052FF]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shadow-[0_0_6px_#0052FF]" />
              <span>EXPLORE ARCHITECTURE</span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-7">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-white/60">
                <span className="text-[#0052FF] font-bold mr-1">{project.id}</span> // PRODUCTION
              </span>
              <div className="h-px bg-white/20 w-12" />
            </div>
            
            <div className="relative inline-block group">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 leading-none">
                {project.title}
              </h2>
              {/* Title underline draw */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0052FF] via-[#60A5FA] to-white transition-all duration-500 ease-out group-hover:w-full" />
            </div>
            <h3 className="text-xl sm:text-2xl text-white/70 italic font-normal">{project.subtitle}</h3>
          </div>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-light">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3.5 py-1.5 border border-white/20 rounded-full font-mono text-[10px] uppercase tracking-wider text-white/90 bg-white/[0.04] backdrop-blur-sm hover:border-[#0052FF]/60 hover:text-white hover:bg-[#0052FF]/10 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer"
              className="px-7 py-3.5 bg-white text-black rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(0,82,255,0.4)] transition-all active:scale-95 shadow-lg"
            >
              <span>Launch Demo</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-white hover:text-black hover:border-[#0052FF] transition-all active:scale-95"
            >
              <span>Source Code</span>
              <Github size={14} />
            </a>
          </div>

          {/* Architecture Drawer */}
          <div className="pt-6 border-t border-white/10 mt-4">
            <button 
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="w-full flex items-center justify-between text-left group py-2"
              aria-expanded={isDrawerOpen}
            >
              <div className="flex items-center gap-2.5">
                <Terminal size={16} className="text-white/60 group-hover:text-white transition-colors" />
                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-white/80 transition-colors font-semibold">
                  Architecture Blueprint ({project.architecture.length})
                </span>
              </div>
              <motion.div
                animate={{ rotate: isDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-white/50 group-hover:text-white transition-colors" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isDrawerOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="pt-4 space-y-2.5">
                    {project.architecture.map((item, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/85 text-sm font-times leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-white/70" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black text-white relative noise-overlay py-28 sm:py-32 font-times">
      <div className="max-w-screen-2xl mx-auto flex flex-col">
        <div className="px-6 lg:px-12 mb-12">
          <SectionHeaderEditorial
            number="03"
            tag="// 03 — Production Software Systems"
            headline="Selected software systems built with computational rigor"
            badge="03 PRODUCTION SYSTEMS"
            isWhiteBg={false}
          />
        </div>
        
        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
