/**
 * PromiseSection — "El mapa no es el territorio" — Glass pillars with hover effects
 */

const PILLARS = [
  {
    number: '01',
    title: 'Diario de Campo',
    description: 'Reflexiones sobre mis batallas diarias con la dispersión y el enfoque. Documento cómo intento mantener la claridad y la constancia mientras construyo desde cero.',
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    accent: false,
  },
  {
    number: '02',
    title: 'Sistemas Aplicados',
    description: 'Los hábitos, herramientas y métodos que voy descubriendo y que realmente me ayudan a avanzar. Cero teoría vacía, solo lo que pongo a prueba y mido.',
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    accent: false,
  },
  {
    number: '03',
    title: 'Transparencia Radical',
    description: 'La fricción real de crear algo que importe. Escribo sobre los obstáculos con los que tropiezo y celebro las pequeñas victorias de cada semana.',
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    accent: true,
  },
];

function renderPillar({ number, title, description, icon, accent }) {
  const accentBorder = accent
    ? 'glow-border'
    : '';
  const numberClass = accent
    ? 'text-tertiary'
    : 'text-neutral-200/30';
  const iconClass = accent
    ? 'text-tertiary'
    : 'text-neutral-200/40';

  return `
    <div class="pillar-card glass-card rounded-2xl p-6 sm:p-8 reveal-up ${accentBorder} group">
      <div class="flex items-start gap-4 sm:gap-6">
        <div class="flex flex-col items-center gap-3">
          <span class="${numberClass} text-xs font-semibold tracking-editorial uppercase font-sans">${number}</span>
          <div class="${iconClass} transition-colors duration-300 group-hover:text-tertiary">${icon}</div>
        </div>
        <div class="flex-1">
          <h3 class="text-xl sm:text-2xl font-serif text-neutral-200 mb-3 group-hover:text-gradient-gold transition-all duration-300">${title}</h3>
          <p class="text-neutral-200/50 font-sans font-light text-sm sm:text-[15px] leading-relaxed">
            ${description}
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderPromiseSection() {
  return `
    <section id="promise" class="immersive-fade py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 relative">
      <!-- Section divider -->
      <div class="section-divider w-1/3 mb-16 sm:mb-24"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          <!-- Asymmetric Side Title -->
          <div class="md:col-span-4 reveal-up md:sticky md:top-32 md:self-start">
            <span class="label-editorial text-tertiary/60 mb-4 block">Lo que encontrarás</span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-200 leading-tight">
              El mapa no es <br>
              <span class="italic text-gradient-gold">el territorio.</span>
            </h2>
          </div>

          <!-- Deep-List Pillars -->
          <div class="md:col-span-8 flex flex-col gap-6">
            ${PILLARS.map(renderPillar).join('')}
          </div>
          
        </div>
      </div>
    </section>
  `;
}
