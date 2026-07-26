import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 border-b border-border py-3 backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-foreground origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container mx-auto flex items-center justify-between px-6 md:px-16">
        <a href="#" className="text-xl font-bold uppercase tracking-widest font-mono text-foreground">
          Sadiq.
        </a>
        
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 border border-border hover:border-foreground transition-colors duration-200"
            style={{ borderRadius: "0px" }}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={14} className="text-foreground" /> : <Moon size={14} className="text-foreground" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 border border-border"
            style={{ borderRadius: "0px" }}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={14} className="text-foreground" /> : <Moon size={14} className="text-foreground" />}
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="text-foreground p-2 border border-border"
            style={{ borderRadius: "0px" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground border-b border-border last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
