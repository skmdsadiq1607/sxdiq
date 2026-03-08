import { motion } from "framer-motion";
import { Code, Database, Brain, Rocket, ArrowUpRight } from "lucide-react";

const cards = [
  { icon: Code, title: "Web Development", desc: "Crafting responsive, interactive web apps with modern frameworks and clean architecture.", gradient: "from-blue-500 to-cyan-400" },
  { icon: Database, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js.", gradient: "from-purple-500 to-pink-400" },
  { icon: Brain, title: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through competitive programming and daily practice.", gradient: "from-amber-500 to-orange-400" },
  { icon: Rocket, title: "Real-World Solutions", desc: "Turning ideas into impactful applications that solve genuine problems.", gradient: "from-emerald-500 to-teal-400" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const About = () => (
  <section id="about" className="section-padding mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        I'm a passionate B.Tech student focused on becoming a skilled full-stack developer. 
        I love turning complex problems into elegant, user-friendly solutions.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.02 }}
            className="glass-card rounded-3xl p-8 group cursor-default relative overflow-hidden border-0"
          >
            {/* Top gradient line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Background glow on hover */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
            
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <card.icon size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
              <div className="flex items-center gap-1.5 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
