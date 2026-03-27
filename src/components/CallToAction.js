/**
 * CallToAction — Final CTA with inverted color scheme (Deep Blue background)
 * "Ambitious Moment" — the decisive subscription point
 */

import { renderNewsletterForm } from './NewsletterForm.js';

export function renderCallToAction() {
  return `
    <section id="cta" class="immersive-fade py-20 sm:py-28 md:py-32 px-6 sm:px-8 md:px-16 bg-primary text-neutral-100 text-center relative overflow-hidden">
      <div class="max-w-3xl mx-auto relative z-10 reveal-up flex flex-col items-center">
        <h2 class="text-3xl sm:text-5xl md:text-7xl font-serif italic font-light mb-6 sm:mb-8">
          Únete a la bitácora.
        </h2>
        <p class="font-sans font-light text-neutral-100/70 mb-10 sm:mb-14 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
          Un correo a la semana con mis apuntes desde el barro. Sin fórmulas mágicas, solo el proceso crudo.
        </p>
        
        ${renderNewsletterForm('cta', 'form-cta')}
      </div>
    </section>
  `;
}
