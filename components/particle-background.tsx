"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    // Particle Class definition adapted for TypeScript
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        const isMobile = window.innerWidth < 768;
        // Slightly adjusted sizes for your theme
        this.size = isMobile
          ? Math.random() * 1.0 + 0.2
          : Math.random() * 1.5 + 0.5;
        // Slow drift speed
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x > canvasWidth + 10) this.x = -10;
        else if (this.x < -10) this.x = canvasWidth + 10;
        if (this.y > canvasHeight + 10) this.y = -10;
        else if (this.y < -10) this.y = canvasHeight + 10;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      // Handle high-DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // CSS size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Scale context to ensure sharp rendering
      ctx.scale(dpr, dpr);

      const particleCount = window.innerWidth < 768 ? 60 : 150; // Adjusted count for performance
      particles = [];
      
      // We pass innerWidth/Height because context is scaled
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(window.innerWidth, window.innerHeight));
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      particles.forEach((particle) => {
        particle.update(window.innerWidth, window.innerHeight);
        particle.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Debounce resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 200);
    };

    // Start
    init();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }} 
    />
  );
}