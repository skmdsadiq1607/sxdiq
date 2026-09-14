import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8">
      {/* Scroll Progress Laser Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 via-white to-white/40 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3.5 border ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            : "bg-black/40 backdrop-blur-md border-white/10"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3 select-none">
          <span className="font-syne font-black text-xl tracking-tighter text-white uppercase group-hover:tracking-wider transition-all duration-300">
            SADIQ<span className="text-white/40">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-[9px] font-mono text-white/70 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open for roles
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            >
              <span className="text-white/30 mr-1">0{idx + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/ShaikKempleMohammedSadiqResume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:border-white transition-all duration-300 select-none shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            CV <Download size={12} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/ShaikKempleMohammedSadiqResume.pdf"
            download
            className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider"
          >
            CV
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/20 p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-between transition-colors border-b border-white/5 last:border-0"
                >
                  <span>
                    <span className="text-white/30 mr-2">0{idx + 1}.</span>
                    {link.label}
                  </span>
                  <ArrowUpRight size={14} className="text-white/40" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
