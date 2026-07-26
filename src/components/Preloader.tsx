import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const greetings = [
  "HELLO WORLD",
  "SHAIK SADIQ",
  "MERN DEVELOPER",
  "PROBLEM SOLVER",
  "PORTFOLIO // 2026"
];

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 380);

    return () => clearTimeout(interval);
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center font-mono overflow-hidden"
        >
          {/* Animated corner text grid */}
          <div className="absolute top-8 left-8 text-[10px] text-zinc-500 tracking-widest hidden sm:block">
            INITIALIZING SYSTEM...
          </div>
          <div className="absolute top-8 right-8 text-[10px] text-zinc-500 tracking-widest hidden sm:block">
            HYDERABAD, IN
          </div>
          <div className="absolute bottom-8 left-8 text-[10px] text-zinc-500 tracking-widest hidden sm:block">
            © 2026 SK MDSADIQ
          </div>
          
          <div className="flex flex-col items-center">
            {/* Smooth scaling grid indicator */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-8 h-8 border border-zinc-700 border-t-white mb-8"
            />
            
            <div className="overflow-hidden h-12 flex items-center">
              <motion.h1
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest text-center"
              >
                {greetings[index]}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
