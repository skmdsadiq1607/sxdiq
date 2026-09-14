import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Trophy, Zap, Code, Users, BookOpen, Calendar, MapPin, Award, ExternalLink, X, Sparkles } from "lucide-react";

import agentxImg from "@/assets/certs/agentx.jpg";
import dataDynamoImg from "@/assets/certs/data-dynamo.jpg";
import devwarsImg from "@/assets/certs/devwars.jpg";
import codesprintImg from "@/assets/certs/codesprint.jpg";
import daysOfCodeImg from "@/assets/certs/11-days-of-code.jpg";

const educationItems = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad", highlight: "Academic Top Tier" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad", highlight: "Mathematics, Physics & Chemistry" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad", highlight: "Foundational Distinction" },
];

const activityItems = [
  { 
    icon: Users, 
    org: "Computer Society of India (CSI SB)", 
    role: "Technical Team Member", 
    period: "Jul 2025 – Present", 
    points: [
      "Monitored registrations and technical logistics for CSI AI100K initiative",
      "Co-organized technical coding workshops and developer hackathons"
    ] 
  },
  { 
    icon: BookOpen, 
    org: "IgniteXT – Student Community", 
    role: "Technical Team Member", 
    period: "Nov 2025 – Present", 
    points: [
      "Curated multi-departmental academic learning repositories and codebases",
      "Managed platform deployments and coordinated cross-college student events"
    ] 
  },
  { 
    icon: Code, 
    org: "Coding Club", 
    role: "Content Writer", 
    period: "Jul 2025 – Present", 
    points: [
      "Authored technical breakdown guides and problem walkthroughs for club members",
      "Conducted interactive peer mentoring sessions on Data Structures & Algorithms"
    ] 
  },
];

const hackathonItems = [
  { 
    icon: Zap, 
    title: "AgentX Hackathon", 
    org: "Dept of IT & Salesforce", 
    date: "Jan 2026", 
    desc: "Built autonomous AI multi-agents for municipal smart city incident response in a 24-hour sprint.", 
    image: agentxImg,
    tag: "AI Agents & Autonomous Workflows"
  },
  { 
    icon: Trophy, 
    title: "Data Dynamo 2.0", 
    org: "Dept of Data Science", 
    date: "Jan 2026", 
    desc: "Engineered Krushi Mitra, an AI-powered agricultural advisory platform with localized disease diagnosis.", 
    image: dataDynamoImg,
    tag: "Agritech & Machine Learning"
  },
  { 
    icon: Code, 
    title: "DevWars", 
    org: "Dept of AI × CodingCubs", 
    date: "Jan 2026", 
    desc: "Competitive high-speed software development challenge organized by Anurag University AI Department.", 
    image: devwarsImg,
    tag: "Rapid Prototyping & Logic"
  },
  { 
    icon: Code, 
    title: "CodeSprint 2025", 
    org: "CodingCubs × GFG", 
    date: "Sep 2025", 
    desc: "Intensive competitive algorithmic programming sprint focusing on data structures, time complexity & optimization.", 
    image: codesprintImg,
    tag: "Algorithms & Data Structures"
  },
  { 
    icon: Code, 
    title: "11 Days of Code", 
    org: "APJ Abdul Kalam Academy", 
    date: "Dec 2025", 
    desc: "Multi-day consecutive algorithmic coding sprint solving diverse computer science challenges.", 
    image: daysOfCodeImg,
    tag: "Problem Solving Mastery"
  },
];

const tabs = ["ALL", "EDUCATION", "EXPERIENCE", "HACKATHONS"];

