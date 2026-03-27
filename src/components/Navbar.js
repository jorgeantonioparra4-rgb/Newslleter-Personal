/**
 * Navbar — Glassmorphic floating navigation
 */

export function renderNavbar() {
  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-30 px-6 py-4 sm:px-8 md:px-12 reveal-up delay-200" role="navigation" aria-label="Navegación principal">
      <div class="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-2xl px-6 py-3">
        <div class="text-neutral-200 text-xs tracking-editorial uppercase font-semibold font-sans">
          <a href="#" class="hover:text-tertiary transition-colors duration-300 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse-glow inline-block"></span>
            La Trinchera.
          </a>
        </div>
        <div class="text-neutral-200/40 text-xs tracking-editorial uppercase font-sans text-right">
          Vol. 01 <br>
          <span class="text-[9px] mt-1 block text-tertiary/60">Documentación en vivo</span>
        </div>
      </div>
    </nav>
  `;
}
