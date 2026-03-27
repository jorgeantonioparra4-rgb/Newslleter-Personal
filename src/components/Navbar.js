/**
 * Navbar — Top editorial navigation
 */

export function renderNavbar() {
  return `
    <nav id="navbar" class="w-full px-8 py-10 md:px-16 md:py-12 flex justify-between items-start reveal-up delay-200" role="navigation" aria-label="Navegación principal">
      <div class="text-primary text-xs tracking-editorial uppercase font-semibold font-sans">
        <a href="#" class="hover:text-secondary transition-colors duration-300">La Trinchera.</a>
      </div>
      <div class="text-primary/60 text-xs tracking-editorial uppercase font-sans text-right">
        Vol. 01 <br>
        <span class="text-[9px] mt-1 block">Documentación en vivo</span>
      </div>
    </nav>
  `;
}
