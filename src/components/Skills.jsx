import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiJavascript
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaCogs,
  FaServer,
  FaCode,
  FaDesktop
} from 'react-icons/fa';

const CATEGORIES = [
  {
    id: 'web',
    title: 'Web Architecture',
    radius: 42, // percentage of container half-width
    duration: 60, // seconds for full rotation
    direction: 1,
    skills: [
      { name: 'React.js', icon: SiReact, detail: 'Frontend UI' },
      { name: 'Node.js', icon: FaServer, detail: 'Backend' },
      { name: 'Express.js', icon: SiExpress, detail: 'API Framework' },
      { name: 'MongoDB', icon: SiMongodb, detail: 'NoSQL DB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, detail: 'Styling' },
      { name: 'HTML5 & CSS3', icon: SiHtml5, detail: 'Markup' },
      { name: 'Git & GitHub', icon: SiGithub, detail: 'VCS' },
    ]
  },
  {
    id: 'lang',
    title: 'Programming Languages',
    radius: 28,
    duration: 45,
    direction: -1,
    skills: [
      { name: 'Java', icon: FaJava, detail: 'Core & Adv' },
      { name: 'JavaScript', icon: SiJavascript, detail: 'ES6+' },
      { name: 'C (DSA)', icon: FaCode, detail: 'Algorithms' },
      { name: 'Python', icon: SiPython, detail: 'Scripting' },
    ]
  },
  {
    id: 'cs',
    title: 'CS Foundations',
    radius: 14,
    duration: 30,
    direction: 1,
    skills: [
      { name: 'OOP Architecture', icon: FaDesktop, detail: 'Design' },
      { name: 'DBMS & SQL', icon: FaDatabase, detail: 'Relational DB' },
      { name: 'Operating Systems', icon: FaCogs, detail: 'Core OS' },
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#000000] text-[#FFFFFF] font-times py-24 overflow-hidden">
      {/* Background Gradient & Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        <div className="absolute w-[84%] aspect-square rounded-full border border-dashed border-white/[0.05]" />
        <div className="absolute w-[56%] aspect-square rounded-full border border-dashed border-white/[0.05]" />
        <div className="absolute w-[28%] aspect-square rounded-full border border-dashed border-white/[0.05]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest uppercase text-white/50">
              // 02 &mdash; Technical Proficiencies
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl italic tracking-tight">
            Digital Toolkit.
          </h2>
        </motion.div>

        {/* Desktop Orbital Visualization (lg+) */}
        <div className="hidden lg:flex justify-center items-center w-full my-12">
          <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
            {/* Center Node */}
            <div className="absolute z-50 flex items-center justify-center w-32 h-32 rounded-full bg-black border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="text-center text-sm uppercase tracking-widest text-white leading-tight">
                Tech<br />Stack
              </span>
            </div>

            {/* Orbital Rings */}
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: category.direction === 1 ? 360 : -360 }}
                transition={{ duration: category.duration, repeat: Infinity, ease: "linear" }}
              >
                {category.skills.map((skill, index) => {
                  const angle = (index / category.skills.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * category.radius;
                  const y = Math.sin(angle) * category.radius;
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute pointer-events-auto group"
                      style={{
                        left: `calc(50% + ${x}%)`,
                        top: `calc(50% + ${y}%)`,
                        x: '-50%',
                        y: '-50%'
                      }}
                    >
                      {/* Counter-rotation to keep icons upright */}
                      <motion.div
                        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-white/10 hover:border-white/50 transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        animate={{ rotate: category.direction === 1 ? -360 : 360 }}
                        transition={{ duration: category.duration, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="text-xl text-white/70 group-hover:text-white transition-colors" />
                        
                        {/* Tooltip Card */}
                        <div className="absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-300 z-50 bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 min-w-[160px] p-4 bg-black border border-white/20 rounded-2xl shadow-xl">
                          <h4 className="text-base font-bold text-white mb-1 whitespace-nowrap">{skill.name}</h4>
                          <p className="text-xs text-white/50 uppercase tracking-wider">{skill.detail}</p>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-r border-b border-white/20 rotate-45"></div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Fallback (hidden on lg) */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  activeTab === category.id 
                    ? 'bg-white text-black' 
                    : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {CATEGORIES.map(category => (
                category.id === activeTab && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {category.skills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Icon className="text-xl text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <h3 className="text-xl text-white mb-1">{skill.name}</h3>
                              <p className="text-sm text-white/50 tracking-wider uppercase">{skill.detail}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
