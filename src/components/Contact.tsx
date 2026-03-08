import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Contact Me</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Let's connect</h3>
            <div className="space-y-5">
              <a href="mailto:skmdsadiq1607@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">skmdsadiq1607@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919441921812" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+91 9441921812</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shaik-sadiq-b1650a377" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Linkedin size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground">shaik-sadiq-b1650a377</p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 glow-shadow space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
