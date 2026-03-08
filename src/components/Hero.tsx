import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles, ChevronRight, Download, Github, Linkedin } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Learner",
  "Problem Solver",
  "Open Source Enthusiast",
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(225,25%,4%)]">
      {/* Interactive gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(200 100% 55% / 0.12), transparent 40%),
            radial-gradient(600px circle at ${100 - mousePos.x * 100}% ${100 - mousePos.y * 100}%, hsl(260 80% 65% / 0.08), transparent 40%)
          `,
        }}
      />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(hsl(200 100% 55% / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(200 100% 55% / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating geometric shapes */}
      <motion.div style={{ y: heroY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.08), transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(330 80% 60% / 0.06), transparent 70%)' }}
        />

        {/* Geometric floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-primary/10 rounded-lg"
            style={{
              width: 20 + i * 15,
              height: 20 + i * 15,
              top: `${15 + i * 18}%`,
              left: `${65 + i * 7}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Glowing particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(200 100% 65%)' : 'hsl(260 80% 70%)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Top row: badge + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-card/30 backdrop-blur-sm text-sm text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              <span className="font-mono text-xs">Available for opportunities</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", label: "LinkedIn" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Main content - centered */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-4 font-mono text-sm tracking-widest uppercase"
              >
                Hello World, I'm
              </motion.p>

              <h1 className="text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.95] tracking-tight font-display mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, hsl(200 100% 70%), hsl(200 100% 55%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Shaik Kemple
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, hsl(260 80% 70%), hsl(330 80% 65%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mohammed Sadiq
                </motion.span>
              </h1>

              {/* Typing effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="h-12 mb-6 flex items-center justify-center"
              >
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-light tracking-wide">
                  {"< "}
                  <span className="text-primary font-medium">{displayText}</span>
                  <span className="w-0.5 h-7 bg-primary inline-block ml-0.5 animate-pulse" />
                  {" />"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-center justify-center gap-4 mb-6 flex-wrap"
              >
                <span className="text-sm text-muted-foreground font-mono flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  Hyderabad, India
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
                <span className="text-sm text-muted-foreground font-mono">B.Tech IT @ Anurag University</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-12"
              >
                Passionate about building web applications and solving real-world problems with code. 
                Currently diving deep into the MERN stack & Data Structures.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 60%))',
                  color: 'white',
                  boxShadow: '0 8px 32px hsl(200 100% 55% / 0.3)',
                }}
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base border border-border/40 bg-card/20 backdrop-blur-sm text-foreground hover:border-primary/40 hover:bg-card/40 transition-all duration-300"
              >
                Contact Me <Mail size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base border border-border/40 bg-card/20 backdrop-blur-sm text-foreground hover:border-primary/40 hover:bg-card/40 transition-all duration-300"
              >
                Resume <Download size={18} />
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center gap-8 sm:gap-16"
            >
              {[
                { value: "9.25", label: "CGPA", color: "hsl(200 100% 60%)" },
                { value: "2+", label: "Projects", color: "hsl(260 80% 65%)" },
                { value: "3+", label: "Hackathons", color: "hsl(330 80% 60%)" },
                { value: "5+", label: "Certifications", color: "hsl(160 80% 50%)" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl font-bold font-display" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-2 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
