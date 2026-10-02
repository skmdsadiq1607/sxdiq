import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: "9.25", label: "CGPA", desc: "Computer Science" },
  { value: "2+", label: "Production Apps", desc: "Deployed to real users" },
  { value: "3+", label: "Hackathons", desc: "Podium finishes" },
  { value: "5+", label: "Certifications", desc: "Industry standard" }
];

const techStack = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Java (DSA)", "Tailwind CSS", "C/C++"
];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-3 md:mr-5 inline-block">
      {children}
    </motion.span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"]
  });
  
  const ruleRef = useRef(null);
  const { scrollYProgress: ruleProgress } = useScroll({
    target: ruleRef,
    offset: ["start 90%", "end 60%"]
  });
  const ruleScaleX = useTransform(ruleProgress, [0, 1], [0, 1]);

  const bgRef = useRef(null);
  const { scrollYProgress: bgProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(bgProgress, [0, 1], ["-20%", "20%"]);

  const headline = "A passionate developer turning ideas into reality";
  const words = headline.split(" ");

  return (
    <section ref={bgRef} id="about" className="relative w-full min-h-screen bg-[#FFFFFF] text-[#000000] font-times overflow-hidden py-24 sm:py-32">
      {/* Giant Parallax Number */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 right-0 pointer-events-none z-0"
      >
        <h1 className="text-[30vw] leading-none text-[#000000]/5 select-none tracking-tighter">
          01
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col gap-24">
        {/* Scroll-Driven Headline */}
        <div ref={containerRef} className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-normal leading-tight tracking-tight flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>

        {/* Drawing Horizontal Rule */}
        <div ref={ruleRef} className="w-full flex justify-end">
          <motion.div 
            style={{ scaleX: ruleScaleX, transformOrigin: "left" }}
            className="w-full h-[1px] bg-[#000000]/15"
          />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Tech Stack & Description */}
          <div className="flex flex-col gap-12">
            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#000000]/70 space-y-8">
              <p>
                I specialize in building robust backend systems and beautiful, responsive frontend interfaces. With a strong foundation in computer science and data structures, I approach software engineering as both an art and a science.
              </p>
              <p>
                Whether it's optimizing database queries, orchestrating server deployments, or crafting pixel-perfect animations, I thrive in the space where logic meets design.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl tracking-wide uppercase border-b border-[#000000]/10 pb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    animate={{ 
                      y: [0, -5, 0],
                      x: [0, i % 2 === 0 ? 3 : -3, 0]
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="px-6 py-3 border border-[#000000]/15 rounded-full text-base tracking-wide bg-[#FFFFFF] shadow-sm hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Stat Cascade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const direction = i % 2 === 0 ? -50 : 50;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: direction, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  className="p-8 border border-[#000000]/15 rounded-3xl bg-[#FFFFFF] flex flex-col justify-center gap-2 group hover:border-[#000000]/40 transition-colors"
                >
                  <div className="text-5xl lg:text-6xl tracking-tighter group-hover:scale-105 origin-left transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold tracking-tight uppercase border-t border-[#000000]/10 pt-4 mt-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-[#000000]/60 italic">
                    {stat.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
