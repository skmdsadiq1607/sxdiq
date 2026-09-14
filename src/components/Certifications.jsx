import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, ExternalLink, Layers, X, Search, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
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
  { title: "Programming using Java", issuer: "Infosys Springboard", category: "Core Java", image: programmingJavaImg },
  { title: "Java Programming Fundamentals", issuer: "Infosys Springboard", category: "Core Java", image: javaFundamentalsImg },
  { title: "Data Structures & Algorithms using Java", issuer: "Infosys Springboard", category: "DSA", image: dsaJavaImg },
  { title: "OOPs in Java", issuer: "Great Learning", category: "OOP", image: oopsJavaImg },
  { title: "Java for Beginners", issuer: "Infosys Springboard", category: "Core Java", image: javaBeginnersImg },
  { title: "Database Management System - Part 1", issuer: "Infosys Springboard", category: "Databases", image: dbms1Img },
  { title: "Database Management System - Part 2", issuer: "Infosys Springboard", category: "Databases", image: dbms2Img },
  { title: "Introduction to NoSQL Databases", issuer: "Infosys Springboard", category: "Databases", image: noSqlImg },
  { title: "Software Engineering & Agile Software Development", issuer: "Infosys Springboard", category: "Engineering", image: softwareEngAgileImg },
  { title: "Agile Scrum in Practice", issuer: "Infosys Springboard", category: "Engineering", image: agileScrumImg },
  { title: "Basics of Python", issuer: "Infosys Springboard", category: "Python", image: basicsPythonImg },
  { title: "HTML & CSS Bootcamp", issuer: "Lets Upgrade", category: "Frontend", image: htmlCssImg },
];

const mainCerts = [
  { 
    title: "Programming in Java", 
    issuer: "NPTEL – IIT Kharagpur", 
    badge: "Elite + Silver (Score: 82)", 
    detail: "12-week national level university examination covering advanced Java paradigms, multithreading, and algorithmic design.",
    pdfLink: "/certs/programming-in-java.pdf",
    icon: Award
  },
  { 
    title: "Java Foundation Certification", 
    issuer: "Infosys Springboard", 
    badge: "Accredited Credential", 
    detail: "Comprehensive enterprise-grade foundation covering object-oriented architecture, collections, and backend logic.",
    pdfLink: "/certs/java-foundation-certification.png",
    icon: ShieldCheck
  },
  { 
    title: "Course Completion Vault", 
    issuer: `${bundleCerts.length} Accredited Programs Completed`, 
    badge: "Interactive Archive", 
    detail: "Extensive professional coursework spanning Java, Data Structures, Relational DBMS, NoSQL, and Agile methodologies.",
    pdfLink: null,
    isBundle: true,
    icon: Layers
  },
];

