import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, Zap, Code, Users, BookOpen, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

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
  { icon: Users, org: "Computer Society of India (CSI SB)", role: "Technical Team Member", period: "Jul 2025 – Present", points: ["Monitored registrations for CSI AI100K initiative", "Helped organize technical workshops"] },
  { icon: BookOpen, org: "IgniteXT – Student Community", role: "Technical Team Member", period: "Nov 2025 – Present", points: ["Managed academic resources", "Shared notes and campus updates"] },
  { icon: Code, org: "Coding Club", role: "Content Writer", period: "Jul 2025 – Present", points: ["Conducted workshops on coding fundamentals"] },
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
    <section id="leadership" className="min-h-screen flex items-center bg-background text-foreground noise-overlay select-none shrink-0 py-12 px-12 md:px-24 border-r border-border" style={{ width: "3200px" }}>
      
      {/* Education Panel */}
      <div className="w-[850px] flex flex-col justify-center pr-16 border-r border-border h-[85vh]">
        <div className="mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">// 01</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">EDUCATION</h2>
          <p className="text-sm text-muted-foreground font-light">My academic background and milestones</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {educationItems.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-border p-6 flex flex-col justify-between h-[45vh] transition-all duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-muted-foreground">
                  <Calendar size={10} />
                  <span>{item.year}</span>
                </div>
                <h3 className="font-bold uppercase text-base leading-tight mb-2">{item.institution}</h3>
                <p className="text-xs text-muted-foreground font-light mb-4">{item.degree}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-4">
                  <MapPin size={10} />
                  <span>{item.location}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border">
                  <Award size={12} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{item.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Activities Panel */}
      <div className="w-[850px] flex flex-col justify-center px-16 border-r border-border h-[85vh]">
        <div className="mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">// 02</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">EXPERIENCE</h2>
          <p className="text-sm text-muted-foreground font-light">Leadership roles and student community work</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {activityItems.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-border p-6 flex flex-col justify-between h-[45vh] transition-all duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              <div>
                <div className="w-8 h-8 border border-border flex items-center justify-center text-foreground mb-4">
                  <item.icon size={14} />
                </div>
                <h3 className="font-bold uppercase text-base leading-tight mb-2">{item.org}</h3>
                <p className="text-[10px] font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-4">{item.role}</p>
              </div>

              <div className="space-y-2 mt-auto">
                <span className="text-[9px] font-mono text-zinc-500 block">{item.period}</span>
                <ul className="space-y-1.5">
                  {item.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-[11px] text-muted-foreground font-light leading-relaxed">
                      - {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hackathons Panel */}
      <div className="w-[1250px] flex flex-col justify-center pl-16 h-[85vh]">
        <div className="mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">// 03</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">HACKATHONS</h2>
          <p className="text-sm text-muted-foreground font-light">Competitions, hackathons, and credentials</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {hackathonItems.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-border bg-card flex flex-col justify-between h-[45vh] group transition-all duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              <div 
                className="relative h-28 overflow-hidden cursor-pointer border-b border-border"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 border border-border bg-background flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={10} />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono text-zinc-500">{item.date}</span>
                  </div>
                  <h3 className="font-bold uppercase text-xs leading-snug mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest leading-none mb-2">{item.org}</p>
                </div>
                <p className="text-[10px] text-muted-foreground font-light leading-relaxed mt-auto">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for certificates */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative border border-zinc-800 bg-black p-2" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-10 right-0 text-white font-mono text-xs uppercase tracking-widest hover:text-zinc-400"
                onClick={() => setSelectedImage(null)}
              >
                [Close]
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default TimelineSection;
