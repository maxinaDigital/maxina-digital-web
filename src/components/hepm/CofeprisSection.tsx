import { ScrollReveal } from '@/components/ScrollReveal';

const ITEMS = [
  {
    norm: 'NOM-024-SSA3-2012',
    title: 'Expediente Clínico Electrónico',
    desc: 'Registro electrónico de salud estructurado, interoperable y con firma digital del médico.',
  },
  {
    norm: 'COFEPRIS / SIFSI',
    title: 'Control de Estupefacientes y Psicotrópicos',
    desc: 'Bitácora electrónica, recetas controladas y conciliación con el Sistema SIFSI de COFEPRIS.',
  },
  {
    norm: 'COFEPRIS',
    title: 'Trazabilidad de Lotes y Caducidades',
    desc: 'Cada insumo y medicamento registra lote, proveedor, fecha de caducidad y movimientos. Alertas automáticas.',
  },
  {
    norm: 'NOM-241-SSA1-2012',
    title: 'Equipos y Calibraciones',
    desc: 'Bitácora de mantenimiento preventivo, correctivo y calibración de equipos médicos por normativa.',
  },
  {
    norm: 'NOM-087-SEMARNAT',
    title: 'Gestión de RPBI',
    desc: 'Residuos Peligrosos Biológico-Infecciosos: generación, transporte y disposición con trazabilidad completa.',
  },
  {
    norm: 'SUIVE / DGE',
    title: 'Vigilancia Epidemiológica',
    desc: 'Reportes automáticos al Sistema Único de Información para la Vigilancia Epidemiológica de la SS.',
  },
  {
    norm: 'INDICAS / DGCES',
    title: 'Indicadores de Calidad',
    desc: 'Generación automatizada de los 36 indicadores de calidad en salud requeridos por la DGCES.',
  },
];

export const CofeprisSection = () => (
  <section className="py-24 px-5 md:px-15 border-t border-[rgba(45,212,191,0.12)] bg-[rgba(13,148,136,0.03)]">
    <div className="max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--hepm-teal-lt)] mb-3">// cumplimiento normativo</p>
        <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-3">
          Construido para cumplir con <span className="text-[var(--hepm-teal-lt)]">COFEPRIS</span>
        </h2>
        <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[560px] mb-14">
          No es un módulo adicional — el cumplimiento normativo está integrado en cada flujo del sistema desde el primer día.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-px bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.12)] rounded-2xl overflow-hidden">
        {ITEMS.map((item, i) => (
          <ScrollReveal key={item.norm} delay={i * 0.06}>
            <div className="flex items-start gap-5 bg-[var(--color-bg)] hover:bg-[rgba(13,148,136,0.05)] px-6 md:px-8 py-5 transition-colors group">
              {/* Check */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(13,148,136,0.15)] border border-[rgba(45,212,191,0.3)] flex items-center justify-center mt-0.5">
                <span className="text-[var(--hepm-teal-lt)] text-xs font-bold">✓</span>
              </div>
              {/* Norm badge */}
              <div className="flex-shrink-0 hidden sm:block">
                <span className="font-mono text-[9px] text-[var(--hepm-teal-lt)] bg-[rgba(13,148,136,0.1)] border border-[rgba(45,212,191,0.2)] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {item.norm}
                </span>
              </div>
              {/* Text */}
              <div>
                <h3 className="font-display text-[15px] font-semibold text-[var(--color-text)] mb-1 group-hover:text-[var(--hepm-teal-lt)] transition-colors">{item.title}</h3>
                <p className="font-light text-[13px] text-[var(--color-neutral-500)] leading-[1.7]">{item.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
