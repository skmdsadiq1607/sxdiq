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
    <section id="about" className="h-screen w-screen shrink-0 flex items-center justify-center bg-background text-foreground noise-overlay px-6 sm:px-12 md:px-20 border-r border-border relative select-none overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl pt-16 lg:pt-6">
        
        {/* Header with Times New Roman & Blur Stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} 
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 lg:mb-10 text-left border-b border-foreground/15 pb-4 relative"
        >
          <span className="font-mono text-xs mb-2 tracking-[0.3em] uppercase block text-foreground/50">
            // 01 — Background &amp; Identity
          </span>
          <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-foreground">
            About Me
          </h2>
        </motion.div>

        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Bio & Skills) */}
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
                className="font-times text-2xl sm:text-3xl font-normal italic text-foreground leading-snug mb-4"
              >
                A passionate developer turning ideas into reality.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-foreground/75 text-sm sm:text-base leading-relaxed mb-3.5 font-light font-sans"
              >
                I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/75 text-sm sm:text-base leading-relaxed mb-6 font-light font-sans"
              >
                Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
              </motion.p>
            </div>
            
            {/* Core Technologies - Floating pills with hover levitation */}
            <div className="pt-4 border-t border-foreground/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45 block mb-3">
                Core Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech, i) => (
                  <TechBadge key={tech} tech={tech} index={i} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (2x2 Balanced Stats Matrix) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(4px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} 
            className="lg:col-span-6 bg-card/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-border/90 shadow-2xl flex flex-col justify-between"
          >
            {/* Card Header Subtitle */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-foreground/15">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/50">
                // Verified Academic &amp; Production Metrics
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-foreground/15 bg-foreground/5 text-[9px] font-mono text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" /> Live Stats
              </span>
            </div>

            {/* 2x2 Quadrant Grid of Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.45 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-4 rounded-2xl border border-foreground/10 hover:border-foreground/40 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] sm:text-[10px] text-foreground/50 uppercase tracking-widest block group-hover:text-foreground/80 transition-colors truncate">
                      {stat.label}
                    </span>
                    <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                      <stat.icon size={15} className="text-foreground/35 group-hover:text-foreground transition-colors shrink-0" />
                    </motion.div>
                  </div>

                  <div>
                    <p className="text-4xl sm:text-5xl font-times font-normal italic tracking-tight text-foreground leading-none mb-1.5">
                      <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </p>
                    <span className="font-mono text-[9px] sm:text-[10px] text-foreground/45 tracking-wider block group-hover:text-foreground/75 transition-colors">
                      {stat.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
