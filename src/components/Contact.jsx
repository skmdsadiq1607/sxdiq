import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9441921812", href: "tel:+919441921812" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();

  // Scroll range: Contact section is active near the end of the scrolltrack
  const swingProgress = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);

  // Swing animations for double-door reveal on desktop
  const rotateLeftY = useTransform(swingProgress, [0, 1], [-35, 0]);
  const translateLeftX = useTransform(swingProgress, [0, 1], [-120, 0]);
  const opacityLeft = useTransform(swingProgress, [0, 1], [0.3, 1]);

  const rotateRightY = useTransform(swingProgress, [0, 1], [35, 0]);
  const translateRightX = useTransform(swingProgress, [0, 1], [120, 0]);
  const opacityRight = useTransform(swingProgress, [0, 1], [0.3, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent! ✉️", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1200);
  };

  return (
    <section id="contact" className="min-h-screen w-full lg:w-[1000px] shrink-0 flex items-center bg-black text-foreground noise-overlay py-12 px-6 md:px-16 border-r border-border relative overflow-hidden select-none" style={{ perspective: 1200 }}>
      

      <div className="container mx-auto px-4 md:px-12 relative z-10 pt-16 overflow-visible w-full">
        
        {/* Radar beacon status badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border/80 bg-secondary/50 text-[10px] font-mono text-foreground/90 mb-4 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
          </span>
          <span className="tracking-widest">AVAILABLE FOR WORK & COLLABORATION</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-10"
        >
          <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">// 09 — Direct Transmission</span>
          <h2 className="font-times text-6xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight leading-none text-foreground">Let's build together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start overflow-visible">
          
          {/* Left Column (Contact list) */}
          <motion.div 
            style={isMobile ? {} : {
              rotateY: rotateLeftY,
              x: translateLeftX,
              opacity: opacityLeft,
              transformOrigin: "left center"
            }}
            initial={isMobile ? { opacity: 0, y: 20 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-3"
          >
            <p className="text-muted-foreground leading-relaxed mb-4 text-xs font-light">
              Whether it's a project idea, a collaboration opportunity, or just a friendly hello — my inbox is always open.
            </p>

            <div className="space-y-2.5">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm hover:border-foreground/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl border border-border/80 bg-secondary/50 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <item.icon size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-foreground/60 font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-[11px] font-mono font-semibold uppercase text-foreground">{item.value}</p>
                  </div>
                  {item.href && (
                    <div className="w-7 h-7 rounded-full border border-border/70 flex items-center justify-center text-foreground/60 group-hover:text-foreground group-hover:border-foreground/40 transition-colors">
                      <ArrowUpRight size={12} />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Code Editor Form Column */}
          <motion.form
            style={isMobile ? {} : {
              rotateY: rotateRightY,
              x: translateRightX,
              opacity: opacityRight,
              transformOrigin: "right center",
            }}
            initial={isMobile ? { opacity: 0, y: 20 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 border border-border/80 bg-black text-white/90 font-mono text-[10px] overflow-hidden flex flex-col relative rounded-2xl shadow-2xl"
          >
            {/* Scanner laser overlay effect inside editor */}
            <div className="laser-scanner text-white/5" />

            {/* Editor Top Bar */}
            <div className="bg-zinc-950 border-b border-white/10 px-5 py-3 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-white/30 bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full border border-white/30 bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full border border-white/30 bg-white/10" />
                <span className="text-[10px] text-white/50 font-semibold ml-2 tracking-wide font-mono">message.json</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] text-white/40 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>READY</span>
              </div>
            </div>

            {/* Editor Body */}
            <div className="p-5 flex leading-relaxed relative bg-black">
              
              {/* Line numbers */}
              <div className="text-white/30 text-right pr-4 select-none border-r border-white/10 w-10 shrink-0 space-y-1">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
              </div>

              {/* Code lines */}
              <div className="flex-1 pl-4 space-y-1.5 text-white/70">
                <div>
                  <span className="text-white/50">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-white/50">"sender"</span>: <span className="text-white/50">{`{`}</span>
                </div>
                
                {/* Name line */}
                <div className="pl-8 flex items-center flex-wrap gap-1">
                  <span className="text-white/50">"name"</span>: <span className="text-white/40">"</span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/40 focus:border-white text-white outline-none w-48 transition-colors px-1 py-0.5"
                  />
                  <span className="text-white/40">"</span>,
                </div>
                
                {/* Email line */}
                <div className="pl-8 flex items-center flex-wrap gap-1">
                  <span className="text-white/50">"email"</span>: <span className="text-white/40">"</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/40 focus:border-white text-white outline-none w-48 transition-colors px-1 py-0.5"
                  />
                  <span className="text-white/40">"</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-white/50">{`},`}</span>
                </div>

                {/* Message line */}
                <div className="pl-4 flex items-start gap-1">
                  <span className="text-white/50 shrink-0">"message"</span>: <span className="text-white/40 shrink-0">"</span>
                  <textarea
                    required
                    rows={2}
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/40 focus:border-white text-white outline-none w-full transition-colors px-1 py-0.5 resize-none h-14 leading-relaxed"
                  />
                  <span className="text-white/40 shrink-0">"</span>
                </div>
                
                <div>
                  <span className="text-white/50">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Editor Action Bar */}
            <div className="bg-zinc-950 border-t border-white/10 px-5 py-3.5 flex items-center justify-between">
              <span className="text-[9px] text-white/50 font-mono">Run: node send.js</span>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={sending}
                className="px-6 py-2.5 bg-white text-black hover:bg-white/90 rounded-full transition-all uppercase font-mono text-[10px] tracking-widest font-bold flex items-center gap-2 select-none shadow-lg"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full"
                    />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={11} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
