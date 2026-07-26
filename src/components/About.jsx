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
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease-out
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const About = () => (
  <section id="about" className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border">
    <div className="container mx-auto relative z-10 pt-16">
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
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Bio & Skills) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="lg:col-span-6"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 leading-tight">
            A passionate developer turning ideas into reality.
          </h3>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-6 font-light">
            I'm a B.Tech Information Technology student at Anurag University, Hyderabad, deeply passionate about web development and problem-solving. I enjoy building modern, user-centric applications using the MERN stack.
          </p>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-8 font-light">
            Beyond coding, I actively participate in hackathons, contribute to student communities, and continuously sharpen my skills in Data Structures and Algorithms. My goal is to create impactful tech solutions that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Java", "C"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-border bg-secondary font-mono text-[10px] uppercase tracking-wider text-zinc-500"
                style={{ borderRadius: "0px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Stats Grid & Focus area list) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
          className="lg:col-span-6 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border border-border p-6 flex flex-col justify-between h-36 group transition-colors duration-300 hover:border-foreground"
              style={{ borderRadius: "0px" }}
            >
              <div className="flex justify-between items-start">
                <div className="p-1.5 border border-border group-hover:border-foreground transition-colors duration-300" style={{ borderRadius: "0px" }}>
                  <stat.icon size={14} className="text-foreground" />
                </div>
              </div>
              <div>
                <p className="text-3xl font-extrabold font-mono tracking-tight text-foreground leading-none">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-1.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
