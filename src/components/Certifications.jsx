import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, ExternalLink, Layers, X, Search } from "lucide-react";
import { useState } from "react";
import oopsJavaImg from "@/assets/certs/oops-java.jpg";
import javaBeginnersImg from "@/assets/certs/java-beginners.jpg";
import basicsPythonImg from "@/assets/certs/basics-python.jpg";
import htmlCssImg from "@/assets/certs/html-css-bootcamp.jpg";
import javaFoundationImg from "@/assets/certs/infosys/java-foundation-certification.png";
import agileScrumImg from "@/assets/certs/infosys/agile-scrum-in-practice.png";
import dsaJavaImg from "@/assets/certs/infosys/dsa-using-java.png";
import dbms1Img from "@/assets/certs/infosys/dbms-part-1.png";
import dbms2Img from "@/assets/certs/infosys/dbms-part-2.png";
import noSqlImg from "@/assets/certs/infosys/intro-nosql.png";
import javaFundamentalsImg from "@/assets/certs/infosys/java-programming-fundamentals.png";
import programmingJavaImg from "@/assets/certs/infosys/programming-using-java.png";
import softwareEngAgileImg from "@/assets/certs/infosys/software-engineering-agile.png";

const bundleCerts = [
  { title: "Programming using Java", issuer: "Infosys Springboard", image: programmingJavaImg },
  { title: "Java Programming Fundamentals", issuer: "Infosys Springboard", image: javaFundamentalsImg },
  { title: "Data Structures & Algorithms using Java", issuer: "Infosys Springboard", image: dsaJavaImg },
  { title: "OOPs in Java", issuer: "Great Learning", image: oopsJavaImg },
  { title: "Java for Beginners", issuer: "Infosys Springboard", image: javaBeginnersImg },
  { title: "Database Management System - Part 1", issuer: "Infosys Springboard", image: dbms1Img },
  { title: "Database Management System - Part 2", issuer: "Infosys Springboard", image: dbms2Img },
  { title: "Introduction to NoSQL Databases", issuer: "Infosys Springboard", image: noSqlImg },
  { title: "Software Engineering & Agile Software Development", issuer: "Infosys Springboard", image: softwareEngAgileImg },
  { title: "Agile Scrum in Practice", issuer: "Infosys Springboard", image: agileScrumImg },
  { title: "Basics of Python", issuer: "Infosys Springboard", image: basicsPythonImg },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", image: htmlCssImg },
];

const certs = [
  { title: "Programming in Java", issuer: "NPTEL – IIT Kharagpur", badge: "Elite + Silver (82)", highlight: true, image: null, pdfLink: "/certs/programming-in-java.pdf" },
  { title: "Java Foundation Certification", issuer: "Infosys Springboard", badge: "Certification", highlight: true, image: null, pdfLink: "/certs/java-foundation-certification.png" },
  { title: "Course Completion Certificates", issuer: `${bundleCerts.length} Courses Completed`, badge: "View All", highlight: true, image: null, pdfLink: null, isBundle: true },
];

