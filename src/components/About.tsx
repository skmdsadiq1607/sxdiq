import { motion, useInView } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowUpRight, Zap, Users, Coffee } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean architecture.", color: "hsl(200 100% 55%)" },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js.", color: "hsl(260 80% 65%)" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice.", color: "hsl(45 100% 55%)" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems.", color: "hsl(160 80% 50%)" },
];

const stats = [
  { value: 9.25, label: "CGPA", suffix: "", decimals: 2, icon: Zap, color: "hsl(200 100% 55%)" },
  { value: 2, label: "Projects Built", suffix: "+", decimals: 0, icon: Code, color: "hsl(260 80% 65%)" },
  { value: 3, label: "Hackathons Participated", suffix: "+", decimals: 0, icon: Users, color: "hsl(330 80% 60%)" },
  { value: 5, label: "Certifications", suffix: "+", decimals: 0, icon: Coffee, color: "hsl(30 100% 55%)" },
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
  <section id="about" className="section-padding relative overflow-hidden noise-overlay" style={{ background: 'var(--section-about-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.3), transparent)' }} />
    <div className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.08), transparent 70%)' }} />
    <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.06), transparent 70%)' }} />
    {/* Dot pattern */}
    <div className="absolute inset-0 dot-pattern opacity-40" />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(200 100% 60%)' }}>Get to know me</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
      </motion.div>

      {/* Profile + Text + Stats layout */}
      <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-12 lg:gap-16 items-center mb-24">
        {/* Profile Image with animated rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            {/* Outer orbital ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] rounded-full border border-dashed"
              style={{ borderColor: 'hsl(200 100% 55% / 0.25)' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: 'hsl(200 100% 55%)', boxShadow: '0 0 12px hsl(200 100% 55% / 0.6)' }} />
            </motion.div>
            {/* Inner orbital ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-full border"
              style={{ borderColor: 'hsl(260 80% 65% / 0.2)' }}
            >
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(260 80% 65%)', boxShadow: '0 0 10px hsl(260 80% 65% / 0.5)' }} />
            </motion.div>
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30" style={{ background: 'var(--gradient-primary)' }} />
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              animate={{
                boxShadow: [
                  '0 0 20px hsl(200 100% 55% / 0.2), 0 0 60px hsl(200 100% 55% / 0.1)',
                  '0 0 30px hsl(260 80% 65% / 0.3), 0 0 80px hsl(260 80% 65% / 0.15)',
                  '0 0 20px hsl(200 100% 55% / 0.2), 0 0 60px hsl(200 100% 55% / 0.1)',
                ],
              }}
              transition={{
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 200 },
              }}
              className="relative w-full h-full rounded-full overflow-hidden border-2 shadow-xl group/img"
              style={{ borderColor: 'hsl(200 100% 55% / 0.3)' }}
            >
              {/* Sketch version (default) */}
              <motion.img
                src={profileSketch}
                alt="Shaik Kemble Mohammed Sadiq - Sketch"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover/img:opacity-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Real photo (on hover) */}
              <motion.img
                src={profileImg}
                alt="Shaik Kemble Mohammed Sadiq"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover/img:opacity-100"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            {/* Status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold premium-glass whitespace-nowrap"
              style={{ color: 'hsl(160 80% 50%)', border: '1px solid hsl(160 80% 50% / 0.3)' }}
            >
              ● Open to work
            </motion.div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
            A passionate developer turning <span className="text-gradient-primary">ideas into reality</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
          </p>
          <div className="flex flex-wrap gap-3">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="px-4 py-2 rounded-xl text-sm font-mono font-semibold border border-border/30 bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-3xl p-7 group cursor-default relative overflow-hidden premium-glass"
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: stat.color }} />
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" style={{ background: stat.color }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <p className="text-3xl md:text-4xl font-bold font-display mb-1" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Focus areas */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-sm font-mono tracking-wider uppercase text-muted-foreground">What I focus on</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="rounded-3xl p-8 group cursor-default relative overflow-hidden premium-glass"
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
