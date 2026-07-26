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
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://ignitext2026.vercel.app/",
    github: "https://github.com/skmdsadiq1607/IgniteXT-StudentCommunity",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    tagline: "Personal Website",
    description: "My personal developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion — featuring smooth animations, dark mode, and a modern glassmorphism design.",
    image: smartCityImg,
    features: [],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://sxdiq.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: false,
  },
];

const ProjectCard = ({ project, i, scrollYProgress }) => {
  // Center point for each card's alignment inside projects section scroll range
  const centerPoint = 0.32 + i * 0.08;
  const offset = useTransform(
    scrollYProgress, 
    [centerPoint - 0.15, centerPoint, centerPoint + 0.15], 
    [-1.5, 0, 1.5]
  );

  // 3D Coverflow stack formulas
  const translateX = useTransform(offset, o => o * 80); 
  const translateY = useTransform(offset, o => Math.abs(o) * 20); // Arc height
  const translateZ = useTransform(offset, o => -Math.abs(o) * 160); // Stacking depth
  const rotateY = useTransform(offset, o => o * -25); // Faces towards center
  const rotateZ = useTransform(offset, o => o * 4); // Fan rotation
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
        borderRadius: "0px"
      }}
      className="w-[420px] shrink-0 border border-border bg-card flex flex-col justify-between h-[65vh] group transition-colors duration-300 hover:border-foreground"
    >
      {/* Card Image */}
      <div className="relative h-44 overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 bg-foreground text-background text-[9px] font-mono font-bold tracking-widest uppercase py-1 px-2.5">
            ★ Featured
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 block">{project.tagline}</span>
          <h3 className="text-xl font-extrabold uppercase mb-2 text-foreground leading-tight">{project.title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed font-light mb-4">{project.description}</p>
          
          {project.features.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {project.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <div className="w-5 h-5 border border-border flex items-center justify-center text-foreground">
                    <f.icon size={9} />
                  </div>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.map((t) => (
              <span 
                key={t} 
                className="text-[9px] font-mono px-2 py-1 border border-border bg-secondary text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="solid-btn-inverted shimmer-btn py-2.5 px-5 text-[10px]"
            >
              Demo <ExternalLink size={10} className="ml-1.5 inline" />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="solid-btn shimmer-btn py-2.5 px-5 text-[10px]"
            >
              Source <Github size={10} className="ml-1.5 inline" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section id="projects" className="min-h-screen flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border shrink-0" style={{ width: "1750px" }}>
      
      {/* Left Info Panel */}
      <div className="w-[350px] shrink-0 pr-16 h-[85vh] flex flex-col justify-center">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">// 04</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">SELECTED WORK</h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          A curated selection of applications built with modern web technologies, focusing on clean engineering and responsive UI.
        </p>
      </div>

      {/* Horizontal Projects Carousel Track with 3D coverflow geometry */}
      <div className="flex-1 flex gap-6 items-center overflow-visible" style={{ perspective: 1200 }}>
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
