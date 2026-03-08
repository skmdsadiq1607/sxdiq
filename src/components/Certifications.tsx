import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false },
  { title: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false },
];

const Certifications = () => (
  <section className="section-padding mesh-bg">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Certifications</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass-card rounded-2xl p-6 elevated-shadow card-hover group relative overflow-hidden ${c.highlight ? 'ring-1 ring-primary/30' : ''}`}
          >
            {c.highlight && <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />}
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Award size={20} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5">{c.issuer}</p>
            {c.badge && (
              <span className="inline-flex items-center gap-1 mt-3 text-xs px-3 py-1.5 rounded-lg gradient-bg text-primary-foreground font-semibold">
                🏅 {c.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
