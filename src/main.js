/**
 * ═══════════════════════════════════════════
 *  LA TRINCHERA — Main Entry Point
 *  Pensamiento Claro para Constructores
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

/**
 * Compose the full page from components
 */
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Preloader -->
    ${renderPreloader()}

    <!-- Motion Track (Scroll Progress) -->
    ${renderMotionTrack()}

    <!-- Paper Grain Texture -->
    ${renderPaperTexture()}

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
  // 1. Bind newsletter forms (both hero and CTA)
  bindNewsletterForm('form-hero');
  bindNewsletterForm('form-cta');

  // 2. Dismiss preloader, then reveal visible elements
  dismissPreloader(800);
  setTimeout(() => {
    revealVisibleElements();
  }, 900);

  // 3. Start scroll-based animations
  initScrollReveal();

  // 4. Motion Track scroll progress
  initMotionTrack();

  // 5. Smooth scroll for anchor links
  initSmoothScroll();

  // 6. Immersive section fade on scroll
  setTimeout(() => initImmersiveFade(), 1000);
}

// ── Bootstrap ──
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initApp();
});
