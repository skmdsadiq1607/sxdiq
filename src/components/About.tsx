import { motion } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowUpRight } from "lucide-react";

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean architecture.", color: "hsl(200 100% 55%)" },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js.", color: "hsl(260 80% 65%)" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice.", color: "hsl(45 100% 55%)" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems.", color: "hsl(160 80% 50%)" },
];

const About = () => (
  <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-about-bg)' }}>
    {/* Section accent */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.3), transparent)' }} />
    <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.06), transparent 70%)' }} />
    <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.05), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(200 100% 60%)' }}>Get to know me</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
        I'm a passionate B.Tech student focused on becoming a skilled full-stack developer. I love turning complex problems into elegant, user-friendly solutions.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="rounded-3xl p-8 group cursor-default relative overflow-hidden border border-border/20 bg-card/40 backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.color }} />
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700" style={{ background: card.color }} />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" style={{ background: `${card.color}`, boxShadow: `0 8px 24px ${card.color}40` }}>
                <card.icon size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ color: card.color }}>
                Explore <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
