import { motion } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiExpress, SiMongodb, SiPython, SiBootstrap, SiTailwindcss, SiReact, SiGit, SiGithub } from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaDesktop } from "react-icons/fa";

const categories = [
  {
    title: "Web Technologies",
    emoji: "🌐",
    description: "Building modern, responsive web experiences",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React.js", icon: SiReact },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaServer },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: FaDatabase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Programming Languages",
    emoji: "💻",
    description: "Languages used for development and problem solving",
    skills: [
      { name: "C (DSA)", icon: FaCode },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "CS Fundamentals",
    emoji: "🧠",
    description: "Core computer science concepts",
    skills: [
      { name: "Object-Oriented Programming", icon: FaCogs },
      { name: "DBMS", icon: FaDatabase },
      { name: "Operating Systems", icon: FaDesktop },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 18, 
        delay: index * 0.035 
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.06,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      className="p-4 sm:p-5 rounded-2xl border border-foreground/15 hover:border-foreground transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer bg-foreground/[0.02] hover:bg-foreground hover:text-background shadow-sm hover:shadow-xl relative overflow-hidden"
    >
      <motion.div 
        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-center"
      >
        <skill.icon size={26} className="text-foreground/80 group-hover:text-background transition-colors duration-300" />
      </motion.div>
      <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-center">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="min-h-screen w-screen shrink-0 flex items-center bg-black text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border relative overflow-hidden select-none">
    
    {/* 🪐 Gravitational Celestial Orbit Rings */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-40">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="w-[650px] h-[650px] rounded-full border border-white/10 border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="w-[900px] h-[900px] rounded-full border border-white/5"
      />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 110, ease: "linear" }}
        className="w-[1200px] h-[1200px] rounded-full border border-white/[0.03] border-dotted"
      />
    </div>

    <div className="container mx-auto relative z-10 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading mb-12"
      >
        <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">// 02 — Technical Proficiencies</span>
        <h2 className="font-times text-6xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight leading-none text-foreground">Skills &amp; Tech</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div 
            key={cat.title} 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: ci * 0.1 }}
            className="flex flex-col bg-card/60 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-border/70 hover:border-foreground/40 transition-colors shadow-lg"
          >
            <div className="border-b border-foreground/15 pb-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 block mb-1">{cat.emoji} Category</span>
              <h3 className="font-times text-2xl font-normal italic text-foreground tracking-tight">{cat.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cat.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} index={si + ci * 2} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
