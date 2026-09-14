import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaDesktop } from "react-icons/fa";

const skillsData = [
  // Frontend
  { name: "React.js", category: "frontend", icon: SiReact, level: "Advanced", desc: "Hooks, SPA routing, state management" },
  { name: "JavaScript", category: "frontend", icon: SiJavascript, level: "Advanced", desc: "ES6+, Async/Await, DOM manipulation" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, level: "Advanced", desc: "Responsive design, modern utilities" },
  { name: "HTML5 & CSS3", category: "frontend", icon: SiHtml5, level: "Expert", desc: "Semantic markup, modern grid & flexbox" },
  { name: "Vite.js", category: "frontend", icon: SiVite, level: "Advanced", desc: "Lightning fast bundling & tooling" },

  // Backend
  { name: "Node.js", category: "backend", icon: FaServer, level: "Intermediate", desc: "Event-driven runtime & backend services" },
  { name: "Express.js", category: "backend", icon: SiExpress, level: "Advanced", desc: "RESTful APIs, routing & middleware" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, level: "Advanced", desc: "NoSQL document schemas, aggregation" },
  { name: "SQL", category: "backend", icon: FaDatabase, level: "Intermediate", desc: "Relational queries, joins & normalization" },
  { name: "REST APIs", category: "backend", icon: SiPostman, level: "Advanced", desc: "API design, testing & JSON integration" },

  // Programming
  { name: "Java", category: "programming", icon: FaJava, level: "Advanced", desc: "OOP concepts, exception handling, collections" },
  { name: "C (DSA)", category: "programming", icon: FaCode, level: "Advanced", desc: "Pointers, memory allocation, algorithms" },
  { name: "Python", category: "programming", icon: SiPython, level: "Intermediate", desc: "Scripting, logic & fundamentals" },

  // Fundamentals & Tools
  { name: "Data Structures", category: "fundamentals", icon: FaCogs, level: "Advanced", desc: "Trees, graphs, dynamic programming, sorting" },
  { name: "Operating Systems", category: "fundamentals", icon: FaDesktop, level: "Intermediate", desc: "Processes, threads, memory management" },
  { name: "Git & GitHub", category: "fundamentals", icon: SiGithub, level: "Advanced", desc: "Branching, PRs, version control workflows" },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DB" },
  { id: "programming", label: "Languages" },
  { id: "fundamentals", label: "CS Fundamentals" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="subtitle">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              02 // TECHNICAL ARSENAL
            </span>
            <h2>SKILLS &amp; EXPERTISE</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="glass-card p-6 flex flex-col justify-between group hover:border-white/50 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-white/30 group-hover:text-white transition-colors">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-lg uppercase tracking-tight text-white mb-1.5 group-hover:translate-x-1 transition-transform">
                    {skill.name}
                  </h3>
                  <p className="text-white/50 font-mono text-[11px] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
