/**
 * Particles — Interactive floating particle field
 * DESKTOP ONLY: Completely disabled on mobile/touch devices.
 * Uses visibility API to pause when tab is not visible.
 */

import { isMobile } from './dom.js';

export function initParticles() {
  if (isMobile()) return;

  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animId;
  let isVisible = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 30000), 35);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.7 ? '212, 175, 55' : '245, 240, 230',
      });
    }
  }

  function animate() {
    if (!isVisible) {
      animId = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const len = particles.length;
    for (let i = 0; i < len; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const distSq = dx * dx + dy * dy;
      
      if (distSq < 40000) {
        const dist = Math.sqrt(distSq);
        const force = (200 - dist) / 200;
        p.vx -= (dx / dist) * force * 0.015;
        p.vy -= (dy / dist) * force * 0.015;
      }

      p.vx = Math.max(Math.min(p.vx, 0.6), -0.6);
      p.vy = Math.max(Math.min(p.vy, 0.6), -0.6);

      const margin = 50;
      if (p.x < -margin) p.x = canvas.width + margin;
      if (p.x > canvas.width + margin) p.x = -margin;
      if (p.y < -margin) p.y = canvas.height + margin;
      if (p.y > canvas.height + margin) p.y = -margin;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < len; j++) {
        const p2 = particles[j];
        const connDx = p.x - p2.x;
        const connDy = p.y - p2.y;
        const connDistSq = connDx * connDx + connDy * connDy;

        if (connDistSq < 12100) {
          const connDist = Math.sqrt(connDistSq);
          const opacity = (1 - connDist / 110) * 0.1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(animate);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      createParticles();
    }, 250);
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
  });

  resize();
  createParticles();
  animate();
}
