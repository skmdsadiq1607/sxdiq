import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Leaf, Globe, CloudSun, FlaskConical, BookOpen, Users, Calendar, School } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/portfolio-preview.png";
import ignitextImg from "@/assets/ignitext.png";

const projects = [
  {
    title: "Krushi Mitra",
    tagline: "AI-Powered Farming Assistant",
    description: "Your personal AI companion for smarter, more profitable, and sustainable farming. Features multi-language support, disease detection, weather intelligence, and government scheme recommendations.",
    image: krushiImg,
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
    title: "IgniteXT",
    tagline: "Student Community Website",
    description: "A centralized student platform that simplifies academic life by bringing together structured learning resources, department-wise communities, and real-time event updates into a single, intuitive interface. Designed to support multiple colleges with seamless collaboration.",
    image: ignitextImg,
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
    title: "Developer Portfolio",
    tagline: "Personal Website",
    description: "My personal developer portfolio website built with React, JavaScript, Tailwind CSS, and Framer Motion — featuring smooth animations, dark mode, and editorial typography.",
    image: smartCityImg,
    features: [],
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://sxdiq.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="w-full flex flex-col"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? -tilt.y * 12 : 0,
          rotateY: isHovered ? tilt.x * 12 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full border border-border/80 bg-card/95 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl transition-colors duration-300 hover:border-foreground/50"
      >
        {/* Specular light follower */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(255, 255, 255, 0.08), transparent 70%)`
            }}
          />
        )}

        {/* Card Image Banner */}
        <div className="relative h-48 sm:h-52 overflow-hidden border-b border-border/70 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />

          {/* Interactive Scanline Sweep */}
          <motion.div
            animate={isHovered ? { y: ["-100%", "200%"] } : { y: "-100%" }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
          />

          {project.featured && (
            <div className="absolute top-4 left-4 bg-foreground text-background text-[9px] font-mono font-bold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
              </span>
              Featured
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
          <div>
            <span className="text-[10px] font-mono text-foreground/60 uppercase tracking-widest mb-1.5 block">
              {project.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-times font-normal italic mb-3 text-foreground leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light mb-4 font-times">
              {project.description}
            </p>
            
            {project.features.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                    <div className="w-5 h-5 rounded-md border border-border/70 flex items-center justify-center text-foreground bg-secondary/40 shrink-0">
                      <f.icon size={10} />
                    </div>
                    <span className="truncate">{f.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border/80 bg-secondary/50 text-muted-foreground transition-colors group-hover:border-foreground/30"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <motion.a 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="solid-btn-inverted shimmer-btn py-2.5 px-5 text-[11px] rounded-full flex items-center gap-1.5"
              >
                Demo <ExternalLink size={11} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="solid-btn shimmer-btn py-2.5 px-5 text-[11px] rounded-full flex items-center gap-1.5"
              >
                Source <Github size={11} />
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
    <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-black text-foreground noise-overlay py-24 px-6 sm:px-12 md:px-20 border-b border-border relative select-none">
      
      {/* 📐 Cyber Perspective Blueprint Floor Grid */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]"
        style={{ transform: "perspective(400px) rotateX(65deg)", transformOrigin: "bottom center" }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-10 lg:mb-12 border-b border-foreground/15 pb-4"
        >
          <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">
            // 03 — Production Software
          </span>
          <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-foreground mb-3">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl font-times leading-relaxed">
            A curated selection of applications built with modern web technologies, focusing on clean engineering, real-time data, and responsive human interfaces.
          </p>
        </motion.div>

        {/* Responsive 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
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
