import { motion } from "framer-motion";
import { Trophy, Zap, Code, Calendar, ExternalLink } from "lucide-react";
import agentxImg from "@/assets/certs/agentx.jpg";
import dataDynamoImg from "@/assets/certs/data-dynamo.jpg";
import devwarsImg from "@/assets/certs/devwars.jpg";
import codesprintImg from "@/assets/certs/codesprint.jpg";
import daysOfCodeImg from "@/assets/certs/11-days-of-code.jpg";
import { useState } from "react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", date: "Jan 2026", description: "Built AI agents for smart city management in a 24-hour innovation hackathon", image: agentxImg },
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", date: "Jan 2026", description: "Built Krushi Mitra, a web platform designed to support farmers with modern agricultural solutions.", image: dataDynamoImg },
  { icon: Code, title: "DevWars", org: "Dept of AI × CodingCubs × Codechef", date: "Jan 2026", description: "Competitive development challenge organized by the AI department", image: devwarsImg },
  { icon: Code, title: "CodeSprint 2025", org: "CodingCubs × GeeksforGeeks", date: "Sep 2025", description: "Competitive coding sprint organized by AI department", image: codesprintImg },
  { icon: Code, title: "11 Days of Code", org: "APJ Abdul Kalam Hackers Academy", date: "Dec 2025", description: "Online coding event by the CSE department", image: daysOfCodeImg },
];

const Hackathons = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">Competitions</span>
          <h2>Hackathons &amp; Events</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="border border-border bg-card group flex flex-col transition-all duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              {/* Certificate preview */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer border-b border-border"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-8 h-8 border border-border bg-background flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={12} />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-foreground">
                    <item.icon size={16} />
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-[10px] uppercase tracking-wider">
                    <Calendar size={10} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="font-bold uppercase text-base mb-1 tracking-wide">{item.title}</h3>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider mb-4 text-muted-foreground">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox - flat B&W frame */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative border border-zinc-800 bg-black p-2">
            <button 
              className="absolute -top-10 right-0 text-white font-mono text-xs uppercase tracking-widest hover:text-zinc-400"
              onClick={() => setSelectedImage(null)}
            >
              [Close]
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hackathons;
