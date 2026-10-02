import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, CheckCircle2 } from 'lucide-react';
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/portfolio-preview.png"; 
import ignitextImg from "@/assets/ignitext.png";

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
      "Gemini AI integration for real-time crop disease diagnosis",
      "Dynamic weather intelligence aggregation pipeline",
      "Computer Vision processing for soil analysis",
      "Progressive Web App (PWA) deployment strategy"
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
      "React-based component architecture with dynamic routing",
      "Tailwind CSS for responsive, monochrome aesthetic",
      "Integrated repository for community-driven study materials",
      "Synchronized calendar system for live event management"
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
      "Dual-layer rendering with optimized DOM updates",
      "Framer Motion driven scroll-linked choreography",
      "Strict typographic scale utilizing Times New Roman",
      "Comprehensive performance and accessibility testing"
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isEven = index % 2 !== 0;

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center py-32 border-b border-white/10 font-times overflow-hidden">
      {/* Massive Background Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.03] select-none pointer-events-none z-0">
        {project.id}
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
        
        {/* Image Section */}
        <div 
          className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div style={{ y }} className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden rounded-3xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`}
            />
            {/* Subtle white overlay sweep */}
            <div className={`absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12 z-20`} />
            <div className="absolute inset-0 border border-white/20 rounded-3xl z-30 pointer-events-none" />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xl text-white/50">{project.id}</span>
              <div className="h-px bg-white/20 w-12" />
            </div>
            
            <div className="relative inline-block group cursor-pointer">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h2>
              {/* Title underline draw */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 ease-out group-hover:w-full" />
            </div>
            <h3 className="text-2xl text-white/70 italic">{project.subtitle}</h3>
          </div>

          <p className="text-lg text-white/80 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/90">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              <span>Launch Demo</span>
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
            >
              <span>Source</span>
              <Github size={18} />
            </a>
          </div>

          {/* Architecture Drawer */}
          <div className="pt-8 border-t border-white/10 mt-8">
            <button 
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="w-full flex items-center justify-between text-left group"
            >
              <span className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">Architecture Blueprint</span>
              <motion.div
                animate={{ rotate: isDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} className="text-white/50" />
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
                  <ul className="pt-6 space-y-4">
                    {project.architecture.map((item, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-start gap-3 text-white/80"
                      >
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-white" />
                        <span className="leading-relaxed">{item}</span>
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
    <section id="projects" className="w-full bg-black text-white relative noise-overlay py-32 font-times">
      <div className="max-w-screen-2xl mx-auto flex flex-col">
        <div className="px-6 lg:px-12 mb-24">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter">
            Selected<br />Works
          </h1>
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
