import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight, Copy, Check, Terminal } from "lucide-react";
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("skmdsadiq1607@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email Copied! 📋",
      description: "skmdsadiq1607@gmail.com copied to your clipboard.",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);

    setTimeout(() => {
      toast({
        title: "Transmission Successful! ✉️",
        description: "Thank you for reaching out, " + form.name + ". I will respond promptly.",
      });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            07 // COMMUNICATION PROTOCOL
          </span>
          <h2>LET&apos;S BUILD THE FUTURE</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels & Quick dispatch */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-syne font-bold text-2xl uppercase tracking-tight text-white mb-3">
                Have an ambitious idea or full-time opportunity?
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light mb-6">
                Whether you're looking to develop a cutting-edge web platform, discuss software architecture, or explore roles — my inbox and terminal are always accessible.
              </p>
            </div>

            {/* Quick Copy Email Card */}
            <div
              onClick={handleCopyEmail}
              className="glass-card p-5 cursor-pointer group hover:border-white/40 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/20 bg-white/[0.05] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">Direct Channel</span>
                  <span className="font-mono text-xs font-semibold text-white">skmdsadiq1607@gmail.com</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? "COPIED" : "CLICK TO COPY"}</span>
              </button>
            </div>

            {/* Channels List */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-card p-4 flex items-center justify-between group hover:border-white/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <p className="text-[9px] text-white/40 font-mono uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs font-mono font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                  {item.href && <ArrowUpRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive IDE Editor Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl border border-white/20 bg-black/90 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col relative"
          >
            {/* Scanner laser overlay */}
            <div className="laser-scanner opacity-40" />

            {/* IDE Top Bar */}
            <div className="bg-white/[0.04] border-b border-white/10 px-5 py-3 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                <span className="text-[10px] text-white/60 font-mono font-bold ml-2 tracking-wide uppercase flex items-center gap-1.5">
                  <Terminal size={12} /> dispatch_message.json
                </span>
              </div>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">UTF-8 // JSON SCHEMA</span>
            </div>

            {/* IDE Editor Body */}
            <div className="p-6 flex leading-relaxed font-mono text-xs">
              {/* Line Numbers */}
              <div className="text-white/20 text-right pr-5 select-none border-r border-white/10 w-10 shrink-0 space-y-2">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
              </div>

              {/* Code Fields */}
              <div className="flex-1 pl-5 space-y-2 text-white/80">
                <div>
                  <span className="text-white/40">{`{`}</span>
                </div>

                <div className="pl-4 flex items-center flex-wrap gap-2">
                  <span className="text-white/50">&quot;sender_name&quot;:</span>
                  <span className="text-white/40">&quot;</span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/50 focus:border-white text-white outline-none w-56 font-mono text-xs transition-colors px-1 py-0.5"
                  />
                  <span className="text-white/40">&quot;,</span>
                </div>

                <div className="pl-4 flex items-center flex-wrap gap-2">
                  <span className="text-white/50">&quot;sender_email&quot;:</span>
                  <span className="text-white/40">&quot;</span>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/50 focus:border-white text-white outline-none w-56 font-mono text-xs transition-colors px-1 py-0.5"
                  />
                  <span className="text-white/40">&quot;,</span>
                </div>

                <div className="pl-4 flex items-start gap-2 pt-1">
                  <span className="text-white/50 shrink-0">&quot;message&quot;:</span>
                  <span className="text-white/40 shrink-0">&quot;</span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 hover:border-white/50 focus:border-white text-white outline-none w-full font-mono text-xs transition-colors px-1 resize-none h-20 leading-relaxed"
                  />
                  <span className="text-white/40 shrink-0">&quot;</span>
                </div>

                <div>
                  <span className="text-white/40">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-white/[0.03] border-t border-white/10 px-6 py-4 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                NODE_ENV: PRODUCTION // READY
              </span>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary py-2.5 px-6 text-xs flex items-center gap-2"
              >
                {sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full"
                  />
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send size={12} />
                  </>
                )}
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
