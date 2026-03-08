import { motion } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowRight } from "lucide-react";

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean code practices.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js.", color: "from-purple-500/20 to-pink-500/20" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice.", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems.", color: "from-emerald-500/20 to-teal-500/20" },
];

const About = () => (
  <section id="about" className="section-padding mesh-bg">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <p className="subtitle">Get to know me</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        I'm a passionate B.Tech student focused on becoming a skilled full-stack developer. 
        I love turning complex problems into elegant, user-friendly solutions.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-7 glow-shadow group cursor-default card-hover relative overflow-hidden"
          >
            {/* Subtle gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <card.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
