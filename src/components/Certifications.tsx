import { motion } from "framer-motion";
import { Award, Star, ExternalLink } from "lucide-react";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true, color: "hsl(45 100% 55%)", emoji: "☕" },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(200 100% 55%)", emoji: "💡" },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(160 80% 50%)", emoji: "🐍" },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(330 80% 60%)", emoji: "🎨" },
  { title: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(260 80% 65%)", emoji: "🔀" },
];

const Certifications = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-certs-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(260 80% 65% / 0.3), transparent)' }} />
    <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(260 80% 70%)' }}>Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(260 80% 70%), hsl(330 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Verified credentials from leading platforms</p>
      </motion.div>

      {/* Featured cert */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="rounded-3xl p-8 mb-8 max-w-4xl mx-auto relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm group"
        style={{ borderColor: `${certs[0].color}25`, boxShadow: `0 20px 60px -15px ${certs[0].color}15` }}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: `linear-gradient(90deg, ${certs[0].color}, hsl(30 100% 60%))` }} />
        <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700" style={{ background: certs[0].color }} />
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: certs[0].color, boxShadow: `0 12px 32px ${certs[0].color}40` }}>
            {certs[0].emoji}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground text-xl mb-1">{certs[0].title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{certs[0].issuer}</p>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold" style={{ background: `${certs[0].color}15`, color: certs[0].color, border: `1px solid ${certs[0].color}30` }}>
              <Star size={12} /> {certs[0].badge}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other certs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {certs.slice(1).map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="rounded-3xl p-7 group relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm cursor-default"
            style={{ boxShadow: `0 10px 40px -15px ${c.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: c.color }} />
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700" style={{ background: c.color }} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-2xl" style={{ background: c.color, boxShadow: `0 8px 24px ${c.color}40` }}>
                {c.emoji}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
