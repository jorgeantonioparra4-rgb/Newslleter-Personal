/**
 * Manifesto — "No soy un gurú" — Glass card layout with immersive photo
 */

export function renderManifesto() {
  return `
    <section id="manifesto" class="immersive-fade py-20 sm:py-28 md:py-40 px-6 sm:px-8 md:px-16 relative">
      <!-- Section divider -->
      <div class="section-divider w-1/4 mb-16 sm:mb-24"></div>

      <!-- Floating orb for this section -->
      <div class="orb orb-wine w-[350px] h-[350px] top-0 right-0 animate-float-delayed opacity-30" aria-hidden="true"></div>

      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-20 items-center relative z-10">
        
        <!-- Photo Card with Glass Effect -->
        <div class="md:w-5/12 reveal-up w-full">
          <div class="glass-card-elevated rounded-2xl p-3 sm:p-4 pb-8 sm:pb-10 group">
            <div class="aspect-[3/4] rounded-xl relative overflow-hidden">
              <img 
                src="/jorge.jpg" 
                alt="Jorge — Constructor documentando el proceso" 
                loading="lazy"
                style="object-position: center 35%"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
              >
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div class="mt-4 sm:mt-6 text-center label-editorial text-neutral-200/30">
              Figura 1. — El Proceso.
            </div>
          </div>
        </div>

        <!-- Editorial Text -->
        <div class="md:w-7/12 reveal-up">
          <p class="text-xs tracking-editorial text-tertiary uppercase font-sans font-semibold mb-8">Manifiesto</p>
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-200 leading-[1.1] mb-8 sm:mb-10">
            No soy un gurú.<br>
            <span class="italic text-neutral-200/50">Solo estoy documentando la escalada.</span>
          </h2>
          
          <div class="glass-card rounded-2xl p-6 sm:p-8 space-y-6 text-neutral-200/60 font-sans font-light leading-relaxed text-[15px] border-l-2 border-tertiary/20">
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
