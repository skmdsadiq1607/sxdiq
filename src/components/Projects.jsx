import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Leaf, Brain, Globe, CloudSun, FlaskConical, Landmark, BookOpen, Users, Calendar, School } from "lucide-react";
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

const ProjectCardMobile = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-border/80 bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col justify-between w-full shadow-lg transition-all duration-300 hover:border-foreground/40 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden border-b border-border/60 group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
        />
        {/* Luminous scanline sweep */}
        <motion.div
          animate={isHovered ? { y: ["-100%", "200%"] } : { y: "-100%" }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
          className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/15 to-transparent pointer-events-none"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 bg-foreground text-background text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
            </span>
            Featured
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono text-foreground/60 uppercase tracking-widest mb-1.5 block">{project.tagline}</span>
          <h3 className="text-2xl font-times font-normal italic mb-2 text-foreground">{project.title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed mb-4 font-light">{project.description}</p>
          
          {project.features.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {project.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <div className="w-5 h-5 rounded-md border border-border/70 flex items-center justify-center text-foreground bg-secondary/40">
                    <f.icon size={10} />
                  </div>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border/80 bg-secondary/50 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={project.demo} 
            target="_blank" 
            rel="noreferrer" 
            className="solid-btn-inverted py-2.5 px-5 text-[11px] rounded-full flex items-center gap-1.5"
          >
            Demo <ExternalLink size={11} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="solid-btn py-2.5 px-5 text-[11px] rounded-full flex items-center gap-1.5"
          >
            Source <Github size={11} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, i, scrollYProgress }) => {
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

  const centerPoint = 0.32 + i * 0.08;
  const offset = useTransform(
    scrollYProgress, 
    [centerPoint - 0.15, centerPoint, centerPoint + 0.15], 
    [-1.5, 0, 1.5]
  );

  const translateX = useTransform(offset, o => o * 80); 
  const translateY = useTransform(offset, o => Math.abs(o) * 20); 
  const translateZ = useTransform(offset, o => -Math.abs(o) * 160); 
  const rotateY = useTransform(offset, o => o * -25); 
  const rotateZ = useTransform(offset, o => o * 4); 
  const opacity = useTransform(offset, [-1.2, -0.6, 0, 0.6, 1.2], [0.4, 0.8, 1, 0.8, 0.4]);

  return (
    <motion.div
      style={{
        x: translateX,
        y: translateY,
        z: translateZ,
        rotateY,
        rotateZ,
        opacity,
        perspective: 1200,
      }}
      className="w-[430px] shrink-0 h-[68vh] flex flex-col justify-between"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? -tilt.y * 14 : 0,
          rotateY: isHovered ? tilt.x * 14 : 0,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full border border-border/80 bg-card/95 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl transition-colors duration-300 hover:border-foreground/50"
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

        {/* Card Image */}
        <div className="relative h-44 overflow-hidden border-b border-border/70 shrink-0">
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
            <div className="absolute top-3 left-3 bg-foreground text-background text-[9px] font-mono font-bold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md">
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
            <span className="text-[10px] font-mono text-foreground/60 uppercase tracking-widest mb-1.5 block">{project.tagline}</span>
            <h3 className="text-2xl font-times font-normal italic mb-2 text-foreground leading-tight">{project.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-light mb-4">{project.description}</p>
            
            {project.features.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                    <div className="w-5 h-5 rounded-md border border-border/70 flex items-center justify-center text-foreground bg-secondary/40">
                      <f.icon size={10} />
                    </div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
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
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section id="projects" className="py-20 px-6 bg-background text-foreground noise-overlay w-full">
        <div className="mb-8">
          <span className="font-mono text-xs text-foreground/60 uppercase tracking-widest block mb-1">// 04</span>
          <h2 className="text-3xl font-black uppercase tracking-tight">SELECTED WORK</h2>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCardMobile key={i} project={project} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen flex items-center bg-black text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border shrink-0 relative overflow-hidden select-none" style={{ width: "1850px" }}>
      
      {/* 📐 Cyber Perspective Blueprint Floor Grid */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]"
        style={{ transform: "perspective(400px) rotateX(65deg)", transformOrigin: "bottom center" }}
      />

      {/* Left Info Panel */}
      <div className="w-[380px] shrink-0 pr-16 h-[85vh] flex flex-col justify-center relative z-10">
        <span className="font-mono text-xs text-foreground/60 uppercase tracking-[0.3em] block mb-3">// 03 — Production Software</span>
        <h2 className="font-times text-5xl md:text-6xl font-normal italic tracking-tight leading-none mb-6 text-foreground">Selected Work</h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
          A curated selection of applications built with modern web technologies, focusing on clean engineering, real-time data, and responsive human interfaces.
        </p>
        <div className="flex items-center gap-2 font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>SCROLL TO EXPLORE 3D ARCHIVES</span>
        </div>
      </div>

      {/* Horizontal Projects Carousel Track with 3D coverflow geometry */}
      <div className="flex-1 flex gap-8 items-center overflow-visible relative z-10" style={{ perspective: 1600 }}>
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            i={i} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;
