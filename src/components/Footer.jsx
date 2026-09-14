import { ArrowUp, Linkedin, Github, Mail, Heart, Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#leadership" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white/80 py-16 px-6 sm:px-12 md:px-20 border-t border-white/10 relative select-none">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <a href="#" className="text-3xl font-normal font-times italic tracking-wide text-white inline-block">
              Sadiq.
            </a>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light font-times">
              Shaik Kemple Mohammed Sadiq — Full-Stack Developer &amp; Problem Solver based in Hyderabad, India. Dedicated to crafting exceptional digital experiences.
            </p>
            <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-white/45">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Summer / Fall Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[10px] uppercase tracking-[0.25em] font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-xs text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5 group font-mono uppercase tracking-wider"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Channels */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[10px] uppercase tracking-[0.25em] font-mono">
              // Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              {socials.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all shadow-sm"
                  aria-label={link.label}
                >
                  <link.icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-white/60 font-mono">skmdsadiq1607@gmail.com</p>
            <p className="text-xs text-white/40 font-mono mt-1">+91 9441921812</p>
          </div>

          {/* Col 4: Top Action */}
          <div className="flex flex-col justify-between items-start lg:items-end">
            <div>
              <h4 className="font-bold text-white mb-4 text-[10px] uppercase tracking-[0.25em] font-mono">
                // Back to Top
              </h4>
              <p className="text-xs text-white/50 font-light font-times max-w-xs">
                Return to the beginning of the interactive experience.
              </p>
            </div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="mt-6 w-12 h-12 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider text-white/50">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © 2026 Shaik Kemple Mohammed Sadiq. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-white/40">
            <Code size={11} /> Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
