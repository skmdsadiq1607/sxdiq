import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart, Code } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative py-16 px-4" style={{ background: 'var(--section-footer-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(200 100% 55% / 0.15), transparent)' }} />

    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <span className="text-2xl font-bold gradient-text inline-block mb-3">Sxdiq</span>
          <p className="text-sm text-[hsl(220,15%,55%)] leading-relaxed">
            Passionate developer building modern web applications. Always learning, always creating.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-medium text-[hsl(210,20%,88%)] mb-4 text-xs uppercase tracking-widest font-mono">Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[hsl(220,15%,55%)] hover:text-[hsl(200,100%,55%)] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-medium text-[hsl(210,20%,88%)] mb-4 text-xs uppercase tracking-widest font-mono">Connect</h4>
          <div className="flex items-center gap-2 mb-4">
            {socials.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.1 }}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[hsl(220,15%,55%)] hover:text-[hsl(200,100%,55%)] border border-[hsl(225,18%,14%)] hover:border-[hsl(200,100%,55%,0.3)] transition-all"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-[hsl(220,15%,45%)] font-mono">skmdsadiq1607@gmail.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(225,18%,12%)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs text-[hsl(220,15%,45%)] flex items-center gap-1.5">
            © 2026 Built with <Heart size={12} className="text-red-400/70" /> by Shaik Kemple Mohammed Sadiq
          </p>
          <p className="text-[10px] text-[hsl(220,15%,35%)] mt-1 flex items-center gap-1">
            <Code size={10} /> React · TypeScript · TailwindCSS
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-xl flex items-center justify-center border border-[hsl(225,18%,14%)] text-[hsl(220,15%,55%)] hover:text-[hsl(200,100%,55%)] hover:border-[hsl(200,100%,55%,0.3)] transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </div>
  </footer>
);

export default Footer;
