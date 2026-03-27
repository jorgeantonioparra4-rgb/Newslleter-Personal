/**
 * Footer — Minimal editorial footer
 */

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer id="footer" class="py-12 px-8 md:px-16 bg-neutral-300 flex flex-col md:flex-row justify-between items-center label-editorial text-primary/60" role="contentinfo">
      <p>&copy; ${year} La Trinchera.</p>
      <div class="flex gap-8 mt-4 md:mt-0">
        <a href="#" class="hover:text-secondary transition-colors duration-300">Privacidad</a>
        <a href="#" class="hover:text-secondary transition-colors duration-300">Términos</a>
      </div>
    </footer>
  `;
}
