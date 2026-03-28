/**
 * Footer Component
 */

export function renderFooter() {
  return `
    <footer class="relative py-12 px-6 text-center">
      <div class="section-divider w-1/3 mb-8"></div>
      
      <div class="max-w-4xl mx-auto">
        <p class="text-sm text-neutral-300/30 mb-2">
          © ${new Date().getFullYear()} La Trinchera. Pensamiento claro para constructores.
        </p>
        <p class="label-editorial text-neutral-300/15">
          Cada carta es un paso. Cada paso cuenta.
        </p>
      </div>
    </footer>
  `;
}
