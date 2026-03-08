import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad" },
];

const Education = () => (
  <section id="education" className="section-padding bg-secondary/20 mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">My journey</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
      </motion.div>
      
      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px">
          <div className="h-full w-full bg-gradient-to-b from-primary via-accent to-primary/20" />
        </div>
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'} pl-20 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 md:left-auto ${i % 2 === 0 ? 'md:right-[-2.4rem]' : 'md:left-[-2.4rem]'} top-6 z-10`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.current ? 'gradient-bg shadow-lg shadow-primary/30' : 'bg-card border-2 border-primary/30'}`}>
                  <GraduationCap size={14} className={item.current ? 'text-primary-foreground' : 'text-primary'} />
                </div>
                {item.current && (
                  <div className="absolute inset-0 rounded-full gradient-bg animate-ping opacity-20" />
                )}
              </div>
              
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-3xl p-7 elevated-shadow relative overflow-hidden"
              >
                {item.current && <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />}
                
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-1.5 text-primary">
                    <Calendar size={13} />
                    <span className="text-xs font-mono font-semibold">{item.year}</span>
                  </div>
                  {item.current && (
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold animate-pulse">
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={11} />
                    <span className="text-xs">{item.location}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-foreground text-xl mb-1">{item.institution}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.degree}</p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                  <Award size={16} className="text-primary" />
                  <p className="text-sm font-bold text-primary">{item.score}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
