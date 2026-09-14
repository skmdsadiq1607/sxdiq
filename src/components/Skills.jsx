import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiExpress, SiMongodb, SiPython, 
  SiBootstrap, SiTailwindcss, SiReact, SiGit, SiGithub 
} from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaDesktop } from "react-icons/fa";

const skillCategories = [
  {
    category: "Web Architecture",
    tagline: "High-Performance Modern Web Stacks",
    skills: [
      { name: "React.js", icon: SiReact, level: "Advanced", detail: "Component Architecture & Hooks" },
      { name: "Node.js", icon: FaServer, level: "Proficient", detail: "Server Runtimes & REST APIs" },
      { name: "Express.js", icon: SiExpress, level: "Proficient", detail: "Middleware & Route Handlers" },
      { name: "MongoDB", icon: SiMongodb, level: "Proficient", detail: "NoSQL Schemas & Atlas Aggregations" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", detail: "Custom Design Systems & Utility Layouts" },
      { name: "HTML5 & CSS3", icon: SiHtml5, level: "Expert", detail: "Semantic Web & Responsive Layouts" },
      { name: "Git & GitHub", icon: SiGithub, level: "Advanced", detail: "Version Control & Branching Workflows" },
    ]
  },
  {
    category: "Programming Languages",
    tagline: "Algorithmic Logic & Memory Management",
    skills: [
      { name: "Java", icon: FaJava, level: "Advanced", detail: "OOPs, Collections & Multithreading" },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced", detail: "ES6+, Async/Await & Event Loop" },
      { name: "C (DSA)", icon: FaCode, level: "Proficient", detail: "Data Structures & Computational Complexity" },
      { name: "Python", icon: SiPython, level: "Proficient", detail: "Automation, Scripting & Data Logic" },
    ]
  },
  {
    category: "CS Foundations",
    tagline: "Core Computational Systems",
    skills: [
      { name: "OOP Architecture", icon: FaCogs, level: "Advanced", detail: "Inheritance, Polymorphism & Design Patterns" },
      { name: "DBMS & SQL", icon: FaDatabase, level: "Proficient", detail: "Relational Queries & ACID Transactions" },
      { name: "Operating Systems", icon: FaDesktop, level: "Proficient", detail: "Processes, Threads & Memory Paging" },
    ]
  }
];

const tabs = ["ALL", "Web Architecture", "Programming Languages", "CS Foundations"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredCategories = activeTab === "ALL"
    ? skillCategories
    : skillCategories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center bg-[#000000] text-[#FFFFFF] py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative overflow-hidden select-none">
      
      {/* 🪐 Subtle Ambient Orbit Rings in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="w-[650px] h-[650px] rounded-full border border-white/10 border-dashed" />
        <div className="w-[950px] h-[950px] rounded-full border border-white/5" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/15 pb-6">
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

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl w-fit">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 select-none ${
                    isActive ? "text-black font-bold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTabClean"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full z-0"
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Stacks */}
        <div className="space-y-12">
          {filteredCategories.map((group, gi) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">// 02.{gi + 1}</span>
                  <h3 className="font-times italic text-2xl sm:text-3xl text-white font-normal">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 hidden sm:inline-block">
                  {group.tagline}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="p-6 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.05] to-black/80 backdrop-blur-xl hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-default"
                  >
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center text-2xl text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                        <skill.icon />
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-white/60">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-times italic text-xl sm:text-2xl text-white mb-1 leading-tight">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-white/50 font-light font-times leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
