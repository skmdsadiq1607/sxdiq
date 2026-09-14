import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Direct Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com" },
  { icon: Phone, label: "Phone & WhatsApp", value: "+91 9441921812", href: "tel:+919441921812" },
  { icon: Linkedin, label: "LinkedIn Network", value: "shaik-sadiq-b1650a377", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377" },
  { icon: MapPin, label: "Location Base", value: "Hyderabad, India", href: "" },
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
        title: "Message Delivered! ✉️", 
        description: "Thank you for reaching out. I'll get back to you promptly." 
      });
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setSentSuccess(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative select-none">
      
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="section-heading mb-16 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 07 — Direct Transmission
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Let's build together
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Open for full-time software engineering roles, hackathons, and ambitious product collaborations.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>INBOX STATUS // MONITORED</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="font-times text-3xl sm:text-4xl font-normal italic text-white leading-tight mb-4">
              Have an idea, opportunity, or just want to connect?
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-light font-times">
              Reach out directly through any of my direct communication channels below. I respond to all professional messages within 24 hours.
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
          </motion.div>

          {/* Right Column: Clean Editorial Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/90 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                // Direct Message Transmission
              </span>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                FAST RESPONSE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                  Your Full Name
                </label>
                <input 
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alexander Hamilton"
                  className="w-full bg-transparent border-b border-white/30 focus:border-white focus:outline-none py-3 text-base sm:text-lg font-times text-white placeholder:text-white/20 transition-colors"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                  Your Email Address
                </label>
                <input 
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. alexander@company.com"
                  className="w-full bg-transparent border-b border-white/30 focus:border-white focus:outline-none py-3 text-base sm:text-lg font-times text-white placeholder:text-white/20 transition-colors"
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                  Your Message or Project Proposition
                </label>
                <textarea 
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or role opportunity..."
                  className="w-full bg-transparent border-b border-white/30 focus:border-white focus:outline-none py-3 text-base sm:text-lg font-times text-white placeholder:text-white/20 transition-colors resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  ENCRYPTED TRANSMISSION &bull; NO SPAM
                </span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={sending || sentSuccess}
                  className="px-8 py-3.5 bg-white text-black hover:bg-white/90 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full"
                      />
                      <span>SENDING...</span>
                    </>
                  ) : sentSuccess ? (
                    <>
                      <CheckCircle2 size={14} className="text-black" />
                      <span>MESSAGE SENT</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
