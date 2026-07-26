import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicLoader = ({ onComplete }) => {
  const [cometsConverged, setCometsConverged] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Comets converge at 1.2 seconds
    const convergeTimeout = setTimeout(() => {
      setCometsConverged(true);
    }, 1200);

    // Flash and panels open after 1.8 seconds
    const exitTimeout = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(convergeTimeout);
      clearTimeout(exitTimeout);
    };
  }, []);

  // Comet motion vectors (diagonal entry coordinates to center)
  const cometVariants = {
    topLeft: {
      initial: { x: "-50vw", y: "-50vh", opacity: 0.8 },
      converge: { x: 0, y: 0, opacity: 1, transition: { duration: 1.1, ease: "easeIn" } }
    },
    topRight: {
      initial: { x: "50vw", y: "-50vh", opacity: 0.8 },
      converge: { x: 0, y: 0, opacity: 1, transition: { duration: 1.1, ease: "easeIn" } }
    },
    bottomLeft: {
      initial: { x: "-50vw", y: "50vh", opacity: 0.8 },
      converge: { x: 0, y: 0, opacity: 1, transition: { duration: 1.1, ease: "easeIn" } }
    },
    bottomRight: {
      initial: { x: "50vw", y: "50vh", opacity: 0.8 },
      converge: { x: 0, y: 0, opacity: 1, transition: { duration: 1.1, ease: "easeIn" } }
    }
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center select-none pointer-events-none">
          
          {/* Top Panel Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-black border-b border-zinc-900"
          />

          {/* Bottom Panel Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "100%",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
            }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black border-t border-zinc-900"
          />

          {/* Core Comet Canvas */}
          {!cometsConverged && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* TL Comet */}
              <motion.div
                variants={cometVariants.topLeft}
                initial="initial"
                animate="converge"
                className="w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-white rotate-45 origin-right absolute"
              />
              {/* TR Comet */}
              <motion.div
                variants={cometVariants.topRight}
                initial="initial"
                animate="converge"
                className="w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white/80 to-white -rotate-45 origin-left absolute"
              />
              {/* BL Comet */}
              <motion.div
                variants={cometVariants.bottomLeft}
                initial="initial"
                animate="converge"
                className="w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-white -rotate-45 origin-right absolute"
              />
              {/* BR Comet */}
              <motion.div
                variants={cometVariants.bottomRight}
                initial="initial"
                animate="converge"
                className="w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white/80 to-white rotate-45 origin-left absolute"
              />
            </div>
          )}

          {/* convergence flash */}
          <AnimatePresence>
            {cometsConverged && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 40 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                className="absolute w-8 h-8 rounded-full bg-white z-[100] blur-sm"
              />
            )}
          </AnimatePresence>

          {/* Logo center fade-in reveal */}
          <div className="absolute z-10 flex flex-col items-center justify-center font-mono">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={cometsConverged ? { scale: 1.1, opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-white text-lg font-bold tracking-[0.3em] uppercase"
            >
              SADIQ.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={cometsConverged ? { opacity: 0.5 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-500 text-[9px] tracking-[0.2em] uppercase mt-2"
            >
              INITIALIZING ENGINE
            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLoader;
