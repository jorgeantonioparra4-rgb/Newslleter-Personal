/**
 * Call To Action Component — bottom newsletter signup
 */

import { isMobile } from '../utils/dom.js';

export function renderCallToAction() {
  const mobile = isMobile();
  const orbSize1 = mobile ? '200px' : '400px';
  const orbSize2 = mobile ? '150px' : '300px';

  return `
    <section id="cta" class="immersive-fade relative py-20 md:py-32 px-6 overflow-hidden">
      <div class="orb orb-gold" style="width: ${orbSize1}; height: ${orbSize1}; bottom: -15%; right: -10%;" aria-hidden="true"></div>
      <div class="orb orb-wine" style="width: ${orbSize2}; height: ${orbSize2}; top: -15%; left: -5%;" aria-hidden="true"></div>

      <div class="max-w-2xl mx-auto text-center relative z-10">
        <div class="reveal-up">
          <span class="label-editorial text-tertiary/60 block mb-4">¿Empezamos?</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight tracking-tightest mb-8">
            Toma asiento en<br>
            <span class="text-gradient-gold italic">la trinchera.</span>
          </h2>
        </div>

        <div class="reveal-up delay-300 glass-card glow-border rounded-2xl p-8 md:p-10">
          <form id="form-cta" class="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              class="input-glass w-full px-4 py-3 text-base text-center"
              autocomplete="email"
            >
            <button type="submit" class="btn-glass w-full py-3 px-6 flex items-center justify-center gap-2 text-sm uppercase tracking-editorial font-semibold">
              <span>Quiero construir con claridad</span>
              <span class="spinner"></span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}
