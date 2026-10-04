import { useEffect, useRef } from "react";

const StarCursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices to prevent clutter on taps
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId = null;
    let isRunning = false;

    // Window size handling with High DPI support
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle pool
    const particles = [];
    const maxParticles = 60;

    let prevMouse = { x: -100, y: -100 };
    let mouse = { x: -100, y: -100 };

    // Function to draw a 4-point sparkle star (✦)
    const drawSparkle = (x, y, radius, innerRadius, rotation, opacity, isCobalt = false) => {
      const spikes = 4;
      let rot = (Math.PI / 2) * 3 + rotation;
      const step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);

      let px = 0;
      let py = -radius;
      ctx.moveTo(px, py);

      for (let i = 0; i < spikes; i++) {
        px = Math.cos(rot) * radius;
        py = Math.sin(rot) * radius;
        ctx.lineTo(px, py);
        rot += step;

        px = Math.cos(rot) * innerRadius;
        py = Math.sin(rot) * innerRadius;
        ctx.lineTo(px, py);
        rot += step;
      }
      ctx.closePath();

      if (isCobalt) {
        ctx.fillStyle = `rgba(0, 82, 255, ${opacity * 0.95})`;
        ctx.shadowColor = `rgba(0, 82, 255, ${opacity * 0.9})`;
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.shadowBlur = 6;
      }
      ctx.fill();

      // Center glowing core dot
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = isCobalt ? `rgba(191, 219, 254, ${opacity})` : `rgba(255, 255, 255, ${opacity})`;
      ctx.shadowBlur = isCobalt ? 10 : 8;
      ctx.shadowColor = isCobalt ? `rgba(0, 71, 171, ${opacity})` : `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();

      ctx.restore();
    };

    // Mini circular stardust particle
    const drawDot = (x, y, radius, opacity, isCobalt = false) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      if (isCobalt) {
        ctx.fillStyle = `rgba(0, 82, 255, ${opacity * 0.9})`;
        ctx.shadowColor = `rgba(0, 71, 171, ${opacity * 0.85})`;
        ctx.shadowBlur = 5;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.85})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.7})`;
        ctx.shadowBlur = 4;
      }
      ctx.fill();
      ctx.restore();
    };

    // Spawn a star particle at (x, y) with gentle, slow celestial physics
    const addParticle = (x, y, force = 1) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const isSparkle = Math.random() > 0.4;
      const isCobalt = Math.random() < 0.35; // ~35% cobalt blue stars/sparks!
      const angle = Math.random() * Math.PI * 2;
      // Soft, slow initial drift instead of rapid shooting
      const speed = (Math.random() * 0.35 + 0.1) * force;

      particles.push({
        x: x + (Math.random() - 0.5) * 3,
        y: y + (Math.random() - 0.5) * 3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.08, // gentle upward drift
        size: isSparkle ? Math.random() * 3.8 + 2.0 : Math.random() * 1.4 + 0.7,
        innerSizeRatio: Math.random() * 0.12 + 0.15,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.015, // Slow, peaceful twinkle
        opacity: 0.95,
        decay: Math.random() * 0.008 + 0.006, // Long, graceful lifespan (~1.8 - 2.2s)
        isSparkle,
        isCobalt,
      });
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        // Smooth friction deceleration — particles settle softly in place
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx;
        p.y += p.vy - 0.08; // very soft celestial floating upward
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentRadius = p.size * (0.35 + 0.65 * p.opacity);

        if (p.isSparkle) {
          drawSparkle(
            p.x,
            p.y,
            currentRadius,
            currentRadius * p.innerSizeRatio,
            p.rotation,
            p.opacity,
            p.isCobalt
          );
        } else {
          drawDot(p.x, p.y, currentRadius, p.opacity, p.isCobalt);
        }
      }

      if (particles.length > 0) {
        animId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (prevMouse.x === -100) {
        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;
      }

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Throttled graceful emission: spawn 1 soft particle when mouse moves smoothly
      if (dist > 18) {
        addParticle(mouse.x, mouse.y, 0.5);
        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;
        startLoop();
      }
    };

    const handleClick = (e) => {
      // Gentle burst on click
      for (let i = 0; i < 5; i++) {
        addParticle(e.clientX, e.clientY, 0.8);
      }
      startLoop();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default StarCursorTrail;
