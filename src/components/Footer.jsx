import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const lineWidth = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <footer ref={containerRef} className="relative w-full bg-black text-white font-times flex flex-col">
      {/* Background glow for CTA section */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[650px] max-h-[650px] bg-gradient-to-tr from-[#0047AB]/25 via-[#0052FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none"
        style={{ opacity: glowOpacity }}
      />

      {/* Part 1: Full-Screen CTA */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center z-10">
        <motion.div style={{ y: textY }} className="flex flex-col items-center justify-center">
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-normal not-italic leading-none tracking-tight mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-2xl md:text-4xl font-normal not-italic text-white/70 mb-16">
            Let's discuss your project or open opportunities.
          </p>
          
          <a 
            href="#contact" 
            className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-white/20 bg-black text-white hover:bg-white hover:text-black hover:border-[#0052FF] hover:shadow-[0_0_50px_rgba(0,82,255,0.4)] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 text-xl italic tracking-wide">
              Get in Touch
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0052FF] transition-all duration-300" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Line drawn on scroll */}
      <div className="w-full h-[1px] bg-white/5 relative z-10">
        <motion.div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0047AB] via-[#0052FF] to-white"
          style={{ width: lineWidth }}
        />
      </div>

      {/* Part 2: Minimal Footer */}
      <div className="relative z-10 w-full px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-black text-base">
        {/* Brand */}
        <div className="text-2xl font-bold italic tracking-widest uppercase">
          Sadiq<span className="text-[#0052FF]">.</span>
        </div>
        
        {/* Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-white/70">
          {[
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Experience', href: '#leadership' },
            { label: 'Certifications', href: '#certifications' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="hover:text-white hover:italic transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/shaik-sadiq-b1650a377/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/skmdsadiq1607" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:skmdsadiq1607@gmail.com" 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-white/40 text-sm italic">
            © 2026 Shaik Kemple Mohammed Sadiq
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
