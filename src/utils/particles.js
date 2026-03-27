/**
 * Particles — Interactive floating particle field
 * Creates an ambient, AI-powered feel with subtle moving dots
 */

export function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    // Limit particle count based on viewport
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 60);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        // Gold or white particles
        color: Math.random() > 0.7 ? '212, 175, 55' : '245, 240, 230',
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Update position with ultra-smooth drifting
      p.x += p.vx;
      p.y += p.vy;

      // Mouse interaction: subtle attraction + repulsion based on distance
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200) {
        const force = (200 - dist) / 200;
        // Subtle magnetic pull towards the mouse glow
        p.vx -= (dx / dist) * force * 0.015;
        p.vy -= (dy / dist) * force * 0.015;
      }

      // Very slight ambient drift normalization
      p.vx = Math.max(Math.min(p.vx, 0.6), -0.6);
      p.vy = Math.max(Math.min(p.vy, 0.6), -0.6);

      // Wrap around edges comfortably
      const margin = 50;
      if (p.x < -margin) p.x = canvas.width + margin;
      if (p.x > canvas.width + margin) p.x = -margin;
      if (p.y < -margin) p.y = canvas.height + margin;
      if (p.y > canvas.height + margin) p.y = -margin;

      // Draw particle glow
      const pulse = Math.sin(Date.now() / 1500 + i) * 0.15 + 0.85;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha * pulse})`;
      ctx.fill();

      // Draw intelligent connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const connDx = p.x - p2.x;
        const connDy = p.y - p2.y;
        const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

        if (connDist < 150) {
          const opacity = (1 - connDist / 150) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Gradient-like connection
          const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
          gradient.addColorStop(0, `rgba(${p.color}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${p2.color}, ${opacity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.6 * (1 - connDist / 150);
          ctx.stroke();
        }
      }
    });

    animId = requestAnimationFrame(animate);
  }

  // Events
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  // Init
  resize();
  createParticles();
  animate();
}
