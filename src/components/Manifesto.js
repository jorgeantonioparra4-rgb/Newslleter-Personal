/**
 * Manifesto Component — Personal bio + image
 */

export function renderManifesto() {
  return `
    <section id="manifesto" class="immersive-fade relative py-20 md:py-32 px-6 overflow-hidden">
      <div class="section-divider w-1/4 mb-16"></div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Photo -->
        <div class="reveal-up flex justify-center">
          <div class="glass-card rounded-2xl p-3 max-w-sm w-full">
            <img
              src="/jorge.jpg"
              alt="Jorge — La Trinchera"
              loading="lazy"
              decoding="async"
              class="w-full aspect-[3/4] object-cover rounded-xl"
            >
            <p class="text-center label-editorial text-neutral-300/30 mt-3 pb-1">Figura 1. — El proceso.</p>
          </div>
        </div>

        <!-- Right: Text -->
        <div class="reveal-up delay-200">
          <span class="label-editorial text-tertiary/60 block mb-4">El manifiesto</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight tracking-tightest mb-6">
            Esto no es un blog.<br>
            <span class="text-gradient-gold italic">Es un cuaderno abierto.</span>
          </h2>
          <div class="glass-card rounded-2xl p-6 md:p-8">
            <p class="text-base md:text-lg text-neutral-300/70 leading-relaxed font-serif italic mb-4">
              Empecé a escribir estas cartas porque necesitaba un espacio para pensar en voz alta. Para ordenar mi mente, obligarme a reflexionar sobre mis fallos y documentar los sistemas que me funcionan.
            </p>
            <p class="text-base md:text-lg text-neutral-300/70 leading-relaxed font-serif italic">
              No tengo la vida resuelta ni el mapa perfecto. Pero si quieres ver los pasos que doy, los muros que choco, y llevarte lo que te sirva para tu propia aventura, toma asiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
