import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com", color: "hsl(200 100% 55%)" },
  { icon: Phone, label: "Phone", value: "+91 9441921812", href: "tel:+919441921812", color: "hsl(260 80% 65%)" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377", color: "hsl(220 90% 55%)" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "", color: "hsl(160 80% 50%)" },
];

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
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'var(--section-contact-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(200 100% 55% / 0.04), transparent 60%)' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-8 bg-primary/40" />
            <p className="text-sm font-mono tracking-widest uppercase text-primary">Contact</p>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            <span className="text-foreground">Let's build </span>
            <span className="text-gradient-primary">something amazing</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-lg mx-auto text-center">Have an idea or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-3"
          >
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Whether it's a project idea, a collaboration, or just a friendly hello — my inbox is always open.
            </p>

            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl group premium-glass"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-foreground font-medium truncate">{item.value}</p>
                </div>
                {item.href && (
                  <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-7 space-y-4 md:col-span-3 relative overflow-hidden premium-glass"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(200 100% 55%), hsl(260 80% 65%))' }} />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-muted-foreground mb-1.5 block uppercase tracking-wider">Name</label>
                <input type="text" placeholder="John Doe" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="text-[10px] font-mono text-muted-foreground mb-1.5 block uppercase tracking-wider">Email</label>
                <input type="email" placeholder="john@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono text-muted-foreground mb-1.5 block uppercase tracking-wider">Message</label>
              <textarea placeholder="Tell me about your project or idea..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/40 text-foreground placeholder:text-muted-foreground/40 border border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm resize-none" />
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              style={{ background: 'linear-gradient(135deg, hsl(200 100% 55%), hsl(260 80% 65%))' }}
            >
              {sending ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                <>Send Message <Send size={14} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
