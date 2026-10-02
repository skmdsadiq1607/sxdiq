import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiGithub,
  SiGit,
  SiJavascript,
  SiVercel,
  SiRender
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaCogs,
  FaServer,
  FaCode,
  FaDesktop,
  FaNetworkWired
} from 'react-icons/fa';
import SectionHeaderEditorial from '@/components/SectionHeaderEditorial';

// Official Curated Skills Catalog with Authentic Brand Colors
const SKILLS_DATA = [
  // 1. Web Technologies
  { name: 'HTML5', icon: SiHtml5, category: 'Web Technologies', color: '#E34F26', level: 'Expert', detail: 'Semantic Elements & Web Accessibility Standards' },
  { name: 'CSS3', icon: SiCss, category: 'Web Technologies', color: '#1572B6', level: 'Expert', detail: 'Modern Layouts, Flexbox, Grid & Keyframe Motion' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Web Technologies', color: '#F7DF1E', level: 'Advanced', detail: 'ES6+, Asynchronous Pipelines & Event Loop' },
  { name: 'React.js', icon: SiReact, category: 'Web Technologies', color: '#61DAFB', level: 'Advanced', detail: 'Hooks, Virtual DOM & Component Architecture' },
  { name: 'Express.js', icon: SiExpress, category: 'Web Technologies', color: '#E2E8F0', level: 'Proficient', detail: 'Server Middleware & REST Routing' },
  { name: 'REST APIs', icon: FaServer, category: 'Web Technologies', color: '#38BDF8', level: 'Advanced', detail: 'Stateless HTTP Services & JSON Contracts' },
  { name: 'Bootstrap', icon: SiBootstrap, category: 'Web Technologies', color: '#7952B3', level: 'Advanced', detail: 'Responsive Components & Utility Styling' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Web Technologies', color: '#38BDF8', level: 'Expert', detail: 'Utility-First Scalable Design Systems' },
  { name: 'SQL', icon: FaDatabase, category: 'Web Technologies', color: '#00758F', level: 'Proficient', detail: 'Relational Queries, Joins, Constraints & Indexing' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Web Technologies', color: '#47A248', level: 'Proficient', detail: 'Document Collections, Schemas & Aggregations' },

  // 2. Programming Languages
  { name: 'C (DSA)', icon: FaCode, category: 'Programming Languages', color: '#00599C', level: 'Proficient', detail: 'Pointers, Dynamic Memory & Algorithmic Complexity' },
  { name: 'Java', icon: FaJava, category: 'Programming Languages', color: '#ED8B00', level: 'Advanced', detail: 'OOPs, Collections, Multithreading & JVM' },
  { name: 'Python', icon: SiPython, category: 'Programming Languages', color: '#387EB8', level: 'Proficient', detail: 'Scripting, Automation & Computational Logic' },

  // 3. Computer Science Fundamentals
  { name: 'Object-Oriented Programming (OOP)', icon: FaCogs, category: 'Computer Science Fundamentals', color: '#A78BFA', level: 'Advanced', detail: 'Encapsulation, Inheritance, Polymorphism & Abstraction' },
  { name: 'DBMS', icon: FaDatabase, category: 'Computer Science Fundamentals', color: '#00758F', level: 'Proficient', detail: 'ACID Properties, Transactions, Normalization & ER' },
  { name: 'OS', icon: FaDesktop, category: 'Computer Science Fundamentals', color: '#60A5FA', level: 'Proficient', detail: 'Process Scheduling, Threads, Memory Paging & Deadlocks' },
  { name: 'CN', icon: FaNetworkWired, category: 'Computer Science Fundamentals', color: '#F472B6', level: 'Proficient', detail: 'TCP/IP Protocols, OSI Model, Sockets & Routing' },

  // 4. Tools & Platforms
  { name: 'Git', icon: SiGit, category: 'Tools & Platforms', color: '#F05032', level: 'Advanced', detail: 'Branching Models, Merge Strategies & Version Control' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools & Platforms', color: '#FFFFFF', level: 'Advanced', detail: 'Collaborative PRs, Code Reviews & Actions' },
  { name: 'Vercel', icon: SiVercel, category: 'Tools & Platforms', color: '#FFFFFF', level: 'Expert', detail: 'Global Edge Deployment, Serverless Functions & CDN' },
  { name: 'Render', icon: SiRender, category: 'Tools & Platforms', color: '#46E3B7', level: 'Proficient', detail: 'Cloud Hosting, Web Services & Managed Databases' },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sphereRadius, setSphereRadius] = useState(230);

  // Responsive radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setSphereRadius(145);
        } else if (window.innerWidth < 1024) {
          setSphereRadius(185);
        } else {
          setSphereRadius(230);
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
    x: 0.22, // Perspective downward tilt
    targetSpeedY: -0.0055, // Flipped rotation direction (counter-clockwise)
    speedY: -0.0055,
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
      const cameraDist = 600;

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

          // Scale & depth fading (front = large & full color, back = distinct & glowing)
          const scale = Math.max(0.68, Math.min(1.24, perspective * 0.92));
          const depthProgress = (curZ + sphereRadius) / (2 * sphereRadius); // 0 (back) to 1 (front)
          const opacity = Math.max(0.38, Math.min(1, depthProgress * 0.62 + 0.38));
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

  const categories = [
    "ALL", 
    "Web Technologies", 
    "Programming Languages", 
    "Computer Science Fundamentals", 
    "Tools & Platforms"
  ];

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
      className="relative w-full min-h-screen bg-[#000000] text-[#FFFFFF] font-times py-28 px-6 sm:px-12 md:px-20 border-b border-white/10 select-none overflow-hidden"
    >
      {/* Subtle Ambient Cosmic Glow & Orbital Latitude Grid */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        {/* Soft radial glow */}
        <div className="w-[650px] h-[650px] rounded-full bg-white/[0.02] blur-[150px]" />
        
        {/* Faint Latitude Rings echoing sphere perspective */}
        <div 
          className="absolute w-[540px] h-[540px] rounded-full border border-white/[0.05] border-dashed"
          style={{ transform: "rotateX(75deg)" }}
        />
        <div 
          className="absolute w-[720px] h-[720px] rounded-full border border-white/[0.03]"
          style={{ transform: "rotateX(75deg)" }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Editorial Broadsheet Section Header */}
        <SectionHeaderEditorial
          number="02"
          tag="// 02 — Technical Proficiencies"
          headline="Engineering scalable architectures and algorithmic systems"
          badge={`${SKILLS_DATA.length} CORE TECHNOLOGIES`}
          isWhiteBg={false}
        />

        {/* Minimal Category Tabs Filter */}
        <div className="flex justify-end -mt-4 mb-10">
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

        {/* 🪐 DENSE 3D ROTATING SPHERE */}
        <div className="relative w-full flex items-center justify-center my-6 min-h-[540px] sm:min-h-[600px]">
          
          {/* Sphere Center Container */}
          <div 
            className="relative flex items-center justify-center"
            style={{
              width: sphereRadius * 2 + 110,
              height: sphereRadius * 2 + 110,
            }}
          >
            {/* 🌟 CENTER NODE: "Skills" (Fixed at exact (0,0,0) center of sphere) */}
            <div 
              className="absolute z-[2300] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-zinc-900 to-black border border-white/25 shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-transform duration-300 pointer-events-none select-none"
              style={{
                width: sphereRadius < 160 ? 100 : 130,
                height: sphereRadius < 160 ? 100 : 130,
              }}
            >
              <span className="font-times italic text-2xl sm:text-3xl font-normal text-white tracking-wide leading-none">
                Skills
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/50 mt-1.5">
                {SKILLS_DATA.length} Techs
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
                    transform: `translate3d(${skill.projX}px, ${skill.projY}px, 0) scale(${isHovered ? skill.scale * 1.3 : skill.scale})`,
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
                    className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/95 backdrop-blur-md border transition-all duration-300 shadow-xl"
                    style={{
                      borderColor: isHovered ? skill.color : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isHovered 
                        ? `0 0 25px ${skill.color}99, inset 0 0 10px ${skill.color}44` 
                        : `0 0 12px ${skill.color}33`,
                    }}
                  >
                    {/* Official Brand Color Icon */}
                    <Icon 
                      size={24}
                      style={{ 
                        color: skill.color,
                        filter: isHovered ? `drop-shadow(0 0 8px ${skill.color})` : `drop-shadow(0 0 3px ${skill.color}77)`,
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
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[210px] p-4 rounded-2xl bg-zinc-950/95 border border-white/20 backdrop-blur-xl shadow-2xl pointer-events-none z-50 text-left"
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

        {/* Drag Hint & Category Matrix Breakdown */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-white/40 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CELESTIAL TECH ORB &bull; {SKILLS_DATA.length} OFFICIAL TECHNOLOGIES LOADED</span>
          </div>
          <span>CLICK &amp; DRAG TO SPIN SPHERE &bull; HOVER FOR BLUEPRINT</span>
        </div>

        {/* 📋 COMPREHENSIVE TECHNOLOGY CATALOG DIRECTORY */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-times italic text-2xl sm:text-3xl text-white font-normal">
              Technology Directory ({filteredSkills.length})
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
              CATEGORY: {activeCategory}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/40 transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center bg-black/80 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ boxShadow: `0 0 12px ${skill.color}25` }}
                    >
                      <Icon size={22} style={{ color: skill.color }} />
                    </div>
                    <span 
                      className="font-mono text-[8px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/10"
                      style={{ color: skill.color }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-times italic text-lg text-white leading-tight mb-1">
                      {skill.name}
                    </h4>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-2">
                      {skill.category}
                    </p>
                    <p className="font-times text-xs text-white/60 leading-relaxed font-light">
                      {skill.detail}
                    </p>
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

export default Skills;
