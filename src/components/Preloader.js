/**
 * Preloader Component — Loading overlay with bar animation
 */

export function renderPreloader() {
  return `
    <div id="preloader">
      <span class="text-sm font-sans font-bold uppercase tracking-editorial text-neutral-300/60">La Trinchera</span>
      <div class="preloader-bar"></div>
    </div>
  `;
}

/**
 * Dismiss preloader with a fade-out
 * @param {number} delay - ms before dismissing
 */
export function dismissPreloader(delay = 600) {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 800);
    }
  }, delay);
}
