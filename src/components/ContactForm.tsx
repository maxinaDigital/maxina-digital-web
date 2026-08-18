'use client';

import { useState, useRef, FormEvent } from 'react';

const ENDPOINT = 'https://formspree.io/f/xgoqgedo';

const MAXINA_CONFIG = {
  subject: 'Maxina Digital — Nuevo contacto',
  sectorLabel: 'Sector',
  sectorOptions: ['Médico / Salud', 'Automotriz', 'Financiero', 'PyME / Comercio', 'Hotelería', 'Otro'],
  servicioLabel: '¿Qué necesitas?',
  servicioOptions: [
    'Sitio web profesional',
    'Aplicación móvil',
    'Sistema a medida',
    'H-EPM — Gestión Hospitalaria',
    'D-POS — Punto de Venta',
    'Asesoría — aún no lo sé',
  ],
  accentClass: 'accent-violet',
};

const HEPM_CONFIG = {
  subject: 'H-EPM — Solicitud de información',
  sectorLabel: 'Tipo de institución',
  sectorOptions: ['Hospital privado', 'Clínica especializada', 'Hospital público / IMSS / ISSSTE', 'Consultorio médico', 'Grupo hospitalario', 'Otro'],
  servicioLabel: 'Módulos de interés',
  servicioOptions: [
    'Expediente Clínico Digital',
    'Gestión de Camas y Censo',
    'Farmacia y Medicamentos',
    'Equipos y Mantenimiento',
    'Facturación CFDI 4.0',
    'Solución completa (todos los módulos)',
    'Solo quiero una demo',
  ],
  accentClass: 'accent-teal',
};

interface ContactFormProps {
  source: 'maxina' | 'hepm' | 'dpos';
}

export const ContactForm = ({ source }: ContactFormProps) => {
  const config = source === 'hepm' ? HEPM_CONFIG : MAXINA_CONFIG;
  const isTeal = source === 'hepm';

  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const focusClass = isTeal
    ? 'focus:border-[var(--hepm-teal)] focus:bg-[rgba(13,148,136,0.06)]'
    : 'focus:border-[var(--color-accent)] focus:bg-[rgba(145,132,217,0.06)]';

  const btnClass = isTeal
    ? 'bg-[var(--hepm-teal)] hover:bg-[var(--hepm-emerald)] shadow-[0_8px_24px_-8px_var(--hepm-teal-glow)]'
    : 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-600)] shadow-[0_8px_24px_-8px_var(--glow)]';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(formRef.current),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('ok');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const inputBase =
    'bg-[var(--color-surface)] border border-[var(--color-neutral-800)] rounded-lg px-3.5 py-2.5 text-[var(--color-text)] font-inter text-sm font-light outline-none transition-all placeholder:text-[var(--color-neutral-700)]';

  const labelBase = 'font-mono text-[10px] font-medium tracking-widest uppercase text-[var(--color-neutral-500)]';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Hidden subject field for Formspree */}
      <input type="hidden" name="_subject" value={config.subject} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Nombre *</label>
          <input className={`${inputBase} ${focusClass}`} type="text" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Empresa / Institución</label>
          <input className={`${inputBase} ${focusClass}`} type="text" name="empresa" placeholder="Nombre del lugar" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Correo *</label>
          <input className={`${inputBase} ${focusClass}`} type="email" name="email" placeholder="correo@ejemplo.com" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>WhatsApp</label>
          <input className={`${inputBase} ${focusClass}`} type="tel" name="whatsapp" placeholder="+52 449 000 0000" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>{config.sectorLabel}</label>
        <select className={`${inputBase} ${focusClass} appearance-none`} name="sector">
          <option value="">Seleccionar...</option>
          {config.sectorOptions.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>{config.servicioLabel}</label>
        <select className={`${inputBase} ${focusClass} appearance-none`} name="servicio">
          <option value="">Seleccionar...</option>
          {config.servicioOptions.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>Cuéntanos más</label>
        <textarea
          className={`${inputBase} ${focusClass} resize-y min-h-[90px]`}
          name="mensaje"
          placeholder="Describe brevemente tu proyecto o necesidad..."
        />
      </div>

      {status === 'ok' && (
        <div className="text-sm px-4 py-3 rounded-lg bg-[rgba(40,200,64,0.08)] border border-[rgba(40,200,64,0.2)] text-[#4ade80]">
          ✓ Mensaje enviado. Te contactaremos en menos de 24 horas.
        </div>
      )}
      {status === 'error' && (
        <div className="text-sm px-4 py-3 rounded-lg bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#f87171]">
          ✗ Ocurrió un error. Escríbenos directamente a contacto@maxinadigital.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending' || status === 'ok'}
        className={`mt-1 self-start font-inter font-semibold text-sm text-white px-8 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:opacity-60 ${btnClass}`}
      >
        {status === 'sending' ? 'Enviando...' : status === 'ok' ? '✓ Enviado' : 'Enviar mensaje →'}
      </button>
    </form>
  );
};
