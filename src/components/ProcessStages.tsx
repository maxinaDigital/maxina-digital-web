'use client';

import { ProcessStageAnimation } from './StageAnimations';
import { ScrollReveal } from './ScrollReveal';

interface Stage {
  number: number;
  title: string;
  emoji: string;
  description: string[];
}

const stages: Stage[] = [
  {
    number: 1,
    title: 'Escuchamos su visión',
    emoji: '📋',
    description: [
      'Conversamos con usted y su equipo para entender sus objetivos',
      'Conocemos a fondo cómo funciona su clínica, hospital u hotel',
      'Preparamos un plan de trabajo claro, hecho a su medida',
    ],
  },
  {
    number: 2,
    title: 'Investigamos a fondo',
    emoji: '🔍',
    description: [
      'Analizamos cómo viven la experiencia sus pacientes o huéspedes',
      'Comparamos con los mejores referentes del mercado',
      'Proponemos ideas concretas para resolver sus retos',
    ],
  },
  {
    number: 3,
    title: 'Diseñamos la experiencia',
    emoji: '🎨',
    description: [
      'Creamos el diseño visual de cada pantalla, pensado para todos',
      'Usted revisa y aprueba cada paso antes de avanzar',
      'Construimos un modelo navegable para probarlo juntos',
    ],
  },
  {
    number: 4,
    title: 'Construimos su proyecto',
    emoji: '💻',
    description: [
      'Desarrollamos su sistema con los más altos estándares de calidad',
      'Conectamos todo de forma segura con lo que ya usa hoy',
      'Protegemos en todo momento la información de sus pacientes o huéspedes',
    ],
  },
  {
    number: 5,
    title: 'Ponemos todo a prueba',
    emoji: '✅',
    description: [
      'Revisamos cada detalle para que todo funcione sin errores',
      'Verificamos la seguridad y protección de los datos',
      'Su equipo prueba el sistema antes de que esté disponible',
    ],
  },
  {
    number: 6,
    title: 'Lanzamos y lo acompañamos',
    emoji: '🚀',
    description: [
      'Ponemos su proyecto en marcha con todo nuestro respaldo',
      'Damos seguimiento constante para que todo funcione bien',
      'Mejoramos continuamente según el uso real de su equipo',
    ],
  },
];

// Native CSS scroll-snap (see .snap-section / html{scroll-snap-type} in
// globals.css) advances one stage per scroll gesture — the browser's own,
// well-tested snapping engine, no custom wheel/touch/lock JavaScript.
// Each stage is a normal full-height section; ScrollReveal fades its
// content in as it snaps into view.
//
// No per-section tint overlay here on purpose — the fixed-position Aurora
// and Background3D layers already provide continuous ambient color across
// the whole page, so every stage's background reads as one seamless
// surface instead of a visible seam at each section boundary.
export const ProcessStages = () => (
  <>
    {stages.map((stage, index) => {
      const nextHref = index < stages.length - 1 ? `#etapa-${stages[index + 1].number}` : '#cta';
      return (
        <section
          key={stage.number}
          id={`etapa-${stage.number}`}
          className="snap-section relative h-screen w-full overflow-hidden flex items-center"
        >
          <ScrollReveal className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              {/* Animation */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] flex-shrink-0">
                <ProcessStageAnimation stage={stage.number} />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="font-mono text-sm md:text-base text-cyan-accent font-semibold tracking-widest uppercase">
                    Etapa {String(stage.number).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                  <span className="mr-3">{stage.emoji}</span>
                  {stage.title}
                </h3>

                <div className="space-y-3 max-w-xl mx-auto md:mx-0">
                  {stage.description.map((desc, i) => (
                    <p key={i} className="text-lg sm:text-xl lg:text-2xl text-gray-primary leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex justify-center md:justify-start gap-2">
                  {stages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === index ? 'w-10 bg-cyan-accent' : 'w-1.5 bg-blue-primary/40'
                      }`}
                    />
                  ))}
                </div>

                <a
                  href={nextHref}
                  className="mt-8 inline-flex items-center gap-2 font-outfit font-semibold text-sm uppercase tracking-wider text-cyan-accent border-2 border-cyan-accent rounded px-8 py-3 transition-all duration-300 hover:bg-cyan-accent hover:text-navy hover:shadow-glow"
                >
                  {index < stages.length - 1 ? 'Siguiente etapa' : 'Conocer más'}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      );
    })}
  </>
);
