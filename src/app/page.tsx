import { Nav } from '@/components/Nav';
import { BrandMark } from '@/components/BrandMark';
import { HBrandMark } from '@/components/HBrandMark';
import { DPosBrandMark } from '@/components/DPosBrandMark';
import { TechMarquee } from '@/components/TechMarquee';
import { ContactForm } from '@/components/ContactForm';
import { Background3D } from '@/components/Background3D';
import { Spotlight } from '@/components/Spotlight';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GlassTiltPanel } from '@/components/GlassTiltPanel';
import Link from 'next/link';

export const metadata = {
  title: 'Maxina Digital — Software a medida · Aguascalientes',
  description:
    'Construimos sistemas a medida para hospitales, PyMEs y empresas. React, Next.js, Node.js, .NET Core. Aguascalientes, México.',
};

const SERVICES = [
  {
    num: '01 — web',
    icon: '🌐',
    name: 'Desarrollo Web',
    desc: 'Sitios institucionales, portales y plataformas interactivas con tecnología moderna. Optimizados para buscadores y enfocados en conversión.',
    tags: ['React', 'Next.js', 'Node.js', 'WordPress', 'SEO'],
  },
  {
    num: '02 — mobile',
    icon: '📱',
    name: 'Aplicaciones Móviles',
    desc: 'Apps nativas y multiplataforma para iOS y Android. Desde sistemas de citas médicas hasta gestión de inventarios y portales financieros.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'APIs'],
  },
  {
    num: '03 — sistemas',
    icon: '⚙️',
    name: 'Sistemas a Medida',
    desc: 'ERP, CRM, control de inventario, facturación CFDI 4.0 y automatización de procesos. Integraciones con SAT, bancos y sistemas existentes.',
    tags: ['Bases de datos', 'Cloud', 'Integraciones', 'Reportes'],
  },
];

const PROCESO = [
  { num: '01 — diagnóstico', name: 'Entendemos tu negocio', desc: 'Reunión inicial para definir objetivos, usuarios, alcance y presupuesto. Sin tecnicismos — hablamos tu idioma.' },
  { num: '02 — diseño', name: 'Prototipamos primero', desc: 'Diseñamos la experiencia visual y funcional. Tú apruebas antes de que escribamos una línea de código.' },
  { num: '03 — desarrollo', name: 'Código de calidad', desc: 'Construimos con código limpio y escalable. Avances semanales para que siempre sepas cómo va tu proyecto.' },
  { num: '04 — lanzamiento', name: 'Publicamos y acompañamos', desc: 'Lanzamos, probamos y capacitamos a tu equipo. Soporte post-entrega incluido en todos los planes.' },
];

