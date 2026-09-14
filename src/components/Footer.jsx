import { useState, useEffect } from "react";
import { ArrowUp, Linkedin, Github, Mail, Code, Terminal, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#leadership" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/skmdsadiq1607", label: "GitHub" },
  { icon: Mail, href: "mailto:skmdsadiq1607@gmail.com", label: "Email" },
];

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white pt-20 pb-12 px-6 md:px-16 lg:px-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Giant Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] text-center w-full overflow-hidden">
        <span className="font-syne font-black text-[22vw] leading-none uppercase tracking-tighter text-white">
          SADIQ
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <a href="#" className="font-syne font-black text-3xl uppercase tracking-tighter text-white inline-block mb-3">
                SADIQ<span className="text-white/40">.</span>
              </a>
              <p className="text-sm text-white/60 font-light max-w-md leading-relaxed mb-6">
                Shaik Kemple Mohammed Sadiq — Full Stack Software Engineer specializing in modern MERN platforms, interactive web experiences, and high-performance algorithms.
              </p>
            </div>

            {/* Live Clock & Location */}
            <div className="flex items-center gap-3 font-mono text-xs text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>HYDERABAD, IN: {time || "LIVE"} (IST)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">
              Index Directory
            </h4>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-3 mb-6">
                {socials.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:scale-110 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
              <p className="text-xs font-mono text-white/50">
                skmdsadiq1607@gmail.com
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} Shaik Kemple Mohammed Sadiq. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Terminal size={12} />
            <span>Built with React, JavaScript, Lenis &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
