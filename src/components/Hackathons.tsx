import { motion } from "framer-motion";
import { Trophy, Zap, Code, Calendar, ExternalLink } from "lucide-react";
import agentxImg from "@/assets/certs/agentx.jpg";
import dataDynamoImg from "@/assets/certs/data-dynamo.jpg";
import devwarsImg from "@/assets/certs/devwars.jpg";
import codesprintImg from "@/assets/certs/codesprint.jpg";
import daysOfCodeImg from "@/assets/certs/11-days-of-code.jpg";
import { useState } from "react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", date: "Jan 2026", color: "hsl(30 100% 55%)", description: "Built AI agents for smart city management in a 24-hour innovation hackathon", image: agentxImg },
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", date: "Jan 2026", color: "hsl(280 80% 60%)", description: "Built Krushi Mitra, a web platform designed to support farmers with modern agricultural solutions.", image: dataDynamoImg },
  { icon: Code, title: "DevWars", org: "Dept of AI × CodingCubs × Codechef", date: "Jan 2026", color: "hsl(170 80% 50%)", description: "Competitive development challenge organized by the AI department", image: devwarsImg },
  { icon: Code, title: "CodeSprint 2025", org: "CodingCubs × GeeksforGeeks", date: "Sep 2025", color: "hsl(140 70% 45%)", description: "Competitive coding sprint organized by AI department", image: codesprintImg },
  { icon: Code, title: "11 Days of Code", org: "APJ Abdul Kalam Hackers Academy", date: "Dec 2025", color: "hsl(200 100% 55%)", description: "Online coding event by the CSE department", image: daysOfCodeImg },
];

const Hackathons = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden noise-overlay" style={{ background: 'var(--section-hackathons-bg)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(30 100% 55% / 0.3), transparent)' }} />
      <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(30 100% 55% / 0.08), transparent 70%)' }} />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(280 80% 60% / 0.06), transparent 70%)' }} />

      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
          <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(30 100% 60%)' }}>Competitions</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(30 100% 60%), hsl(45 100% 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hackathons & Events</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-3xl group relative overflow-hidden premium-glass flex flex-col"
              style={{ boxShadow: `0 10px 40px -15px ${item.color}10` }}
            >
              {/* Certificate preview */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center bg-card/60 backdrop-blur-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: item.color, boxShadow: `0 6px 16px ${item.color}40` }}>
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto text-muted-foreground">
                    <Calendar size={12} />
                    <span className="text-xs font-mono">{item.date}</span>
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: item.color }}>{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hackathons;
