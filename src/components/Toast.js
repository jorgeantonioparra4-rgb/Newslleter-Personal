/**
 * Toast Component — Notification popups
 */

/**
 * Show a toast notification
 * @param {string} message - Toast message text
 * @param {'success'|'error'|'info'} type - Toast type
 * @param {number} duration - Duration in ms before auto-dismiss
 */
export function showToast(message, type = 'info', duration = 4000) {
  // Remove any existing toast
  const existing = document.getElementById('toast-notification');
  if (existing) existing.remove();

  const colors = {
    success: 'border-green-500/30 text-green-400',
    error: 'border-red-500/30 text-red-400',
    info: 'border-tertiary/30 text-tertiary',
  };

  const icons = {
    success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
    error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  };

  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.className = `fixed bottom-8 right-8 z-50 glass-card rounded-xl border ${colors[type]} px-5 py-4 flex items-center gap-3 shadow-lg`;
  toast.style.cssText = 'animation: fadeInUp 0.4s ease-out; max-width: 400px;';
  toast.innerHTML = `
    ${icons[type]}
    <span class="text-sm font-sans">${message}</span>
  `;

  document.body.appendChild(toast);

  // Add fade-in-up animation via inline style
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOutDown {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(10px); }
    }
  `;
  toast.appendChild(style);

  // Auto-dismiss
  setTimeout(() => {
    toast.style.animation = 'fadeOutDown 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
