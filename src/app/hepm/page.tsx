import Link from 'next/link';
import { HBrandMark } from '@/components/HBrandMark';
import { Background3D } from '@/components/Background3D';
import { Spotlight } from '@/components/Spotlight';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GlassTiltPanel } from '@/components/GlassTiltPanel';
import { ContactForm } from '@/components/ContactForm';
import { ModulesGrid } from '@/components/hepm/ModulesGrid';
import { CofeprisSection } from '@/components/hepm/CofeprisSection';
import { PricingSection } from '@/components/hepm/PricingSection';

export const metadata = {
  title: 'H-EPM — Sistema de Gestión Hospitalaria | Maxina Digital',
  description:
    'Sistema integral para hospitales y clínicas. Control total de expedientes, camas, farmacia, equipos y cumplimiento COFEPRIS. Diseñado para médicos.',
};

const VALUE_PROPS = [
  {
    icon: '⚡',
    title: 'Curva de aprendizaje rápida',
    desc: 'Interfaz pensada para médicos, enfermeras y personal administrativo sin formación técnica. Flujos simples, resultados inmediatos.',
  },
  {
    icon: '🔒',
    title: 'Control estricto COFEPRIS',
    desc: 'Lotes, caducidades, equipos, expedientes — todo trazable, auditable y conforme a normativas de la SS y COFEPRIS desde el día uno.',
  },
  {
    icon: '💰',
    title: 'Se ajusta a su presupuesto',
    desc: 'Paquetes por módulo, usuarios y nivel de soporte. Empiece con lo esencial y crezca cuando lo necesite. Siempre hay un paquete para usted.',
  },
];

