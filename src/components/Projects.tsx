import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { Leaf, Brain, Globe, CloudSun, FlaskConical, Landmark, BookOpen, Users, Calendar, School } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/smart-city.png";
import ignitextImg from "@/assets/ignitext.jpg";

const projects = [
  {
    title: "Krushi Mitra",
    tagline: "AI-Powered Farming Assistant",
    description: "Your personal AI-powered companion for smarter, more profitable, and sustainable farming. Features multi-language support, disease detection, weather intelligence, and government scheme recommendations.",
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
    demo: "https://krushi-mitra-unquadtrium.netlify.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: true,
    accentColor: "hsl(160 80% 50%)",
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
    accentColor: "hsl(25 95% 60%)",
  },
  {
    title: "Developer Portfolio",
    tagline: "Personal Website",
    description: "My personal developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion — featuring smooth animations, dark mode, and a modern glassmorphism design.",
    image: smartCityImg,
    features: [],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://sxdiq.netlify.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: false,
    accentColor: "hsl(200 100% 55%)",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding relative overflow-hidden noise-overlay" style={{ background: 'var(--section-projects-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(330 80% 60% / 0.3), transparent)' }} />
    <div className="absolute top-[30%] right-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(330 80% 60% / 0.08), transparent 70%)' }} />
    <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(160 80% 50% / 0.06), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(330 80% 65%)' }}>What I've built</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(330 80% 65%), hsl(260 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Real-world applications built with passion and modern technologies</p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden group relative premium-glass"
            style={{ boxShadow: `0 20px 60px -15px ${project.accentColor}15` }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: `linear-gradient(90deg, ${project.accentColor}, hsl(260 80% 65%))` }} />

            <div className="grid md:grid-cols-2">
              <div className="relative overflow-hidden h-72 md:h-auto min-h-[320px]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-5 left-5 px-5 py-2 rounded-full text-white text-xs font-bold tracking-wide uppercase backdrop-blur-sm"
                    style={{ background: `${project.accentColor}dd` }}
                  >
                    ⭐ Featured
                  </motion.div>
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: project.accentColor }}>{project.tagline}</span>
                <h3 className="text-3xl font-bold text-foreground mb-4 font-display">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                {project.features.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {project.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground group/feat">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/feat:scale-110" style={{ background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}20` }}>
                          <f.icon size={14} style={{ color: project.accentColor }} />
                        </div>
                        <span className="text-xs">{f.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-xl bg-secondary/60 text-secondary-foreground font-mono border border-border/30 hover:border-primary/30 transition-colors">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-sm font-bold transition-shadow" style={{ background: `linear-gradient(135deg, ${project.accentColor}, hsl(260 80% 65%))`, boxShadow: `0 8px 24px ${project.accentColor}40` }}>
                    Live Demo <ExternalLink size={15} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold hover:bg-muted transition-colors premium-glass">
                    <Github size={16} /> Source
                  </motion.a>
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
