import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Leaf, Brain, Globe, CloudSun, FlaskConical, Landmark } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/smart-city.png";

const projects = [
  {
    title: "Krushi Mitra",
    tagline: "AI-Powered Farming Assistant",
    description: "Your personal AI-powered companion for smarter, more profitable, and sustainable farming.",
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
  <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(180 20% 6%), hsl(260 20% 7%))' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(330 80% 60% / 0.3), transparent)' }} />
    <div className="absolute top-[30%] right-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(330 80% 60% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(330 80% 65%)' }}>What I've built</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(330 80% 65%), hsl(260 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Real-world applications built with passion and modern technologies</p>
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden group relative border border-border/20 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: `0 20px 60px -15px ${project.accentColor}15` }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                {project.featured && (
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wide uppercase" style={{ background: project.accentColor }}>
                    ⭐ Featured
                  </motion.div>
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: project.accentColor }}>{project.tagline}</span>
                <h3 className="text-3xl font-bold text-foreground mb-4 font-display">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                {project.features.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${project.accentColor}15` }}>
                          <f.icon size={14} style={{ color: project.accentColor }} />
                        </div>
                        <span className="text-xs">{f.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-xl bg-secondary/60 text-secondary-foreground font-mono border border-border/30">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.demo} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-sm font-bold transition-shadow" style={{ background: project.accentColor, boxShadow: `0 8px 24px ${project.accentColor}40` }}>
                    Live Demo <ArrowUpRight size={16} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.github} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/60 text-secondary-foreground text-sm font-bold hover:bg-muted transition-colors border border-border/30">
                    <Github size={16} /> Source Code
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
