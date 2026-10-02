import { useEffect, useRef } from "react";

const StarCursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
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
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle pool
    const particles = [];
    const maxParticles = 90;

    // Track mouse coordinates & velocity
    let prevMouse = { x: -100, y: -100 };
    let mouse = { x: -100, y: -100 };

    // Function to draw a 4-point sparkle star (✦)
    const drawSparkle = (x, y, radius, innerRadius, rotation, opacity) => {
      const spikes = 4;
      let rot = (Math.PI / 2) * 3 + rotation;
      let step = Math.PI / spikes;

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

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.9})`;
      ctx.shadowBlur = 8;
      ctx.fill();

      // Center glowing core dot
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.shadowBlur = 12;
      ctx.fill();

      ctx.restore();
    };

    // Function to draw a mini circular stardust particle
    const drawDot = (x, y, radius, opacity) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.8})`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    };

    // Spawn a star particle at (x, y)
    const addParticle = (x, y, force = 1) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const isSparkle = Math.random() > 0.35; // 65% 4-point sparkle stars, 35% stardust dots
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 1.8 + 0.4) * force;

      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.25, // Gentle downward drift
        size: isSparkle ? Math.random() * 7 + 4 : Math.random() * 2 + 1,
        innerSizeRatio: Math.random() * 0.15 + 0.15,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.12,
        opacity: 1,
        decay: Math.random() * 0.02 + 0.018, // Lifespan ~40-60 frames
        isSparkle,
      });
    };

    // Start animation loop if not already running
    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    // Render & update particles
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.015; // Gentle cosmic gravity
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Scale down gracefully as it fades
        const currentRadius = p.size * (0.3 + 0.7 * (p.opacity / 1));

        if (p.isSparkle) {
          drawSparkle(
            p.x,
            p.y,
            currentRadius,
            currentRadius * p.innerSizeRatio,
            p.rotation,
            p.opacity
          );
        } else {
          drawDot(p.x, p.y, currentRadius, p.opacity);
        }
      }

      // If particles still exist, keep rendering; otherwise sleep to save CPU/GPU
      if (particles.length > 0) {
        animId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    // Interpolate between fast cursor movements so stars form a continuous trail
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

      // Spawn stars based on distance traveled
      if (dist > 3) {
        const steps = Math.min(Math.floor(dist / 6), 4);
        for (let i = 0; i <= steps; i++) {
          const t = steps === 0 ? 1 : i / steps;
          const interpX = prevMouse.x + dx * t;
          const interpY = prevMouse.y + dy * t;
          addParticle(interpX, interpY);
        }
        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;
        startLoop();
      }
    };

    // Mini starburst on click
    const handleClick = (e) => {
      for (let i = 0; i < 10; i++) {
        addParticle(e.clientX, e.clientY, 2.2);
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
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        mixBlendMode: "difference",
      }}
    />
  );
};

export default StarCursorTrail;
