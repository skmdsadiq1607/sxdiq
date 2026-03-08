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
  },
  {
    title: "Smart City AI Agents",
    description: "Developed AI agents during the AgentX Hackathon to assist in Smart City Management systems.",
    image: smartCityImg,
    features: [],
    tech: ["AI Agents", "Python", "APIs"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm mb-2">What I've built</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Projects</h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-xl overflow-hidden glow-shadow group"
          >
            <div className="relative overflow-hidden h-52">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              {project.features.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <f.icon size={14} className="text-primary shrink-0" />
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.demo} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={project.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
