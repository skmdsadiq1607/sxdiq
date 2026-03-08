import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com", color: "hsl(200 100% 55%)" },
  { icon: Phone, label: "Phone", value: "+91 9441921812", href: "tel:+919441921812", color: "hsl(330 80% 60%)" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", color: "hsl(220 90% 55%)" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "", color: "hsl(160 80% 50%)" },
];

const accentColor = "hsl(200 100% 55%)";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent! ✉️", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(200 15% 6%), hsl(225 25% 5%))' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50, transparent)` }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${accentColor}10, transparent 70%)` }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
          <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: accentColor }}>Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ background: `linear-gradient(135deg, ${accentColor}, hsl(260 80% 65%))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Have an idea or want to collaborate? I'd love to hear from you!</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm hover:border-border/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ background: item.color, boxShadow: `0 8px 24px ${item.color}40` }}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-foreground font-semibold">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5 md:col-span-3 relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm" style={{ boxShadow: `0 20px 60px -15px ${accentColor}08` }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${accentColor}, hsl(260 80% 65%))` }} />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Name</label>
                <input type="text" placeholder="John Doe" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-3.5 rounded-2xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Email</label>
                <input type="email" placeholder="john@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-3.5 rounded-2xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Message</label>
              <textarea placeholder="Tell me about your project or idea..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-3.5 rounded-2xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm resize-none" />
            </div>
            <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} type="submit" disabled={sending} className="w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 transition-shadow disabled:opacity-70" style={{ background: `linear-gradient(135deg, ${accentColor}, hsl(260 80% 65%))`, boxShadow: `0 8px 32px ${accentColor}30` }}>
              {sending ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
