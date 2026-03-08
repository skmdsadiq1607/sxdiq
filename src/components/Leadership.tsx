import { motion } from "framer-motion";
import { Users, BookOpen, Code } from "lucide-react";

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
  <section id="leadership" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">Where I contribute</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Leadership & Activities</h2>
      </motion.div>
      <div className="space-y-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 glow-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <a.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{a.org}</h3>
                <p className="text-sm text-primary font-medium">{a.role}</p>
                {a.period && <p className="text-xs text-muted-foreground font-mono mt-0.5">{a.period}</p>}
                <ul className="mt-3 space-y-1.5">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
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
