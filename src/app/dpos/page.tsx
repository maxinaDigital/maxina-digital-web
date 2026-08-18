import Link from 'next/link';
import { DPosBrandMark } from '@/components/DPosBrandMark';
import { Background3D } from '@/components/Background3D';
import { Spotlight } from '@/components/Spotlight';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GlassTiltPanel } from '@/components/GlassTiltPanel';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'D-POS — Sistema de Punto de Venta para PyME | Maxina Digital',
  description:
    'Control total de ventas, inventario y sucursales para comercios y PyMEs. Facturación CFDI 4.0, múltiples métodos de pago, MercadoLibre integrado. Aguascalientes, México.',
};

const VALUE_PROPS = [
  {
    icon: '🔒',
    title: 'Precio blindado en caja',
    desc: 'El catálogo manda. El cajero no puede modificar precios, solo el administrador. Cada venta refleja exactamente lo que decidiste cobrar.',
  },
  {
    icon: '🏪',
    title: 'Multi-sucursal desde el día uno',
    desc: 'Abre tu segunda ubicación sin cambiar de sistema. Stock, ventas y personal se gestionan desde un solo panel con visibilidad total.',
  },
  {
    icon: '📊',
    title: 'Cada peso, trazado y auditable',
    desc: 'Quién vendió, qué descuento aplicó, con qué método cobró. Historial completo e inmutable — tú siempre sabes qué pasó en tu negocio.',
  },
];

const MODULES = [
  {
    icon: '🛒',
    name: 'Punto de Venta',
    desc: 'Venta rápida multi-artículo con lector de código de barras. Acepta efectivo, tarjeta, transferencia y MercadoLibre en la misma transacción.',
    tags: ['Código de barras', 'Multi-pago', 'Cancelación con devolución'],
  },
  {
    icon: '📦',
    name: 'Catálogo & Productos',
    desc: 'SKU, código de barras, categorías, marcas y precios en un solo lugar. Soft-delete para preservar el historial de ventas aunque el producto ya no esté activo.',
    tags: ['SKU / Barcode', 'Categorías jerárquicas', 'Precios y tasas de IVA'],
  },
  {
    icon: '🏭',
    name: 'Inventario Multi-Sucursal',
    desc: 'Stock por sucursal con transacciones atómicas — imposible quedar en negativo. Transferencias entre sucursales y alertas de stock mínimo automáticas.',
    tags: ['Alerta de mínimos', 'Transferencias', 'Historial de movimientos'],
  },
  {
    icon: '📈',
    name: 'Reportes & Analítica',
    desc: 'Dashboard de ventas por período, top productos por unidades y por ingresos, valuación de inventario a costo vs. precio de venta, y log de movimientos.',
    tags: ['Ticket promedio', 'Productos estrella', 'Margen de inventario'],
  },
  {
    icon: '🏢',
    name: 'Gestión de Sucursales',
    desc: 'Directorio completo de ubicaciones con control de acceso por sucursal. Cada vendedor solo ve los datos de su punto de venta.',
    tags: ['Control por ubicación', 'Vendedor aislado', 'Admin central'],
  },
  {
    icon: '🔑',
    name: 'Roles & Auditoría',
    desc: 'Siete perfiles de acceso (Admin, Gerente, Vendedor, Inventario, Finanzas…). Bitácora completa de cada acción con usuario, IP, hora y datos antes/después.',
    tags: ['7 roles', 'Descuento máximo por rol', 'Bitácora inmutable'],
  },
];

const CHANNELS = [
  { icon: '🏬', label: 'Venta en tienda', sub: 'Mostrador rápido' },
  { icon: '🛵', label: 'MercadoLibre', sub: 'Canal marketplace' },
  { icon: '💻', label: 'E-commerce', sub: 'Tienda en línea' },
  { icon: '📞', label: 'Teléfono / WhatsApp', sub: 'Venta asistida' },
];

