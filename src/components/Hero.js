/**
 * Hero — Main landing section with asymmetric grid layout
 */

import { renderNewsletterForm } from './NewsletterForm.js';

export function renderHero() {
  return `
    <header id="hero" class="immersive-fade min-h-[85vh] sm:min-h-[80vh] flex flex-col justify-center px-6 sm:px-8 md:px-16 relative mt-8 md:mt-0">
      <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        
        <!-- Left Column: Imposing Headline -->
        <div class="md:col-span-8 reveal-up delay-300">
          <h1 class="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.95] text-primary tracking-tightest">
            Construir exige <br />
            <span class="italic text-secondary">claridad.</span>
          </h1>
        </div>
        
        <!-- Right Column: Context & Capture -->
        <div class="md:col-span-4 flex flex-col justify-center reveal-up delay-500">
          <p class="text-base sm:text-lg md:text-xl text-primary/80 font-serif leading-relaxed mb-8 sm:mb-10">
            Cartas semanales sobre cómo caigo, pero también sobre cómo levantarse si se está disperso.
          </p>

          ${renderNewsletterForm('hero', 'form-hero')}
        </div>
      </div>
    </header>
  `;
}
