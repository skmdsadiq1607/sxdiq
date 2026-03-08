import { motion } from "framer-motion";
import { ExternalLink, Github, Leaf, Brain, Globe, CloudSun, FlaskConical, Landmark } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/smart-city.png";

const projects = [
  {
    title: "Krushi Mitra",
    description: "Your personal AI-powered companion for smarter, more profitable, and sustainable farming.",
    image: krushiImg,
    features: [
      { icon: Globe, label: "Multi Language Support" },
      { icon: Leaf, label: "AI Crop Disease Detection" },
      { icon: CloudSun, label: "Weather Intelligence" },
      { icon: FlaskConical, label: "Soil Health Analysis" },
      { icon: Brain, label: "Smart Farming Recommendations" },
      { icon: Landmark, label: "Government Scheme Navigator" },
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vite.js", "AI APIs", "Netlify"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Smart City AI Agents",
    description: "Developed AI agents during the AgentX Hackathon to assist in Smart City Management systems.",
    image: smartCityImg,
    features: [],
    tech: ["AI Agents", "Python", "APIs"],
    demo: "#",
    github: "#",
    featured: false,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding mesh-bg">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <p className="subtitle">What I've built</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden elevated-shadow group card-hover"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-semibold">
                  ⭐ Featured
                </div>
              )}
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{project.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              {project.features.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2.5 text-sm text-muted-foreground group/feature">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/feature:bg-primary/20 transition-colors">
                        <f.icon size={14} className="text-primary" />
                      </div>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-mono border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.demo} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-bg text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={project.github} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-muted transition-colors border border-border">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
