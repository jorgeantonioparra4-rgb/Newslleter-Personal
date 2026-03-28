/**
 * Cursor Glow — Subtle gold glow that follows the mouse (desktop only)
 */

import { isMobile } from './dom.js';

export function initCursorGlow() {
  if (isMobile()) return;

  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let active = false;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!active) {
      active = true;
      glow.style.opacity = '1';
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
    active = false;
  });

  function updatePosition() {
    if (!active) {
      requestAnimationFrame(updatePosition);
      return;
    }

    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    glow.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`;

    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}
