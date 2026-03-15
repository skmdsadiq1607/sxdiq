import { motion } from "framer-motion";
import { Award, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import oopsJavaImg from "@/assets/certs/oops-java.jpg";
import javaBeginnersImg from "@/assets/certs/java-beginners.jpg";
import basicsPythonImg from "@/assets/certs/basics-python.jpg";
import htmlCssImg from "@/assets/certs/html-css-bootcamp.jpg";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true, color: "hsl(45 100% 55%)", image: null, pdfLink: "/certs/programming-in-java.pdf" },
  { title: "OOPs in Java", issuer: "Great Learning", badge: "", highlight: false, color: "hsl(200 100% 55%)", image: oopsJavaImg, pdfLink: null },
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(220 90% 55%)", image: javaBeginnersImg, pdfLink: null },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(160 80% 50%)", image: basicsPythonImg, pdfLink: null },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(330 80% 60%)", image: htmlCssImg, pdfLink: null },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden noise-overlay" style={{ background: 'var(--section-certs-bg)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(260 80% 65% / 0.3), transparent)' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(260 80% 65% / 0.1), transparent 70%)' }} />

      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
          <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(260 80% 70%)' }}>Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(260 80% 70%), hsl(330 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-3xl group relative overflow-hidden premium-glass flex flex-col ${c.highlight ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ boxShadow: `0 10px 40px -15px ${c.color}15`, ...(c.highlight ? { borderColor: `${c.color}30` } : {}) }}
            >
              {c.highlight && <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: `linear-gradient(90deg, ${c.color}, hsl(30 100% 60%))` }} />}

              {/* Certificate image preview */}
              {c.image && (
                <div
                  className="relative h-40 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(c.image!)}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center bg-card/60 backdrop-blur-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                  </div>
                </div>
              )}

              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700" style={{ background: c.color }} />
              <div className="relative z-10 p-7 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: c.color, boxShadow: `0 8px 24px ${c.color}40` }}>
                  <Award size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.issuer}</p>
                {c.badge && (
                  <div className="mt-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold" style={{ background: c.color, color: 'white', boxShadow: `0 4px 16px ${c.color}40` }}>
                    <Star size={12} /> {c.badge}
                  </div>
                )}
                {c.pdfLink && (
                  <a
                    href={c.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
                    style={{ color: c.color }}
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
