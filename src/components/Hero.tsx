import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-illustration.png";

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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Animated gradient orbs */}
      <motion.div style={{ y: heroY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/6 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8 group hover:border-primary/30 transition-colors cursor-default"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="font-mono text-xs">Available for opportunities</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold mb-6 leading-[1.05] tracking-tight font-display">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-foreground block"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="gradient-text block"
              >
                Shaik Kemple
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="gradient-text block"
              >
                Mohammed Sadiq
              </motion.span>
            </h1>
            
            {/* Typing effect */}
            <div className="h-10 mb-4 flex items-center">
              <span className="text-xl md:text-2xl text-foreground/80 font-medium">
                {displayText}
              </span>
              <span className="w-0.5 h-7 bg-primary ml-1 animate-pulse" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground font-mono flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Hyderabad, India
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">B.Tech IT @ Anurag University</span>
            </div>
            
            <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed text-lg">
              Passionate about building web applications and solving real-world problems with code. Currently diving deep into the MERN stack & DSA.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-primary-foreground font-semibold text-base hover:shadow-xl hover:shadow-primary/25 transition-shadow"
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card font-semibold text-foreground hover:bg-secondary transition-colors gradient-border text-base"
              >
                Contact Me <Mail size={18} />
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-10 mt-14 pt-8 border-t border-border"
            >
              {[
                { value: "9.25", label: "CGPA" },
                { value: "2+", label: "Projects" },
                { value: "3+", label: "Hackathons" },
                { value: "5+", label: "Certifications" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1.5">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-[-40px] rounded-full border border-dashed border-primary/15 animate-spin-slow" />
              <div className="absolute inset-[-80px] rounded-full border border-dashed border-accent/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />
              <div className="absolute inset-[-120px] rounded-full border border-dotted border-primary/5 animate-spin-slow" style={{ animationDuration: '45s' }} />
              
              {/* Orbiting dots */}
              <div className="absolute inset-[-40px] animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full gradient-bg" />
              </div>
              <div className="absolute inset-[-80px] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 -ml-0.5 rounded-full bg-accent" />
              </div>
              
              {/* Main glow */}
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-[80px] opacity-15 scale-75" />
              
              <img
                src={heroImage}
                alt="Developer workspace illustration"
                className="relative w-full max-w-lg animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
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
