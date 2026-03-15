import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const timeline = [
  { institution: "Anurag University", degree: "B.Tech – Information Technology", score: "CGPA: 9.25", year: "2024 – 2028", current: true, location: "Hyderabad" },
  { institution: "Sri Chaitanya Junior College", degree: "Intermediate – MPC", score: "Score: 94.6%", year: "2022 – 2024", current: false, location: "Hyderabad" },
  { institution: "Sri Chaitanya School", degree: "SSC – Class X", score: "GPA: 9.7", year: "2022", current: false, location: "Hyderabad" },
];

const accentColor = "hsl(45 100% 55%)";

const Education = () => (
  <section id="education" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-education-bg)' }}>
    <div className="absolute inset-0 grid-lines opacity-30" />
    <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(45 100% 55% / 0.04), transparent 60%)' }} />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8" style={{ background: `${accentColor}60` }} />
          <p className="text-sm font-mono tracking-widest uppercase" style={{ color: accentColor }}>Education</p>
          <div className="h-px w-8" style={{ background: `${accentColor}60` }} />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span className="text-foreground">Academic </span>
          <span style={{ background: `linear-gradient(135deg, ${accentColor}, hsl(30 100% 60%))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-14 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-2 md:left-auto ${i % 2 === 0 ? 'md:right-[-2.2rem]' : 'md:left-[-2.2rem]'} top-6 z-10`}>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: item.current ? accentColor : 'hsl(var(--card))',
                    borderColor: item.current ? accentColor : 'hsl(var(--border))',
                    boxShadow: item.current ? `0 0 20px ${accentColor}30` : 'none',
                  }}
                >
                  <GraduationCap size={14} style={{ color: item.current ? 'hsl(225 25% 6%)' : accentColor }} />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 relative overflow-hidden premium-glass"
              >
                {item.current && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: accentColor }} />}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: accentColor }}>
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </div>
                  {item.current && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: `${accentColor}15`, color: accentColor }}>
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-muted-foreground text-xs ml-auto">
                    <MapPin size={10} />
                    <span>{item.location}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{item.institution}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.degree}</p>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold" style={{ background: `${accentColor}10`, color: accentColor, border: `1px solid ${accentColor}20` }}>
                  <Award size={13} />
                  {item.score}
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
