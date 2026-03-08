import { motion } from "framer-motion";
import { Users, BookOpen, Code, ChevronRight, ExternalLink } from "lucide-react";

const activities = [
  {
    icon: Users,
    org: "Computer Society of India (CSI SB)",
    role: "Technical Team Member",
    period: "Jul 2025 – Present",
    gradient: "from-blue-500 to-cyan-400",
    points: [
      "Monitored registrations for CSI AI100K initiative",
      "Helped organize technical workshops and events",
    ],
  },
  {
    icon: BookOpen,
    org: "IgniteXT – Student Community",
    role: "Technical Team Member",
    period: "Nov 2025 – Present",
    gradient: "from-purple-500 to-pink-400",
    points: [
      "Managed academic resources",
      "Shared notes, circulars, and campus updates for students",
    ],
  },
  {
    icon: Code,
    org: "Coding Club",
    role: "Content Writer",
    period: "",
    gradient: "from-emerald-500 to-teal-400",
    points: ["Conducted workshops on coding fundamentals and development concepts"],
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Where I contribute</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Leadership & Activities</h2>
      </motion.div>
      <div className="space-y-8">
        {activities.map((a, i) => (
          <motion.div
            key={a.org}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 elevated-shadow group relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className={`absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br ${a.gradient} rounded-full opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700`} />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <a.icon size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-xl">{a.org}</h3>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-sm text-primary font-bold">{a.role}</span>
                  {a.period && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-mono">{a.period}</span>
                    </>
                  )}
                </div>
                <ul className="mt-5 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-3">
                      <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
