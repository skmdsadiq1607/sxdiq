import { motion } from "framer-motion";
import { Users, BookOpen, Code, ChevronRight } from "lucide-react";

const activities = [
  {
    icon: Users, org: "Computer Society of India (CSI SB)", role: "Technical Team Member", period: "Jul 2025 – Present",
    points: ["Monitored registrations for CSI AI100K initiative", "Helped organize technical workshops and events"],
  },
  {
    icon: BookOpen, org: "IgniteXT – Student Community", role: "Technical Team Member", period: "Nov 2025 – Present",
    points: ["Managed academic resources", "Shared notes, circulars, and campus updates for students"],
  },
  {
    icon: Code, org: "Coding Club", role: "Content Writer", period: "Jul 2025 – Present",
    points: ["Conducted workshops on coding fundamentals and development concepts"],
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
    
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">Where I contribute</span>
        <h2>Experience &amp; Activities</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {activities.map((a, i) => (
            <motion.div
              key={a.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 z-10 hidden md:block">
                <div className="w-5 h-5 border border-foreground bg-background flex items-center justify-center" style={{ borderRadius: "0px" }}>
                  <div className="w-1.5 h-1.5 bg-foreground" />
                </div>
              </div>

              <div
                className="border border-border p-8 transition-all duration-300 hover:border-foreground hover:bg-secondary/40"
                style={{ borderRadius: "0px" }}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 text-foreground" style={{ borderRadius: "0px" }}>
                    <a.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase text-lg">{a.org}</h3>
                    <div className="flex items-center gap-3 mt-1 flex-wrap font-mono text-xs uppercase tracking-wider">
                      <span className="font-bold text-foreground">{a.role}</span>
                      {a.period && (
                        <>
                          <span className="w-1 h-1 bg-border" />
                          <span className="text-muted-foreground">{a.period}</span>
                        </>
                      )}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {a.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <ChevronRight size={14} className="mt-0.5 shrink-0 text-foreground" />
                          <span className="font-light">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Leadership;
