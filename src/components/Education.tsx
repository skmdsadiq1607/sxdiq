import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad" },
];

const Education = () => (
  <section id="education" className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
    
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        <span className="subtitle">My journey</span>
        <h2>Education</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className={`relative md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-16 sm:pl-20 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 md:left-auto ${i % 2 === 0 ? 'md:right-[-2.4rem]' : 'md:left-[-2.4rem]'} top-6 z-10`}>
                <div
                  className="w-8 h-8 flex items-center justify-center border"
                  style={{
                    background: item.current ? "var(--foreground)" : "var(--background)",
                    borderColor: "var(--foreground)",
                    borderRadius: "0px"
                  }}
                >
                  <GraduationCap size={14} className={item.current ? "text-background" : "text-foreground"} />
                </div>
              </div>

              <motion.div
                className="border border-border p-8 transition-colors duration-300 hover:border-foreground"
                style={{ borderRadius: "0px" }}
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-1.5 text-foreground font-mono text-xs uppercase tracking-wider">
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </div>
                  {item.current && (
                    <span className="px-2 py-0.5 border border-foreground font-mono text-[9px] uppercase tracking-wider font-bold">
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-muted-foreground font-mono text-xs uppercase tracking-wider">
                    <MapPin size={11} />
                    <span>{item.location}</span>
                  </div>
                </div>
                <h3 className="font-bold uppercase text-lg mb-2">{item.institution}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-light">{item.degree}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-border">
                  <Award size={14} className="text-foreground" />
                  <p className="text-xs font-mono font-bold tracking-wider uppercase">{item.score}</p>
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
