/**
 * Hero — Immersive landing with floating orbs, gradient text, glass form
 */

import { renderNewsletterForm } from './NewsletterForm.js';

export function renderHero() {
  return `
    <header id="hero" class="immersive-fade min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 relative pt-24 md:pt-0">
      
      <!-- Floating Orbs -->
      <div class="orb orb-gold w-[400px] h-[400px] -top-20 -left-40 animate-float opacity-60" aria-hidden="true"></div>
      <div class="orb orb-wine w-[300px] h-[300px] top-1/3 -right-20 animate-float-delayed opacity-40" aria-hidden="true"></div>
      <div class="orb orb-blue w-[500px] h-[500px] -bottom-40 left-1/3 animate-float-slow opacity-30" aria-hidden="true"></div>

      <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        
        <!-- Left Column: Imposing Headline -->
        <div class="md:col-span-7 reveal-up delay-300">
          <div class="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-[10px] uppercase tracking-editorial font-sans text-neutral-200/60">Experiencia impulsada por IA</span>
          </div>
          <h1 class="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tightest">
            <span class="text-neutral-200">Construir exige</span><br />
            <span class="italic text-gradient-gold">claridad.</span>
          </h1>
        </div>
        
        <!-- Right Column: Context & Capture -->
        <div class="md:col-span-5 flex flex-col justify-center reveal-up delay-500">
          <div class="glass-card-elevated rounded-2xl p-6 sm:p-8">
            <p class="text-base sm:text-lg text-neutral-200/70 font-serif leading-relaxed mb-8">
              Cartas semanales sobre cómo caigo, pero también sobre cómo levantarse si se está disperso.
            </p>
            ${renderNewsletterForm('hero', 'form-hero')}
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-up delay-700">
        <span class="text-[9px] uppercase tracking-editorial text-neutral-200/30 font-sans">Descubre más</span>
        <div class="w-[1px] h-8 bg-gradient-to-b from-tertiary/40 to-transparent"></div>
      </div>
    </header>
  `;
}
