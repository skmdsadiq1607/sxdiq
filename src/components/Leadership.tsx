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
    color: "hsl(260 80% 65%)",
    points: ["Managed academic resources", "Shared notes, circulars, and campus updates for students"],
  },
  {
    icon: Code, org: "Coding Club", role: "Content Writer", period: "",
    color: "hsl(160 80% 50%)",
    points: ["Conducted workshops on coding fundamentals and development concepts"],
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-leadership-bg)' }}>
    <div className="absolute inset-0 grid-lines opacity-30" />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8 bg-primary/40" />
          <p className="text-sm font-mono tracking-widest uppercase text-primary">Experience</p>
          <div className="h-px w-8 bg-primary/40" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Leadership & </span>
          <span className="text-gradient-primary">Activities</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.org}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-7 group relative overflow-hidden premium-glass"
          >
            <div className="absolute top-0 left-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: a.color }} />

            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: `${a.color}12`, border: `1px solid ${a.color}20` }}>
                <a.icon size={20} style={{ color: a.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-base">{a.org}</h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-xs font-medium" style={{ color: a.color }}>{a.role}</span>
                  {a.period && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span className="text-xs text-muted-foreground font-mono">{a.period}</span>
                    </>
                  )}
                </div>
                <ul className="mt-4 space-y-2">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ChevronRight size={14} style={{ color: a.color }} className="mt-0.5 shrink-0" />
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
