import { ScrollReveal } from '@/components/ScrollReveal';

const MODULES = [
  {
    icon: '📋',
    name: 'Expediente Clínico Digital',
    desc: 'Historia clínica, notas de evolución, prescripciones y resultados. Cumple NOM-024-SSA3.',
    tags: ['NOM-024', 'Electrónico', 'FHIR'],
  },
  {
    icon: '🛏️',
    name: 'Gestión de Camas',
    desc: 'Censo hospitalario en tiempo real. Ocupación, disponibilidad y traslados al instante.',
    tags: ['Censo', 'Real-time', 'SUIVE'],
  },
  {
    icon: '💊',
    name: 'Farmacia y Medicamentos',
    desc: 'Control de lotes, caducidades y stock mínimo. Alerta automática antes de vencer. Control de estupefacientes.',
    tags: ['Lotes', 'Caducidades', 'RPBI'],
  },
  {
    icon: '🔬',
    name: 'Laboratorio y Estudios',
    desc: 'Solicitudes, procesamiento de resultados y entrega automática al expediente clínico. Sin papel.',
    tags: ['Lab', 'Imagen', 'Expediente'],
  },
  {
    icon: '🩺',
    name: 'Admisiones y Urgencias',
    desc: 'Ingreso rápido de pacientes, triage estructurado, clasificación Manchester y seguimiento en tiempo real.',
    tags: ['Triage', 'Urgencias', 'Admisión'],
  },
  {
    icon: '📅',
    name: 'Agenda y Citas',
    desc: 'Calendario por médico y especialidad. Recordatorios automáticos por WhatsApp. Citas presenciales y telemedicina.',
    tags: ['WhatsApp', 'Citas', 'Telemedicina'],
  },
  {
    icon: '🏥',
    name: 'Quirófanos y Procedimientos',
    desc: 'Programación de cirugías, bitácora de intervenciones y control de material quirúrgico por procedimiento.',
    tags: ['Quirófanos', 'Bitácora', 'Instrumental'],
  },
  {
    icon: '🔧',
    name: 'Equipos y Mantenimiento',
    desc: 'Inventario de activos médicos, plan de mantenimiento preventivo y correctivo, bitácora de calibraciones COFEPRIS.',
    tags: ['Activos', 'PM/CM', 'Calibración'],
  },
  {
    icon: '🧾',
    name: 'Facturación (CFDI 4.0)',
    desc: 'Desglose por aseguradora, paciente particular o empresa. Complementos de pago. Conciliación automática.',
    tags: ['CFDI 4.0', 'Aseguradoras', 'CxC'],
  },
  {
    icon: '👥',
    name: 'Recursos Humanos',
    desc: 'Médicos, enfermeras y personal administrativo: turnos, expedientes laborales, nómina y evaluaciones.',
    tags: ['Turnos', 'Nómina', 'RRHH'],
  },
  {
    icon: '📦',
    name: 'Compras e Insumos',
    desc: 'Flujo completo: solicitud → autorización → orden de compra → recepción. Trazabilidad RPBI incluida.',
    tags: ['OC', 'RPBI', 'Trazabilidad'],
  },
  {
    icon: '📊',
    name: 'Reportes e Inteligencia',
    desc: 'Dashboards ejecutivos, indicadores INDICAS, reportes COFEPRIS y SUIVE exportables en un clic.',
    tags: ['INDICAS', 'COFEPRIS', 'BI'],
  },
];

export const ModulesGrid = () => (
  <section id="modulos" className="py-24 px-5 md:px-15 border-t border-[rgba(45,212,191,0.12)]">
    <div className="max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--hepm-teal-lt)] mb-3">// módulos del sistema</p>
        <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-3">
          Todo lo que su hospital <span className="text-[var(--hepm-teal-lt)]">necesita</span>
        </h2>
        <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[540px] mb-14">
          12 módulos integrados en una sola plataforma. Contrate solo lo que usa hoy — active más cuando crezca.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.12)] rounded-2xl overflow-hidden">
        {MODULES.map((mod, i) => (
          <ScrollReveal key={mod.name} delay={(i % 4) * 0.06}>
            <div className="h-full bg-[var(--color-bg)] hover:bg-[rgba(13,148,136,0.05)] px-5 py-6 transition-colors relative group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-[var(--hepm-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="text-2xl mb-3 block">{mod.icon}</span>
              <h3 className="font-display text-[14px] font-semibold text-[var(--color-text)] mb-2 leading-[1.3] group-hover:text-[var(--hepm-teal-lt)] transition-colors">{mod.name}</h3>
              <p className="font-light text-[12px] text-[var(--color-neutral-500)] leading-[1.65]">{mod.desc}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {mod.tags.map(t => (
                  <span key={t} className="font-mono text-[9px] text-[var(--hepm-teal-lt)] bg-[rgba(13,148,136,0.1)] border border-[rgba(45,212,191,0.2)] px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
