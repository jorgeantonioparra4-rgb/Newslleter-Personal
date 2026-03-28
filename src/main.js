/**
 * ═══════════════════════════════════════════
 *  LA TRINCHERA — Main Entry Point
 *  Pensamiento Claro para Constructores
 *  — Immersive Experience —
 * ═══════════════════════════════════════════
 */

// ── Styles ──
import './style.css';

// ── Components ──
import { renderPreloader, dismissPreloader } from './components/Preloader.js';
import { renderMotionTrack } from './components/MotionTrack.js';
import { renderPaperTexture } from './components/PaperTexture.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderPromiseSection } from './components/PromiseSection.js';
import { renderManifesto } from './components/Manifesto.js';
import { renderCallToAction } from './components/CallToAction.js';
import { renderFooter } from './components/Footer.js';
import { bindNewsletterForm } from './components/NewsletterForm.js';

// ── Utilities ──
import { initScrollReveal, revealVisibleElements, initMotionTrack, initSmoothScroll, initImmersiveFade } from './utils/animations.js';
import { isMobile } from './utils/dom.js';

/**
 * Compose the full page from components
 * MOBILE OPTIMIZATION: Skip heavy decorative elements on mobile
 */
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const mobile = isMobile();

  app.innerHTML = `
    <!-- Preloader -->
    ${renderPreloader()}

    <!-- Motion Track (Scroll Progress) -->
    ${renderMotionTrack()}

    <!-- Paper Grain Texture — static on mobile, no animation -->
    ${renderPaperTexture()}

    ${!mobile ? `
    <!-- Mesh Gradient Background (desktop only) -->
    <div class="mesh-gradient" aria-hidden="true"></div>

    <!-- Particle Canvas (desktop only) -->
    <canvas id="particle-canvas" aria-hidden="true"></canvas>

    <!-- Cursor Glow (desktop only) -->
    <div id="cursor-glow" aria-hidden="true"></div>
    ` : ''}

    <!-- Page Content -->
    <div class="relative z-10">
      ${renderNavbar()}
      ${renderHero()}
      ${renderPromiseSection()}
      ${renderManifesto()}
      ${renderCallToAction()}
      ${renderFooter()}
    </div>
  `;
}

/**
 * Initialize all interactive behaviors after render
 */
function initApp() {
  const mobile = isMobile();

  // 1. Bind newsletter forms (both hero and CTA)
  bindNewsletterForm('form-hero');
  bindNewsletterForm('form-cta');

  // 2. Dismiss preloader, then reveal visible elements
  dismissPreloader(600);
  setTimeout(() => {
    revealVisibleElements();
  }, 700);

  // 3. Start scroll-based animations
  initScrollReveal();

  // 4. Motion Track scroll progress
  initMotionTrack();

  // 5. Smooth scroll for anchor links
  initSmoothScroll();

  // 6. Immersive section fade on scroll (lighter on mobile)
  setTimeout(() => initImmersiveFade(), 800);

  // 7-8. Desktop-only effects
  if (!mobile) {
    // Dynamically import heavy modules only on desktop
    import('./utils/particles.js').then(({ initParticles }) => {
      initParticles();
    });
    import('./utils/cursor.js').then(({ initCursorGlow }) => {
      initCursorGlow();
    });
  }
}

// ── Bootstrap ──
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initApp();
});