const CertCard = ({ c, i, onOpenBundle, onSelectImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group" style={{ perspective: 1000 }}>
      {/* 3D Fan-out background cards for the bundle */}
      {c.isBundle && (
        <>
          <motion.div
            animate={{
              rotate: isHovered ? -8 : 0,
              x: isHovered ? -16 : 0,
              y: isHovered ? 6 : 0,
              opacity: isHovered ? 0.6 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="absolute inset-0 rounded-3xl border border-white/20 bg-white/[0.04] -z-10 pointer-events-none"
          />
          <motion.div
            animate={{
              rotate: isHovered ? 8 : 0,
              x: isHovered ? 16 : 0,
              y: isHovered ? 6 : 0,
              opacity: isHovered ? 0.4 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02] -z-20 pointer-events-none"
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        whileHover={{ y: -8, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => c.isBundle && onOpenBundle()}
        className={`border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] min-h-[340px] relative overflow-hidden ${
          c.isBundle ? "cursor-pointer" : ""
        }`}
      >
        {/* Subtle radial glow on hover */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors" />

        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl border border-white/25 bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-md">
              <c.icon size={24} />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              {c.badge}
            </span>
          </div>

          <h3 className="font-times italic font-normal text-2xl sm:text-3xl text-white mb-2 tracking-wide leading-snug">
            {c.title}
          </h3>
          <p className="text-xs font-mono text-white/60 uppercase tracking-wider mb-4">
            {c.issuer}
          </p>
          <p className="text-xs text-white/70 font-light font-times leading-relaxed mb-6">
            {c.detail}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          {c.pdfLink && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={c.pdfLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 px-5 py-2.5 rounded-full shadow-lg transition-colors"
            >
              Verify Credential <ExternalLink size={12} />
            </motion.a>
          )}

          {c.isBundle && (
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 px-5 py-2.5 rounded-full shadow-lg transition-colors">
              Browse {bundleCerts.length} Programs <Layers size={13} />
            </div>
          )}

          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
            ACC-ID // 0{i + 1}
          </span>
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
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="certifications" className="min-h-screen w-full flex items-center justify-center bg-black text-white noise-overlay py-28 px-6 sm:px-12 md:px-20 border-b border-white/15 relative overflow-hidden select-none">
      
      {/* 🔮 CONCENTRIC HOLOGRAPHIC LENS RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="w-[550px] h-[550px] rounded-full border border-white/10" />
        <div className="w-[850px] h-[850px] rounded-full border border-white/5 border-dashed" />
        <div className="w-[1200px] h-[1200px] rounded-full border border-white/[0.03]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-14 border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="subtitle font-mono text-xs tracking-[0.3em] uppercase block text-white/50 mb-2">
              // 05 — Validated Expertise
            </span>
            <h2 className="font-times text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-none text-white mb-3">
              Certifications &amp; Accreditations
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl font-times leading-relaxed">
              Official academic certifications from IIT Kharagpur, Infosys Springboard, and established industry learning institutions.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-1">
            <span>ARCHIVE // 14 ACCREDITATIONS</span>
          </div>
        </motion.div>

        {/* Main 3D Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCerts.map((c, i) => (
            <CertCard 
              key={c.title} 
              c={c} 
              i={i} 
              onOpenBundle={() => setBundleOpen(true)}
              onSelectImage={setSelectedImage}
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative rounded-3xl border border-white/30 bg-black p-4 max-w-4xl w-full shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-2 mb-2 border-b border-white/15">
                <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                  // Certificate Document Preview
                </span>
                <button 
                  className="text-white font-mono text-xs uppercase tracking-widest bg-white/15 hover:bg-white hover:text-black px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5" 
                  onClick={() => setSelectedImage(null)}
                >
                  Close <X size={14} />
                </button>
              </div>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full max-h-[82vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infosys Springboard & Course Vault Modal */}
      <AnimatePresence>
        {bundleOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl overflow-y-auto flex items-center justify-center p-4 sm:p-6"
            onClick={() => setBundleOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              className="border border-white/20 bg-zinc-950 p-6 sm:p-8 rounded-3xl max-w-5xl w-full my-auto shadow-2xl relative max-h-[88vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-6 border-b border-white/15 shrink-0">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-1">
                    // Course Completion Vault
                  </span>
                  <h3 className="font-times italic text-3xl sm:text-4xl text-white font-normal">
                    Academic Coursework Archive
                  </h3>
                  <p className="text-xs text-white/60 mt-1 font-mono">
                    {bundleCerts.length} verified programs completed across computer science disciplines
                  </p>
                </div>
                <button 
                  onClick={() => setBundleOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="py-4 shrink-0">
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by course title, category, or institution..."
                    className="w-full bg-white/5 border border-white/15 rounded-full pl-11 pr-4 py-3 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Certificate Cards Grid */}
              <div className="overflow-y-auto pr-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                {filteredBundleCerts.map((cert) => (
                  <motion.div
                    layout
                    key={cert.title}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => setSelectedImage(cert.image)}
                    className="border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/40 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="relative h-28 overflow-hidden rounded-xl mb-3 border border-white/10 bg-black">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/80 text-[8px] font-mono text-white/80 border border-white/15">
                        Inspect
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mb-1">
                        <span>{cert.category}</span>
                        <span>{cert.issuer}</span>
                      </div>
                      <h4 className="font-times italic text-base text-white leading-snug group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40 shrink-0">
                <span>SHOWING {filteredBundleCerts.length} OF {bundleCerts.length} CERTIFICATES</span>
                <span>CLICK ANY CARD TO ENLARGE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;
