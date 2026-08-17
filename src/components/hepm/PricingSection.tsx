import { ScrollReveal } from '@/components/ScrollReveal';

const PLANS = [
  {
    name: 'Básico',
    tagline: 'Para clínicas y consultorios que dan su primer paso digital.',
    features: [
      'Hasta 5 módulos de su elección',
      'Hasta 15 usuarios',
      'Expediente clínico y agenda',
      'Facturación CFDI 4.0',
      'Soporte por correo (48 h)',
      'Capacitación inicial incluida',
    ],
    cta: 'Solicitar cotización',
    highlight: false,
  },
  {
    name: 'Profesional',
    tagline: 'Para hospitales en crecimiento que necesitan control total.',
    features: [
      'Hasta 9 módulos de su elección',
      'Usuarios ilimitados',
      'Farmacia + control de lotes y caducidades',
      'Equipos y mantenimiento',
      'Soporte prioritario (24 h)',
      'Capacitación presencial incluida',
      'Integración con laboratorio y/o imagen',
    ],
    cta: 'Solicitar cotización',
    highlight: true,
  },
  {
    name: 'Empresarial',
    tagline: 'Para grupos hospitalarios o instituciones con operación compleja.',
    features: [
      'Todos los módulos incluidos',
      'Usuarios ilimitados',
      'Integraciones con sistemas existentes',
      'Soporte 24/7 con SLA garantizado',
      'Gestor de cuenta dedicado',
      'Actualizaciones normativas automáticas',
      'Reportes COFEPRIS e INDICAS incluidos',
    ],
    cta: 'Hablar con un asesor',
    highlight: false,
  },
];

export const PricingSection = () => (
  <section id="precios" className="py-24 px-5 md:px-15 border-t border-[rgba(45,212,191,0.12)]">
    <div className="max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--hepm-teal-lt)] mb-3">// planes y precios</p>
        <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-3">
          Un paquete para <span className="text-[var(--hepm-teal-lt)]">cada hospital</span>
        </h2>
        <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[560px] mb-2">
          El precio se ajusta a la cantidad de módulos, usuarios y nivel de asistencia que necesite. No hay letra pequeña — solo paga por lo que usa.
        </p>
        <p className="font-mono text-[12px] text-[var(--hepm-teal-lt)] mb-14">
          Tenemos un paquete para todos.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLANS.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.08}>
            <div className={`relative h-full flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
              plan.highlight
                ? 'border-[var(--hepm-teal)] bg-[rgba(13,148,136,0.08)] shadow-[0_0_40px_-8px_var(--hepm-teal-glow)]'
                : 'border-[var(--color-neutral-800)] bg-[var(--color-surface)] hover:border-[rgba(45,212,191,0.3)]'
            }`}>
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-white bg-[var(--hepm-teal)] px-4 py-1.5 rounded-full whitespace-nowrap">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-[22px] font-semibold tracking-[-0.5px] mb-2 ${plan.highlight ? 'text-[var(--hepm-teal-lt)]' : 'text-[var(--color-text)]'}`}>
                  {plan.name}
                </h3>
                <p className="font-light text-[13px] text-[var(--color-neutral-500)] leading-[1.6]">{plan.tagline}</p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="flex flex-col gap-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-[var(--hepm-teal-lt)] text-[13px] flex-shrink-0 mt-0.5">✓</span>
                      <span className="font-light text-[13px] text-[var(--color-neutral-400)] leading-[1.5]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-mono text-[11px] text-[var(--color-neutral-700)] mb-1">Precio personalizado según:</p>
                <p className="font-light text-[12px] text-[var(--color-neutral-600)]">módulos · usuarios · soporte requerido</p>
              </div>

              <a
                href="#contacto"
                className={`font-inter font-semibold text-[13px] text-center px-6 py-3 rounded-xl transition-all duration-200 no-underline ${
                  plan.highlight
                    ? 'bg-[var(--hepm-teal)] text-white hover:bg-[var(--hepm-emerald)] shadow-[0_8px_24px_-8px_var(--hepm-teal-glow)]'
                    : 'bg-transparent text-[var(--hepm-teal-lt)] border border-[rgba(45,212,191,0.35)] hover:bg-[rgba(13,148,136,0.08)]'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.25}>
        <p className="text-center font-mono text-[12px] text-[var(--color-neutral-700)] mt-10">
          ¿No sabe por dónde empezar? Agenda una llamada sin costo y lo asesoramos.
        </p>
      </ScrollReveal>
    </div>
  </section>
);
