/**
 * NewsletterForm — Reusable email capture form component
 * Used in Hero section and CTA section with different variants
 */

import { subscribeEmail } from '../services/newsletter.js';
import { showToast } from './Toast.js';

/**
 * Render the newsletter form
 * @param {'hero'|'cta'} variant - Visual variant
 * @param {string} formId - Unique form ID
 * @returns {string} HTML string
 */
export function renderNewsletterForm(variant = 'hero', formId = 'form-hero') {
  if (variant === 'cta') {
    return `
      <form id="${formId}" class="flex flex-col sm:flex-row gap-0 w-full max-w-lg mx-auto shadow-2xl" novalidate>
        <input
          type="email"
          placeholder="Tu mejor correo electrónico"
          required
          aria-label="Correo electrónico"
          class="w-full py-4 px-6 bg-neutral-100 text-primary border-none focus:outline-none font-sans rounded-none"
        >
        <button
          type="submit"
          class="bg-secondary text-neutral-100 px-8 py-4 font-sans font-semibold tracking-editorial uppercase text-xs whitespace-nowrap hover:bg-[#5a252b] transition-colors rounded-none flex items-center justify-center gap-2"
        >
          <span>Suscribirse</span>
          <span class="spinner"></span>
        </button>
      </form>
    `;
  }

  // Default: Hero variant
  return `
    <form id="${formId}" class="w-full group" novalidate>
      <div class="flex flex-col gap-6">
        <div class="w-full relative">
          <label for="${formId}-email" class="label-editorial text-primary/50 mb-2 block">Recibe mis apuntes</label>
          <input
            id="${formId}-email"
            type="email"
            placeholder="Ingresa tu correo"
            required
            aria-label="Correo electrónico"
            class="input-editorial w-full py-3 text-lg font-serif"
          >
        </div>
        <button
          type="submit"
          class="btn-editorial w-full py-4 font-sans text-xs tracking-editorial uppercase font-semibold flex justify-center items-center gap-2"
        >
          <span>Acompañar el proceso</span>
          <span class="spinner"></span>
          <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </form>
  `;
}

/**
 * Bind submit handler to a newsletter form
 * @param {string} formId - The form's ID
 */
export function bindNewsletterForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput?.value?.trim();
    const button = form.querySelector('button[type="submit"]');

    if (!email) {
      showToast('Por favor ingresa tu correo.', 'error');
      emailInput?.focus();
      return;
    }

    // Set loading state
    form.classList.add('form-loading');
    button.disabled = true;

    // Hide arrow, show spinner
    const arrow = form.querySelector('.arrow-icon');
    if (arrow) arrow.style.display = 'none';

    try {
      const result = await subscribeEmail(email);

      if (result.success) {
        showToast(result.message, 'success');
        emailInput.value = '';
      } else {
        showToast(result.message, 'error');
      }
    } catch (error) {
      showToast('Ocurrió un error inesperado.', 'error');
    } finally {
      // Reset loading state
      form.classList.remove('form-loading');
      button.disabled = false;
      if (arrow) arrow.style.display = '';
    }
  });
}
