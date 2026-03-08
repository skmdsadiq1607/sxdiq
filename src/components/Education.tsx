import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "Expected 2028", current: true },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2024", current: false },
  { institution: "Sri Chaitanya School", degree: "SSC – X", score: "GPA: 9.7", year: "2022", current: false },
];

const Education = () => (
  <section id="education" className="section-padding bg-secondary/20 mesh-bg">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">My journey</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
      </motion.div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 top-3 w-7 h-7 rounded-full flex items-center justify-center ${item.current ? 'gradient-bg shadow-lg shadow-primary/30' : 'bg-secondary border-2 border-primary/30'}`}>
                <GraduationCap size={14} className={item.current ? 'text-primary-foreground' : 'text-primary'} />
              </div>
              
              <div className="glass-card rounded-2xl p-6 elevated-shadow card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={12} className="text-primary" />
                  <span className="text-xs font-mono text-primary font-medium">{item.year}</span>
                  {item.current && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold ml-2">Current</span>
                  )}
                </div>
                <h3 className="font-bold text-foreground text-lg">{item.institution}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.degree}</p>
                <div className="flex items-center gap-2 mt-3">
                  <Award size={14} className="text-primary" />
                  <p className="text-sm font-semibold text-primary">{item.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
