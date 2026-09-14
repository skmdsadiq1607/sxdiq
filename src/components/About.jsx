import { motion, useInView } from "framer-motion";
import { Zap, Code, Users, Award } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 9.25, label: "Cumulative CGPA", suffix: "", decimals: 2, icon: Zap, detail: "Anurag University, IT" },
  { value: 2, label: "Production Apps Built", suffix: "+", decimals: 0, icon: Code, detail: "MERN & Full-Stack" },
  { value: 3, label: "Hackathons Competed", suffix: "+", decimals: 0, icon: Users, detail: "Problem-Solving & Collab" },
  { value: 5, label: "Certifications Earned", suffix: "+", decimals: 0, icon: Award, detail: "Java, DSA, Full-Stack" },
];

const AnimatedCounter = ({ value, decimals, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const TechBadge = ({ tech, index }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
    whileHover={{ y: -3, scale: 1.05 }}
    className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-foreground/20 hover:border-foreground bg-foreground/5 hover:bg-foreground hover:text-background text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-default"
  >
    {tech}
  </motion.span>
);

const About = () => {
  return (
    <section id="about" className="min-h-screen w-screen shrink-0 flex items-center bg-black text-foreground noise-overlay py-16 px-8 sm:px-12 md:px-24 border-r border-border relative overflow-hidden select-none">
      
      {/* 🌓 The Yin-Yang Diagonal Razor Slash Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#FFFFFF] pointer-events-none z-0 hidden lg:block"
        style={{ clipPath: "polygon(68% 0, 100% 0, 100% 100%, 46% 100%)" }}
      >
        {/* Subtle grid pattern inside the white wing */}
        <div className="w-full h-full opacity-10 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Diagonal Razor Hairline */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="68" y1="0" x2="46" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="0.2" strokeDasharray="1.5 1" />
      </svg>

      {/* Giant Parallax Watermark Numeral */}
      <div className="absolute -top-12 -left-8 text-[clamp(14rem,26vw,30rem)] font-times italic font-bold text-white/[0.03] select-none pointer-events-none z-0 leading-none">
        01
      </div>

      <div className="container mx-auto relative z-10 pt-12 md:pt-16 max-w-7xl">
        
        {/* Header with Times New Roman & Blur Stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} 
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-left border-b border-foreground/15 pb-6 relative"
        >
          <span className="font-mono text-xs mb-3 tracking-[0.3em] uppercase block text-foreground/50">
            // 01 — Background &amp; Identity
          </span>
          <h2 className="font-times text-6xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight leading-none text-foreground">
            About Me
          </h2>
        </motion.div>

        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Bio & Skills in Black Half) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-times text-2xl sm:text-3xl md:text-4xl font-normal italic text-foreground leading-snug mb-6"
              >
                A passionate developer turning ideas into reality.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-foreground/75 text-base sm:text-lg leading-relaxed mb-6 font-light font-sans"
              >
                I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/75 text-base sm:text-lg leading-relaxed mb-8 font-light font-sans"
              >
                Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
              </motion.p>
            </div>
            
            {/* Core Technologies - Floating pills with hover levitation */}
            <div className="pt-6 border-t border-foreground/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45 block mb-4">
                Core Tech Stack
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech, i) => (
                  <TechBadge key={tech} tech={tech} index={i} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Floating High-Contrast Stats Card hovering near Diagonal Cut) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(4px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} 
            className="lg:col-span-6 bg-card/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-border/90 shadow-2xl flex flex-col divide-y divide-foreground/15"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="py-6 sm:py-7 first:pt-0 last:pb-0 flex items-end justify-between group transition-all duration-300 cursor-default"
              >
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-foreground/50 uppercase tracking-[0.25em] block mb-2 group-hover:text-foreground/80 transition-colors">
                    {stat.label}
                  </span>
                  <p className="text-5xl sm:text-6xl md:text-7xl font-times font-normal italic tracking-tight text-foreground leading-none group-hover:scale-[1.02] origin-left transition-transform duration-300">
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </p>
                </div>

                <div className="text-right flex flex-col items-end pb-1">
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                    <stat.icon size={20} className="text-foreground/35 group-hover:text-foreground transition-colors duration-300 mb-2" />
                  </motion.div>
                  <span className="font-mono text-[10px] text-foreground/45 tracking-wider group-hover:text-foreground/75 transition-colors">
                    {stat.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
