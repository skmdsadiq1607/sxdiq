import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4 bg-secondary/20">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-xl font-bold gradient-text font-display">Sadiq.</a>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © 2026 Made with <Heart size={12} className="text-red-400" /> by Shaik Kemple Mohammed Sadiq
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", label: "LinkedIn" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ scale: 1.1, y: -2 }}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
