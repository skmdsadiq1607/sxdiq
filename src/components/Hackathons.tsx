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
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", date: "2025", color: "hsl(260 80% 65%)", description: "24-hour hackathon focused on data science challenges and analytics", image: dataDynamoImg },
  { icon: Code, title: "DevWars", org: "Dept of AI × CodingCubs × Codechef", date: "Jan 2026", color: "hsl(200 100% 55%)", description: "Competitive development challenge organized by the AI department", image: devwarsImg },
  { icon: Code, title: "CodeSprint 2025", org: "CodingCubs × GeeksforGeeks", date: "Sep 2025", color: "hsl(160 80% 50%)", description: "Competitive coding sprint organized by AI department", image: codesprintImg },
  { icon: Code, title: "11 Days of Code", org: "APJ Abdul Kalam Hackers Academy", date: "Dec 2025", color: "hsl(330 80% 60%)", description: "Online coding event by the CSE department", image: daysOfCodeImg },
];

const Hackathons = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-hackathons-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-8" style={{ background: 'hsl(30 100% 55% / 0.5)' }} />
            <p className="text-sm font-mono tracking-widest uppercase" style={{ color: 'hsl(30 100% 55%)' }}>Competitions</p>
            <div className="h-px w-8" style={{ background: 'hsl(30 100% 55% / 0.5)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            <span className="text-foreground">Hackathons & </span>
            <span style={{ background: 'linear-gradient(135deg, hsl(30 100% 55%), hsl(45 100% 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Events</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl group relative overflow-hidden premium-glass flex flex-col"
            >
              {/* Certificate preview */}
              <div
                className="relative h-44 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center bg-card/60 backdrop-blur-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={12} />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto text-muted-foreground">
                    <Calendar size={11} />
                    <span className="text-[11px] font-mono">{item.date}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-[11px] font-medium mb-2" style={{ color: item.color }}>{item.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{item.description}</p>
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
            initial={{ scale: 0.9, opacity: 0 }}
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
