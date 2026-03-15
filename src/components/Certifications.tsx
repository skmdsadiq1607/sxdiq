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
  { title: "Java for Beginners", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(260 80% 65%)", image: javaBeginnersImg, pdfLink: null },
  { title: "Basics of Python", issuer: "Infosys Springboard", badge: "", highlight: false, color: "hsl(160 80% 50%)", image: basicsPythonImg, pdfLink: null },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", badge: "", highlight: false, color: "hsl(330 80% 60%)", image: htmlCssImg, pdfLink: null },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-certs-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-8" style={{ background: 'hsl(260 80% 65% / 0.5)' }} />
            <p className="text-sm font-mono tracking-widest uppercase" style={{ color: 'hsl(260 80% 65%)' }}>Credentials</p>
            <div className="h-px w-8" style={{ background: 'hsl(260 80% 65% / 0.5)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            <span className="text-foreground">Professional </span>
            <span style={{ background: 'linear-gradient(135deg, hsl(260 80% 65%), hsl(330 80% 60%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl group relative overflow-hidden premium-glass flex flex-col ${c.highlight ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              {c.highlight && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: c.color }} />}

              {c.image && (
                <div
                  className="relative h-36 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(c.image!)}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center bg-card/60 backdrop-blur-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} />
                  </div>
                </div>
              )}

              <div className="relative z-10 p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${c.color}12`, border: `1px solid ${c.color}20` }}>
                  <Award size={18} style={{ color: c.color }} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{c.issuer}</p>
                {c.badge && (
                  <div className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}20` }}>
                    <Star size={11} /> {c.badge}
                  </div>
                )}
                {c.pdfLink && (
                  <a
                    href={c.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:underline"
                    style={{ color: c.color }}
                  >
                    View Certificate <ExternalLink size={11} />
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
            initial={{ scale: 0.9, opacity: 0 }}
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