const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const laserHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section 
      ref={sectionRef}
      id="leadership" 
      className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative select-none"
    >
      
      {/* ⚡ QUANTUM LASER THREAD SPINAL CONDUIT (Hidden on mobile, prominent on desktop) */}
      <div className="absolute top-48 bottom-48 left-12 w-[1px] bg-white/10 hidden xl:block pointer-events-none">
        <motion.div 
          style={{ height: laserHeight }}
          className="w-full bg-gradient-to-b from-transparent via-white to-white shadow-[0_0_15px_#ffffff] origin-top"
        />
        <motion.div 
          style={{ top: laserHeight }}
          className="absolute -left-1.5 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#ffffff] -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading & Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/15 pb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 04 — Academic Foundation &amp; Trajectory
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white">
              Milestones &amp; Experience
            </h2>
          </motion.div>

          {/* Interactive Trajectory Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl w-fit">
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
                      layoutId="activeTimelineTab"
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

        {/* 1. Academic Foundation (Education) */}
        {(activeTab === "ALL" || activeTab === "EDUCATION") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">// 04.1</span>
              <h3 className="font-times italic text-3xl sm:text-4xl font-normal text-white">
                Academic Foundation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/60 backdrop-blur-2xl rounded-3xl p-7 relative overflow-hidden group hover:border-white/60 transition-all shadow-xl flex flex-col justify-between"
                >
                  {/* Travelling laser conduit sweep */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[10px] text-white/60 flex items-center gap-1.5">
                        <Calendar size={11} /> {item.year}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-[9px] font-mono text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Pursuing B.Tech
                        </span>
                      )}
                    </div>

                    <h4 className="font-times italic text-2xl font-normal text-white mb-2 leading-snug">
                      {item.institution}
                    </h4>
                    <p className="text-sm text-white/75 font-light mb-3 font-times">
                      {item.degree}
                    </p>
                    <span className="text-[10px] font-mono text-white/40 block mb-6 uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10">
                      <Award size={13} className="text-white" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                        {item.score}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">
                      {item.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. Experience & Leadership */}
        {(activeTab === "ALL" || activeTab === "EXPERIENCE") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">// 04.2</span>
              <h3 className="font-times italic text-3xl sm:text-4xl font-normal text-white">
                Experience &amp; Community Leadership
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activityItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/60 backdrop-blur-2xl rounded-3xl p-7 relative overflow-hidden group hover:border-white/60 transition-all shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-12 h-12 rounded-2xl border border-white/25 bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0 shadow-md">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 block font-semibold">
                          {item.role}
                        </span>
                        <span className="text-[9px] font-mono text-white/40">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-times italic text-2xl font-normal text-white mb-4 leading-snug">
                      {item.org}
                    </h4>

                    <ul className="space-y-2.5 mb-4">
                      {item.points.map((pt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-white/75 font-light leading-relaxed flex items-start gap-2 font-times">
                          <span className="text-white/40 mt-1">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                    ACTIVE RESPONSIBILITY
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. Hackathons & Competitions */}
        {(activeTab === "ALL" || activeTab === "HACKATHONS") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest">// 04.3</span>
                <h3 className="font-times italic text-3xl sm:text-4xl font-normal text-white">
                  Hackathons &amp; Competitive Sprints
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                Click any card to inspect certificate
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {hackathonItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl rounded-3xl overflow-hidden group hover:border-white/60 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
                >
                  <div className="relative h-36 overflow-hidden border-b border-white/15 bg-black">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md rounded-full px-3 py-1 text-[9px] font-mono text-white border border-white/20 flex items-center gap-1 shadow-md">
                      <Sparkles size={9} /> Inspect
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/60 mb-1.5">
                        <span>{item.date}</span>
                        <item.icon size={12} className="text-white/50" />
                      </div>
                      <h4 className="font-times italic text-lg font-normal text-white mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2 truncate">
                        {item.org}
                      </p>
                      <p className="text-xs text-white/70 font-light leading-relaxed font-times line-clamp-3 mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[9px] font-mono text-white/40 truncate">
                      {item.tag}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Full-Screen Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative rounded-3xl border border-white/30 bg-black p-4 max-w-4xl w-full shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-2 mb-2 border-b border-white/15">
                <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                  // Verified Competition Credential
                </span>
                <button 
                  className="text-white font-mono text-xs uppercase tracking-widest bg-white/15 hover:bg-white hover:text-black px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5" 
                  onClick={() => setSelectedImage(null)}
                >
                  Close <X size={14} />
                </button>
              </div>
              <img src={selectedImage} alt="Certificate" className="w-full max-h-[82vh] object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default TimelineSection;
