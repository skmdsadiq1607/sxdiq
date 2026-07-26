import { motion, useInView } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowUpRight, Zap, Users, Coffee } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean architecture." },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js." },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice." },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems." },
];

const stats = [
  { value: 9.25, label: "CGPA", suffix: "", decimals: 2, icon: Zap },
  { value: 2, label: "Projects Built", suffix: "+", decimals: 0, icon: Code },
  { value: 3, label: "Hackathons Participated", suffix: "+", decimals: 0, icon: Users },
  { value: 5, label: "Certifications", suffix: "+", decimals: 0, icon: Coffee },
];

const AnimatedCounter = ({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease-out
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const About = () => (
  <section id="about" className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
    {/* Editorial separating border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
    
    <div className="container mx-auto px-6 md:px-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">Get to know me</span>
        <h2>About Me</h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        
        {/* Left - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h3 className="text-2xl md:text-4xl font-extrabold uppercase mb-6 leading-tight">
            A passionate developer turning ideas into reality.
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 font-light">
            I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 font-light">
            Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-border bg-secondary font-mono text-xs uppercase tracking-wider text-muted-foreground cursor-default"
                style={{ borderRadius: "0px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right - Sharp Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="border border-border p-8 flex flex-col justify-between h-44 group transition-colors duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              <div className="flex justify-between items-start">
                <div className="p-2 border border-border group-hover:border-foreground transition-colors duration-300" style={{ borderRadius: "0px" }}>
                  <stat.icon size={16} className="text-foreground" />
                </div>
              </div>
              <div>
                <p className="text-4xl font-extrabold font-mono tracking-tight text-foreground leading-none">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Focus areas */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        className="mb-10"
      >
        <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground">What I focus on</span>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="border border-border p-8 group transition-all duration-300 hover:bg-foreground hover:text-background"
            style={{ borderRadius: "0px" }}
          >
            <div className="w-12 h-12 border border-border group-hover:border-background flex items-center justify-center mb-8 transition-colors duration-300" style={{ borderRadius: "0px" }}>
              <card.icon size={18} />
            </div>
            <h3 className="font-bold uppercase mb-4 text-base tracking-wide transition-colors duration-300">{card.title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed mb-6 font-light transition-colors duration-300">{card.desc}</p>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Details <ArrowUpRight size={12} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
