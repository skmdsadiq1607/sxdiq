import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowUpRight, Sparkles, User, Zap, Globe } from "lucide-react";
import { MouseEvent } from "react";

const highlights = [
  { icon: Code, label: "Developer", color: "hsl(200 100% 55%)" },
  { icon: Zap, label: "Problem Solver", color: "hsl(330 80% 60%)" },
  { icon: Globe, label: "AI & Web Enthusiast", color: "hsl(160 80% 50%)" },
];

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean architecture.", color: "hsl(200 100% 55%)" },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js.", color: "hsl(260 80% 65%)" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice.", color: "hsl(45 100% 55%)" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems.", color: "hsl(160 80% 50%)" },
];

const TiltCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, type: "spring", stiffness: 100, damping: 15 }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="rounded-3xl p-8 group cursor-default relative overflow-hidden border border-border/20 bg-card/40 backdrop-blur-sm"
    >
      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.color }} />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" style={{ background: card.color }} />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" style={{ background: card.color, boxShadow: `0 8px 24px ${card.color}40` }}>
          <card.icon size={28} className="text-white" />
        </div>
        <h3 className="font-bold text-foreground mb-3 text-lg">{card.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ color: card.color }}>
          Explore <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

const About = () => (
  <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-about-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.3), transparent)' }} />
    <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.06), transparent 70%)' }} />
    <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.05), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(200 100% 60%)' }}>Get to know me</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
      </motion.div>

      {/* Two-column profile layout */}
      <div className="grid md:grid-cols-5 gap-10 mb-20 items-center">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2"
        >
          <div className="rounded-3xl p-8 relative overflow-hidden border border-border/20 bg-card/40 backdrop-blur-sm" style={{ boxShadow: '0 20px 60px -15px hsl(200 100% 55% / 0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, hsl(200 100% 55%), hsl(260 80% 65%), hsl(330 80% 60%))' }} />
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: 'hsl(200 100% 55%)' }} />

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 65%))', boxShadow: '0 12px 32px hsl(200 100% 55% / 0.3)' }}>
                  <User size={48} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'hsl(160 80% 50%)', boxShadow: '0 4px 12px hsl(160 80% 50% / 0.4)' }}>
                  <Sparkles size={14} className="text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground text-center mb-1">Shaik Kemple Mohammed Sadiq</h3>
            <p className="text-sm text-muted-foreground text-center font-mono mb-6">B.Tech IT — Anurag University</p>

            {/* Highlight badges */}
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-border/20 bg-secondary/30"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${h.color}15`, border: `1px solid ${h.color}30` }}>
                    <h.icon size={16} style={{ color: h.color }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
            Passionate about building{" "}
            <span style={{ color: 'hsl(200 100% 55%)' }}>beautiful</span> &{" "}
            <span style={{ color: 'hsl(260 80% 65%)' }}>functional</span>{" "}
            web experiences
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a passionate B.Tech student focused on becoming a skilled full-stack developer. I love turning complex problems into elegant, user-friendly solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Currently diving deep into the MERN stack and data structures, I thrive on building real-world applications that make an impact. From AI-powered farming assistants to interactive portfolios, I bring ideas to life with modern technologies and clean code.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "9.25", label: "CGPA", color: "hsl(200 100% 55%)" },
              { value: "2+", label: "Projects", color: "hsl(260 80% 65%)" },
              { value: "5+", label: "Certifications", color: "hsl(330 80% 60%)" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-2xl p-5 text-center border border-border/20 bg-card/30 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold font-display" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Focus cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h3 className="text-2xl font-bold text-foreground">What I Focus On</h3>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <TiltCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
