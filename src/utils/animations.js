/**
 * Animations — Intersection Observer scroll reveals + Motion Track
 */

import { qsa, qs } from './dom.js';

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

  // Observe all reveal elements
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
 * Sections fade in as they enter the viewport and fade out as they leave upward
 */
export function initImmersiveFade() {
  const sections = qsa('.immersive-fade');
  if (!sections.length) return;

  let ticking = false;

  const updateFade = () => {
    const vh = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      // Calculate how much of the section is visible
      // Enter zone: bottom of section entering viewport from below
      // Exit zone: top of section leaving viewport upward
      let opacity = 1;
      let translateY = 0;

      // Entering from bottom (fade in)
      if (rect.top > vh * 0.3) {
        // Section is below viewport threshold — fade out
        const progress = Math.min((rect.top - vh * 0.3) / (vh * 0.5), 1);
        opacity = 1 - progress;
        translateY = progress * 30;
      }
      // Leaving from top (fade out)
      else if (rect.bottom < vh * 0.4 && rect.bottom > 0) {
        const progress = 1 - (rect.bottom / (vh * 0.4));
        opacity = 1 - progress * 0.7; // Don't fully disappear
        translateY = -(progress * 15);
      }
      // Fully above viewport
      else if (rect.bottom <= 0) {
        opacity = 0.3;
      }

      // Clamp
      opacity = Math.max(0.05, Math.min(1, opacity));

      section.style.opacity = opacity;
      section.style.transform = `translateY(${translateY}px)`;
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateFade);
      ticking = true;
    }
  }, { passive: true });

  // Initial render
  updateFade();
}
