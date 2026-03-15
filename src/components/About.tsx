import { motion, useInView } from "framer-motion";
import { Code, Database, Brain, Rocket, Zap, Users, Coffee, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const focusAreas = [
  { icon: Code, title: "Web Development", desc: "Modern, responsive web apps with clean architecture.", color: "hsl(200 100% 55%)" },
  { icon: Database, title: "MERN Stack", desc: "Full-stack applications with MongoDB, Express, React & Node.", color: "hsl(260 80% 65%)" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Algorithmic thinking through competitive programming.", color: "hsl(45 100% 55%)" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications.", color: "hsl(160 80% 50%)" },
];

const stats = [
  { value: 9.25, label: "CGPA", suffix: "", decimals: 2, icon: Zap, color: "hsl(200 100% 55%)" },
  { value: 2, label: "Projects Built", suffix: "+", decimals: 0, icon: Code, color: "hsl(260 80% 65%)" },
  { value: 3, label: "Hackathons", suffix: "+", decimals: 0, icon: Users, color: "hsl(330 80% 60%)" },
  { value: 500, label: "Cups of Coffee", suffix: "+", decimals: 0, icon: Coffee, color: "hsl(30 100% 55%)" },
];

const AnimatedCounter = ({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const About = () => (
  <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-about-bg)' }}>
    {/* Subtle background elements */}
    <div className="absolute inset-0 grid-lines opacity-50" />
    <div className="absolute top-0 left-[20%] w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.04), transparent 60%)' }} />
    <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.03), transparent 60%)' }} />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8 bg-primary/40" />
          <p className="text-sm font-mono tracking-widest uppercase text-primary">About</p>
          <div className="h-px w-8 bg-primary/40" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Passionate about </span>
          <span className="text-gradient-primary">building the web</span>
        </h2>
      </motion.div>

      {/* Two-column: Story + Stats */}
      <div className="grid lg:grid-cols-5 gap-16 items-start mb-32">
        {/* Left - Story (3 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            I'm a <span className="text-foreground font-semibold">B.Tech Information Technology</span> student at Anurag University, Hyderabad. I build modern, user-centric web applications using the <span className="text-foreground font-semibold">MERN stack</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "Node.js", "MongoDB", "TypeScript", "Python", "Java", "Express.js"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right - Stats (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 group cursor-default relative overflow-hidden premium-glass"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: stat.color }} />
              <div className="relative z-10">
                <stat.icon size={18} style={{ color: stat.color }} className="mb-3 opacity-60" />
                <p className="text-2xl md:text-3xl font-bold font-display" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Focus Areas - Stripe-style feature grid */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 justify-center"
        >
          <div className="h-px w-8 bg-muted-foreground/20" />
          <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground">What I focus on</p>
          <div className="h-px w-8 bg-muted-foreground/20" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusAreas.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 group cursor-default relative overflow-hidden premium-glass"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.color }} />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}>
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                <div className="flex items-center gap-1 text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300" style={{ color: card.color }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
