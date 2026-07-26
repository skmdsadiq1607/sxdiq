import { useState, useRef } from "react";
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

  const { scrollYProgress } = useScroll();

  // Scroll range: Contact section is active near the end of the scrolltrack
  const swingProgress = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);

  // Swing animations for double-door reveal
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
    <section id="contact" className="min-h-screen w-[900px] shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-16 border-r border-border overflow-visible" style={{ perspective: 1200 }}>
      <div className="container mx-auto px-6 md:px-16 relative z-10 pt-16 overflow-visible">
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

        <div className="grid lg:grid-cols-12 gap-8 items-start overflow-visible">
          
          {/* Left Column (Swings from left) */}
          <motion.div 
            style={{
              rotateY: rotateLeftY,
              x: translateLeftX,
              opacity: opacityLeft,
              transformOrigin: "left center"
            }}
            className="lg:col-span-5 space-y-3"
          >
            <p className="text-zinc-500 leading-relaxed mb-4 text-xs font-light">
              Whether it's a project idea, a collaboration opportunity, or just a friendly hello — my inbox is always open.
            </p>

            <div className="space-y-2">
              {contactInfo.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 border border-border bg-card hover:border-foreground transition-all duration-300"
                  style={{ borderRadius: "0px" }}
                >
                  <div className="w-8 h-8 border border-border flex items-center justify-center text-foreground">
                    <item.icon size={12} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-[10px] font-mono font-semibold uppercase">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Code Editor Form Column (Swings from right) */}
          <motion.form
            style={{
              rotateY: rotateRightY,
              x: translateRightX,
              opacity: opacityRight,
              transformOrigin: "right center",
              borderRadius: "0px"
            }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 border border-border bg-zinc-950 text-zinc-300 font-mono text-[10px] overflow-hidden flex flex-col relative"
          >
            {/* Scanner laser overlay effect inside editor */}
            <div className="laser-scanner text-white/5" />

            {/* Editor Top Bar */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
                <span className="text-[9px] text-zinc-500 font-semibold ml-2 tracking-wide">message.json</span>
              </div>
              <span className="text-[9px] text-zinc-600 font-semibold">UTF-8</span>
            </div>

            {/* Editor Body */}
            <div className="p-4 flex leading-relaxed relative bg-zinc-950">
              
              {/* Line numbers */}
              <div className="text-zinc-700 text-right pr-4 select-none border-r border-zinc-900 w-10 shrink-0">
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
              <div className="flex-1 pl-4 space-y-1 text-zinc-400">
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
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-44 transition-colors px-1"
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
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-44 transition-colors px-1"
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
                    rows={2}
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-b border-zinc-800 hover:border-zinc-700 focus:border-white text-white outline-none w-full transition-colors px-1 resize-none h-12 leading-relaxed"
                  />
                  <span className="text-zinc-600 shrink-0">"</span>
                </div>
                
                <div>
                  <span className="text-zinc-500">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Editor Action Bar */}
            <div className="bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex items-center justify-between">
              <span className="text-[9px] text-zinc-500 font-mono">Run: node send.js</span>
              <button
                type="submit"
                disabled={sending}
                className="px-4 py-2 bg-white text-black hover:bg-zinc-200 transition-colors uppercase font-mono text-[9px] tracking-widest font-bold flex items-center gap-1.5 select-none"
                style={{ borderRadius: "0px" }}
              >
                {sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full"
                  />
                ) : (
                  <>Send Message <Send size={10} /></>
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
