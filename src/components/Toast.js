/**
 * Toast Notification — ephemeral feedback messages
 */

import { qs, createElement } from '../utils/dom.js';

let toastTimeout = null;

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {'success'|'error'} type - Toast variant
 * @param {number} duration - Auto-dismiss in ms
 */
export function showToast(message, type = 'success', duration = 4000) {
  // Remove existing toast
  const existing = qs('.toast');
  if (existing) existing.remove();
  if (toastTimeout) clearTimeout(toastTimeout);

  const toast = createElement(`
    <div class="toast ${type === 'error' ? 'error' : ''}" role="alert" aria-live="polite">
      ${message}
    </div>
  `);

  document.body.appendChild(toast);

  // Trigger entrance animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });
  });

  // Auto dismiss
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, duration);
}
