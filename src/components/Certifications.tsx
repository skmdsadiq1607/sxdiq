import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true, color: "hsl(45 100% 55%)" },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(200 100% 55%)" },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(160 80% 50%)" },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(330 80% 60%)" },
  { title: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(260 80% 65%)" },
];

const Certifications = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(30 15% 6%), hsl(260 15% 6%))' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(260 80% 65% / 0.3), transparent)' }} />
    <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(260 80% 70%)' }}>Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(260 80% 70%), hsl(330 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl p-7 group relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: `0 10px 40px -15px ${c.color}10`, ...(c.highlight ? { borderColor: `${c.color}30` } : {}) }}
          >
            {c.highlight && <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: c.color }} />}
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700" style={{ background: c.color }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: c.color, boxShadow: `0 8px 24px ${c.color}40` }}>
                <Award size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              {c.badge && (
                <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold" style={{ background: c.color, color: 'white', boxShadow: `0 4px 16px ${c.color}40` }}>
                  <Star size={12} /> {c.badge}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
