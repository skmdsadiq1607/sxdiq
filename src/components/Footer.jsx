import { ArrowUp, Linkedin, Github, Mail, Heart, Code, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="min-h-screen w-[500px] shrink-0 flex items-center bg-zinc-950 text-zinc-300 py-12 px-12 md:px-16 relative">
    <div className="container mx-auto flex flex-col justify-between h-[75vh]">
      
      {/* Top row */}
      <div>
        <a href="#" className="text-2xl font-bold uppercase tracking-widest font-mono text-white inline-block mb-4">Sadiq.</a>
        <p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
          Passionate developer building modern web applications. Always learning, always creating.
        </p>
        
        <h4 className="font-bold text-white mb-3 text-[10px] uppercase tracking-wider font-mono">Quick Links</h4>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group font-mono uppercase tracking-wider">
                {link.label}
                <ExternalLink size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mid row */}
      <div>
        <h4 className="font-bold text-white mb-3 text-[10px] uppercase tracking-wider font-mono">Connect</h4>
        <div className="flex items-center gap-2 mb-4">
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="w-8 h-8 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
              aria-label={link.label}
              style={{ borderRadius: "0px" }}
            >
              <link.icon size={14} />
            </a>
          ))}
        </div>
        <p className="text-[10px] text-zinc-500 font-mono">skmdsadiq1607@gmail.com</p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 pt-6 space-y-3">
        <div>
          <p className="text-[9px] text-zinc-500 flex items-center gap-1 font-mono uppercase tracking-wider">
            © 2026 Built with <Heart size={8} className="text-white" /> by Shaik Kemple Mohammed Sadiq
          </p>
          <p className="text-[9px] text-zinc-600 mt-1 flex items-center gap-1 font-mono">
            <Code size={10} /> React, TypeScript &amp; Tailwind
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
          style={{ borderRadius: "0px" }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={14} />
        </button>
      </div>

    </div>
  </footer>
);

export default Footer;
