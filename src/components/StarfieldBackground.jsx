import { useEffect, useRef } from "react";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Track state sizes
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star configuration
    const starCount = 80;
    const stars = [];
    const connectionDist = 120;

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000 };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.05 + 0.01,
          angle: Math.random() * Math.PI * 2,
          driftSpeed: Math.random() * 0.2 + 0.05
        });
      }
      stars.forEach(s => {
        s.baseX = s.x;
        s.baseY = s.y;
      });
    };

    // Shooting stars
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.015) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          dx: 1.5,
          dy: 1,
          opacity: 1
        });
      }
    };

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
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      // Clear with very slight transparency to leave star trails
      ctx.clearRect(0, 0, width, height);

      // Draw faint nebula-like background layers in dark mode
      const isDarkMode = document.documentElement.classList.contains("dark");
      if (isDarkMode) {
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, width, height);
        
        // Faint glowing mesh spots
        const radial = ctx.createRadialGradient(
          width / 2, height / 2, 10,
          width / 2, height / 2, width * 0.8
        );
        radial.addColorStop(0, "rgba(25, 25, 25, 0.1)");
        radial.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radial;
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(0, 0, width, height);
      }

      // Draw constellation grid paths
      ctx.strokeStyle = isDarkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Render & update stars
      ctx.fillStyle = isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)";
      stars.forEach((s) => {
        // Star drift (sine wave coordinates)
        s.angle += s.speed;
        const driftX = Math.sin(s.angle) * 4;
        const driftY = Math.cos(s.angle) * 4;

        let targetX = s.baseX + driftX;
        let targetY = s.baseY + driftY;

        // Mouse repulsion physics
        const dx = mouse.x - targetX;
        const dy = mouse.y - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120;
          const pushX = (dx / dist) * force * -24;
          const pushY = (dy / dist) * force * -24;
          s.x += (targetX + pushX - s.x) * 0.1;
          s.y += (targetY + pushY - s.y) * 0.1;
        } else {
          s.x += (targetX - s.x) * 0.05;
          s.y += (targetY - s.y) * 0.05;
        }

        // Draw star dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render & update meteors
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.speed * m.dx;
        m.y += m.speed * m.dy;
        m.opacity -= 0.015;

        if (m.opacity <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${m.opacity * 0.3})` 
          : `rgba(0, 0, 0, ${m.opacity * 0.2})`;
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
