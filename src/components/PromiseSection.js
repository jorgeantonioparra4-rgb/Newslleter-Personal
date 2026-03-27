/**
 * PromiseSection — "El mapa no es el territorio" — Content pillars
 */

const PILLARS = [
  {
    number: '01',
    title: 'Diario de Campo',
    description: 'Reflexiones sobre mis batallas diarias con la dispersión y el enfoque. Documento cómo intento mantener la claridad y la constancia mientras construyo desde cero.',
    accent: false,
  },
  {
    number: '02',
    title: 'Sistemas Aplicados',
    description: 'Los hábitos, herramientas y métodos que voy descubriendo y que realmente me ayudan a avanzar. Cero teoría vacía, solo lo que pongo a prueba y mido.',
    accent: false,
  },
  {
    number: '03',
    title: 'Transparencia Radical',
    description: 'La fricción real de crear algo que importe. Escribo sobre los obstáculos con los que tropiezo y celebro las pequeñas victorias de cada semana.',
    accent: true,
  },
];

function renderPillar({ number, title, description, accent }) {
  const numberClass = accent
    ? 'text-tertiary'
    : 'text-primary/40';

  return `
    <div class="reveal-up group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start">
      <div class="sm:col-span-2 ${numberClass} text-xs font-semibold tracking-editorial uppercase mt-2">
        ${number}
      </div>
      <div class="sm:col-span-10">
        <h3 class="text-2xl font-serif text-primary mb-4">${title}</h3>
        <p class="text-primary/70 font-sans font-light text-[15px] leading-relaxed max-w-lg">
          ${description}
        </p>
      </div>
    </div>
  `;
}

export function renderPromiseSection() {
  return `
    <section id="promise" class="immersive-fade py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 bg-neutral-200 mt-12 sm:mt-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          <!-- Asymmetric Side Title -->
          <div class="md:col-span-4 reveal-up">
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              El mapa no es <br>
              <span class="italic text-secondary">el territorio.</span>
            </h2>
          </div>

          <!-- Deep-List Pillars -->
          <div class="md:col-span-8 flex flex-col gap-10 sm:gap-16">
            ${PILLARS.map(renderPillar).join('')}
          </div>
          
        </div>
      </div>
    </section>
  `;
}
