import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9441921812", href: "tel:+919441921812" },
  { icon: Linkedin, label: "LinkedIn", value: "shaik-sadiq-b1650a377", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! ✉️", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding mesh-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
          <p className="subtitle">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Contact Me</h2>
        </motion.div>
        <div className="grid md:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-2">Let's build something together</h3>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 elevated-shadow space-y-5 md:col-span-3"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3.5 rounded-xl gradient-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            >
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
