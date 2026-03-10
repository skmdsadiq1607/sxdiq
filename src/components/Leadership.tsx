import { motion } from "framer-motion";
import { Users, BookOpen, Code, ChevronRight, Calendar } from "lucide-react";

const activities = [
  {
    icon: Users, org: "Computer Society of India (CSI SB)", role: "Technical Team Member", period: "Jul 2025 – Present",
    color: "hsl(200 100% 55%)",
    points: ["Monitored registrations for CSI AI100K initiative", "Helped organize technical workshops and events"],
    emoji: "🖥️",
  },
  {
    icon: BookOpen, org: "IgniteXT – Student Community", role: "Technical Team Member", period: "Nov 2025 – Present",
    color: "hsl(280 80% 60%)",
    points: ["Managed academic resources", "Shared notes, circulars, and campus updates for students"],
    emoji: "🔥",
  },
  {
    icon: Code, org: "Coding Club", role: "Content Writer", period: "",
    color: "hsl(160 80% 50%)",
    points: ["Conducted workshops on coding fundamentals and development concepts"],
    emoji: "💻",
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-leadership-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.3), transparent)' }} />
    <div className="absolute bottom-0 right-[15%] w-[350px] h-[350px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(280 80% 60% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(200 100% 60%)' }}>Where I contribute</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(200 100% 60%), hsl(280 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Leadership & Activities</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Communities and organizations I actively contribute to</p>
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
            className="rounded-3xl p-8 group relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: `0 10px 40px -15px ${a.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, ${a.color}, ${a.color}60)` }} />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700" style={{ background: a.color }} />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: a.color, boxShadow: `0 8px 24px ${a.color}40` }}>
                  <span className="text-2xl">{a.emoji}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-xl">{a.org}</h3>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className="text-sm font-bold px-3 py-1 rounded-xl" style={{ color: a.color, background: `${a.color}12` }}>{a.role}</span>
                  {a.period && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <Calendar size={11} />
                      {a.period}
                    </span>
                  )}
                </div>
                <ul className="mt-5 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-3 group/item">
                      <ChevronRight size={16} style={{ color: a.color }} className="mt-0.5 shrink-0 group-hover/item:translate-x-1 transition-transform" />
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
