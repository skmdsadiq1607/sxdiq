import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart, Code } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn", color: "hsl(220 90% 55%)" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub", color: "hsl(0 0% 60%)" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email", color: "hsl(0 80% 55%)" },
];

const Footer = () => (
  <footer className="relative border-t border-border/20 py-16 px-4" style={{ background: 'var(--section-footer-bg)' }}>
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
        {/* Brand */}
        <div>
          <a href="#" className="text-3xl font-bold font-display gradient-text inline-block mb-3">Sxdiq</a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Full-stack developer passionate about building beautiful and functional web experiences.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Connect</h4>
          <div className="flex items-center gap-3">
            {socials.map((link) => (
              <motion.a key={link.label} whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow" style={{ background: link.color, boxShadow: `0 6px 20px ${link.color}40` }} aria-label={link.label}>
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          © 2026 Built with <Heart size={14} className="text-red-400" /> by Shaik Kemple Mohammed Sadiq
        </p>
        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground/50 flex items-center gap-1"><Code size={12} /> React · TypeScript · TailwindCSS</p>
          <motion.button whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 65%))', boxShadow: '0 6px 20px hsl(200 100% 55% / 0.3)' }} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
