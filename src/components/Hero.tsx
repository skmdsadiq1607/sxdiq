import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-sm mb-4">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Shaik Kemple</span>
              <br />
              <span className="gradient-text">Mohammed Sadiq</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
              Aspiring Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground mb-6 font-mono">
              Learning MERN & Data Structures & Algorithms
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I'm a B.Tech student at Anurag University passionate about building web applications
              and solving real-world problems with code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ExternalLink size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-colors"
              >
                Contact Me <Mail size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-20 scale-75" />
              <img
                src={heroImage}
                alt="Developer workspace illustration"
                className="relative w-full max-w-md animate-float"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
