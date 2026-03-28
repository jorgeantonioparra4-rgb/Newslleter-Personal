/**
 * Newsletter Form Component — handles form submission + toast
 */

import { subscribeEmail } from '../services/newsletter.js';
import { showToast } from './Toast.js';

/**
 * Bind submit handler to a newsletter form
 * @param {string} formId — id of the form element
 */
export function bindNewsletterForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[name="email"]');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (!email) return;

    // Set loading state
    form.classList.add('form-loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const result = await subscribeEmail(email);

      if (result.success) {
        showToast(result.message, 'success');
        emailInput.value = '';
      } else {
        showToast(result.message, 'error');
      }
    } catch {
      showToast('Error inesperado. Intenta de nuevo.', 'error');
    } finally {
      form.classList.remove('form-loading');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
