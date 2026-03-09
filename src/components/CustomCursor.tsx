import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "hsl(200, 100%, 60%)",
  "hsl(260, 80%, 65%)",
  "hsl(330, 80%, 60%)",
  "hsl(160, 80%, 50%)",
];

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const particleId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 8) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        const newParticles: Particle[] = Array.from({ length: Math.min(3, Math.floor(distance / 10)) }, () => ({
          id: particleId.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: 2 + Math.random() * 4,
          opacity: 0.6 + Math.random() * 0.4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        }));
        setParticles(prev => [...prev.slice(-30), ...newParticles]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, input, textarea, [role='button'], .magnetic-btn");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles(prev => prev.slice(1));
    }, 400);
    return () => clearTimeout(timer);
  }, [particles]);

  if (isTouchDevice.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ cursor: "none" }}>
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: p.opacity, scale: 1, x: p.x - p.size / 2, y: p.y - p.size / 2 }}
          animate={{ opacity: 0, scale: 0, y: p.y - p.size / 2 - 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}

      {/* Outer glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: trailX,
          y: trailY,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          translateX: isHovering ? -30 : -20,
          translateY: isHovering ? -30 : -20,
          border: `1.5px solid ${isHovering ? "hsl(200, 100%, 60%)" : "hsl(200, 100%, 60% / 0.4)"}`,
          background: isHovering ? "hsl(200, 100%, 60% / 0.08)" : "transparent",
          scale: isClicking ? 0.8 : 1,
          transition: "width 0.3s, height 0.3s, border 0.3s, background 0.3s",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: springX,
          y: springY,
          width: isClicking ? 12 : 8,
          height: isClicking ? 12 : 8,
          translateX: isClicking ? -6 : -4,
          translateY: isClicking ? -6 : -4,
          background: "hsl(200, 100%, 60%)",
          boxShadow: "0 0 15px hsl(200, 100%, 60% / 0.6), 0 0 30px hsl(200, 100%, 60% / 0.3)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
