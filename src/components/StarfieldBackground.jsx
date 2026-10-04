import { useEffect, useRef } from "react";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const starCount = 85;
    const stars = [];
    const connectionDist = 110;

    let mouse = { x: -1000, y: -1000 };

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

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.4 + 0.4,
          speed: Math.random() * 0.04 + 0.01,
          angle: Math.random() * Math.PI * 2,
          pulse: Math.random() * Math.PI,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          isCobalt: Math.random() < 0.22,
        });
      }
    };

    // Meteors
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.01) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 70 + 35,
          speed: Math.random() * 7 + 4,
          dx: 1.4,
          dy: 0.9,
          opacity: 0.8,
        });
      }
    };

    resize();
    initStars();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      resize();
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      // Pure clear — absolutely no solid opaque fills so it's a true transparent background layer
      ctx.clearRect(0, 0, width, height);

      // Draw constellation grid paths
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.06;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Render & update stars
      stars.forEach((s) => {
        s.angle += s.speed;
        s.pulse += s.pulseSpeed;
        const driftX = Math.sin(s.angle) * 3;
        const driftY = Math.cos(s.angle) * 3;

        let targetX = s.baseX + driftX;
        let targetY = s.baseY + driftY;

        // Mouse gentle magnetic repulsion
        const dx = mouse.x - targetX;
        const dy = mouse.y - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          const pushX = (dx / dist) * force * -20;
          const pushY = (dy / dist) * force * -20;
          s.x += (targetX + pushX - s.x) * 0.1;
          s.y += (targetY + pushY - s.y) * 0.1;
        } else {
          s.x += (targetX - s.x) * 0.05;
          s.y += (targetY - s.y) * 0.05;
        }

        const currentOpacity = 0.25 + 0.25 * Math.sin(s.pulse);
        if (s.isCobalt) {
          ctx.fillStyle = `rgba(0, 82, 255, ${currentOpacity * 1.2})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render & update shooting stars
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.speed * m.dx;
        m.y += m.speed * m.dy;
        m.opacity -= 0.016;

        if (m.opacity <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        const gradient = ctx.createLinearGradient(
          m.x, m.y,
          m.x - m.length * m.dx, m.y - m.length * m.dy
        );
        gradient.addColorStop(0, `rgba(0, 82, 255, ${m.opacity * 0.9})`);
        gradient.addColorStop(0.25, `rgba(255, 255, 255, ${m.opacity * 0.8})`);
        gradient.addColorStop(1, "rgba(0, 82, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.length * m.dx, m.y - m.length * m.dy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarfieldBackground;
