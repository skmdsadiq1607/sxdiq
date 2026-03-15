import { motion } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiExpress, SiMongodb, SiPython } from "react-icons/si";
import { FaJava, FaDatabase, FaCogs, FaServer, FaCode, FaDesktop } from "react-icons/fa";

const categories = [
  {
    title: "Web Technologies",
    description: "Building modern, responsive web experiences",
    accentColor: "hsl(200 100% 55%)",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Express.js", icon: SiExpress, color: "#68A063" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaServer, color: "#00BCD4" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages for problem solving",
    accentColor: "hsl(260 80% 65%)",
    skills: [
      { name: "C (DSA)", icon: FaCode, color: "#A8B9CC" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "CS Fundamentals",
    description: "Strong foundation in computer science",
    accentColor: "hsl(330 80% 60%)",
    skills: [
      { name: "OOPS", icon: FaCogs, color: "#9C27B0" },
      { name: "DBMS", icon: FaDatabase, color: "#FF6F00" },
      { name: "OS", icon: FaDesktop, color: "#0097A7" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-skills-bg)' }}>
    <div className="absolute inset-0 grid-lines opacity-40" />
    <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.04), transparent 60%)' }} />

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8 bg-primary/40" />
          <p className="text-sm font-mono tracking-widest uppercase text-primary">Skills</p>
          <div className="h-px w-8 bg-primary/40" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Technologies </span>
          <span className="text-gradient-primary">I work with</span>
        </h2>
        <p className="text-muted-foreground mt-5 max-w-lg mx-auto text-center">Tools and languages I use to bring ideas to life</p>
      </motion.div>

      <div className="space-y-20">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-8 rounded-full" style={{ background: cat.accentColor }} />
              <div>
                <h3 className="font-semibold text-foreground text-lg">{cat.title}</h3>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </div>
              <div className="flex-1 h-px ml-4 hidden md:block" style={{ background: `linear-gradient(90deg, ${cat.accentColor}20, transparent)` }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default premium-glass"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}20` }}
                  >
                    <skill.icon size={24} style={{ color: skill.color }} />
                  </motion.div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
