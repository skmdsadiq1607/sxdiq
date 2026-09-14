import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-black text-foreground noise-overlay py-24 px-6 sm:px-12 md:px-20 border-b border-border relative select-none">
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        
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
          <span className="tracking-widest">AVAILABLE FOR WORK &amp; COLLABORATION</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-10 lg:mb-12 border-b border-foreground/15 pb-4"
        >
          <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">
            // 05 — Direct Transmission
          </span>
          <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-foreground mb-3">
            Let's build together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl font-times leading-relaxed">
            Whether it's a project idea, a collaboration opportunity, or just a friendly hello — my transmission channel is always active.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Contact list) */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm font-light font-times">
              I am always excited to discuss software engineering challenges, open-source projects, and new technology ventures. Feel free to connect directly through any platform below.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md hover:border-foreground/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl border border-border/80 bg-secondary/50 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-foreground/60 font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs sm:text-sm font-mono font-semibold uppercase text-foreground truncate">{item.value}</p>
                  </div>
                  {item.href && (
                    <div className="w-8 h-8 rounded-full border border-border/70 flex items-center justify-center text-foreground/60 group-hover:text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                      <ArrowUpRight size={13} />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Code Editor Form Column */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 border border-border/80 bg-black text-white/90 font-mono text-[10px] overflow-hidden flex flex-col relative rounded-3xl shadow-2xl"
          >
            {/* Scanner laser overlay effect inside editor */}
            <div className="laser-scanner text-white/5" />

            {/* Editor Top Bar */}
            <div className="bg-zinc-950 border-b border-white/10 px-5 py-3.5 flex items-center justify-between select-none">
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
              <div className="text-white/30 text-right pr-4 select-none border-r border-white/10 w-10 shrink-0 space-y-1 font-mono">
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
              <div className="flex-1 pl-4 space-y-1.5 text-white/70 font-mono">
                <div>
                  <span className="text-white/50">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-white/50">"sender"</span>: <span className="text-white/50">{`{`}</span>
                </div>
                
                <div className="pl-8 flex items-center gap-2">
                  <span className="text-white/50">"name"</span>: 
                  <span className="text-white/40">"</span>
                  <input 
                    type="text" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="bg-transparent text-white border-b border-white/20 focus:border-white focus:outline-none px-1 py-0.5 w-48 text-[11px] placeholder:text-white/20"
                  />
                  <span className="text-white/40">",</span>
                </div>

                <div className="pl-8 flex items-center gap-2">
                  <span className="text-white/50">"email"</span>: 
                  <span className="text-white/40">"</span>
                  <input 
                    type="email" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-transparent text-white border-b border-white/20 focus:border-white focus:outline-none px-1 py-0.5 w-48 text-[11px] placeholder:text-white/20"
                  />
                  <span className="text-white/40">"</span>
                </div>

                <div className="pl-4">
                  <span className="text-white/50">{`}`},</span>
                </div>

                <div className="pl-4">
                  <span className="text-white/50">"message"</span>: <span className="text-white/40">`</span>
                </div>

                <div className="pl-8">
                  <textarea 
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your transmission message here..."
                    required
                    className="w-full bg-zinc-900/40 text-white border border-white/15 rounded-xl p-3 focus:border-white focus:outline-none text-[11px] placeholder:text-white/20 resize-none font-mono"
                  />
                </div>

                <div className="pl-4">
                  <span className="text-white/40">`</span>
                </div>

                <div>
                  <span className="text-white/50">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Editor Action Bar */}
            <div className="bg-zinc-950 border-t border-white/10 px-5 py-4 flex items-center justify-between">
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
