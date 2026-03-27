/**
 * Manifesto — "No soy un gurú" — About Me / Stoic Monolith layout
 */

export function renderManifesto() {
  return `
    <section id="manifesto" class="immersive-fade py-20 sm:py-28 md:py-40 px-6 sm:px-8 md:px-16 bg-neutral-300">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-20 items-center">
        
        <!-- Photo Card with Tonal Lift -->
        <div class="md:w-5/12 reveal-up w-full">
          <div class="bg-neutral-100 p-4 pb-12 tonal-lift w-full">
            <div class="aspect-[3/4] bg-neutral-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Constructor documentando el proceso" 
                loading="lazy"
                class="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out"
              >
              <!-- Subtle sand overlay -->
              <div class="absolute inset-0 bg-neutral-300 opacity-10 pointer-events-none"></div>
            </div>
            <div class="mt-6 text-center label-editorial text-primary/50">
              Figura 1. — El Proceso.
            </div>
          </div>
        </div>

        <!-- Editorial Text -->
        <div class="md:w-7/12 reveal-up">
          <p class="text-xs tracking-editorial text-secondary uppercase font-sans font-semibold mb-8">Manifiesto</p>
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-primary leading-[1.1] mb-8 sm:mb-10">
            No soy un gurú.<br>
            <span class="italic text-primary/70">Solo estoy documentando la escalada.</span>
          </h2>
          
          <div class="space-y-6 text-primary/80 font-sans font-light leading-relaxed text-[15px] max-w-lg border-l border-tertiary/30 pl-8">
            <p>
              La mayoría te vende la cima de la montaña. Yo apenas estoy encontrando mi camino hacia arriba.
            </p>
            <p>
              Este espacio nació como una bitácora personal: una forma de estructurar mi mente, obligarme a reflexionar sobre mis fallos y documentar los sistemas que me sirven para no olvidarlos.
            </p>
            <p>
              No tengo la vida resuelta ni el mapa perfecto. Pero si quieres ver los pasos que doy, los muros que choco, y llevarte lo que te sirva para tu propia aventura, toma asiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
