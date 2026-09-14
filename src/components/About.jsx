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

const About = () => (
  <section id="about" className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-16 px-8 sm:px-12 md:px-24 border-r border-border">
    <div className="container mx-auto relative z-10 pt-12 md:pt-16 max-w-7xl">
      
      {/* Header with Times New Roman */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-left border-b border-foreground/15 pb-6"
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
        
        {/* Left Column (Bio & Skills) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="lg:col-span-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-times text-2xl sm:text-3xl md:text-4xl font-normal italic text-foreground leading-snug mb-6">
              A passionate developer turning ideas into reality.
            </h3>
            <p className="text-foreground/75 text-base sm:text-lg leading-relaxed mb-6 font-light font-sans">
              I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
            </p>
            <p className="text-foreground/75 text-base sm:text-lg leading-relaxed mb-8 font-light font-sans">
              Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
            </p>
          </div>
          
          {/* Core Technologies - Clean typographic slash list, NO BOXES */}
          <div className="pt-6 border-t border-foreground/15">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45 block mb-3">
              Core Tech Stack
            </span>
            <div className="flex flex-wrap items-center gap-y-2 text-sm font-mono text-foreground/80">
              {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech, i, arr) => (
                <span key={tech} className="flex items-center">
                  <span className="hover:text-foreground transition-colors cursor-default tracking-wider">
                    {tech}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="mx-3.5 text-foreground/25">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column (Minimalist Open Stats List - ZERO BOXES) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
          className="lg:col-span-6 flex flex-col divide-y divide-foreground/15 border-t lg:border-t-0 border-b border-foreground/15"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-6 sm:py-7 flex items-end justify-between group transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-foreground/50 uppercase tracking-[0.25em] block mb-2">
                  {stat.label}
                </span>
                <p className="text-5xl sm:text-6xl md:text-7xl font-times font-normal italic tracking-tight text-foreground leading-none">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
              </div>

              <div className="text-right flex flex-col items-end pb-1">
                <stat.icon size={20} className="text-foreground/35 group-hover:text-foreground transition-colors duration-300 mb-2" />
                <span className="font-mono text-[10px] text-foreground/45 tracking-wider">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
