import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Direct Transmission", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com", action: "Compose Email" },
  { icon: Phone, label: "Direct Voice / WhatsApp", value: "+91 9441921812", href: "tel:+919441921812", action: "Initiate Call" },
  { icon: Linkedin, label: "LinkedIn Network", value: "shaik-sadiq-b1650a377", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", action: "View Profile" },
  { icon: MapPin, label: "Base Operations", value: "Hyderabad, Telangana, India", href: "", action: "UTC+05:30" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      toast({ 
        title: "Transmission Dispatched! ✉️", 
        description: "Thank you for reaching out. Your message has been encrypted and logged." 
      });
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setSentSuccess(false);
      }, 4000);
    }, 1400);
  };

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative select-none">
      
      {/* 📡 CYBERNETIC BACKGROUND GRID & AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Radar beacon status badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono text-white mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="tracking-widest">TRANSMISSION FREQUENCY // OPEN &amp; ARMED</span>
        </motion.div>

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-14 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 07 — Direct Transmission Channel
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Let's build together
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Available for full-time software engineering roles, hackathon collaborations, and innovative technology initiatives.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>RESPONSE WINDOW // &lt; 12 HOURS</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Transmission Hub */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <p className="text-white/80 leading-relaxed mb-6 text-base font-light font-times">
              Whether discussing distributed systems, modern frontend architectures, or high-impact team projects — my direct communication line is always monitored.
            </p>

            <div className="space-y-3.5">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl hover:border-white/60 transition-all duration-300 group shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl border border-white/25 bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0 shadow-md">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-white/50 font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-mono font-semibold uppercase text-white truncate">{item.value}</p>
                  </div>
                  {item.href && (
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-black group-hover:bg-white transition-colors shrink-0">
                      <ArrowUpRight size={14} />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Verification Security Pill */}
            <div className="pt-4 flex items-center gap-2.5 text-[10px] font-mono text-white/40">
              <ShieldCheck size={14} className="text-white/60" />
              <span>TRANSMISSION ROUTING: DIRECT SECURE ENDPOINT</span>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Code Terminal (`message.json`) */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 border border-white/20 bg-black text-white font-mono text-xs overflow-hidden flex flex-col relative rounded-3xl shadow-2xl"
          >
            {/* Scanner laser overlay effect inside editor */}
            <div className="laser-scanner text-white/5 pointer-events-none" />

            {/* Editor Top Bar */}
            <div className="bg-zinc-950 border-b border-white/15 px-6 py-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full border border-white/40 bg-white/10" />
                <div className="w-3 h-3 rounded-full border border-white/40 bg-white/10" />
                <div className="w-3 h-3 rounded-full border border-white/40 bg-white/10" />
                <span className="text-[11px] text-white/70 font-semibold ml-3 tracking-wide font-mono flex items-center gap-1.5">
                  <Terminal size={12} /> payload.json
                </span>
              </div>
              <div className="flex items-center gap-2 text-[9px] text-white/50 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>TERMINAL ACTIVE</span>
              </div>
            </div>

            {/* Editor Body */}
            <div className="p-6 sm:p-7 flex leading-relaxed relative bg-black">
              
              {/* Line numbers */}
              <div className="text-white/30 text-right pr-5 select-none border-r border-white/10 w-12 shrink-0 space-y-1.5 font-mono text-[11px]">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
              </div>

              {/* Code lines */}
              <div className="flex-1 pl-5 space-y-2 text-white/80 font-mono text-xs">
                <div>
                  <span className="text-white/50">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-white/50">"sender_entity"</span>: <span className="text-white/50">{`{`}</span>
                </div>
                
                <div className="pl-8 flex flex-wrap items-center gap-2">
                  <span className="text-white/50">"name"</span>: 
                  <span className="text-white/40">"</span>
                  <input 
                    type="text" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name / Organization"
                    required
                    className="bg-transparent text-white border-b border-white/30 focus:border-white focus:outline-none px-2 py-0.5 w-60 text-xs placeholder:text-white/30"
                  />
                  <span className="text-white/40">",</span>
                </div>

                <div className="pl-8 flex flex-wrap items-center gap-2">
                  <span className="text-white/50">"email"</span>: 
                  <span className="text-white/40">"</span>
                  <input 
                    type="email" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="contact@domain.com"
                    required
                    className="bg-transparent text-white border-b border-white/30 focus:border-white focus:outline-none px-2 py-0.5 w-60 text-xs placeholder:text-white/30"
                  />
                  <span className="text-white/40">"</span>
                </div>

                <div className="pl-4">
                  <span className="text-white/50">{`}`},</span>
                </div>

                <div className="pl-4">
                  <span className="text-white/50">"transmission_payload"</span>: <span className="text-white/40">`</span>
                </div>

                <div className="pl-8">
                  <textarea 
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter project proposition, role inquiry, or message..."
                    required
                    className="w-full bg-zinc-900/50 text-white border border-white/20 rounded-2xl p-4 focus:border-white focus:outline-none text-xs placeholder:text-white/30 resize-none font-mono"
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
            <div className="bg-zinc-950 border-t border-white/15 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-white/50 font-mono">
                TELEMETRY: SHA-256 ENCRYPTED &bull; ZERO TRACKING
              </span>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={sending || sentSuccess}
                className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full transition-all uppercase font-mono text-[11px] tracking-widest font-bold flex items-center justify-center gap-2 select-none shadow-xl"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full"
                    />
                    <span>ENCRYPTING &amp; SENDING...</span>
                  </>
                ) : sentSuccess ? (
                  <>
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>TRANSMITTED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <span>Execute Transmission</span>
                    <Send size={12} />
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
