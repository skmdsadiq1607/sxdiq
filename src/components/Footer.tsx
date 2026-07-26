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
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative border-t border-zinc-800 bg-black text-zinc-300 py-16 px-6 md:px-16">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <a href="#" className="text-2xl font-bold uppercase tracking-widest font-mono text-white inline-block mb-4">Sadiq.</a>
          <p className="text-sm text-zinc-500 leading-relaxed font-light">
            Passionate developer building modern web applications. Always learning, always creating.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider font-mono">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group font-mono uppercase text-xs tracking-wider">
                  {link.label}
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider font-mono">Connect</h4>
          <div className="flex items-center gap-3 mb-6">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
                aria-label={link.label}
                style={{ borderRadius: "0px" }}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-zinc-500 font-mono">skmdsadiq1607@gmail.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs text-zinc-500 flex items-center gap-1.5 justify-center sm:justify-start font-mono uppercase tracking-wider">
            © 2026 Built with <Heart size={10} className="text-white" /> by Shaik Kemple Mohammed Sadiq
          </p>
          <p className="text-[10px] text-zinc-600 mt-1 flex items-center gap-1 justify-center sm:justify-start font-mono">
            <Code size={11} /> Crafted with React, TypeScript & TailwindCSS
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
          style={{ borderRadius: "0px" }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
