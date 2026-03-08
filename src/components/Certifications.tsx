import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)" },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "" },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "" },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "" },
  { title: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", badge: "" },
];

const Certifications = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">Credentials</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Certifications</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-5 glow-shadow"
          >
            <Award size={20} className="text-primary mb-3" />
            <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
            {c.badge && (
              <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full gradient-bg text-primary-foreground font-medium">
                {c.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
