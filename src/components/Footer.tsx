import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart, Code } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border py-12 px-4 bg-secondary/20">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold gradient-text font-display">Sadiq.</a>
        
        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", label: "LinkedIn", gradient: "from-blue-600 to-blue-400" },
            { icon: Github, href: "https://github.com", label: "GitHub", gradient: "from-gray-600 to-gray-400" },
            { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email", gradient: "from-red-500 to-pink-400" },
          ].map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 justify-center">
            © 2026 Built with <Heart size={14} className="text-red-400" /> by Shaik Kemple Mohammed Sadiq
          </p>
          <p className="text-xs text-muted-foreground/50 mt-1 flex items-center gap-1 justify-center">
            <Code size={12} /> Crafted with React, TypeScript & TailwindCSS
          </p>
        </div>
        
        {/* Scroll to top */}
        <motion.button
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground hover:shadow-xl hover:shadow-primary/25 transition-shadow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </div>
  </footer>
);

export default Footer;
