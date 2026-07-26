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

  const handleSubmit = (e: React.FormEvent) => {
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
    <section id="contact" className="section-padding relative overflow-hidden bg-background text-foreground noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">Get in touch</span>
          <h2>Let's build together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Whether it's a project idea, a collaboration opportunity, or just a friendly hello — my inbox is always open.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 border border-border bg-card hover:border-foreground transition-all duration-300"
                  style={{ borderRadius: "0px" }}
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-foreground">
                    <item.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs font-mono font-semibold uppercase">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight size={14} className="text-muted-foreground" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Code Editor Form Column */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 border border-border bg-zinc-950 text-zinc-300 font-mono text-xs overflow-hidden flex flex-col"
            style={{ borderRadius: "0px" }}
          >
            {/* Editor Top Bar */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <span className="text-[10px] text-zinc-500 font-semibold ml-2 tracking-wide">message.json</span>
              </div>
              <span className="text-[10px] text-zinc-600 font-semibold">UTF-8</span>
            </div>

            {/* Editor Body */}
            <div className="p-6 flex leading-relaxed relative bg-zinc-950">
              
              {/* Line numbers */}
              <div className="text-zinc-700 text-right pr-6 select-none border-r border-zinc-900 w-12 shrink-0">
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
              <div className="flex-1 pl-6 space-y-1 text-zinc-400">
                <div>
                  <span className="text-zinc-500">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-zinc-500">"sender"</span>: <span className="text-zinc-500">{`{`}</span>
                </div>
                
                {/* Name line */}
                <div className="pl-8 flex items-center flex-wrap gap-1">
                  <span className="text-zinc-500">"name"</span>: <span className="text-zinc-600">"</span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-48 transition-colors px-1"
                  />
                  <span className="text-zinc-600">"</span>,
                </div>
                
                {/* Email line */}
                <div className="pl-8 flex items-center flex-wrap gap-1">
                  <span className="text-zinc-500">"email"</span>: <span className="text-zinc-600">"</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-48 transition-colors px-1"
                  />
                  <span className="text-zinc-600">"</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-zinc-500">{`},`}</span>
                </div>

                {/* Message line */}
                <div className="pl-4 flex items-start gap-1">
                  <span className="text-zinc-500 shrink-0">"message"</span>: <span className="text-zinc-600 shrink-0">"</span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Type your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-full transition-colors px-1 resize-none h-16 leading-relaxed"
                  />
                  <span className="text-zinc-600 shrink-0">"</span>
                </div>
                
                <div>
                  <span className="text-zinc-500">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Editor Action Bar */}
            <div className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-mono">Run: node send.js</span>
              <button
                type="submit"
                disabled={sending}
                className="px-6 py-2.5 bg-white text-black hover:bg-zinc-200 transition-colors uppercase font-mono text-[10px] tracking-widest font-bold flex items-center gap-2 select-none"
                style={{ borderRadius: "0px" }}
              >
                {sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full"
                  />
                ) : (
                  <>Send Message <Send size={12} /></>
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
