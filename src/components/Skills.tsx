import { motion } from "framer-motion";

const categories = [
  {
    title: "Web Technologies",
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
    skills: [
      { name: "C (DSA)", level: 75 },
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "OOPS", level: 85 },
      { name: "DBMS", level: 75 },
      { name: "Operating Systems", level: 70 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm mb-2">What I work with</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Skills</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="glass-card rounded-xl p-6 glow-shadow"
          >
            <h3 className="font-semibold text-foreground mb-6 text-lg">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: si * 0.1 + ci * 0.2 }}
                      className="h-full rounded-full gradient-bg"
                    />
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
