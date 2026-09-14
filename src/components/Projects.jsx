import { motion } from "framer-motion";
import { Github, ExternalLink, Globe, Leaf, CloudSun, FlaskConical, BookOpen, Users, Calendar, School, Sparkles, ArrowUpRight } from "lucide-react";
import krushiImg from "@/assets/krushi-mitra.png";
import smartCityImg from "@/assets/portfolio-preview.png";
import ignitextImg from "@/assets/ignitext.png";

const projects = [
  {
    title: "Krushi Mitra",
    tagline: "AI-Powered Agricultural Intelligence",
    description: "Personal AI companion for smarter, profitable, and sustainable agriculture. Integrated with multi-language voice/text interaction, plant disease neural detection, live weather forecasts, and automated government subsidy recommendation engines.",
    image: krushiImg,
    features: [
      { icon: Globe, label: "Multi-Language" },
      { icon: Leaf, label: "Disease Neural Net" },
      { icon: CloudSun, label: "Weather Intel" },
      { icon: FlaskConical, label: "Soil Diagnostics" },
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vite.js", "AI APIs", "Netlify"],
    demo: "https://krushi-mitra-unquadtrium.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: true,
    year: "2026",
  },
  {
    title: "IgniteXT",
    tagline: "Inter-College Academic Hub & Community",
    description: "Centralized multi-college collaboration network designed to streamline student life. Features structured departmental study repositories, real-time campus circular feeds, event registrations, and peer community channels.",
    image: ignitextImg,
    features: [
      { icon: BookOpen, label: "Curated Study Repos" },
      { icon: Users, label: "Campus Circles" },
      { icon: Calendar, label: "Live Event Feeds" },
      { icon: School, label: "Multi-College Sync" },
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
    demo: "https://ignitext2026.vercel.app/",
    github: "https://github.com/skmdsadiq1607/IgniteXT-StudentCommunity",
    featured: true,
    year: "2025 - 2026",
  },
  {
    title: "Creative Developer Portfolio",
    tagline: "Awwwards-Grade Brutalist Portfolio",
    description: "Personal portfolio engineered with pure JavaScript, custom Lenis smooth scroll, interactive particle physics, real terminal emulator, and dark luxury Syne typography.",
    image: smartCityImg,
    features: [
      { icon: Sparkles, label: "Pure JavaScript" },
      { icon: Globe, label: "Custom Physics" },
      { icon: Users, label: "Interactive Terminal" },
      { icon: BookOpen, label: "High Contrast B&W" },
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "GSAP", "Vite"],
    demo: "https://sxdiq.vercel.app/",
    github: "https://github.com/skmdsadiq1607",
    featured: false,
    year: "2026",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              03 // SELECTED WORK
            </span>
            <h2>FEATURED ARCHITECTURES</h2>
          </div>
          <p className="text-white/50 font-mono text-xs max-w-sm">
            Curated selection of production-grade systems, highlighting responsive design, real-world utility, and clean architecture.
          </p>
        </motion.div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group hover:border-white/40 transition-all duration-500"
            >
              {/* Image Preview Column */}
              <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden border border-white/15 bg-black aspect-video group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
                />
                
                {/* Laser scan line overlay */}
                <div className="laser-scanner opacity-0 group-hover:opacity-100 transition-opacity" />

                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full border border-white/20 bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
                    <Sparkles size={11} className="text-yellow-400" />
                    Featured Project
                  </div>
                )}
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full border border-white/20 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/70">
                  {project.year}
                </div>
              </div>

              {/* Information Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
                    {project.tagline}
                  </span>
                  <h3 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  {project.features.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {project.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-mono text-white/70"
                        >
                          <div className="w-6 h-6 rounded-md border border-white/15 bg-white/[0.04] flex items-center justify-center text-white shrink-0">
                            <feat.icon size={11} />
                          </div>
                          <span>{feat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono uppercase tracking-wider text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary py-3 px-6 text-xs"
                  >
                    <span>Live Architecture</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary py-3 px-6 text-xs"
                  >
                    <span>Source Repository</span>
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
