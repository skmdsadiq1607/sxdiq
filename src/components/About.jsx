import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Zap, Code, Users, Award, ArrowUpRight } from "lucide-react";
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

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen w-full flex items-center justify-center bg-[#FFFFFF] text-[#000000] py-28 px-6 sm:px-12 md:px-20 border-b border-black/15 relative select-none overflow-hidden transition-colors duration-500"
    >
      {/* 🌊 Giant Editorial Parallax Watermark in Pure Black Ink */}
      <motion.div 
        style={{ x: watermarkX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none whitespace-nowrap z-0 select-none opacity-[0.035] text-[18vw] font-times italic tracking-tight text-black leading-none"
      >
        SHAIK SADIQ // B.TECH INFORMATION TECHNOLOGY // HYDERABAD
      </motion.div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
          className="mb-14 border-b border-black/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs mb-2 tracking-[0.3em] uppercase block text-black/50">
              // 01 — Background &amp; Identity
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-black">
              About Me
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/50 pb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span>Academic Distinction &bull; Hyderabad, India</span>
          </div>
        </motion.div>

        {/* Two-Column Editorial Broadsheet Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-times text-3xl sm:text-4xl lg:text-5xl font-normal italic text-black leading-[1.15] mb-6">
                A passionate developer turning ideas into reality.
              </h3>

              <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-4 font-light font-times">
                I am a B.Tech Information Technology student at <strong className="font-semibold text-black underline underline-offset-4 decoration-black/30">Anurag University, Hyderabad</strong>, driven by a deep obsession with full-stack web engineering and algorithmic problem-solving.
              </p>

              <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-8 font-light font-times">
                I specialize in crafting responsive, resilient web systems utilizing the MERN stack. Beyond continuous coding, I compete in hackathons, contribute actively to student developer clubs, and continuously refine my computational foundations in Data Structures and Algorithms.
              </p>
            </div>
            
            {/* Core Tech Stack Badges */}
            <div className="pt-6 border-t border-black/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/50 block mb-3.5">
                // Engineering Stack
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Java (DSA)", "Tailwind CSS", "C / C++"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-black/20 hover:border-black bg-black/5 hover:bg-black hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fashion Clean Metric Monoliths */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="lg:col-span-6 bg-black/[0.02] border border-black/15 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/60">
                // Academic &amp; Production Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/20 bg-black/5 text-[9px] font-mono text-black font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" /> Verified
              </span>
            </div>

            {/* 2x2 Grid of Clean Typographic Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 rounded-2xl border border-black/10 bg-white hover:border-black/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] text-black/50 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <stat.icon size={16} className="text-black/40" />
                  </div>

                  <div>
                    <p className="text-4xl sm:text-5xl font-times font-normal italic tracking-tight text-black leading-none mb-1.5">
                      <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </p>
                    <span className="font-mono text-[9px] text-black/50 tracking-wider block">
                      {stat.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-black/45">
              <span>ACTIVE STATUS: B.TECH IT 2024–2028</span>
              <span>ANURAG UNIVERSITY</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
