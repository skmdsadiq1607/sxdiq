import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Leaf, Brain, Globe, CloudSun, FlaskConical, Landmark } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/smart-city.png";

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
  <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-projects-bg)' }}>
    <div className="absolute inset-0 grid-lines opacity-40" />
    <div className="absolute top-[20%] right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.04), transparent 60%)' }} />

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8 bg-accent/40" />
          <p className="text-sm font-mono tracking-widest uppercase" style={{ color: 'hsl(260 80% 65%)' }}>Projects</p>
          <div className="h-px w-8 bg-accent/40" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Things I've </span>
          <span style={{ background: 'linear-gradient(135deg, hsl(260 80% 65%), hsl(330 80% 60%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>built</span>
        </h2>
        <p className="text-muted-foreground mt-5 max-w-lg mx-auto text-center">Real-world applications built with passion and modern technologies</p>
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden group relative premium-glass"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: `linear-gradient(90deg, ${project.accentColor}, hsl(260 80% 65%))` }} />

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase backdrop-blur-md border border-white/10"
                    style={{ background: `${project.accentColor}cc`, color: 'white' }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-mono mb-2 uppercase tracking-widest" style={{ color: project.accentColor }}>{project.tagline}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {project.features.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {project.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}15` }}>
                          <f.icon size={12} style={{ color: project.accentColor }} />
                        </div>
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground font-mono border border-border/30">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all"
                    style={{ background: project.accentColor }}
                  >
                    Live Demo <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-border hover:border-primary/30 transition-colors bg-card/50"
                  >
                    <Github size={14} /> Source
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
