import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#leadership" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`global-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 border-b border-border py-3 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-foreground origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container mx-auto flex items-center justify-between px-6 md:px-16">
        <a href="#" className="text-2xl font-normal font-times italic tracking-wide text-foreground">
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
        </div>

        {/* Mobile Menu Button - High contrast solid black circle with bold white icon */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white border border-white/40 hover:border-white shadow-lg transition-all active:scale-95"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/15 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-times italic text-lg tracking-wide text-neutral-200 hover:text-white border-b border-white/10 last:border-0 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
