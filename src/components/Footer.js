/**
 * Footer — Glass editorial footer with gradient divider
 */

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer id="footer" class="relative py-12 px-6 sm:px-8 md:px-16" role="contentinfo">
      <!-- Top divider -->
      <div class="section-divider w-full mb-8"></div>
      
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center label-editorial text-neutral-200/30">
        <p class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-tertiary/40"></span>
          &copy; ${year} La Trinchera.
        </p>
        <div class="flex gap-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-tertiary transition-colors duration-300">Privacidad</a>
          <a href="#" class="hover:text-tertiary transition-colors duration-300">Términos</a>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="text-[9px] text-neutral-200/15 tracking-editorial uppercase font-sans">
          Experiencia diseñada con inteligencia artificial
        </p>
      </div>
    </footer>
  `;
}
