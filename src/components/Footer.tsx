import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart, Code, ExternalLink } from "lucide-react";

const navLinks = [
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
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.2), transparent)' }} />

    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <a href="#" className="text-3xl font-bold font-display gradient-text inline-block mb-4">Sxdiq</a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Passionate developer building modern web applications. Always learning, always creating.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider font-mono">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  {link.label}
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider font-mono">Connect</h4>
          <div className="flex items-center gap-3 mb-6">
            {socials.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ background: link.color, boxShadow: `0 6px 20px ${link.color}40` }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-mono">skmdsadiq1607@gmail.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © 2026 Built with <Heart size={14} className="text-red-400" /> by Shaik Kemple Mohammed Sadiq
          </p>
          <p className="text-xs text-muted-foreground/50 mt-1 flex items-center gap-1">
            <Code size={12} /> Crafted with React, TypeScript & TailwindCSS
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-shadow"
          style={{ background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 65%))', boxShadow: '0 8px 24px hsl(200 100% 55% / 0.3)' }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </div>
  </footer>
);

export default Footer;
