import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, MapPin, ExternalLink, X, Trophy, Users, BookOpen, Code, Zap } from "lucide-react";

import agentxImg from "@/assets/certs/agentx.jpg";
import dataDynamoImg from "@/assets/certs/data-dynamo.jpg";
import devwarsImg from "@/assets/certs/devwars.jpg";
import codesprintImg from "@/assets/certs/codesprint.jpg";
import daysOfCodeImg from "@/assets/certs/11-days-of-code.jpg";

const educationItems = [
  {
    institution: "Anurag University",
    degree: "B.Tech in Information Technology",
    score: "CGPA: 9.25",
    year: "2024 – 2028",
    current: true,
    location: "Hyderabad, India",
    description: "Focusing on Software Systems, Data Structures, Web Engineering, and Cloud Technologies.",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate – MPC (Maths, Physics, Chemistry)",
    score: "Score: 94.6%",
    year: "2022 – 2024",
    current: false,
    location: "Hyderabad, India",
    description: "Rigorous analytical problem solving, mathematics, and foundational science.",
  },
  {
    institution: "Sri Chaitanya School",
    degree: "Secondary School Certificate (SSC – Class X)",
    score: "GPA: 9.7 / 10",
    year: "2022",
    current: false,
    location: "Hyderabad, India",
    description: "Graduated with top academic standing and competitive academic merit.",
  },
];

const leadershipItems = [
  {
    icon: Users,
    org: "Computer Society of India (CSI SB)",
    role: "Technical Team Member",
    period: "Jul 2025 – Present",
    points: [
      "Monitored registrations & infrastructure for CSI AI100K national tech initiative",
      "Organized technical student development workshops across the department",
    ],
  },
  {
    icon: BookOpen,
    org: "IgniteXT – Student Community",
    role: "Technical Core Member",
    period: "Nov 2025 – Present",
    points: [
      "Curated and verified department academic repositories and examination archives",
      "Managed campus broadcast circulars and collaborative peer problem-solving channels",
    ],
  },
  {
    icon: Code,
    org: "Coding Club",
    role: "Content Writer & Workshop Lead",
    period: "Jul 2025 – Present",
    points: [
      "Created structured problem-solving guides for Data Structures in C and Java",
      "Conducted introductory coding bootcamps for freshman students",
    ],
  },
];

const hackathonItems = [
  {
    title: "AgentX Hackathon",
    org: "Dept of IT & Salesforce",
    date: "Jan 2026",
    desc: "Engineered autonomous AI agents for municipal infrastructure & traffic routing in a 24-hour hackathon.",
    image: agentxImg,
    badge: "Finalist",
  },
  {
    title: "Data Dynamo 2.0",
    org: "Dept of Data Science",
    date: "Jan 2026",
    desc: "Constructed Krushi Mitra — an AI agricultural diagnostics & crop health intelligence platform.",
    image: dataDynamoImg,
    badge: "Top Project",
  },
  {
    title: "DevWars",
    org: "Dept of AI × CodingCubs",
    date: "Jan 2026",
    desc: "Speed algorithmic development and rapid web application architecture challenge.",
    image: devwarsImg,
    badge: "Participant",
  },
  {
    title: "CodeSprint 2025",
    org: "CodingCubs × GeeksforGeeks",
    date: "Sep 2025",
    desc: "High-intensity algorithmic sprint focusing on dynamic programming and graph theory.",
    image: codesprintImg,
    badge: "Elite Solver",
  },
  {
    title: "11 Days of Code",
    org: "APJ Abdul Kalam Academy",
    date: "Dec 2025",
    desc: "11-day continuous programming marathon solving complex logic puzzles and data structures.",
    image: daysOfCodeImg,
    badge: "Completed",
  },
];

const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="leadership" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            04 // ACADEMICS & ENGAGEMENT
          </span>
          <h2>EXPERIENCE &amp; MILESTONES</h2>
        </motion.div>

        {/* Two-Column: Education & Leadership */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Education Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-white">
                Academic Pedigree
              </h3>
            </div>

            <div className="relative border-l border-white/15 pl-6 ml-3 space-y-8">
              {educationItems.map((item, idx) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-white group-hover:scale-125 group-hover:bg-white transition-all duration-300" />

                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                        <Calendar size={11} /> {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full border border-white/20 bg-white/[0.05] text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        {item.score}
                      </span>
                    </div>

                    <h4 className="font-syne font-bold text-xl uppercase tracking-tight text-white mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-mono text-white/70 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <MapPin size={11} className="text-white/40" /> {item.degree} • {item.location}
                    </p>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Student Leadership & Community */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-white">
                Leadership &amp; Community
              </h3>
            </div>

            <div className="space-y-4">
              {leadershipItems.map((item, idx) => (
                <motion.div
                  key={item.org}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 group hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                        <item.icon size={16} />
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-lg uppercase tracking-tight text-white leading-tight">
                          {item.org}
                        </h4>
                        <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pl-2 border-l border-white/10">
                    {item.points.map((p, pIdx) => (
                      <li key={pIdx} className="text-xs text-white/65 font-light leading-relaxed">
                        • {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Hackathons Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Trophy size={20} className="text-white" />
              <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Hackathon Deployments
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase hidden sm:inline">
              [ CLICK TO VIEW VERIFIED CREDENTIALS ]
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {hackathonItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item.image)}
                className="glass-card cursor-pointer group hover:border-white/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={11} />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mb-1.5 uppercase">
                      <span>{item.date}</span>
                      <span className="text-white/80 font-bold">{item.badge}</span>
                    </div>
                    <h4 className="font-syne font-bold text-sm uppercase tracking-tight text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">
                      {item.org}
                    </p>
                  </div>
                  <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl border border-white/20 bg-black p-3 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/80 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate View"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TimelineSection;