const CertCard = ({ c, i, onOpenBundle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      {/* Background fan-out card deck effect for the bundle */}
      {c.isBundle && (
        <>
          <motion.div
            animate={{
              rotate: isHovered ? -6 : 0,
              x: isHovered ? -12 : 0,
              y: isHovered ? 4 : 0,
              opacity: isHovered ? 0.5 : 0,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute inset-0 rounded-2xl border border-foreground/30 bg-card/60 -z-10 pointer-events-none"
          />
          <motion.div
            animate={{
              rotate: isHovered ? 6 : 0,
              x: isHovered ? 12 : 0,
              y: isHovered ? 4 : 0,
              opacity: isHovered ? 0.35 : 0,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute inset-0 rounded-2xl border border-foreground/20 bg-card/40 -z-20 pointer-events-none"
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08, duration: 0.5 }}
        whileHover={{ y: -6, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => c.isBundle && onOpenBundle()}
        className={`border border-border/80 bg-card/90 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-foreground/50 hover:shadow-2xl h-80 relative overflow-hidden ${
          c.isBundle ? "cursor-pointer" : ""
        }`}
      >
        {/* Subtle radial glow on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-2xl pointer-events-none group-hover:bg-foreground/10 transition-colors" />

        <div>
          <div className="w-12 h-12 rounded-xl border border-border/80 bg-secondary/50 flex items-center justify-center mb-6 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
            {c.isBundle ? <Layers size={22} /> : <Award size={22} />}
          </div>
          <h3 className="font-times italic font-normal text-xl text-foreground mb-1 tracking-wide leading-snug">
            {c.title}
          </h3>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
            {c.issuer}
          </p>
        </div>

        <div>
          {c.badge && !c.pdfLink && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-foreground/30 bg-secondary/60 text-foreground text-[10px] font-mono font-bold tracking-widest uppercase w-fit">
              <Star size={10} className="fill-foreground text-foreground" />
              {c.badge}
            </div>
          )}

          {c.pdfLink && (
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={c.pdfLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground hover:text-foreground px-4 py-2 rounded-full border border-border/80 bg-secondary/50 hover:border-foreground/40 transition-colors"
            >
              View Credential <ExternalLink size={12} />
            </motion.a>
          )}

          {c.isBundle && (
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground px-4 py-2 rounded-full border border-foreground/30 bg-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors">
              Browse {bundleCerts.length} Courses <Layers size={12} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bundleOpen, setBundleOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBundleCerts = bundleCerts.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="certifications" className="min-h-screen w-full lg:w-screen shrink-0 flex items-center bg-black text-foreground noise-overlay py-12 px-6 md:px-24 border-r border-border relative overflow-hidden select-none">
      
      {/* 🔮 Concentric Holographic Lens Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="w-[800px] h-[800px] rounded-full border border-white/5 border-dashed" />
        <div className="w-[1100px] h-[1100px] rounded-full border border-white/[0.03]" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-12"
        >
          <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-foreground/50 mb-2">// 07 — Validated Expertise</span>
          <h2 className="font-times text-6xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight leading-none text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <CertCard 
              key={c.title} 
              c={c} 
              i={i} 
              onOpenBundle={() => setBundleOpen(true)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox for single cert image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative rounded-2xl border border-white/20 bg-black/95 p-3 max-w-3xl w-full shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-20 text-white font-mono text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors" 
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infosys Springboard bundle modal */}
      <AnimatePresence>
        {bundleOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-background/90 backdrop-blur-lg overflow-y-auto flex items-center justify-center p-6"
            onClick={() => setBundleOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
              className="w-full max-w-5xl border border-border/80 bg-card/95 backdrop-blur-2xl p-8 md:p-12 relative my-8 rounded-3xl shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setBundleOpen(false)}
                className="absolute top-6 right-6 p-2.5 rounded-full border border-border/80 hover:border-foreground bg-secondary/40 text-foreground transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">All Credentials</span>
                <h3 className="text-3xl font-extrabold uppercase text-foreground leading-none mb-6">
                  {bundleCerts.length} Courses Completed
                </h3>

                {/* Search box input */}
                <div className="relative max-w-md rounded-full border border-border/80 flex items-center px-5 py-3 bg-secondary/40 text-sm focus-within:border-foreground/50 transition-colors">
                  <Search size={16} className="text-muted-foreground mr-3" />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full text-foreground placeholder:text-muted-foreground/50 font-mono text-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin">
                {filteredBundleCerts.length > 0 ? (
                  filteredBundleCerts.map((cert) => (
                    <motion.div
                      key={cert.title}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      onClick={() => setSelectedImage(cert.image)}
                      className="group border border-border/80 bg-background/80 rounded-2xl p-4 cursor-pointer hover:border-foreground/50 transition-colors duration-300 shadow-sm"
                    >
                      <div className="relative h-40 overflow-hidden bg-black rounded-xl border border-border/60 mb-4">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase leading-snug tracking-wide text-foreground">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center text-muted-foreground font-mono text-sm">
                    No certificates matching "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
