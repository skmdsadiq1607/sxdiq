import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, ChevronRight, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { Leaf, Globe, CloudSun, FlaskConical, BookOpen, Users, Calendar, School } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/portfolio-preview.png";
import ignitextImg from "@/assets/ignitext.png";

const projects = [
  {
    num: "01",
    roman: "I",
    title: "Krushi Mitra",
    tagline: "AI-Powered Farming Assistant",
    description: "Your personal AI companion for smarter, more profitable, and sustainable agriculture. Features multi-language voice intelligence, computer vision disease detection, live micro-climate weather forecasting, and automated government subsidy discovery.",
    image: krushiImg,
    architecture: [
      "Gemini AI API integration for multi-lingual agronomy guidance",
      "Real-time meteorological forecast ingestion via Weather API",
      "Computer vision pipeline for leaf and crop pathology identification",
      "Responsive progressive web app deployed on high-speed CDN"
    ],
    features: [
      { icon: Globe, label: "Multi Language" },
      { icon: Leaf, label: "Disease Detection" },
      { icon: CloudSun, label: "Weather Intel" },
      { icon: FlaskConical, label: "Soil Analysis" },
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vite.js", "AI APIs", "Netlify"],
    demo: "https://krushi-mitra-unquadtrium.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: true,
  },
  {
    num: "02",
    roman: "II",
    title: "IgniteXT",
    tagline: "Student Community Platform",
    description: "A centralized academic platform unifying departmental study materials, student communities, and campus event schedules into a streamlined single interface. Designed for multi-institutional collaboration across engineering colleges.",
    architecture: [
      "Modular React component tree with optimized rendering cycles",
      "Tailwind design system with dark-mode contrast ratios",
      "Centralized repository structure for student notes & syllabus archives",
      "Campus event calendar with dynamic agenda filtering"
    ],
    features: [
      { icon: BookOpen, label: "Study Notes" },
      { icon: Users, label: "Communities" },
      { icon: Calendar, label: "Live Events" },
      { icon: School, label: "Multi-College" },
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    demo: "https://ignitext2026.vercel.app/",
    github: "https://github.com/skmdsadiq1607/IgniteXT-StudentCommunity",
    featured: true,
  },
  {
    num: "03",
    roman: "III",
    title: "Developer Portfolio",
    tagline: "High-Art Personal Canvas",
    description: "Personal engineering portfolio built with pure JavaScript, React, Tailwind CSS, and Framer Motion. Engineered with 50/50 dual-layer monochrome split screens, kinetic typography, and fluid vertical scrollytelling.",
    architecture: [
      "Dual-layer monochrome inverted clipping paths with difference blending",
      "Zero-latency CSS and Framer Motion physics-driven interactions",
      "Strict Times New Roman typography system across all viewports",
      "100% test-driven component architecture with Vitest integration"
    ],
    features: [],
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://sxdiq.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: false,
  },
];

const ProjectMonolith = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showArch, setShowArch] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" }}
      className="w-full relative group"
      style={{ perspective: 1200 }}
    >
      {/* 🏛️ GIANT ROMAN NUMERAL BACKGROUND WATERMARK */}
      <div className="absolute -top-12 -right-4 font-times italic text-[14vw] sm:text-[10vw] text-white/[0.04] pointer-events-none select-none z-0 leading-none">
        {project.roman}
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? -tilt.y * 10 : 0,
          rotateY: isHovered ? tilt.x * 10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10"
      >
        {/* Specular light follower */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 320px at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(255, 255, 255, 0.12), transparent 70%)`
            }}
          />
        )}

        {/* Cinematic Image Frame with Interactive Scanline */}
        <div className="relative h-56 sm:h-64 overflow-hidden border-b border-white/15 shrink-0 bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />

          {/* Luminous scanline sweep */}
          <motion.div
            animate={isHovered ? { y: ["-100%", "200%"] } : { y: "-100%" }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-white/25 to-transparent pointer-events-none"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-white text-black text-[9px] font-mono font-bold tracking-widest uppercase py-1 px-3.5 rounded-full flex items-center gap-1.5 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Featured System
            </div>
          )}

          {/* Index Counter */}
          <div className="absolute top-4 right-4 font-mono text-[10px] text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            PROJECT // {project.num}
          </div>
        </div>

        {/* Monolith Body */}
        <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
          <div>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.25em] mb-2 block">
              // {project.tagline}
            </span>
            <h3 className="text-3xl sm:text-4xl font-times font-normal italic mb-3 text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light mb-6 font-times">
              {project.description}
            </p>

            {/* Architecture Highlights Toggle Drawer */}
            {project.architecture && (
              <div className="mb-6">
                <button
                  onClick={() => setShowArch(!showArch)}
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-white/70 hover:text-white pb-2 border-b border-white/20 transition-colors"
                >
                  <Cpu size={12} />
                  <span>{showArch ? "Hide Architecture" : "View Architectural Blueprint"}</span>
                  <ChevronRight size={12} className={`transition-transform duration-200 ${showArch ? "rotate-90" : ""}`} />
                </button>

                <AnimatePresence>
                  {showArch && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 p-4 rounded-2xl border border-white/15 bg-white/5 space-y-2"
                    >
                      {project.architecture.map((arch, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-times text-white/80">
                          <span className="text-white/40 mt-0.5">•</span>
                          <span>{arch}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            
            {/* Feature Pills */}
            {project.features.length > 0 && (
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {project.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] text-white/70 font-mono">
                    <div className="w-6 h-6 rounded-lg border border-white/20 flex items-center justify-center text-white bg-white/5 shrink-0">
                      <f.icon size={11} />
                    </div>
                    <span className="truncate">{f.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors group-hover:border-white/30"
                >
                  {t}
                </span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-3 px-6 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-white text-black hover:bg-white/90 flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                Launch Demo <ExternalLink size={13} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="py-3 px-6 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white flex items-center justify-center gap-2 transition-all"
              >
                Source <Github size={13} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative select-none">
      
      {/* 📐 Cyber Perspective Blueprint Floor Grid */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]"
        style={{ transform: "perspective(500px) rotateX(65deg)", transformOrigin: "bottom center" }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-14 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 03 — Production Software
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Engineered software systems designed with computational rigor, real-time data flows, and responsive user interaction.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>SHOWCASE // 03 PRODUCTION BUILDS</span>
          </div>
        </motion.div>

        {/* 3D Monolith Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <ProjectMonolith 
              key={project.title} 
              project={project} 
              index={i} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
