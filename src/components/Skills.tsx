import { motion } from "framer-motion";

const categories = [
  {
    title: "Web Technologies",
    emoji: "🌐",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "C (DSA)", level: 75 },
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "CS Fundamentals",
    emoji: "🧠",
    skills: [
      { name: "OOPS", level: 85 },
      { name: "DBMS", level: 75 },
      { name: "Operating Systems", level: 70 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-secondary/20 mesh-bg">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <p className="subtitle">What I work with</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Technologies</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="glass-card rounded-2xl p-8 elevated-shadow card-hover"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{cat.emoji}</span>
              <h3 className="font-bold text-foreground text-lg">{cat.title}</h3>
            </div>
            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: si * 0.1 + ci * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full gradient-bg relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
