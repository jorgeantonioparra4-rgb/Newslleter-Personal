/**
 * Promise Section — 3 content pillars
 */

export function renderPromiseSection() {
  const pillars = [
    {
      num: '01',
      icon: `<svg class="w-5 h-5 text-tertiary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`,
      title: 'Diario de Campo',
      desc: 'Reflexiones sobre mis batallas diarias con la dispersión y el enfoque. Documento cómo intento mantener la claridad y la constancia mientras construyo desde cero.',
    },
    {
      num: '02',
      icon: `<svg class="w-5 h-5 text-tertiary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
      title: 'Sistemas Aplicados',
      desc: 'Los hábitos, herramientas y métodos que voy descubriendo y que realmente me ayudan a avanzar. Cero teoría vacía, solo lo que pongo a prueba y mido.',
    },
    {
      num: '03',
      icon: `<svg class="w-5 h-5 text-tertiary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
      title: 'Transparencia Radical',
      desc: 'La fricción real de crear algo que importe. Escribo sobre los obstáculos con los que tropiezo y celebro las pequeñas victorias de cada semana.',
    },
  ];

  return `
    <section id="promise" class="immersive-fade relative py-20 md:py-32 px-6 overflow-hidden">
      <div class="section-divider w-1/3 mb-16"></div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Section Label -->
        <div class="reveal-up">
          <span class="label-editorial text-tertiary/60 block mb-4">Lo que encontrarás</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight tracking-tightest">
            El mapa no es<br>
            <span class="text-gradient-gold italic">el territorio.</span>
          </h2>
        </div>

        <!-- Right: Pillar Cards -->
        <div class="space-y-6">
          ${pillars.map((p, i) => `
            <div class="pillar-card glass-card rounded-2xl p-6 md:p-8 reveal-up delay-${(i + 1) * 200}">
              <div class="flex items-start gap-4 mb-3">
                <div>
                  <span class="label-editorial text-tertiary/50">${p.num}</span>
                  <div class="mt-1">${p.icon}</div>
                </div>
                <h3 class="text-lg md:text-xl font-serif font-semibold text-neutral-300">${p.title}</h3>
              </div>
              <p class="text-sm md:text-base text-neutral-300/60 leading-relaxed pl-9">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
