import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, Zap, Code, Users, BookOpen, Calendar, MapPin, Award, ExternalLink, X } from "lucide-react";

import agentxImg from "@/assets/certs/agentx.jpg";
import dataDynamoImg from "@/assets/certs/data-dynamo.jpg";
import devwarsImg from "@/assets/certs/devwars.jpg";
import codesprintImg from "@/assets/certs/codesprint.jpg";
import daysOfCodeImg from "@/assets/certs/11-days-of-code.jpg";

const educationItems = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad" },
];

const activityItems = [
  { 
    icon: Users, 
    org: "Computer Society of India (CSI SB)", 
    role: "Technical Team Member", 
    period: "Jul 2025 – Present", 
    points: ["Monitored registrations for CSI AI100K initiative", "Helped organize technical workshops"] 
  },
  { 
    icon: BookOpen, 
    org: "IgniteXT – Student Community", 
    role: "Technical Team Member", 
    period: "Nov 2025 – Present", 
    points: ["Managed academic resources", "Shared notes and campus updates"] 
  },
  { 
    icon: Code, 
    org: "Coding Club", 
    role: "Content Writer", 
    period: "Jul 2025 – Present", 
    points: ["Conducted workshops on coding fundamentals"] 
  },
];

const hackathonItems = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", date: "Jan 2026", desc: "Built AI agents for smart city management in a 24hr hackathon", image: agentxImg },
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", date: "Jan 2026", desc: "Built Krushi Mitra AI agricultural farming assistant platform", image: dataDynamoImg },
  { icon: Code, title: "DevWars", org: "Dept of AI × CodingCubs", date: "Jan 2026", desc: "Competitive development challenge by AI department", image: devwarsImg },
  { icon: Code, title: "CodeSprint 2025", org: "CodingCubs × GFG", date: "Sep 2025", desc: "Competitive coding sprint", image: codesprintImg },
  { icon: Code, title: "11 Days of Code", org: "APJ Abdul Kalam Academy", date: "Dec 2025", desc: "Online coding challenge run by CSE", image: daysOfCodeImg },
];

const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="leadership" className="min-h-screen w-full flex items-center justify-center bg-black text-foreground noise-overlay py-24 px-6 sm:px-12 md:px-20 border-b border-border relative select-none">
      
      {/* ⚡ Subtle ambient glow behind milestones */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Main Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-16 border-b border-foreground/15 pb-4"
        >
          <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">
            // 04 — Academic Foundation &amp; Experience
          </span>
          <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-foreground mb-3">
            Milestones &amp; Trajectory
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl font-times leading-relaxed">
            A comprehensive record of my academic pursuit, community leadership, and competitive hackathon challenges.
          </p>
        </motion.div>

        {/* 1. Academic Foundation (Education) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest">// 04.1</span>
            <h3 className="font-times italic text-2xl sm:text-3xl font-normal text-foreground">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="border border-border/80 bg-card/90 backdrop-blur-md rounded-3xl p-6 relative overflow-hidden group hover:border-foreground/40 transition-all shadow-lg flex flex-col justify-between"
              >
                {/* Traveling laser accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                      <Calendar size={11} /> {item.year}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-foreground/20 bg-foreground/5 text-[9px] font-mono text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" /> Pursuing
                      </span>
                    )}
                  </div>
                  <h4 className="font-times italic text-xl font-normal text-foreground mb-1 leading-snug">
                    {item.institution}
                  </h4>
                  <p className="text-xs text-muted-foreground font-light mb-4 font-times">
                    {item.degree}
                  </p>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-secondary/50">
                    <Award size={12} className="text-foreground" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Experience & Leadership */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest">// 04.2</span>
            <h3 className="font-times italic text-2xl sm:text-3xl font-normal text-foreground">
              Experience &amp; Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activityItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="border border-border/80 bg-card/90 backdrop-blur-md rounded-3xl p-6 relative overflow-hidden group hover:border-foreground/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl border border-border/80 bg-secondary/50 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-muted-foreground block">
                        {item.role}
                      </span>
                      <span className="text-[9px] font-mono text-foreground/45">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-times italic text-xl font-normal text-foreground mb-3 leading-snug">
                    {item.org}
                  </h4>

                  <ul className="space-y-1.5">
                    {item.points.map((pt, i) => (
                      <li key={i} className="text-xs text-muted-foreground font-light leading-relaxed flex items-start gap-2 font-times">
                        <span className="text-foreground/40 mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Hackathons & Competitions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest">// 04.3</span>
              <h3 className="font-times italic text-2xl sm:text-3xl font-normal text-foreground">
                Hackathons &amp; Competitions
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 hidden sm:inline-block">
              Click card to inspect certificate
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hackathonItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedImage(item.image)}
                className="border border-border/80 bg-card/90 backdrop-blur-md rounded-3xl overflow-hidden group hover:border-foreground/50 transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between"
              >
                <div className="relative h-32 overflow-hidden border-b border-border/60 bg-muted/20">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[9px] font-mono text-white/80 border border-white/10">
                    Inspect
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-foreground/60 block mb-1">
                      {item.date}
                    </span>
                    <h4 className="font-times italic text-base font-normal text-foreground mb-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2 truncate">
                      {item.org}
                    </p>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2 font-times">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for certificates */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative rounded-3xl border border-white/20 bg-black/95 p-4 max-w-3xl w-full shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-20 text-white font-mono text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5" 
                onClick={() => setSelectedImage(null)}
              >
                Close <X size={14} />
              </button>
              <img src={selectedImage} alt="Certificate" className="w-full max-h-[80vh] object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default TimelineSection;
