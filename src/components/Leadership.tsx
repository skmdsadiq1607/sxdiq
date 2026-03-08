import { motion } from "framer-motion";
import { Users, BookOpen, Code, ChevronRight } from "lucide-react";

const activities = [
  {
    icon: Users,
    org: "Computer Society of India (CSI SB)",
    role: "Technical Team Member",
    period: "Jul 2025 – Present",
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
    points: ["Conducted workshops on coding fundamentals and development concepts"],
  },
];

const Leadership = () => (
  <section id="leadership" className="section-padding mesh-bg">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Where I contribute</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Leadership & Activities</h2>
      </motion.div>
      <div className="space-y-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-7 elevated-shadow card-hover group"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <a.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg">{a.org}</h3>
                <p className="text-sm text-primary font-semibold mt-0.5">{a.role}</p>
                {a.period && <p className="text-xs text-muted-foreground font-mono mt-1">{a.period}</p>}
                <ul className="mt-4 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      {p}
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