export default function HepmPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Background — same aurora layers but tinted teal */}
      <div className="aurora hepm-aurora" aria-hidden="true">
        <span className="a1" /><span className="a2" /><span className="a3" />
      </div>
      <Background3D />
      <Spotlight />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-15 h-[60px] bg-[rgba(22,24,38,0.88)] backdrop-blur-xl border-b border-[rgba(45,212,191,0.12)]">
        <Link href="/" className="flex items-center gap-2 no-underline text-[var(--color-neutral-500)] hover:text-[var(--color-text)] transition-colors font-mono text-[12px]">
          ← Maxina Digital
        </Link>
        <div className="flex items-center gap-2.5">
          <HBrandMark className="w-7 h-7" />
          <span className="font-display font-semibold text-sm text-[var(--hepm-teal-lt)] tracking-tight">H-EPM</span>
        </div>
        <a
          href="#contacto"
          className="font-inter font-semibold text-[13px] px-4 py-2 rounded-lg bg-[var(--hepm-teal)] text-white hover:bg-[var(--hepm-emerald)] transition-colors no-underline shadow-[0_4px_16px_-4px_var(--hepm-teal-glow)]"
        >
          Solicitar demo
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[60px] px-5 md:px-15 overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium text-[var(--hepm-teal-lt)] uppercase tracking-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--hepm-teal-lt)] animate-pulse" />
                Sistema de Gestión Hospitalaria
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-2 flex">
                <HBrandMark className="w-16 h-16" />
              </div>
              <h1 className="font-display text-[clamp(36px,4vw,58px)] font-semibold leading-[1.08] tracking-[-2px]">
                El sistema que su hospital{' '}
                <span style={{
                  background: 'linear-gradient(110deg, #2dd4bf, #0d9488, #2dd4bf)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'hue-shift 8s ease infinite',
                }}>
                  necesitaba.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--color-neutral-400)] leading-[1.8] max-w-[460px]">
                Diseñado con médicos. Cumple con COFEPRIS. Se adapta a su presupuesto.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#contacto" className="font-inter font-semibold text-sm px-7 py-3 rounded-lg bg-[var(--hepm-teal)] text-white hover:bg-[var(--hepm-emerald)] transition-colors shadow-[0_8px_24px_-8px_var(--hepm-teal-glow)] hover:-translate-y-px">
                  Solicitar demo
                </a>
                <a href="#modulos" className="font-inter text-[13px] text-[var(--color-neutral-400)] flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors">
                  Ver módulos →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="flex flex-wrap gap-1.5">
                {['COFEPRIS', 'NOM-024', 'CFDI 4.0', 'Nube 24/7', 'SUIVE', 'INDICAS'].map(t => (
                  <span key={t} className="font-mono text-[11px] text-[var(--hepm-teal-lt)] bg-[rgba(13,148,136,0.08)] border border-[rgba(45,212,191,0.2)] px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — metrics panel */}
          <ScrollReveal delay={0.5} className="hidden md:block">
            <GlassTiltPanel className="bg-[var(--color-surface)] border border-[rgba(45,212,191,0.15)] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(45,212,191,0.12)] bg-[rgba(13,148,136,0.04)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[11px] text-[var(--color-neutral-700)] ml-1">h-epm / panel-hospitalario</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[rgba(45,212,191,0.08)]">
                {[
                  { n: '12', lbl: 'Módulos disponibles', w: '100%' },
                  { n: '~30 días', lbl: 'Implementación típica', w: '75%' },
                  { n: '∞', lbl: 'Usuarios simultáneos', w: '100%' },
                  { n: '100%', lbl: 'Cumplimiento COFEPRIS', w: '100%' },
                ].map(({ n, lbl, w }) => (
                  <div key={lbl} className="bg-[var(--color-bg)] px-5 py-5 hover:bg-[rgba(13,148,136,0.04)] transition-colors">
                    <div className="font-display text-[28px] font-semibold text-[var(--hepm-teal-lt)] tracking-[-1px] leading-none">{n}</div>
                    <div className="font-mono text-[11px] text-[var(--color-neutral-700)] mt-1.5">{lbl}</div>
                    <div className="mt-3 h-px bg-[var(--color-surface)]">
                      <div className="h-px bg-gradient-to-r from-[var(--hepm-teal)] to-[var(--hepm-teal-lt)] opacity-70" style={{ width: w }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between border-t border-[rgba(45,212,191,0.12)]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-neutral-700)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                  sistema operando en la nube
                </div>
                <span className="font-mono text-[10px] text-[#28c840] bg-[rgba(40,200,64,0.1)] border border-[rgba(40,200,64,0.2)] px-2 py-0.5 rounded-full">live</span>
              </div>
            </GlassTiltPanel>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--hepm-teal-lt)] uppercase tracking-widest">Explorar</span>
          <span className="text-xl animate-bounce text-[var(--hepm-teal-lt)]">↓</span>
        </div>
      </section>

      {/* ── PROPUESTA DE VALOR ── */}
      <section className="relative z-10 py-20 px-5 md:px-15 border-t border-[rgba(45,212,191,0.12)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.12)] rounded-2xl overflow-hidden">
          {VALUE_PROPS.map((vp, i) => (
            <ScrollReveal key={vp.title} delay={i * 0.08}>
              <div className="h-full bg-[var(--color-bg)] hover:bg-[rgba(13,148,136,0.05)] p-9 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--hepm-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-3xl mb-5">{vp.icon}</div>
                <h3 className="font-display text-[18px] font-semibold text-[var(--color-text)] mb-3 tracking-[-0.3px] group-hover:text-[var(--hepm-teal-lt)] transition-colors">{vp.title}</h3>
                <p className="font-light text-[13.5px] text-[var(--color-neutral-400)] leading-[1.75]">{vp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MÓDULOS ── */}
      <ModulesGrid />

      {/* ── COFEPRIS ── */}
      <CofeprisSection />

      {/* ── PRECIOS ── */}
      <PricingSection />

      {/* ── CONTACTO ── */}
      <section id="contacto" className="relative z-10 py-24 px-5 md:px-15 border-t border-[rgba(45,212,191,0.12)] bg-[rgba(13,148,136,0.03)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <ScrollReveal>
            <span className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--hepm-teal-lt)] mb-4 block">// contacto</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold leading-[1.12] tracking-[-1.2px] text-[var(--color-text)] mb-4">
              Hablemos sobre<br />su <span className="text-[var(--hepm-teal-lt)]">institución</span>
            </h2>
            <p className="text-[14px] text-[var(--color-neutral-400)] font-light leading-[1.8] mb-10">
              Cuéntenos el tamaño de su hospital o clínica, los módulos que le interesan y le enviamos una propuesta sin costo en menos de 24 horas.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '✉️', lbl: 'Correo', val: 'contacto@maxinadigital.com' },
                { icon: '📍', lbl: 'Ubicación', val: 'Aguascalientes, México · Todo el país' },
                { icon: '⏱️', lbl: 'Respuesta', val: 'Menos de 24 horas hábiles' },
              ].map(({ icon, lbl, val }) => (
                <div key={lbl} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.25)] flex items-center justify-center text-[15px] flex-shrink-0 mt-0.5">{icon}</div>
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
            <ContactForm source="hepm" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-[rgba(45,212,191,0.12)] py-7 px-5 md:px-15 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <HBrandMark className="w-7 h-7" />
          <span className="font-display font-semibold text-sm text-[var(--hepm-teal-lt)]">H-EPM</span>
        </div>
        <p className="font-mono text-[12px] text-[var(--color-neutral-700)]">H-EPM es un producto de Maxina Digital · Aguascalientes, México</p>
        <Link href="/" className="font-mono text-[12px] text-[var(--color-neutral-700)] hover:text-[var(--color-text)] transition-colors no-underline">
          ← Volver a Maxina Digital
        </Link>
      </footer>
    </div>
  );
}
