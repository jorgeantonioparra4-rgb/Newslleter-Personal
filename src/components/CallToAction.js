/**
 * CallToAction — Immersive glass CTA with orbs and gradient
 */

import { renderNewsletterForm } from './NewsletterForm.js';

export function renderCallToAction() {
  return `
    <section id="cta" class="immersive-fade py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-16 relative overflow-hidden">
      <!-- Orbs -->
      <div class="orb orb-gold w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 animate-float opacity-40" aria-hidden="true"></div>
      <div class="orb orb-wine w-[300px] h-[300px] bottom-0 -left-20 animate-float-delayed opacity-30" aria-hidden="true"></div>

      <!-- Section divider -->
      <div class="section-divider w-1/3 mb-16 sm:mb-24"></div>

      <div class="max-w-3xl mx-auto relative z-10 reveal-up flex flex-col items-center text-center">
        <div class="glass-card-elevated glow-border rounded-3xl px-8 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 w-full">
          <h2 class="text-3xl sm:text-5xl md:text-6xl font-serif italic font-light mb-6 sm:mb-8 text-neutral-200">
            Únete a la bitácora.
          </h2>
          <p class="font-sans font-light text-neutral-200/50 mb-10 sm:mb-14 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
            Un correo a la semana con mis apuntes desde el barro. Sin fórmulas mágicas, solo el proceso crudo.
          </p>
          
          ${renderNewsletterForm('cta', 'form-cta')}
        </div>
      </div>
    </section>
  `;
}
