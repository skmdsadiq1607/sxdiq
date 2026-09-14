import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Zap, Code, Users, Award, Terminal, Compass } from "lucide-react";
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

const StatMonolith = ({ stat, idx }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? -tilt.y * 14 : 0,
        rotateY: isHovered ? tilt.x * 14 : 0,
        scale: isHovered ? 1.03 : 1,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="p-5 rounded-3xl border border-white/10 hover:border-white/50 bg-black/60 backdrop-blur-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-xl"
    >
      {/* Dynamic specular light reflection */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(255, 255, 255, 0.12), transparent 70%)`
          }}
        />
      )}

      {/* Cybernetic corner crosshairs */}
      <div className="absolute top-2.5 right-2.5 text-[8px] font-mono text-white/20 group-hover:text-white/60 transition-colors">
        +
      </div>

      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest block group-hover:text-white/80 transition-colors truncate">
          {stat.label}
        </span>
        <motion.div whileHover={{ rotate: 20, scale: 1.2 }}>
          <stat.icon size={16} className="text-white/40 group-hover:text-white transition-colors shrink-0" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <p className="text-4xl sm:text-5xl font-times font-normal italic tracking-tight text-white leading-none mb-2">
          <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
        </p>
        <span className="font-mono text-[9px] text-white/40 tracking-wider block group-hover:text-white/70 transition-colors">
          {stat.detail}
        </span>
      </div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax watermark drifting across the background
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  // Interactive Inverted Aperture Cursor tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });
  const [isInside, setIsInside] = useState(false);

  const handlePointerMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative select-none overflow-hidden"
    >
      {/* 🌊 GIANT KINETIC PARALLAX WATERMARK */}
      <motion.div 
        style={{ x: watermarkX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none whitespace-nowrap z-0 select-none opacity-[0.035] text-[18vw] font-times italic tracking-tight text-white leading-none"
      >
        SHAIK SADIQ // FULL STACK ARCHITECT // PROBLEM SOLVER
      </motion.div>

      {/* 🔦 INTERACTIVE INVERSION LENS (Aperture that follows cursor) */}
      {isInside && (
        <motion.div 
          style={{
            left: springX,
            top: springY,
            x: "-50%",
            y: "-50%",
          }}
          className="absolute w-[360px] h-[360px] rounded-full pointer-events-none z-10 hidden lg:block overflow-hidden"
        >
          {/* Inverted blueprint illumination ring */}
          <div 
            className="w-full h-full rounded-full border border-white/40 shadow-[0_0_80px_rgba(255,255,255,0.12)]"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}

      {/* Blueprint Coordinate Crosshairs in corners */}
      <div className="absolute top-8 left-8 font-mono text-[9px] uppercase tracking-widest text-white/30 hidden sm:flex items-center gap-2 pointer-events-none">
        <Compass size={12} className="animate-spin" style={{ animationDuration: "16s" }} />
        <span>SYS.LOC // 17.3850° N, 78.4867° E</span>
      </div>
      <div className="absolute top-8 right-8 font-mono text-[9px] uppercase tracking-widest text-white/30 hidden sm:flex items-center gap-2 pointer-events-none">
        <Terminal size={12} />
        <span>IDENTITY // PERSPECTIVE MATRIX</span>
      </div>

      <div className="container mx-auto relative z-20 max-w-7xl">
        
        {/* Section Heading with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} 
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 lg:mb-16 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs mb-2 tracking-[0.3em] uppercase block text-white/50">
              // 01 — Background &amp; Identity
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white">
              About Me
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping mr-2" />
            Active Pursuit &bull; Information Technology
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Bio with Editorial Highlight) */}
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
                className="font-times text-3xl sm:text-4xl font-normal italic text-white leading-snug mb-6"
              >
                A passionate developer turning ideas into reality.
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 font-light font-times"
              >
                I'm a B.Tech Information Technology student at <span className="text-white font-normal underline underline-offset-4 decoration-white/40">Anurag University, Hyderabad</span>, deeply passionate about modern web engineering and analytical problem-solving. I build high-performance, user-centric applications using the MERN stack.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-light font-times"
              >
                Beyond coding, I actively build solutions at competitive hackathons, lead technical initiatives in student communities, and continually master algorithmic data structures. My mission is building software that solves genuine human problems.
              </motion.p>
            </div>
            
            {/* Core Technologies - Interactive floating pills */}
            <div className="pt-6 border-t border-white/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-3.5">
                // Core Engineering Foundations
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Java (DSA)", "Tailwind CSS", "C / C++"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.06 }}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-default shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (3D Gyroscopic Glass Monoliths) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(4px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} 
            className="lg:col-span-6 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-2xl rounded-3xl p-7 sm:p-8 border border-white/20 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Holographic background ambient flare */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/60">
                // Verified Academic &amp; Production Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[9px] font-mono text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> Real-time Metrics
              </span>
            </div>

            {/* 2x2 Monolith Matrix with Individual 3D Gyroscopic Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <StatMonolith key={stat.label} stat={stat} idx={idx} />
              ))}
            </div>

            {/* Bottom Status Banner */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/40">
              <span>STATUS: ACADEMICALLY DISTINGUISHED</span>
              <span>VERIFIED // 2026</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
