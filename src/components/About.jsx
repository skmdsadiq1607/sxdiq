import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, ChevronRight, X } from 'lucide-react';
import SectionHeaderEditorial from '@/components/SectionHeaderEditorial';
import TerminalConsole from '@/components/TerminalConsole';

const stats = [
  { value: "9.25", label: "CGPA", desc: "Anurag University (IT)" },
  { value: "2+", label: "Web Applications", desc: "Built & deployed" },
  { value: "3+", label: "Hackathons", desc: "Podium finishes & awards" },
  { value: "5+", label: "Certifications", desc: "Infosys & NPTEL accredited" }
];

const techStack = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Java (DSA)", "Tailwind CSS", "C/C++", "Vite", "REST APIs"
];

const About = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section id="about" className="relative w-full min-h-screen bg-[#FFFFFF] text-[#000000] font-times py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Section Header */}
        <SectionHeaderEditorial
          number="01"
          label="01 / About"
          headline="Building modern web applications with clean code and practical problem solving"
          isWhiteBg={true}
        />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Tech Stack & Description */}
          <div className="flex flex-col gap-10">
            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#000000]/75 space-y-6">
              <p>
                I am an Information Technology student at Anurag University, Hyderabad, focused on full-stack web development and problem solving. I primarily work with React, Node.js, Express, MongoDB, and Java for data structures and algorithms.
              </p>
              <p>
                I enjoy building practical web applications that solve real-world problems—from agricultural tools for farmers to community platforms for college students. I focus on writing clean, maintainable code and building interfaces that feel fast, responsive, and intuitive.
              </p>
            </div>

            {/* Core Technologies */}
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#000000]/10 pb-3">
                <h3 className="text-lg tracking-wider uppercase font-mono text-xs font-semibold text-black/70">
                  Core Technologies
                </h3>
                <span className="font-mono text-[10px] text-black/40 uppercase">
                  {techStack.length} Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 border border-[#000000]/15 rounded-full text-sm font-times tracking-wide bg-[#FFFFFF] shadow-sm hover:bg-[#000000] hover:text-[#FFFFFF] hover:border-[#0047AB]/50 hover:shadow-[0_0_15px_rgba(0,71,171,0.2)] transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Terminal Launcher CTA */}
            <div className="pt-4 border-t border-[#000000]/10 flex items-center justify-between">
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-black/25 bg-black text-white hover:bg-neutral-800 hover:border-[#0052FF] hover:shadow-[0_0_20px_rgba(0,82,255,0.3)] transition-all font-mono text-xs uppercase tracking-wider shadow-md active:scale-95"
              >
                <TerminalIcon size={14} className="group-hover:rotate-12 transition-transform text-[#60A5FA]" />
                <span>{showTerminal ? "Hide Developer Shell" : "Launch Developer Shell (CLI)"}</span>
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 hidden sm:inline-block">
                sadiq_shell.sh v1.0
              </span>
            </div>
          </div>

          {/* Right Column: Staggered Stat Cascade & Terminal Display */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const direction = i % 2 === 0 ? -30 : 30;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: direction, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.12,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-7 border border-[#000000]/15 rounded-3xl bg-[#FFFFFF] flex flex-col justify-center gap-2 group hover:border-[#0052FF]/60 hover:shadow-[0_12px_35px_rgba(0,71,171,0.12)] transition-all shadow-sm"
                  >
                    <div className="text-5xl lg:text-6xl tracking-tighter group-hover:scale-105 origin-left transition-all duration-300 font-times group-hover:text-[#0047AB]">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold tracking-tight uppercase border-t border-[#000000]/10 pt-3 mt-1 font-mono text-xs">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#000000]/60 italic font-times">
                      {stat.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Embedded / Toggleable Developer Terminal Console */}
            <AnimatePresence>
              {showTerminal && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.96 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden pt-2"
                >
                  <div className="flex items-center justify-between pb-2 px-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-black/50">
                      Interactive Terminal &bull; Type &apos;help&apos; for commands
                    </span>
                    <button 
                      onClick={() => setShowTerminal(false)}
                      className="p-1 rounded-full hover:bg-black/5 text-black/60 transition-colors"
                      aria-label="Close terminal"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <TerminalConsole />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
