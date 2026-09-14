import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Layers, X, Search, CheckCircle } from "lucide-react";
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
  {
    title: "Programming in Java",
    issuer: "NPTEL – IIT Kharagpur",
    badge: "Elite + Silver (82%)",
    highlight: true,
    pdfLink: "/certs/programming-in-java.pdf",
    icon: Award,
    desc: "12-week comprehensive certification in advanced object-oriented programming, concurrency, and Java internals.",
  },
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    badge: "Certified Specialist",
    highlight: true,
    pdfLink: "/certs/java-foundation-certification.png",
    icon: CheckCircle,
    desc: "Enterprise core Java certification spanning OOP paradigms, algorithms, and modular design patterns.",
  },
  {
    title: "Infosys Technical Bundles",
    issuer: `${bundleCerts.length} Verified Modules`,
    badge: "View All 12",
    highlight: true,
    pdfLink: null,
    isBundle: true,
    icon: Layers,
    desc: "DSA, DBMS (SQL/NoSQL), Agile, Software Engineering, Python, and Full Stack web fundamentals.",
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bundleOpen, setBundleOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBundleCerts = bundleCerts.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            05 // CREDENTIALS & CERTIFICATIONS
          </span>
          <h2>INDUSTRY CERTIFICATIONS</h2>
        </motion.div>

        {/* 3 Core Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => c.isBundle && setBundleOpen(true)}
              className={`glass-card p-8 flex flex-col justify-between group hover:border-white/50 hover:bg-white/[0.05] transition-all duration-300 min-h-[300px] ${
                c.isBundle ? "cursor-pointer" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <c.icon size={22} />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-white/[0.05] text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                    {c.badge}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl uppercase tracking-tight text-white mb-1">
                  {c.title}
                </h3>
                <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">
                  {c.issuer}
                </p>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                {c.pdfLink ? (
                  <a
                    href={c.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:underline"
                  >
                    <span>View Verified Credential</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <button
                    onClick={() => setBundleOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white group-hover:underline"
                  >
                    <span>Browse All 12 Course Certificates</span>
                    <Layers size={13} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Course Bundle Modal */}
      <AnimatePresence>
        {bundleOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBundleOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] rounded-2xl border border-white/20 bg-black/95 p-6 sm:p-10 shadow-2xl flex flex-col relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setBundleOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1">
                  Credential Vault
                </span>
                <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-4">
                  {bundleCerts.length} Verified Course Completions
                </h3>

                {/* Search Input */}
                <div className="relative max-w-md rounded-full border border-white/20 bg-white/[0.04] flex items-center px-4 py-2.5">
                  <Search size={15} className="text-white/40 mr-2.5" />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full text-xs font-mono text-white placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Grid with Scroll */}
              <div className="flex-1 overflow-y-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-2 scrollbar-thin">
                {filteredBundleCerts.map((cert) => (
                  <div
                    key={cert.title}
                    onClick={() => setSelectedImage(cert.image)}
                    className="glass-card p-3 cursor-pointer group hover:border-white/50 transition-colors flex flex-col justify-between"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black mb-3">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-xs uppercase tracking-tight text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Individual Certificate */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl border border-white/25 bg-black p-3"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/80 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate Zoom"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
