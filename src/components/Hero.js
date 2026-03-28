/**
 * Hero Component — Main headline + newsletter form
 * "Experiencia impulsada por IA" badge REMOVED per user request
 */

import { isMobile } from '../utils/dom.js';

export function renderHero() {
  const mobile = isMobile();
  const orbSize1 = mobile ? '200px' : '400px';
  const orbSize2 = mobile ? '150px' : '300px';

  return `
    <section id="hero" class="immersive-fade relative min-h-screen flex items-center justify-center px-6 py-20 md:py-0 overflow-hidden">
      <!-- Orbs — smaller on mobile, no animation on mobile (CSS handles it) -->
      <div class="orb orb-gold" style="width: ${orbSize1}; height: ${orbSize1}; top: -10%; right: -5%;" aria-hidden="true"></div>
      <div class="orb orb-wine" style="width: ${orbSize2}; height: ${orbSize2}; bottom: -10%; left: -5%;" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <!-- Left: Headline -->
        <div class="reveal-up">
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[0.95] tracking-tightest">
            Construir<br>exige<br>
            <span class="text-gradient-gold italic">claridad.</span>
          </h1>
        </div>

        <!-- Right: Newsletter Form -->
        <div class="reveal-up delay-300 flex justify-center lg:justify-end">
          <div class="glass-card glow-border rounded-2xl p-8 md:p-10 max-w-md w-full">
            <p class="text-lg md:text-xl font-serif text-neutral-300 leading-relaxed mb-6">
              Cartas semanales sobre cómo caigo, pero también sobre cómo levantarse si se está disperso.
            </p>
            <form id="form-hero" class="space-y-4">
              <label class="label-editorial text-neutral-300/60 block mb-1">Recibe mis apuntes</label>
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
                required
                class="input-glass w-full px-4 py-3 text-base"
                autocomplete="email"
              >
              <button type="submit" class="btn-glass w-full py-3 px-6 flex items-center justify-center gap-2 text-sm uppercase tracking-editorial font-semibold">
                <span>Acompañar el proceso</span>
                <span class="spinner"></span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-up delay-700">
        <span class="label-editorial text-neutral-300/40">Descubre más</span>
        <div class="w-px h-8 bg-gradient-to-b from-tertiary/40 to-transparent"></div>
      </div>
    </section>
  `;
}