export default function DposPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Background aurora — gold tint */}
      <div className="aurora dpos-aurora" aria-hidden="true">
        <span className="a1" /><span className="a2" /><span className="a3" />
      </div>
      <Background3D />
      <Spotlight />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-15 h-[60px] bg-[rgba(22,24,38,0.88)] backdrop-blur-xl border-b border-[rgba(212,168,67,0.12)]">
        <Link href="/" className="flex items-center gap-2 no-underline text-[var(--color-neutral-500)] hover:text-[var(--color-text)] transition-colors font-mono text-[12px]">
          ← Maxina Digital
        </Link>
        <div className="flex items-center gap-2.5">
          <DPosBrandMark className="w-7 h-7" />
          <span className="font-display font-semibold text-sm text-[var(--dpos-gold-lt)] tracking-tight">D-POS</span>
        </div>
        <a
          href="#contacto"
          className="font-inter font-semibold text-[13px] px-4 py-2 rounded-lg bg-[var(--dpos-gold)] text-[#0e0d07] hover:bg-[var(--dpos-gold-lt)] transition-colors no-underline shadow-[0_4px_16px_-4px_var(--dpos-gold-glow)]"
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
              <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium text-[var(--dpos-gold-lt)] uppercase tracking-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--dpos-gold-lt)] animate-pulse" />
                Sistema de Punto de Venta para PyME
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-2 flex">
                <DPosBrandMark className="w-16 h-16" />
              </div>
              <h1 className="font-display text-[clamp(36px,4vw,58px)] font-semibold leading-[1.08] tracking-[-2px]">
                Control total.{' '}
                <span style={{
                  background: 'linear-gradient(110deg, #f2d07c, #d4a843, #f2d07c)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'hue-shift 8s ease infinite',
                }}>
                  Desde la primera venta.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--color-neutral-400)] leading-[1.8] max-w-[460px]">
                D-POS unifica ventas, inventario y sucursales en una sola plataforma. Sin complicaciones, sin sorpresas — para que tu negocio crezca con claridad.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="font-inter font-semibold text-sm px-7 py-3 rounded-lg bg-[var(--dpos-gold)] text-[#0e0d07] hover:bg-[var(--dpos-gold-lt)] transition-colors shadow-[0_8px_24px_-8px_var(--dpos-gold-glow)] hover:-translate-y-px"
                >
                  Solicitar demo gratuita
                </a>
                <a href="#modulos" className="font-inter text-[13px] text-[var(--color-neutral-400)] flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors">
                  Ver módulos →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="flex flex-wrap gap-1.5">
                {['CFDI 4.0', 'MercadoLibre', 'Multi-sucursal', 'Código de barras', 'Inventario en tiempo real', 'Roles & permisos'].map(t => (
                  <span key={t} className="font-mono text-[11px] text-[var(--dpos-gold-lt)] bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.2)] px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — metrics panel */}
          <ScrollReveal delay={0.5} className="hidden md:block">
            <GlassTiltPanel className="bg-[var(--color-surface)] border border-[rgba(212,168,67,0.15)] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(212,168,67,0.12)] bg-[rgba(212,168,67,0.03)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[11px] text-[var(--color-neutral-700)] ml-1">d-pos / resumen-de-hoy</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[rgba(212,168,67,0.08)]">
                {[
                  { n: '6', lbl: 'Módulos integrados', w: '100%' },
                  { n: '4', lbl: 'Canales de venta', w: '67%' },
                  { n: '∞', lbl: 'Sucursales soportadas', w: '100%' },
                  { n: '7', lbl: 'Roles de acceso', w: '58%' },
                ].map(({ n, lbl, w }) => (
                  <div key={lbl} className="bg-[var(--color-bg)] px-5 py-5 hover:bg-[rgba(212,168,67,0.04)] transition-colors">
                    <div className="font-display text-[28px] font-semibold text-[var(--dpos-gold-lt)] tracking-[-1px] leading-none">{n}</div>
                    <div className="font-mono text-[11px] text-[var(--color-neutral-700)] mt-1.5">{lbl}</div>
                    <div className="mt-3 h-px bg-[var(--color-surface)]">
                      <div className="h-px bg-gradient-to-r from-[var(--dpos-gold)] to-[var(--dpos-gold-lt)] opacity-70" style={{ width: w }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between border-t border-[rgba(212,168,67,0.12)]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-neutral-700)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                  sistema en línea y operando
                </div>
                <span className="font-mono text-[10px] text-[#28c840] bg-[rgba(40,200,64,0.1)] border border-[rgba(40,200,64,0.2)] px-2 py-0.5 rounded-full">live</span>
              </div>
            </GlassTiltPanel>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--dpos-gold-lt)] uppercase tracking-widest">Explorar</span>
          <span className="text-xl animate-bounce text-[var(--dpos-gold-lt)]">↓</span>
        </div>
      </section>

      {/* ── PROPUESTA DE VALOR ── */}
      <section className="relative z-10 py-20 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.12)] rounded-2xl overflow-hidden">
          {VALUE_PROPS.map((vp, i) => (
            <ScrollReveal key={vp.title} delay={i * 0.08}>
              <div className="h-full bg-[var(--color-bg)] hover:bg-[rgba(212,168,67,0.04)] p-9 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--dpos-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-3xl mb-5">{vp.icon}</div>
                <h3 className="font-display text-[18px] font-semibold text-[var(--color-text)] mb-3 tracking-[-0.3px] group-hover:text-[var(--dpos-gold-lt)] transition-colors">{vp.title}</h3>
                <p className="font-light text-[13.5px] text-[var(--color-neutral-400)] leading-[1.75]">{vp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MÓDULOS ── */}
      <section id="modulos" className="relative z-10 py-24 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--dpos-gold-lt)] mb-3">// módulos</p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-2">
              Todo lo que tu negocio <span className="text-[var(--dpos-gold-lt)]">necesita</span>
            </h2>
            <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[520px] mb-12">
              Seis módulos que cubren el ciclo completo: desde que un cliente llega a tu mostrador hasta el cierre del mes en reportes.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.12)] rounded-2xl overflow-hidden">
            {MODULES.map((mod, i) => (
              <ScrollReveal key={mod.name} delay={i * 0.07}>
                <div className="h-full bg-[var(--color-bg)] hover:bg-[rgba(212,168,67,0.04)] p-8 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-[var(--dpos-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="w-11 h-11 rounded-xl bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.2)] flex items-center justify-center text-xl mb-4">{mod.icon}</div>
                  <h3 className="font-display text-[18px] font-semibold text-[var(--color-text)] mb-2.5 tracking-[-0.3px] group-hover:text-[var(--dpos-gold-lt)] transition-colors">{mod.name}</h3>
                  <p className="text-[13px] text-[var(--color-neutral-400)] leading-[1.75] font-light mb-5">{mod.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] text-[var(--color-neutral-700)] border border-[var(--color-neutral-800)] px-2.5 py-1 rounded-full group-hover:text-[var(--dpos-gold-lt)] group-hover:border-[rgba(212,168,67,0.3)] transition-all">
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

      {/* ── CANALES DE VENTA ── */}
      <section className="relative z-10 py-20 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)] bg-[rgba(212,168,67,0.02)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--dpos-gold-lt)] mb-3">// canales</p>
            <h2 className="font-display text-[clamp(24px,2.8vw,40px)] font-semibold tracking-[-1px] leading-[1.12] text-[var(--color-text)] mb-2">
              Vende donde estén <span className="text-[var(--dpos-gold-lt)]">tus clientes</span>
            </h2>
            <p className="font-light text-[15px] text-[var(--color-neutral-400)] leading-[1.8] max-w-[480px] mb-12">
              D-POS registra ventas desde cualquier canal en la misma plataforma. Tu inventario siempre refleja la realidad.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CHANNELS.map((ch, i) => (
              <ScrollReveal key={ch.label} delay={i * 0.07}>
                <div className="bg-[var(--color-surface)] border border-[rgba(212,168,67,0.15)] rounded-xl p-6 text-center hover:border-[rgba(212,168,67,0.4)] hover:bg-[rgba(212,168,67,0.04)] transition-all group">
                  <div className="text-3xl mb-3">{ch.icon}</div>
                  <div className="font-display text-[15px] font-semibold text-[var(--color-text)] mb-1 group-hover:text-[var(--dpos-gold-lt)] transition-colors">{ch.label}</div>
                  <div className="font-mono text-[10px] text-[var(--color-neutral-700)] uppercase tracking-[1.5px]">{ch.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* MercadoLibre highlight */}
          <ScrollReveal delay={0.2} className="mt-8">
            <div className="rounded-2xl border border-[rgba(212,168,67,0.2)] bg-[rgba(212,168,67,0.04)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-2xl flex-shrink-0">🛵</div>
              <div className="flex-1">
                <p className="font-mono text-[10px] font-medium tracking-[2px] uppercase text-[var(--dpos-gold-lt)] mb-1.5">Integración nativa</p>
                <h3 className="font-display text-[20px] font-semibold text-[var(--color-text)] mb-2 tracking-[-0.3px]">MercadoLibre — sin doble captura</h3>
                <p className="text-[13.5px] text-[var(--color-neutral-400)] font-light leading-[1.75] max-w-[560px]">
                  Cada venta de MercadoLibre se registra automáticamente en D-POS. El inventario se descuenta en tiempo real — sin hojas de cálculo, sin capturas manuales, sin errores de stock.
                </p>
              </div>
              <a href="#contacto" className="flex-shrink-0 font-inter font-semibold text-[13px] text-[var(--dpos-gold-lt)] border border-[rgba(212,168,67,0.35)] px-5 py-2.5 rounded-lg hover:bg-[rgba(212,168,67,0.08)] transition-all no-underline whitespace-nowrap">
                Saber más →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── POR QUÉ D-POS ── */}
      <section className="relative z-10 py-24 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--dpos-gold-lt)] mb-3">// diferenciadores</p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-12">
              Construido para <span className="text-[var(--dpos-gold-lt)]">negocios reales</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: '🧾',
                title: 'CFDI 4.0 incluido',
                desc: 'Factura electrónica en cada venta, validada ante el SAT. Cumple desde el primer día sin contratar un servicio externo.',
              },
              {
                icon: '🚫',
                title: 'Sin precios alterados en caja',
                desc: 'Los precios vienen del catálogo, no del cajero. Tu margen está protegido en cada transacción, en cualquier sucursal.',
              },
              {
                icon: '🎯',
                title: 'Descuento máximo por empleado',
                desc: 'Cada rol tiene un límite de descuento. El vendedor puede dar el 5% que autorizas; para más, necesita al gerente.',
              },
              {
                icon: '📜',
                title: 'Historial que no se borra',
                desc: 'Productos, clientes y movimientos de inventario permanecen en el sistema aunque estén inactivos. Tus auditorías siempre tienen respaldo.',
              },
              {
                icon: '🔄',
                title: 'Cancelación con devolución automática',
                desc: 'Al cancelar una venta, el sistema revierte el inventario en la misma operación. Sin ajustes manuales, sin inconsistencias.',
              },
              {
                icon: '👁️',
                title: 'Vendedor blindado por sucursal',
                desc: 'Cada usuario solo ve los datos de su ubicación. Sin acceso accidental a cuentas de otra tienda ni a información sensible.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="flex gap-5 p-7 rounded-xl border border-[var(--color-neutral-800)] hover:border-[rgba(212,168,67,0.3)] bg-[var(--color-surface)] hover:bg-[rgba(212,168,67,0.03)] transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.2)] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[rgba(212,168,67,0.15)] transition-colors">{item.icon}</div>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold text-[var(--color-text)] mb-1.5 tracking-[-0.2px] group-hover:text-[var(--dpos-gold-lt)] transition-colors">{item.title}</h3>
                    <p className="text-[13px] text-[var(--color-neutral-400)] leading-[1.7] font-light">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIO ── */}
      <section className="relative z-10 py-20 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)] bg-[rgba(212,168,67,0.03)]">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <DPosBrandMark className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-[clamp(26px,3vw,42px)] font-semibold tracking-[-1.2px] leading-[1.12] text-[var(--color-text)] mb-4">
              ¿Tu negocio sigue corriendo<br />con hojas de cálculo?
            </h2>
            <p className="text-[15px] text-[var(--color-neutral-400)] font-light leading-[1.8] mb-8 max-w-[560px] mx-auto">
              En menos de 30 días puedes tener D-POS funcionando en tu comercio. Demo sin costo, implementación guiada, soporte real.
            </p>
            <a
              href="#contacto"
              className="inline-flex font-inter font-semibold text-base px-10 py-4 rounded-xl bg-[var(--dpos-gold)] text-[#0e0d07] hover:bg-[var(--dpos-gold-lt)] transition-colors shadow-[0_12px_30px_-8px_var(--dpos-gold-glow)] hover:-translate-y-0.5"
            >
              Quiero ver la demo →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="relative z-10 py-24 px-5 md:px-15 border-t border-[rgba(212,168,67,0.12)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <ScrollReveal>
            <span className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-[var(--dpos-gold-lt)] mb-4 block">// contacto</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-semibold leading-[1.12] tracking-[-1.2px] text-[var(--color-text)] mb-4">
              Hablemos sobre<br />su <span className="text-[var(--dpos-gold-lt)]">negocio</span>
            </h2>
            <p className="text-[14px] text-[var(--color-neutral-400)] font-light leading-[1.8] mb-10">
              Cuéntenos el giro de su comercio, cuántas sucursales tienen y qué necesitan mejorar. Le respondemos en menos de 24 horas con una propuesta sin costo.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '✉️', lbl: 'Correo', val: 'contacto@maxinadigital.com' },
                { icon: '📍', lbl: 'Ubicación', val: 'Aguascalientes, México · Todo el país' },
                { icon: '⏱️', lbl: 'Respuesta', val: 'Menos de 24 horas hábiles' },
              ].map(({ icon, lbl, val }) => (
                <div key={lbl} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.2)] flex items-center justify-center text-[15px] flex-shrink-0 mt-0.5">{icon}</div>
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
            <ContactForm source="dpos" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-[rgba(212,168,67,0.12)] py-7 px-5 md:px-15 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <DPosBrandMark className="w-7 h-7" />
          <span className="font-display font-semibold text-sm text-[var(--dpos-gold-lt)]">D-POS</span>
        </div>
        <p className="font-mono text-[12px] text-[var(--color-neutral-700)]">D-POS es un producto de Maxina Digital · Aguascalientes, México</p>
        <Link href="/" className="font-mono text-[12px] text-[var(--color-neutral-700)] hover:text-[var(--color-text)] transition-colors no-underline">
          ← Volver a Maxina Digital
        </Link>
      </footer>
    </div>
  );
}
