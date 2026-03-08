import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "Expected 2028" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2024" },
  { institution: "Sri Chaitanya School", degree: "SSC – X", score: "GPA: 9.7", year: "2022" },
];

const Education = () => (
  <section id="education" className="section-padding bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">My journey</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Education</h2>
      </motion.div>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 gradient-bg" />
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16"
            >
              <div className="absolute left-3 top-1 w-7 h-7 rounded-full gradient-bg flex items-center justify-center">
                <GraduationCap size={14} className="text-primary-foreground" />
              </div>
              <div className="glass-card rounded-xl p-5 glow-shadow">
                <span className="text-xs font-mono text-primary">{item.year}</span>
                <h3 className="font-semibold text-foreground mt-1">{item.institution}</h3>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                <p className="text-sm font-medium text-primary mt-1">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
