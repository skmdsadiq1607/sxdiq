import { motion } from "framer-motion";
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
      { icon: Brain, label: "Smart Recs" },
      { icon: Landmark, label: "Govt Schemes" },
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
      { icon: Globe, label: "Centralized" },
      { icon: Brain, label: "Collaboration" },
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

const Projects = () => (
  <section id="projects" className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
    <div className="absolute top-0 left-0 right-0 h-px bg-border" />

    <div className="container mx-auto px-6 md:px-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">Selected work</span>
        <h2>Featured Projects</h2>
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="border border-border bg-card group relative"
            style={{ borderRadius: "0px" }}
          >
            <div className="grid lg:grid-cols-12">
              
              {/* Image side */}
              <div className="lg:col-span-5 relative overflow-hidden h-64 lg:h-auto min-h-[300px] border-b lg:border-b-0 lg:border-r border-border">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-foreground text-background text-[10px] font-mono font-bold tracking-widest uppercase py-1.5 px-3">
                    ★ Featured
                  </div>
                )}
              </div>
              
              {/* Content side */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">{project.tagline}</span>
                <h3 className="text-3xl font-extrabold uppercase text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-light">{project.description}</p>
                
                {project.features.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {project.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground font-mono">
                        <div className="w-6 h-6 border border-border flex items-center justify-center text-foreground">
                          <f.icon size={11} />
                        </div>
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-mono px-3 py-1.5 border border-border bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="solid-btn-inverted"
                  >
                    Demo <ExternalLink size={12} className="ml-2 inline" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="solid-btn"
                  >
                    Source <Github size={12} className="ml-2 inline" />
                  </a>
                </div>
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
