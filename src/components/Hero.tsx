import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Download, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/3 blur-[120px]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[30%] w-1.5 h-1.5 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-[40%] w-1 h-1 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-60 right-[15%] w-2.5 h-2.5 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="font-mono text-xs">Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight font-display">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Shaik Kemple</span>
              <br />
              <span className="gradient-text">Mohammed Sadiq</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-3 font-medium">
              Aspiring Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground mb-2 font-mono flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Hyderabad, India
            </p>
            <p className="text-sm text-muted-foreground mb-8 font-mono tracking-wide">
              Learning MERN & Data Structures & Algorithms
            </p>
            <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed text-lg">
              I'm a B.Tech student at Anurag University passionate about building web applications
              and solving real-world problems with code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                View Projects <ExternalLink size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card font-semibold text-foreground hover:bg-secondary transition-colors gradient-border"
              >
                Contact Me <Mail size={16} />
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "9.25", label: "CGPA" },
                { value: "2+", label: "Projects" },
                { value: "3+", label: "Hackathons" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-[-30px] rounded-full border border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute inset-[-60px] rounded-full border border-dashed border-accent/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              
              {/* Glow behind image */}
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-[60px] opacity-20 scale-90" />
              
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
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-mono">Scroll down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
