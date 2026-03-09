import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  mode?: "words" | "letters" | "lines";
  once?: boolean;
}

const TextReveal = ({ children, className = "", delay = 0, staggerDelay = 0.03, mode = "words", once = true }: TextRevealProps) => {
  if (mode === "letters") {
    const letters = children.split("");
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        className={`inline-block ${className}`}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, rotateX: -90 },
              visible: {
                opacity: 1, y: 0, rotateX: 0,
                transition: { delay: delay + i * staggerDelay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const words = children.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
            visible: {
              opacity: 1, y: 0, filter: "blur(0px)",
              transition: { delay: delay + i * (staggerDelay * 3), duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface SplitRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export const SplitReveal = ({ children, className = "", delay = 0, direction = "up" }: SplitRevealProps) => {
  const dirMap = {
    up: { hidden: { y: "100%", opacity: 0 }, visible: { y: "0%", opacity: 1 } },
    left: { hidden: { x: "100%", opacity: 0 }, visible: { x: "0%", opacity: 1 } },
    right: { hidden: { x: "-100%", opacity: 0 }, visible: { x: "0%", opacity: 1 } },
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={dirMap[direction].hidden}
        whileInView={dirMap[direction].visible}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
