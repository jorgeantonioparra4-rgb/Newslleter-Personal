/**
 * Animations — Intersection Observer scroll reveals + Motion Track
 * Optimized for mobile: reduced animation complexity, passive listeners,
 * and throttled scroll handlers.
 */

import { qsa, qs, isMobile, prefersReducedMotion } from './dom.js';

/**
 * Initialize scroll-based reveal animations using IntersectionObserver
 */
export function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  qsa('.reveal-up').forEach((el) => observer.observe(el));
}

/**
 * Activate elements already visible in viewport on page load
 */
export function revealVisibleElements() {
  qsa('.reveal-up').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('active');
    }
  });
}

/**
 * Initialize the Motion Track — gold scroll progress bar on the left edge
 */
export function initMotionTrack() {
  const track = qs('#motion-track');
  if (!track) return;

  const updateTrack = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    track.style.height = `${progress}%`;
  };

  window.addEventListener('scroll', updateTrack, { passive: true });
  updateTrack();
}

/**
 * Initialize smooth scroll for anchor links
 */
export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    e.preventDefault();
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/**
 * Immersive Section Fade — scroll-driven opacity + subtle parallax
 * MOBILE OPTIMIZATION: On mobile, uses a simpler opacity-only approach
 * with no translateY transforms to avoid expensive repaints.
 */
export function initImmersiveFade() {
  const sections = qsa('.immersive-fade');
  if (!sections.length) return;

  // Skip entirely if user prefers reduced motion or is on mobile
  if (prefersReducedMotion() || isMobile()) {
    sections.forEach(s => {
      s.style.opacity = '1';
      s.style.transform = 'none';
      s.style.transition = 'none';
    });
    return;
  }

  const mobile = isMobile();
  let ticking = false;

  const updateFade = () => {
    const vh = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      let opacity = 1;
      let translateY = 0;

      // Entering from bottom (fade in)
      if (rect.top > vh * 0.3) {
        const progress = Math.min((rect.top - vh * 0.3) / (vh * 0.5), 1);
        opacity = 1 - progress;
        if (!mobile) translateY = progress * 30;
      }
      // Leaving from top (fade out)
      else if (rect.bottom < vh * 0.4 && rect.bottom > 0) {
        const progress = 1 - (rect.bottom / (vh * 0.4));
        opacity = 1 - progress * 0.7;
        if (!mobile) translateY = -(progress * 15);
      }
      // Fully above viewport
      else if (rect.bottom <= 0) {
        opacity = 0.3;
      }

      opacity = Math.max(0.05, Math.min(1, opacity));

      section.style.opacity = opacity;
      if (!mobile) {
        section.style.transform = `translateY(${translateY}px)`;
      }
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateFade);
      ticking = true;
    }
  }, { passive: true });

  updateFade();
}
