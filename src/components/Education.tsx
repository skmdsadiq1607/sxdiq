import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin, TrendingUp } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad", icon: "🎓" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad", icon: "📚" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad", icon: "🏫" },
];

const accentColor = "hsl(45 100% 55%)";

const Education = () => (
  <section id="education" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-education-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50, transparent)` }} />
    <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: `radial-gradient(circle, hsl(45 100% 55% / 0.08), transparent 70%)` }} />
    <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full opacity-15" style={{ background: `radial-gradient(circle, hsl(30 100% 60% / 0.06), transparent 70%)` }} />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: accentColor }}>My journey</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: `linear-gradient(135deg, ${accentColor}, hsl(30 100% 60%))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Education</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Academic milestones that shaped my path</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px" style={{ background: `linear-gradient(180deg, ${accentColor}, hsl(30 100% 60%), ${accentColor}30)` }} />
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-20 md:pl-0`}
            >
              {/* Timeline node */}
              <div className={`absolute left-5 md:left-auto ${i % 2 === 0 ? 'md:right-[-2.4rem]' : 'md:left-[-2.4rem]'} top-6 z-10`}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: item.current ? accentColor : 'hsl(var(--card))',
                    border: item.current ? 'none' : `2px solid ${accentColor}50`,
                    boxShadow: item.current ? `0 0 24px ${accentColor}40` : 'none',
                  }}
                >
                  {item.icon}
                </motion.div>
                {item.current && <div className="absolute inset-0 rounded-xl animate-ping opacity-20" style={{ background: accentColor }} />}
              </div>

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-7 relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm"
                style={{ boxShadow: `0 10px 40px -15px ${accentColor}10` }}
              >
                {item.current && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${accentColor}, hsl(30 100% 60%))` }} />}
                
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-1.5" style={{ color: accentColor }}>
                    <Calendar size={13} />
                    <span className="text-xs font-mono font-semibold">{item.year}</span>
                  </div>
                  {item.current && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>
                      <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse" style={{ background: accentColor }} />
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={11} />
                    <span className="text-xs">{item.location}</span>
                  </div>
                </div>

                <h3 className="font-bold text-foreground text-xl mb-1">{item.institution}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.degree}</p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border" style={{ background: `${accentColor}10`, borderColor: `${accentColor}25` }}>
                  <TrendingUp size={16} style={{ color: accentColor }} />
                  <p className="text-sm font-bold" style={{ color: accentColor }}>{item.score}</p>
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
