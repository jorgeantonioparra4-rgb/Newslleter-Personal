/**
 * Navbar Component — Sticky navbar with brand + editorial label
 */

export function renderNavbar() {
  return `
    <nav class="fixed top-0 left-0 w-full z-30">
      <div class="glass-card mx-4 md:mx-8 mt-4 rounded-2xl px-4 md:px-8 py-3 flex items-center justify-between">
        <!-- Brand -->
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-tertiary nav-pulse" aria-hidden="true"></div>
          <span class="text-sm font-sans font-bold uppercase tracking-editorial text-neutral-300">La Trinchera.</span>
        </div>

        <!-- Issue Label -->
        <div class="text-right">
          <span class="label-editorial text-neutral-300/50 block">Vol. 01</span>
          <span class="label-editorial text-tertiary/70 block">Documentación en vivo</span>
        </div>
      </div>
    </nav>
  `;
}
