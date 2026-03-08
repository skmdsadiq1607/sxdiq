import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart, Code } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/20 py-12 px-4" style={{ background: 'var(--section-footer-bg)' }}>
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8">
        <a href="#" className="text-3xl font-bold font-display gradient-text">Sxdiq</a>
        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn", color: "hsl(220 90% 55%)" },
            { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub", color: "hsl(0 0% 60%)" },
            { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email", color: "hsl(0 80% 55%)" },
          ].map((link) => (
            <motion.a key={link.label} whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow" style={{ background: link.color, boxShadow: `0 8px 24px ${link.color}40` }} aria-label={link.label}>
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 justify-center">© 2026 Built with <Heart size={14} className="text-red-400" /> by Shaik Kemple Mohammed Sadiq</p>
          <p className="text-xs text-muted-foreground/50 mt-1 flex items-center gap-1 justify-center"><Code size={12} /> Crafted with React, TypeScript & TailwindCSS</p>
        </div>
        <motion.button whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 65%))', boxShadow: '0 8px 24px hsl(200 100% 55% / 0.3)' }} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </div>
  </footer>
);

export default Footer;
