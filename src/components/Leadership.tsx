import { motion } from "framer-motion";
import { Users, BookOpen, Code, ChevronRight } from "lucide-react";

const activities = [
  {
    icon: Users, org: "Computer Society of India (CSI SB)", role: "Technical Team Member", period: "Jul 2025 – Present",
    color: "hsl(200 100% 55%)",
    points: ["Monitored registrations for CSI AI100K initiative", "Helped organize technical workshops and events"],
  },
  {
    icon: BookOpen, org: "IgniteXT – Student Community", role: "Technical Team Member", period: "Nov 2025 – Present",
    color: "hsl(280 80% 60%)",
    points: ["Managed academic resources", "Shared notes, circulars, and campus updates for students"],
  },
  {
    icon: Code, org: "Coding Club", role: "Content Writer", period: "",
    color: "hsl(160 80% 50%)",
    points: ["Conducted workshops on coding fundamentals and development concepts"],
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(45 15% 6%), hsl(200 20% 6%))' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.3), transparent)' }} />
    <div className="absolute bottom-0 right-[15%] w-[350px] h-[350px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(280 80% 60% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(200 100% 60%)' }}>Where I contribute</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(200 100% 60%), hsl(280 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Leadership & Activities</h2>
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
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: a.color }} />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" style={{ background: a.color }} />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: a.color, boxShadow: `0 8px 24px ${a.color}40` }}>
                <a.icon size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-xl">{a.org}</h3>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-sm font-bold" style={{ color: a.color }}>{a.role}</span>
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
                      <ChevronRight size={16} style={{ color: a.color }} className="mt-0.5 shrink-0" />
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
