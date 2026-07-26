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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.4 }}
      className="border border-border p-4 flex flex-col items-center gap-3 group cursor-default transition-all duration-300 hover:bg-foreground hover:text-background"
      style={{ borderRadius: "0px" }}
    >
      <div className="w-10 h-10 border border-border group-hover:border-background flex items-center justify-center transition-colors duration-300" style={{ borderRadius: "0px" }}>
        <skill.icon size={18} className="text-foreground group-hover:text-background transition-colors duration-300" />
      </div>
      <span className="text-[10px] font-mono font-medium tracking-wide uppercase text-center">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border">
    <div className="container mx-auto relative z-10 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">What I work with</span>
        <h2>Skills &amp; Tech</h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div 
            key={cat.title} 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="border-b border-border pb-4 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1">{cat.emoji} Category</span>
              <h3 className="font-bold text-base uppercase tracking-tight">{cat.title}</h3>
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
