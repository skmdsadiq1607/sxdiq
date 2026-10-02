import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiJavascript
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaCogs,
  FaServer,
  FaCode,
  FaDesktop
} from 'react-icons/fa';

// Full Skills Catalog with Authentic Original Brand Colors
const SKILLS_DATA = [
  { name: 'React.js', icon: SiReact, category: 'Web Architecture', color: '#61DAFB', level: 'Advanced', detail: 'Component Architecture & Virtual DOM' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Programming Languages', color: '#F7DF1E', level: 'Advanced', detail: 'ES6+, Async Runtimes & Event Loop' },
  { name: 'Python', icon: SiPython, category: 'Programming Languages', color: '#387EB8', level: 'Proficient', detail: 'Scripting, Automation & AI Logic' },
  { name: 'Node.js', icon: FaServer, category: 'Web Architecture', color: '#68A063', level: 'Proficient', detail: 'Backend REST APIs & Event-Driven Engine' },
  { name: 'Express.js', icon: SiExpress, category: 'Web Architecture', color: '#FFFFFF', level: 'Proficient', detail: 'Middleware Pipelines & Routing' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Web Architecture', color: '#47A248', level: 'Proficient', detail: 'NoSQL Schema Design & Aggregations' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Web Architecture', color: '#38BDF8', level: 'Expert', detail: 'Utility-First Modern Design Systems' },
  { name: 'HTML5 & CSS3', icon: SiHtml5, category: 'Web Architecture', color: '#E34F26', level: 'Expert', detail: 'Semantic Web Standards & Flex/Grid' },
  { name: 'Java', icon: FaJava, category: 'Programming Languages', color: '#ED8B00', level: 'Advanced', detail: 'OOP, Multithreading & Collections Framework' },
  { name: 'C (DSA)', icon: FaCode, category: 'Programming Languages', color: '#00599C', level: 'Proficient', detail: 'Data Structures & Algorithmic Complexity' },
  { name: 'DBMS & SQL', icon: FaDatabase, category: 'CS Foundations', color: '#00758F', level: 'Proficient', detail: 'Relational Schemas, ACID & Queries' },
  { name: 'OOP Architecture', icon: FaCogs, category: 'CS Foundations', color: '#A78BFA', level: 'Advanced', detail: 'Design Patterns & SOLID Principles' },
  { name: 'Operating Systems', icon: FaDesktop, category: 'CS Foundations', color: '#60A5FA', level: 'Proficient', detail: 'Concurrency, Memory Paging & Processes' },
  { name: 'Git & GitHub', icon: SiGithub, category: 'Web Architecture', color: '#F05032', level: 'Advanced', detail: 'Branching, Merge Workflows & CI/CD' },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sphereRadius, setSphereRadius] = useState(210);

  // Responsive radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setSphereRadius(140);
        } else if (window.innerWidth < 1024) {
          setSphereRadius(175);
        } else {
          setSphereRadius(220);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3D Sphere Points State
  const [points, setPoints] = useState([]);
  const rotationRef = useRef({
    y: 0,
    x: 0.22, // Fixed downward tilt for 3D perspective
    targetSpeedY: -0.006, // Flipped rotation direction (counter-clockwise)
    speedY: -0.006,
    isDragging: false,
    lastMouseX: 0,
  });

  // Initialize spherical distribution using Fibonacci Golden Spiral
  useEffect(() => {
    const count = SKILLS_DATA.length;
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    const initialPoints = SKILLS_DATA.map((skill, i) => {
      const y = (i * offset - 1) + offset / 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      return {
        ...skill,
        baseX: x,
        baseY: y,
        baseZ: z,
        projX: 0,
        projY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 1,
      };
    });

    setPoints(initialPoints);
  }, []);

  // 60FPS Spherical Rotation Animation Loop
  useEffect(() => {
    let animId;

    const animate = () => {
      const rot = rotationRef.current;

      // When hovering on a skill, gently slow down the rotation for easy clicking
      if (hoveredSkill) {
        rot.speedY += (0 - rot.speedY) * 0.08;
      } else {
        rot.speedY += (rot.targetSpeedY - rot.speedY) * 0.05;
      }

      rot.y += rot.speedY;

      const cosY = Math.cos(rot.y);
      const sinY = Math.sin(rot.y);
      const cosX = Math.cos(rot.x);
      const sinX = Math.sin(rot.x);
      const cameraDist = 580;

      setPoints(prevPoints =>
        prevPoints.map(p => {
          // 3D rotation: around Y axis (flipped direction), then tilt around X axis
          const x1 = p.baseX * cosY - p.baseZ * sinY;
          const z1 = p.baseZ * cosY + p.baseX * sinY;

          const y2 = p.baseY * cosX - z1 * sinX;
          const z2 = z1 * cosX + p.baseY * sinX;

          // Scale coordinates by radius
          const curX = x1 * sphereRadius;
          const curY = y2 * sphereRadius;
          const curZ = z2 * sphereRadius;

          // Perspective projection
          const perspective = cameraDist / (cameraDist - curZ);
          const projX = curX * perspective;
          const projY = curY * perspective;

          // Scale & depth fading (front = large & full color, back = small & dimmed)
          const scale = Math.max(0.68, Math.min(1.25, perspective * 0.92));
          const depthProgress = (curZ + sphereRadius) / (2 * sphereRadius); // 0 (back) to 1 (front)
          const opacity = Math.max(0.3, Math.min(1, depthProgress * 0.7 + 0.3));
          const zIndex = Math.round((curZ + sphereRadius) * 10);

          return {
            ...p,
            projX,
            projY,
            scale,
            opacity,
            zIndex,
          };
        })
      );

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [sphereRadius, hoveredSkill]);

  // Interactive mouse drag to spin the sphere
  const handleMouseDown = (e) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastMouseX = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (rotationRef.current.isDragging) {
      const deltaX = e.clientX - rotationRef.current.lastMouseX;
      rotationRef.current.y += deltaX * 0.006;
      rotationRef.current.lastMouseX = e.clientX;
    }
  };

  const handleMouseUp = () => {
    rotationRef.current.isDragging = false;
  };

  const categories = ["ALL", "Web Architecture", "Programming Languages", "CS Foundations"];
  const filteredSkills = activeCategory === "ALL" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full min-h-screen bg-[#000000] text-[#FFFFFF] font-times py-28 px-6 sm:px-12 md:px-20 border-b border-white/10 select-none overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle Ambient Cosmic Glow & Orbital Latitude Grid */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        {/* Soft radial glow */}
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[140px]" />
        
        {/* Faint Latitude Rings echoing sphere perspective */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.05] border-dashed"
          style={{ transform: "rotateX(75deg)" }}
        />
        <div 
          className="absolute w-[680px] h-[680px] rounded-full border border-white/[0.03]"
          style={{ transform: "rotateX(75deg)" }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading & Category Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/15 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 02 &mdash; Technical Proficiencies
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white">
              Skills &amp; Technologies
            </h2>
          </motion.div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? "bg-white text-black font-bold shadow-md" 
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 🪐 TRUE 3D ROTATING SPHERE */}
        <div className="relative w-full flex items-center justify-center my-8 min-h-[520px] sm:min-h-[580px]">
          
          {/* Sphere Center Container */}
          <div 
            className="relative flex items-center justify-center"
            style={{
              width: sphereRadius * 2 + 100,
              height: sphereRadius * 2 + 100,
            }}
          >
            {/* 🌟 CENTER NODE: "Skills" (Fixed at exact (0,0,0) center of sphere) */}
            <div 
              className="absolute z-[2200] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-zinc-900 to-black border border-white/25 shadow-[0_0_45px_rgba(255,255,255,0.12)] transition-transform duration-300 pointer-events-none select-none"
              style={{
                width: sphereRadius < 160 ? 100 : 130,
                height: sphereRadius < 160 ? 100 : 130,
              }}
            >
              <span className="font-times italic text-2xl sm:text-3xl font-normal text-white tracking-wide leading-none">
                Skills
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/50 mt-1.5">
                3D Matrix
              </span>
            </div>

            {/* 🪐 3D ORBITING SKILL NODES (Passing in front and behind center) */}
            {points.map((skill) => {
              const isHighlighted = activeCategory === "ALL" || skill.category === activeCategory;
              const isHovered = hoveredSkill?.name === skill.name;
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="absolute cursor-pointer transition-opacity duration-300"
                  style={{
                    transform: `translate3d(${skill.projX}px, ${skill.projY}px, 0) scale(${isHovered ? skill.scale * 1.25 : skill.scale})`,
                    zIndex: isHovered ? 99999 : skill.zIndex,
                    opacity: isHighlighted ? skill.opacity : 0.15,
                    left: '50%',
                    top: '50%',
                    marginLeft: -26,
                    marginTop: -26,
                  }}
                >
                  {/* Skill Node Pill with Real Brand Color Logo & Glow */}
                  <div 
                    className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/90 backdrop-blur-md border transition-all duration-300 shadow-xl"
                    style={{
                      borderColor: isHovered ? skill.color : 'rgba(255, 255, 255, 0.18)',
                      boxShadow: isHovered 
                        ? `0 0 25px ${skill.color}88, inset 0 0 10px ${skill.color}33` 
                        : `0 0 12px ${skill.color}22`,
                    }}
                  >
                    {/* Official Brand Color Icon */}
                    <Icon 
                      size={24}
                      style={{ 
                        color: skill.color,
                        filter: isHovered ? `drop-shadow(0 0 8px ${skill.color})` : `drop-shadow(0 0 3px ${skill.color}66)`,
                        transition: 'filter 0.3s ease, transform 0.3s ease',
                      }} 
                    />

                    {/* Active Pulse ring on hover */}
                    {isHovered && (
                      <span 
                        className="absolute inset-0 rounded-full animate-ping opacity-35"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                  </div>

                  {/* Sleek Holographic Tooltip on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[190px] p-3.5 rounded-2xl bg-zinc-950/95 border border-white/20 backdrop-blur-xl shadow-2xl pointer-events-none z-50 text-left"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-times italic text-base font-normal text-white">
                          {skill.name}
                        </span>
                        <span 
                          className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full border"
                          style={{ borderColor: `${skill.color}55`, color: skill.color }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="font-mono text-[9px] text-white/50 uppercase tracking-wider mb-2">
                        {skill.category}
                      </p>
                      <p className="font-times text-xs text-white/80 leading-snug">
                        {skill.detail}
                      </p>
                      {/* Accent color bar */}
                      <div 
                        className="w-full h-1 rounded-full mt-2.5" 
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Helper Bar: Drag Hint & Verified Count */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>INTERACTIVE CELESTIAL ORB &bull; {SKILLS_DATA.length} CORE TECHNOLOGIES</span>
          </div>
          <span>HOVER / DRAG TO ROTATE &amp; INSPECT</span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
