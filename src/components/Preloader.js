/**
 * Preloader — Editorial loading screen
 */

export function renderPreloader() {
  return `
    <div id="preloader">
      <div class="text-[11px] tracking-editorial text-primary uppercase font-sans font-medium">
        Calibrando Prensa...
      </div>
    </div>
  `;
}

/**
 * Dismiss the preloader with a fade-out animation
 * @param {number} delay - ms before starting fade
 */
export function dismissPreloader(delay = 800) {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
  }, delay);
}
