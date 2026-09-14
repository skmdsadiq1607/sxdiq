import { motion, useInView } from "framer-motion";
import { Code, Database, Brain, Rocket, Zap, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 9.25, label: "Academic CGPA", suffix: "", decimals: 2, icon: Zap, detail: "Information Technology @ Anurag University" },
  { value: 3, label: "Hackathons", suffix: "+", decimals: 0, icon: Users, detail: "Competitive AI & Engineering sprints" },
  { value: 15, label: "Credentials & Courses", suffix: "+", decimals: 0, icon: Award, detail: "Infosys, NPTEL IIT, and specialized modules" },
  { value: 100, label: "Code Dedication", suffix: "%", decimals: 0, icon: Rocket, detail: "Obsessed with algorithmic problem solving" },
];

const pillars = [
  {
    icon: Code,
    title: "Full Stack Web Systems",
    desc: "Architecting modern web applications with React, Vite, Node, and Express with ultra-responsive UX.",
  },
  {
    icon: Database,
    title: "MERN Stack Specialist",
    desc: "Robust state pipelines, scalable MongoDB database modeling, and performant RESTful APIs.",
  },
  {
    icon: Brain,
    title: "DSA & Problem Solving",
    desc: "Continuous competitive programming practice in C and Java, strengthening algorithmic efficiency.",
  },
];

const AnimatedCounter = ({ value, decimals, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
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

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.4 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Specular glare sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            01 // BACKGROUND & PHILOSOPHY
          </span>
          <h2>ENGINEERING EXPERIENCES WITH PURPOSE</h2>
        </motion.div>

        {/* Top Story & Pillars Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <h3 className="font-syne font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6 leading-tight">
              A developer bridging clean engineering, algorithms, and immersive design.
            </h3>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-6 font-light">
              I am an Information Technology scholar at Anurag University, Hyderabad, driven by a fascination with high-throughput systems, modern web frameworks, and creative digital interactivity.
            </p>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Beyond standard syntax, I actively engineer real-world applications (such as Krushi Mitra and IgniteXT), compete in 24-hour hackathons, and contribute to student tech communities. My goal is to build web platforms that feel intuitive, lightning-fast, and unforgettable.
            </p>

            {/* Core Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Node.js", "Express.js", "MongoDB", "Java", "C (DSA)", "Tailwind CSS", "Three.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider text-white/80 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pillars List Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/20 bg-white/[0.05] flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <pillar.icon size={18} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-lg uppercase tracking-tight text-white mb-1 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 3D Tilt Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <TiltCard
              key={stat.label}
              className="p-6 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl flex flex-col justify-between h-48 group hover:border-white/40 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-lg border border-white/15 bg-white/[0.04] text-white group-hover:bg-white group-hover:text-black transition-all">
                  <stat.icon size={16} />
                </div>
                <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                  METRIC // 0{i + 1}
                </span>
              </div>

              <div>
                <p className="text-4xl sm:text-5xl font-syne font-black tracking-tight text-white leading-none mb-2">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/90">
                  {stat.label}
                </p>
                <p className="text-[10px] font-mono text-white/40 mt-1 truncate">
                  {stat.detail}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
