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

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bundleOpen, setBundleOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBundleCerts = bundleCerts.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen w-screen shrink-0 flex items-center bg-background text-foreground noise-overlay py-12 px-12 md:px-24 border-r border-border">
      <div className="container mx-auto px-6 md:px-16 relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="subtitle">Credentials</span>
          <h2>Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => c.isBundle && setBundleOpen(true)}
              className={`border border-border bg-card p-8 flex flex-col justify-between group transition-all duration-300 hover:border-foreground h-72 ${c.isBundle ? 'cursor-pointer' : ''}`}
              style={{ borderRadius: "0px" }}
            >
              <div>
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  {c.isBundle ? <Layers size={20} /> : <Award size={20} />}
                </div>
                <h3 className="font-bold uppercase text-base mb-1 tracking-wide">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 font-light">{c.issuer}</p>
              </div>

              {c.badge && !c.pdfLink && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-foreground text-[10px] font-mono font-bold tracking-widest uppercase w-fit">
                  {c.badge}
                </div>
              )}

              {c.pdfLink && (
                <a
                  href={c.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-foreground hover:underline"
                >
                  View Credential <ExternalLink size={12} />
                </a>
              )}

              {c.isBundle && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-foreground group-hover:underline">
                  Browse List <Layers size={12} className="ml-1" />
                </div>
              )}
            </motion.div>
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative border border-white/20 bg-black p-2" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-10 right-0 text-white font-mono text-xs uppercase tracking-widest hover:text-white/60"
                onClick={() => setSelectedImage(null)}
              >
                [Close]
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
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
            className="fixed inset-0 z-[999] bg-background/95 overflow-y-auto flex items-center justify-center p-6"
            onClick={() => setBundleOpen(false)}
          >
            <div 
              className="w-full max-w-5xl border border-border bg-card p-8 md:p-12 relative my-8" 
              onClick={(e) => e.stopPropagation()}
              style={{ borderRadius: "0px" }}
            >
              <button
                onClick={() => setBundleOpen(false)}
                className="absolute top-6 right-6 p-2 border border-border hover:border-foreground text-foreground transition-colors"
                style={{ borderRadius: "0px" }}
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="mb-10">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">All Credentials</span>
                <h3 className="text-3xl font-extrabold uppercase text-foreground leading-none mb-6">
                  {bundleCerts.length} Courses Completed
                </h3>

                {/* Search box input */}
                <div className="relative max-w-md border border-border flex items-center px-4 py-3 bg-secondary/35 text-sm">
                  <Search size={16} className="text-muted-foreground mr-3" />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full text-foreground placeholder:text-muted-foreground/50 font-mono"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin">
                {filteredBundleCerts.length > 0 ? (
                  filteredBundleCerts.map((cert) => (
                    <div
                      key={cert.title}
                      onClick={() => setSelectedImage(cert.image)}
                      className="group border border-border bg-background p-4 cursor-pointer hover:border-foreground transition-colors duration-300"
                      style={{ borderRadius: "0px" }}
                    >
                      <div className="relative h-40 overflow-hidden bg-black border-b border-border mb-4">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase leading-snug tracking-wide text-foreground">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center text-muted-foreground font-mono text-sm">
                    No certificates matching "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
