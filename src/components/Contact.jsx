import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Direct Email", value: "skmdsadiq1607@gmail.com", href: "mailto:skmdsadiq1607@gmail.com" },
  { icon: Phone, label: "Phone & WhatsApp", value: "+91 9441921812", href: "tel:+919441921812" },
  { icon: Linkedin, label: "LinkedIn Network", value: "shaik-sadiq-b1650a377", href: "https://www.linkedin.com/in/shaik-sadiq-b1650a377" },
  { icon: MapPin, label: "Location Base", value: "Hyderabad, India", href: "" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Message Transmitted",
      description: "Your signal has been received. Expect a response shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={containerRef} id="contact" className="relative min-h-screen flex flex-col md:flex-row w-full font-times overflow-hidden">
      
      {/* Center Divider - visible on md+ screens */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#000000]/10 z-10"></div>

      {/* Left Half: White BG, Black Text */}
      <motion.div 
        className="w-full md:w-1/2 bg-[#FFFFFF] text-[#000000] p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        initial={{ x: "-100%" }}
        animate={isInView ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-xl mx-auto md:ml-auto md:mr-12 w-full">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl italic font-light tracking-tight leading-none mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's build<br />together.
          </motion.h2>

          <div className="space-y-8 flex flex-col">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href || "#"}
                className={`group flex items-center justify-between border-b border-[#000000]/20 pb-4 relative overflow-hidden ${!info.href ? 'cursor-default' : 'cursor-pointer'}`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-[#000000]/50 mb-1">{info.label}</span>
                  <span className="text-xl md:text-2xl font-medium">{info.value}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#000000]/20 flex items-center justify-center group-hover:bg-[#000000] group-hover:text-[#FFFFFF] transition-colors duration-500">
                  <info.icon size={20} />
                </div>
                {/* Hover underline slide */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#000000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Half: Black BG, White Text */}
      <motion.div 
        className="w-full md:w-1/2 bg-[#000000] text-[#FFFFFF] p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        initial={{ x: "100%" }}
        animate={isInView ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-xl mx-auto md:mr-auto md:ml-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-[#FFFFFF]/50 uppercase tracking-widest text-sm mb-4">// Direct Message Transmission</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" }
            ].map((field, index) => (
              <motion.div 
                key={field.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <label htmlFor={field.id} className="block text-sm uppercase tracking-widest text-[#FFFFFF]/50 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-[#FFFFFF]/20 py-4 text-xl md:text-2xl text-[#FFFFFF] placeholder:text-[#FFFFFF]/20 focus:outline-none focus:border-[#FFFFFF] transition-colors duration-300"
                />
              </motion.div>
            ))}

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-[#FFFFFF]/50 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="What are we building?"
                className="w-full bg-transparent border-b border-[#FFFFFF]/20 py-4 text-xl md:text-2xl text-[#FFFFFF] placeholder:text-[#FFFFFF]/20 focus:outline-none focus:border-[#FFFFFF] transition-colors duration-300 resize-none"
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-8"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#000000] px-8 py-5 rounded-full w-full overflow-hidden disabled:opacity-70 transition-transform active:scale-95"
              >
                <span className="relative z-10 text-lg uppercase tracking-widest font-medium">
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </span>
                {isSubmitting ? (
                  <Loader2 className="relative z-10 animate-spin" size={20} />
                ) : (
                  <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={20} />
                )}
                <div className="absolute inset-0 bg-[#000000]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></div>
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;
