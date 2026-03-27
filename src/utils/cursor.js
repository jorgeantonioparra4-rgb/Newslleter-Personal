/**
 * Cursor Glow — Subtle gold glow that follows the mouse (desktop only)
 */

export function initCursorGlow() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    glow.style.opacity = '1';
  }, { passive: true });

  // Hide when mouse leaves
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  // Smooth follow with lerp
  function updatePosition() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}
