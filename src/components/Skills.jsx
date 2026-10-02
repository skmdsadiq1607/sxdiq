import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
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
  SiTypescript,
  SiPostgresql,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiRedux,
  SiLinux,
  SiCplusplus
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaCogs,
  FaServer,
  FaCode,
  FaDesktop,
  FaNetworkWired,
  FaTerminal
} from 'react-icons/fa';

// 32 Comprehensive Technologies with Authentic Original Brand Colors
const SKILLS_DATA = [
  // Web Architecture & Frontend
  { name: 'React.js', icon: SiReact, category: 'Web Architecture', color: '#61DAFB', level: 'Advanced', detail: 'Component Lifecycle, Hooks & Virtual DOM' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Web Architecture', color: '#FFFFFF', level: 'Proficient', detail: 'SSR, SSG & Full-Stack App Routing' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Programming Languages', color: '#F7DF1E', level: 'Advanced', detail: 'ES6+, Async/Await & Event Loop' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Programming Languages', color: '#3178C6', level: 'Proficient', detail: 'Static Type Systems & Generics' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Web Architecture', color: '#38BDF8', level: 'Expert', detail: 'Utility-First Modern Design Systems' },
  { name: 'HTML5', icon: SiHtml5, category: 'Web Architecture', color: '#E34F26', level: 'Expert', detail: 'Semantic Markup & Web Standards' },
  { name: 'CSS3', icon: SiCss, category: 'Web Architecture', color: '#1572B6', level: 'Expert', detail: 'Responsive Layouts, Flexbox & Grid' },
  { name: 'Redux', icon: SiRedux, category: 'Web Architecture', color: '#764ABC', level: 'Proficient', detail: 'Predictable Global State Architecture' },
  { name: 'Bootstrap', icon: SiBootstrap, category: 'Web Architecture', color: '#7952B3', level: 'Advanced', detail: 'Rapid Prototyping & Grid Framework' },
  { name: 'Vite.js', icon: SiVite, category: 'Developer Tools', color: '#646CFF', level: 'Expert', detail: 'High-Speed HMR & ESM Bundling' },

  // Backend & Cloud
  { name: 'Node.js', icon: FaServer, category: 'Web Architecture', color: '#68A063', level: 'Proficient', detail: 'Asynchronous V8 Server Runtimes' },
  { name: 'Express.js', icon: SiExpress, category: 'Web Architecture', color: '#E2E8F0', level: 'Proficient', detail: 'RESTful Middleware & API Routing' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Databases', color: '#47A248', level: 'Proficient', detail: 'NoSQL Schemas, Indexing & Aggregations' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Databases', color: '#4169E1', level: 'Proficient', detail: 'Relational ACID Transactions & Queries' },
  { name: 'REST APIs', icon: FaServer, category: 'Web Architecture', color: '#38BDF8', level: 'Advanced', detail: 'Stateless HTTP Endpoints & Webhooks' },
  { name: 'Postman', icon: SiPostman, category: 'Developer Tools', color: '#FF6C37', level: 'Proficient', detail: 'API Integration Testing & Collections' },
  { name: 'Vercel', icon: SiVercel, category: 'Developer Tools', color: '#FFFFFF', level: 'Expert', detail: 'CI/CD Automated Serverless Deployments' },
  { name: 'Netlify', icon: SiNetlify, category: 'Developer Tools', color: '#00C7B7', level: 'Proficient', detail: 'Edge CDN Hosting & Build Webhooks' },

  // Programming Languages
  { name: 'Java', icon: FaJava, category: 'Programming Languages', color: '#ED8B00', level: 'Advanced', detail: 'OOPs, Collections, Multithreading & JVM' },
  { name: 'Python', icon: SiPython, category: 'Programming Languages', color: '#387EB8', level: 'Proficient', detail: 'Scripting, Automation & AI Model APIs' },
  { name: 'C Language', icon: FaCode, category: 'Programming Languages', color: '#A8B9CC', level: 'Proficient', detail: 'Pointers, Memory Allocations & Low-Level' },
  { name: 'C++', icon: SiCplusplus, category: 'Programming Languages', color: '#00599C', level: 'Proficient', detail: 'STL Containers, Iterators & Speed' },

  // CS Foundations
  { name: 'DSA', icon: FaCode, category: 'CS Foundations', color: '#34D399', level: 'Advanced', detail: 'Trees, Graphs, DP & Time Complexity' },
  { name: 'OOP Concepts', icon: FaCogs, category: 'CS Foundations', color: '#A78BFA', level: 'Advanced', detail: 'Polymorphism, Inheritance & SOLID' },
  { name: 'DBMS & SQL', icon: FaDatabase, category: 'CS Foundations', color: '#00758F', level: 'Proficient', detail: 'Normalization, Joins & Index Tuning' },
  { name: 'Operating Systems', icon: FaDesktop, category: 'CS Foundations', color: '#60A5FA', level: 'Proficient', detail: 'Threads, Synchronization & Paging' },
  { name: 'Computer Networks', icon: FaNetworkWired, category: 'CS Foundations', color: '#F472B6', level: 'Proficient', detail: 'TCP/IP Stack, OSI Model & DNS' },

  // Tools & Workflows
  { name: 'Git', icon: SiGit, category: 'Developer Tools', color: '#F05032', level: 'Advanced', detail: 'Branching, Rebase & Version Control' },
  { name: 'GitHub', icon: SiGithub, category: 'Developer Tools', color: '#FFFFFF', level: 'Advanced', detail: 'Pull Requests, Code Review & Actions' },
  { name: 'Linux / Shell', icon: SiLinux, category: 'Developer Tools', color: '#FCC624', level: 'Proficient', detail: 'Bash Scripting & Terminal Workflows' },
  { name: 'Command Line', icon: FaTerminal, category: 'Developer Tools', color: '#94A3B8', level: 'Advanced', detail: 'CLI Automation & System Administration' },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sphereRadius, setSphereRadius] = useState(230);

  // Responsive radius calculation for dense 3D orb
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setSphereRadius(150);
        } else if (window.innerWidth < 1024) {
          setSphereRadius(190);
        } else {
          setSphereRadius(240);
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
    x: 0.2, // Fixed downward tilt for 3D perspective
    targetSpeedY: -0.0055, // Flipped rotation direction (counter-clockwise)
    speedY: -0.0055,
    isDragging: false,
    lastMouseX: 0,
  });

  // Initialize spherical distribution for all 32 skills using Fibonacci Golden Spiral
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
      const cameraDist = 620;

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
          const scale = Math.max(0.65, Math.min(1.22, perspective * 0.9));
          const depthProgress = (curZ + sphereRadius) / (2 * sphereRadius); // 0 (back) to 1 (front)
          const opacity = Math.max(0.4, Math.min(1, depthProgress * 0.6 + 0.4));
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

  const categories = ["ALL", "Web Architecture", "Programming Languages", "CS Foundations", "Databases", "Developer Tools"];
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
          className="absolute w-[560px] h-[560px] rounded-full border border-white/[0.05] border-dashed"
          style={{ transform: "rotateX(75deg)" }}
        />
        <div 
          className="absolute w-[760px] h-[760px] rounded-full border border-white/[0.03]"
          style={{ transform: "rotateX(75deg)" }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading & Category Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/15 pb-6">
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

        {/* 🪐 DENSE 3D ROTATING SPHERE (32 Vibrant Technologies) */}
        <div className="relative w-full flex items-center justify-center my-6 min-h-[560px] sm:min-h-[620px]">
          
          {/* Sphere Center Container */}
          <div 
            className="relative flex items-center justify-center"
            style={{
              width: sphereRadius * 2 + 120,
              height: sphereRadius * 2 + 120,
            }}
          >
            {/* 🌟 CENTER NODE: "Skills" (Fixed at exact (0,0,0) center of sphere) */}
            <div 
              className="absolute z-[2400] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-zinc-900 to-black border border-white/25 shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-transform duration-300 pointer-events-none select-none"
              style={{
                width: sphereRadius < 160 ? 100 : 130,
                height: sphereRadius < 160 ? 100 : 130,
              }}
            >
              <span className="font-times italic text-2xl sm:text-3xl font-normal text-white tracking-wide leading-none">
                Skills
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/50 mt-1.5">
                32 Technologies
              </span>
            </div>

            {/* 🪐 32 3D ORBITING SKILL NODES (Passing in front and behind center) */}
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
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[200px] p-4 rounded-2xl bg-zinc-950/95 border border-white/20 backdrop-blur-xl shadow-2xl pointer-events-none z-50 text-left"
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
            <span>CELESTIAL TECH ORB &bull; {SKILLS_DATA.length} CORE TECHNOLOGIES &bull; ALL LOADED</span>
          </div>
          <span>CLICK &amp; DRAG TO SPIN SPHERE &bull; HOVER FOR BLUEPRINT</span>
        </div>

        {/* 📋 COMPREHENSIVE TECHNOLOGY CATALOG MATRIX */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-times italic text-2xl sm:text-3xl text-white font-normal">
              Full Technology Directory ({filteredSkills.length})
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
              CATEGORY: {activeCategory}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/40 transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/80 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ boxShadow: `0 0 10px ${skill.color}22` }}
                    >
                      <Icon size={20} style={{ color: skill.color }} />
                    </div>
                    <span 
                      className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/10"
                      style={{ color: skill.color }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-times italic text-base text-white leading-tight mb-1">
                      {skill.name}
                    </h4>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider line-clamp-1">
                      {skill.category}
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