const HEPM_MODULES = [
  { icon: '📋', name: 'Expediente Clínico Digital' },
  { icon: '🛏️', name: 'Gestión de Camas' },
  { icon: '💊', name: 'Farmacia y Medicamentos' },
  { icon: '🔬', name: 'Laboratorio y Estudios' },
  { icon: '🩺', name: 'Admisiones y Urgencias' },
  { icon: '📅', name: 'Agenda y Citas' },
  { icon: '🔧', name: 'Equipos y Mantenimiento' },
  { icon: '🧾', name: 'Facturación CFDI 4.0' },
];

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Background layers */}
      <div className="aurora" aria-hidden="true">
        <span className="a1" /><span className="a2" /><span className="a3" />
      </div>
      <Background3D />
      <Spotlight />

      {/* Fixed nav */}
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[60px] px-5 md:px-15 overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium text-[var(--color-accent-400)] uppercase tracking-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-400)] animate-pulse" />
                Aguascalientes · Centro de México
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-2 flex">
                <BrandMark className="w-12 h-12" />
              </div>
              <h1 className="font-display text-[clamp(38px,4.5vw,62px)] font-semibold leading-[1.08] tracking-[-2px] text-[var(--color-text)]">
                Software que<br />
                <span className="gradient-glow-text">escala.</span><br />
                Equipos que<br />entregan.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--color-neutral-400)] leading-[1.8] max-w-[460px]">
                Construimos sistemas a medida para hospitales, manufactura y PyMEs. Código real, arquitecturas sólidas, resultados medibles.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="flex items-center gap-3.5">
                <a href="#contacto" className="font-inter font-medium text-sm px-7 py-3 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-600)] transition-colors shadow-[0_8px_24px_-8px_var(--glow)] hover:-translate-y-px">
                  Iniciar proyecto
                </a>
                <a href="#portafolio" className="font-inter text-[13px] text-[var(--color-neutral-400)] flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors">
                  Ver portafolio <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'Node.js', '.NET / C#', 'Prisma', 'SQL Server', 'PostgreSQL', 'Vercel'].map(t => (
                  <span key={t} className="font-mono text-[11px] text-[var(--color-neutral-700)] border border-[var(--color-neutral-800)] px-2.5 py-1 rounded-full hover:border-[var(--color-accent-700)] hover:text-[var(--color-accent-400)] transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — metrics panel */}
          <ScrollReveal delay={0.5} className="hidden md:block">
            <GlassTiltPanel className="bg-[var(--color-surface)] border border-[var(--color-neutral-800)] rounded-2xl overflow-hidden">
              {/* MacOS dots */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-neutral-800)] bg-[rgba(255,255,255,0.02)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[11px] text-[var(--color-neutral-700)] ml-1">sistemas-produccion / overview</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[var(--color-neutral-800)]">
                {[
                  { n: '100k+', lbl: 'Registros procesados / día', w: '90%' },
                  { n: '4+', lbl: 'Sectores atendidos', w: '65%' },
                  { n: '<24h', lbl: 'Respuesta inicial', w: '55%' },
                  { n: '3+', lbl: 'Sistemas en producción', w: '45%' },
                ].map(({ n, lbl, w }) => (
                  <div key={lbl} className="bg-[var(--color-bg)] px-5 py-5 hover:bg-[var(--color-surface)] transition-colors">
                    <div className="font-display text-[30px] font-semibold text-[var(--color-text)] tracking-[-1.5px] leading-none">{n}</div>
                    <div className="font-mono text-[11px] text-[var(--color-neutral-700)] mt-1.5">{lbl}</div>
                    <div className="mt-3 h-px bg-[var(--color-surface)]">
                      <div className="h-px bg-gradient-to-r from-[var(--color-accent)] to-[var(--hepm-teal-lt)] opacity-70" style={{ width: w }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between border-t border-[var(--color-neutral-800)]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-neutral-700)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                  todos los sistemas operando
                </div>
                <span className="font-mono text-[10px] text-[#28c840] bg-[rgba(40,200,64,0.1)] border border-[rgba(40,200,64,0.2)] px-2 py-0.5 rounded-full">online</span>
              </div>
            </GlassTiltPanel>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <TechMarquee />

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="relative z-10 py-24 px-5 md:px-15">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--color-accent-400)] mb-3">// servicios</p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-2">
              Qué <span className="text-[var(--color-accent-400)]">construimos</span>
            </h2>
            <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[500px] mb-12">
              Desde una landing page hasta un sistema empresarial completo — construimos exactamente lo que tu negocio necesita.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-neutral-800)] border border-[var(--color-neutral-800)] rounded-2xl overflow-hidden">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.num} delay={i * 0.08}>
                <GlassTiltPanel className="h-full bg-[var(--color-bg)] hover:bg-[var(--color-surface)] p-10 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <p className="font-mono text-[10px] text-[var(--color-neutral-700)] tracking-[2px] uppercase mb-6">{svc.num}</p>
                  <div className="w-11 h-11 rounded-xl bg-[rgba(145,132,217,0.08)] border border-[rgba(145,132,217,0.2)] flex items-center justify-center text-xl mb-4">{svc.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2.5 tracking-[-0.3px]">{svc.name}</h3>
                  <p className="text-[13.5px] text-[var(--color-neutral-400)] leading-[1.75] font-light">{svc.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {svc.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] text-[var(--color-neutral-700)] border border-[var(--color-neutral-800)] px-2.5 py-1 rounded-full group-hover:text-[var(--color-accent-400)] group-hover:border-[rgba(145,132,217,0.3)] transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassTiltPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTAFOLIO ── */}
      <section id="portafolio" className="relative z-10 py-24 px-5 md:px-15 border-t border-[var(--color-neutral-800)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--color-accent-400)] mb-3">// portafolio</p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-2">
              Sistemas que <span className="text-[var(--color-accent-400)]">mueven industrias</span>
            </h2>
            <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[500px] mb-12">
              No construimos páginas — construimos plataformas que transforman la operación de empresas reales.
            </p>
          </ScrollReveal>

          {/* H-EPM card — featured */}
          <ScrollReveal className="mb-4">
            <div className="rounded-2xl border border-[var(--color-neutral-800)] hover:border-[rgba(45,212,191,0.35)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.15),0_24px_50px_-28px_var(--hepm-teal-glow)]">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=80&auto=format&fit=crop"
                  alt="H-EPM Sistema de Gestión Hospitalaria"
                  className="w-full h-full object-cover brightness-[0.35] saturate-50 hover:brightness-50 hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-[10px] font-medium tracking-[1.5px] uppercase bg-[var(--hepm-teal)] text-white px-3 py-1.5 rounded-full">
                    ERP · Hospitales & Clínicas
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  {[['12', 'Módulos'], ['COFEPRIS', 'Cumplimiento'], ['24/7', 'En la nube']].map(([n, l]) => (
                    <div key={l} className="bg-[rgba(22,24,38,0.88)] backdrop-blur-lg border border-[var(--color-neutral-800)] rounded-lg px-3.5 py-2.5 text-center min-w-[80px]">
                      <span className="block font-display text-xl font-semibold text-[var(--color-text)] tracking-[-0.5px]">{n}</span>
                      <span className="block font-mono text-[9px] text-[var(--color-neutral-700)] mt-0.5">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
                  <div>
                    <p className="font-mono text-[10px] font-medium tracking-[2.5px] uppercase text-[var(--hepm-teal-lt)] mb-2.5">Hospitales · Clínicas · Gestión Médica</p>
                    <div className="flex items-center gap-4">
                      {/* Clickable H logo → /hepm */}
                      <Link href="/hepm" className="flex-shrink-0 hover:scale-110 transition-transform" title="Ver página H-EPM">
                        <HBrandMark className="w-12 h-12" />
                      </Link>
                      <h3 className="font-display text-[28px] font-semibold text-[var(--color-text)] tracking-[-0.8px] leading-[1.15]">
                        H-EPM — Sistema de Gestión Hospitalaria
                      </h3>
                    </div>
                  </div>
                  <p className="font-light text-[13px] text-[var(--color-neutral-700)] italic leading-[1.6] max-w-[280px] text-right md:text-right border-r border-[var(--hepm-teal)] pr-5 flex-shrink-0">
                    "Una plataforma de clase mundial diseñada con médicos, para médicos."
                  </p>
                </div>

                <p className="text-[14px] text-[var(--color-neutral-400)] leading-[1.8] font-light mb-6">
                  Cuando un hospital opera sin visibilidad total, pierde eficiencia operativa — y eso tiene un costo real cada día. H-EPM unifica en una sola plataforma inteligente toda la operación: desde la admisión de un paciente y el control de insumos con fechas de caducidad, hasta el cierre contable del mes. En tiempo real, desde cualquier dispositivo, cumpliendo con COFEPRIS.
                </p>

                {/* Modules */}
                <div className="border-t border-[var(--color-neutral-800)] pt-6">
                  <p className="font-mono text-[9px] font-medium tracking-[3px] uppercase text-[var(--color-neutral-700)] mb-4">// módulos principales</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--color-neutral-800)] border border-[var(--color-neutral-800)] rounded-xl overflow-hidden">
                    {HEPM_MODULES.map(({ icon, name }) => (
                      <div key={name} className="bg-[var(--color-bg)] px-4 py-5 hover:bg-[var(--color-surface)] transition-colors group">
                        <span className="text-xl mb-2 block">{icon}</span>
                        <span className="font-display text-[13px] font-semibold text-[var(--color-text)] leading-[1.25] group-hover:text-[var(--hepm-teal-lt)] transition-colors">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 items-center">
                  {['COFEPRIS', 'NOM-024', 'Cloud 24/7', 'CFDI 4.0', 'Expediente Digital'].map(t => (
                    <span key={t} className="font-mono text-[10px] text-[var(--hepm-teal-lt)] bg-[rgba(13,148,136,0.08)] border border-[rgba(45,212,191,0.2)] px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                  <Link href="/hepm" className="ml-auto font-inter font-semibold text-[13px] text-[var(--hepm-teal-lt)] border border-[rgba(45,212,191,0.35)] px-5 py-2 rounded-lg hover:bg-[rgba(45,212,191,0.08)] transition-all no-underline">
                    Conocer H-EPM →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* D-POS card */}
          <ScrollReveal>
            <div className="rounded-2xl border border-[var(--color-neutral-800)] hover:border-[rgba(212,168,67,0.35)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_50px_-28px_rgba(212,168,67,0.25)]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop"
                    alt="D-POS Sistema de Punto de Venta"
                    className="w-full h-full object-cover brightness-40 saturate-50 hover:brightness-50 hover:scale-[1.03] transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[10px] font-medium tracking-[1.5px] uppercase bg-[#9a6820] text-[#f4d070] px-3 py-1.5 rounded-full border border-[rgba(212,168,67,0.35)]">
                      POS · PyME
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="font-mono text-[10px] font-medium tracking-[2px] uppercase text-[#d4a843] mb-2.5">PyME · Comercio & Servicios</p>
                  <div className="flex items-center gap-4 mb-3">
                    <DPosBrandMark className="w-12 h-12 flex-shrink-0" />
                    <h3 className="font-display text-[22px] font-semibold text-[var(--color-text)] tracking-[-0.5px] leading-[1.2]">D-POS — Punto de Venta</h3>
                  </div>
                  <p className="text-[13px] text-[var(--color-neutral-400)] leading-[1.75] font-light mb-2">
                    Las pequeñas y medianas empresas merecen tecnología de nivel enterprise. Venta rápida con lector de código de barras, control de inventario en tiempo real, facturación CFDI 4.0, corte de caja automatizado y dashboard con los indicadores que importan.
                  </p>
                  <p className="text-[13px] text-[var(--color-accent-400)] italic mb-6">Porque crecer no debería ser complicado.</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Venta rápida', 'CFDI 4.0', 'Inventario real-time', 'Múltiples cajas', 'Corte de caja', 'App móvil'].map(t => (
                      <span key={t} className="font-mono text-[10px] text-[var(--color-neutral-700)] border border-[var(--color-neutral-800)] px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section id="proceso" className="relative z-10 py-24 px-5 md:px-15 border-t border-[var(--color-neutral-800)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--color-accent-400)] mb-3">// proceso</p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-12">
              Un proceso <span className="text-[var(--color-accent-400)]">claro,</span> sin sorpresas
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-neutral-800)] border border-[var(--color-neutral-800)] rounded-2xl overflow-hidden">
            {PROCESO.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="h-full bg-[var(--color-bg)] hover:bg-[var(--color-surface)] px-6 py-9 transition-colors relative group overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <p className="font-mono text-[10px] text-[var(--color-accent-400)] tracking-[2px] uppercase mb-4">{step.num}</p>
                  <h3 className="font-display text-[17px] font-semibold text-[var(--color-text)] mb-2.5 tracking-[-0.2px]">{step.name}</h3>
                  <p className="text-[13px] text-[var(--color-neutral-400)] leading-[1.75] font-light">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="relative z-10 py-24 px-5 md:px-15 border-t border-[var(--color-neutral-800)] bg-[var(--color-surface)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left info */}
          <ScrollReveal>
            <span className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--color-accent-400)] mb-4 block">// contacto</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold leading-[1.12] tracking-[-1.2px] text-[var(--color-text)] mb-4">
              ¿Tienes un proyecto<br />en <span className="text-[var(--color-accent-400)]">mente?</span>
            </h2>
            <p className="text-[14px] text-[var(--color-neutral-400)] font-light leading-[1.8] mb-10">
              Cuéntanos qué necesitas. Respondemos en menos de 24 horas con una propuesta inicial sin costo.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '✉️', lbl: 'Correo', val: 'contacto@maxinadigital.com' },
                { icon: '📍', lbl: 'Ubicación', val: 'Aguascalientes, México · Todo el país' },
                { icon: '⏱️', lbl: 'Horario', val: 'Lun – Vie · 9:00 am – 7:00 pm' },
              ].map(({ icon, lbl, val }) => (
                <div key={lbl} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(145,132,217,0.08)] border border-[rgba(145,132,217,0.2)] flex items-center justify-center text-[15px] flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <span className="font-mono text-[10px] font-medium text-[var(--color-neutral-700)] tracking-[1.5px] uppercase block mb-0.5">{lbl}</span>
                    <span className="text-[14px] text-[var(--color-neutral-400)] font-light">{val}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <ContactForm source="maxina" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-[var(--color-neutral-800)] py-7 px-5 md:px-15 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <BrandMark className="w-7 h-7" />
          <span className="font-display font-semibold text-sm text-[var(--color-text)] tracking-tight">Maxina Digital</span>
        </div>
        <p className="font-mono text-[12px] text-[var(--color-neutral-700)]">© 2026 Maxina Digital · Aguascalientes, México</p>
        <p className="font-mono text-[12px] text-[var(--color-neutral-700)]">contacto@maxinadigital.com</p>
      </footer>
    </div>
  );
}
