import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiExpress, SiMongodb, SiPython } from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaBrain, FaDesktop } from "react-icons/fa";
import { MouseEvent } from "react";

const categories = [
  {
    title: "Web Technologies",
    emoji: "🌐",
    description: "Building modern, responsive web experiences",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Express.js", icon: SiExpress, color: "#68A063" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaServer, color: "#00BCD4" },
    ],
  },
  {
    title: "Programming Languages",
    emoji: "💻",
    description: "Core languages for problem solving & development",
    skills: [
      { name: "C (DSA)", icon: FaCode, color: "#A8B9CC" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "CS Fundamentals",
    emoji: "🧠",
    description: "Strong foundation in computer science concepts",
    skills: [
      { name: "OOPS", icon: FaCogs, color: "#9C27B0" },
      { name: "DBMS", icon: FaDatabase, color: "#FF6F00" },
      { name: "OS", icon: FaDesktop, color: "#0097A7" },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: typeof categories[0]["skills"][0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default relative overflow-hidden"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
        >
          <skill.icon size={28} style={{ color: skill.color }} />
        </motion.div>
        <span className="text-sm font-semibold text-foreground text-center">{skill.name}</span>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="section-padding bg-secondary/20 mesh-bg relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
    <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-accent/5 blur-[100px]" />
    
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <p className="subtitle">What I work with</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Technologies</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-xl mx-auto"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>
      </motion.div>
      
      <div className="space-y-16">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <h3 className="font-bold text-foreground text-xl">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {cat.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} index={si + ci * 3} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
