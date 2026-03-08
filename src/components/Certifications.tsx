import { motion } from "framer-motion";
import { Award, ExternalLink, Star } from "lucide-react";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true, gradient: "from-amber-500 to-orange-400" },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false, gradient: "from-blue-500 to-cyan-400" },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false, gradient: "from-emerald-500 to-teal-400" },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, gradient: "from-pink-500 to-rose-400" },
  { title: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, gradient: "from-purple-500 to-violet-400" },
];

const Certifications = () => (
  <section className="section-padding mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Certifications</h2>
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
            className={`glass-card rounded-3xl p-7 elevated-shadow group relative overflow-hidden ${c.highlight ? 'ring-1 ring-primary/20' : ''}`}
          >
            {c.highlight && <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bg" />}
            <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${c.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`} />
            
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <Award size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              {c.badge && (
                <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-bg text-primary-foreground text-xs font-bold">
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
