import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiExpress, SiMongodb, SiPython, 
  SiBootstrap, SiTailwindcss, SiReact, SiGit, SiGithub 
} from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaDesktop, FaLayerGroup, FaTerminal } from "react-icons/fa";
import { Compass, Cpu, Activity, ShieldCheck, Sparkles } from "lucide-react";

const allSkills = [
  // Web Technologies
  { name: "React.js", category: "Web Architecture", icon: SiReact, level: "Advanced", pct: 92, role: "Component Architecture, Virtual DOM & Hooks", projects: "IgniteXT, Portfolio" },
  { name: "JavaScript", category: "Programming", icon: SiJavascript, level: "Advanced", pct: 90, role: "ES6+, Async/Await, DOM Engine & APIs", projects: "All Projects" },
  { name: "Node.js & Express", category: "Web Architecture", icon: SiExpress, level: "Proficient", pct: 88, role: "RESTful APIs, Middleware & Routing", projects: "Backend APIs" },
  { name: "MongoDB", category: "Web Architecture", icon: SiMongodb, level: "Proficient", pct: 85, role: "NoSQL Schemas, Aggregations & Atlas", projects: "IgniteXT, MERN Apps" },
  { name: "Tailwind CSS", category: "Web Architecture", icon: SiTailwindcss, level: "Expert", pct: 95, role: "Utility-First Responsive UI & Custom Design Systems", projects: "All Projects" },
  { name: "HTML5 & CSS3", category: "Web Architecture", icon: SiHtml5, level: "Expert", pct: 96, role: "Semantic Layouts, Flexbox, Grid & Keyframes", projects: "All Projects" },
  { name: "REST APIs", category: "Web Architecture", icon: FaServer, level: "Proficient", pct: 88, role: "HTTP Protocols, JSON Payloads & Client Handshakes", projects: "Krushi Mitra" },
  { name: "SQL & Databases", category: "CS Foundations", icon: FaDatabase, level: "Proficient", pct: 84, role: "Relational Queries, Normalization & ACID Transactions", projects: "Infosys Certs" },
  { name: "Git & GitHub", category: "Web Architecture", icon: SiGithub, level: "Advanced", pct: 90, role: "Branch Workflows, Versioning & Open Source", projects: "skmdsadiq1607" },
  
  // Programming Languages
  { name: "Java", category: "Programming", icon: FaJava, level: "Advanced", pct: 92, role: "OOPs, Collections Framework & Multithreading", projects: "NPTEL Silver" },
  { name: "C (DSA)", category: "Programming", icon: FaCode, level: "Proficient", pct: 86, role: "Memory Management, Pointers & Algorithms", projects: "Academic Core" },
  { name: "Python", category: "Programming", icon: SiPython, level: "Proficient", pct: 82, role: "Scripting, Logic Automation & Data Analysis", projects: "Infosys Certs" },

  // CS Fundamentals
  { name: "Object-Oriented Programming", category: "CS Foundations", icon: FaCogs, level: "Advanced", pct: 94, role: "Inheritance, Polymorphism & Encapsulation Patterns", projects: "Core Curriculum" },
  { name: "DBMS", category: "CS Foundations", icon: FaDatabase, level: "Proficient", pct: 88, role: "Query Execution, Indexing & Entity Relations", projects: "Core Curriculum" },
  { name: "Operating Systems", category: "CS Foundations", icon: FaDesktop, level: "Proficient", pct: 85, role: "Process Scheduling, Threading & Memory Paging", projects: "Core Curriculum" },
];

const categories = ["ALL", "Web Architecture", "Programming", "CS Foundations"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [inspectedSkill, setInspectedSkill] = useState(allSkills[0]);

  const filteredSkills = activeCategory === "ALL" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative overflow-hidden select-none">
      
      {/* 🪐 CELESTIAL GYROSCOPIC RADAR RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-30">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          className="w-[700px] h-[700px] rounded-full border border-white/10 border-dashed relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[8px] text-white/30 tracking-widest">000° NORTH</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-mono text-[8px] text-white/30 tracking-widest">180° SOUTH</div>
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
          className="w-[980px] h-[980px] rounded-full border border-white/5 relative"
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 font-mono text-[8px] text-white/20 tracking-widest">090° EAST</div>
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 font-mono text-[8px] text-white/20 tracking-widest">270° WEST</div>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading & Category Commander */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/15 pb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 02 — Technical Proficiencies
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white">
              Skills &amp; Technologies
            </h2>
          </motion.div>

          {/* Interactive Category Commander Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 select-none ${
                    isActive ? "text-black font-bold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Holographic Inspector HUD + Interactive Skill Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Holographic Inspector HUD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Corner Crosshairs */}
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 pb-3 mb-6 border-b border-white/15">
              <span className="flex items-center gap-1.5">
                <Cpu size={12} /> HOLOGRAPHIC INSPECTOR
              </span>
              <span className="inline-flex items-center gap-1 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE TELEMETRY
              </span>
            </div>

            {/* Inspected Skill Feature Presentation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={inspectedSkill.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Large Wireframe Icon Avatar */}
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-3xl border border-white/25 bg-white/10 flex items-center justify-center text-4xl text-white shadow-[0_0_40px_rgba(255,255,255,0.15)] shrink-0">
                    <inspectedSkill.icon />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-1">
                      {inspectedSkill.category}
                    </span>
                    <h3 className="font-times italic text-3xl sm:text-4xl text-white font-normal leading-tight">
                      {inspectedSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Architecture Role Description */}
                <div className="p-4 rounded-2xl border border-white/10 bg-black/40">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-1">
                    // Architectural Application
                  </span>
                  <p className="text-sm font-times text-white/80 leading-relaxed font-light">
                    {inspectedSkill.role}
                  </p>
                </div>

                {/* Proficiency Gauge */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider mb-2">
                    <span className="text-white/60">System Proficiency</span>
                    <span className="text-white font-bold">{inspectedSkill.pct}% &bull; {inspectedSkill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${inspectedSkill.pct}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-white/70 via-white to-white rounded-full shadow-[0_0_12px_#ffffff]"
                    />
                  </div>
                </div>

                {/* Production Context */}
                <div className="flex items-center justify-between text-[10px] font-mono pt-3 border-t border-white/10 text-white/50">
                  <span>PROVEN IN:</span>
                  <span className="text-white uppercase font-bold tracking-wider">{inspectedSkill.projects}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-white/35">
              <span>HOVER ANY PILL TO INSPECT</span>
              <span>INDEX: {allSkills.findIndex(s => s.name === inspectedSkill.name) + 1} OF {allSkills.length}</span>
            </div>
          </motion.div>

          {/* RIGHT: Anti-Gravity Interactive Skill Pill Grid */}
          <motion.div 
            layout
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const isSelected = inspectedSkill.name === skill.name;
                return (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.02 }}
                    onMouseEnter={() => setInspectedSkill(skill)}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 450, damping: 18 }
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden group select-none ${
                      isSelected 
                        ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-[1.02]" 
                        : "bg-white/[0.03] text-white border-white/15 hover:border-white/60 hover:bg-white/10"
                    }`}
                  >
                    <motion.div 
                      whileHover={{ rotate: [0, -12, 12, 0], scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl"
                    >
                      <skill.icon />
                    </motion.div>
                    
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-center truncate max-w-full">
                      {skill.name}
                    </span>

                    <span className={`text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                      isSelected ? "border-black/20 text-black/70" : "border-white/15 text-white/40 group-hover:text-white/70"
                    }`}>
                      {skill.level}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
