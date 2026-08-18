'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

const ENDPOINT = 'https://formspree.io/f/xgoqgedo';

/* ── Accent palettes per product ── */
const ACCENTS = {
  maxina: {
    border:   'rgba(145,132,217,0.55)',
    bg:       'rgba(145,132,217,0.08)',
    bgHover:  'rgba(145,132,217,0.14)',
    text:     '#b5abfc',
    btnBg:    'var(--color-accent)',
    btnHover: 'var(--color-accent-600)',
    glow:     'var(--glow)',
  },
  hepm: {
    border:   'rgba(45,212,191,0.55)',
    bg:       'rgba(13,148,136,0.08)',
    bgHover:  'rgba(13,148,136,0.16)',
    text:     '#2dd4bf',
    btnBg:    'var(--hepm-teal)',
    btnHover: 'var(--hepm-emerald)',
    glow:     'var(--hepm-teal-glow)',
  },
  dpos: {
    border:   'rgba(212,168,67,0.55)',
    bg:       'rgba(212,168,67,0.08)',
    bgHover:  'rgba(212,168,67,0.15)',
    text:     '#f2d07c',
    btnBg:    'var(--dpos-gold)',
    btnHover: 'var(--dpos-gold-lt)',
    glow:     'var(--dpos-gold-glow)',
  },
} as const;

/* ── Form content per product ── */
const CONFIGS = {
  maxina: {
    subject:        'Maxina Digital — Nuevo contacto',
    sectorLabel:    'Sector',
    sectorOptions:  ['Médico / Salud', 'Automotriz', 'Financiero', 'PyME / Comercio', 'Hotelería', 'Otro'],
    servicioLabel:  '¿Qué necesitas?',
    servicioOptions:[
      'Sitio web profesional',
      'Aplicación móvil',
      'Sistema a medida',
      'H-EPM — Gestión Hospitalaria',
      'D-POS — Punto de Venta',
      'Asesoría — aún no lo sé',
    ],
  },
  hepm: {
    subject:        'H-EPM — Solicitud de información',
    sectorLabel:    'Tipo de institución',
    sectorOptions:  ['Hospital privado', 'Clínica especializada', 'Hospital público / IMSS / ISSSTE', 'Consultorio médico', 'Grupo hospitalario', 'Otro'],
    servicioLabel:  'Módulos de interés',
    servicioOptions:[
      'Expediente Clínico Digital',
      'Gestión de Camas y Censo',
      'Farmacia y Medicamentos',
      'Equipos y Mantenimiento',
      'Facturación CFDI 4.0',
      'Solución completa (todos los módulos)',
      'Solo quiero una demo',
    ],
  },
  dpos: {
    subject:        'D-POS — Solicitud de información',
    sectorLabel:    'Giro del negocio',
    sectorOptions:  ['Refaccionaria / Autopartes', 'Tienda de ropa / Moda', 'Ferretería / Materiales', 'Abarrotes / Alimentos', 'Electrónica / Tecnología', 'Farmacia', 'Otro comercio'],
    servicioLabel:  '¿Qué te interesa?',
    servicioOptions:[
      'Punto de venta rápido',
      'Control de inventario',
      'Multi-sucursal',
      'Integración MercadoLibre',
      'Facturación CFDI 4.0',
      'Solución completa',
      'Solo quiero una demo',
    ],
  },
} as const;

/* ── Custom Select ── */
interface SelectProps {
  name: string;
  options: readonly string[];
  placeholder?: string;
  accent: typeof ACCENTS[keyof typeof ACCENTS];
}

const CustomSelect = ({ name, options, placeholder = 'Seleccionar...', accent }: SelectProps) => {
  const [open, setOpen]       = useState(false);
  const [selected, setSelected] = useState('');
  const [hovered, setHovered]  = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v); }
  };

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={selected} />

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        onKeyDown={handleKey}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-light outline-none transition-all text-left font-inter"
        style={{
          background:   open ? accent.bg   : 'var(--color-surface)',
          border:       `1px solid ${open ? accent.border : 'var(--color-neutral-800)'}`,
          color:        selected ? 'var(--color-text)' : 'var(--color-neutral-700)',
        }}
      >
        <span>{selected || placeholder}</span>
        <span
          className="ml-2 flex-shrink-0 transition-transform duration-200 text-[10px]"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: open ? accent.text : 'var(--color-neutral-700)',
          }}
        >
          ▾
        </span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-50 w-full mt-1 rounded-lg overflow-hidden py-1"
          style={{
            background:  'var(--color-surface)',
            border:      `1px solid ${accent.border}`,
            boxShadow:   '0 16px 40px -8px rgba(0,0,0,0.7)',
          }}
        >
          {options.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              onClick={() => { setSelected(opt); setOpen(false); }}
              onMouseEnter={() => setHovered(opt)}
              onMouseLeave={() => setHovered(null)}
              className="px-3.5 py-2.5 text-sm font-light cursor-pointer transition-colors font-inter"
              style={{
                background: hovered === opt ? accent.bgHover : selected === opt ? accent.bg : 'transparent',
                color:      hovered === opt || selected === opt ? accent.text : 'var(--color-text)',
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Main form ── */
interface ContactFormProps {
  source: 'maxina' | 'hepm' | 'dpos';
}

export const ContactForm = ({ source }: ContactFormProps) => {
  const config = CONFIGS[source];
  const accent = ACCENTS[source];

  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

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

  const inputStyle: React.CSSProperties = {
    background: 'var(--color-surface)',
    border:     '1px solid var(--color-neutral-800)',
    borderRadius: '0.5rem',
    padding:    '0.625rem 0.875rem',
    color:      'var(--color-text)',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize:   '0.875rem',
    fontWeight: 300,
    outline:    'none',
    transition: 'border-color 0.15s, background 0.15s',
    width:      '100%',
  };

  const labelBase = 'font-mono text-[10px] font-medium tracking-widest uppercase text-[var(--color-neutral-500)]';

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = accent.border;
    e.target.style.background  = accent.bg;
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--color-neutral-800)';
    e.target.style.background  = 'var(--color-surface)';
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="hidden" name="_subject" value={config.subject} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Nombre *</label>
          <input style={inputStyle} onFocus={onFocus} onBlur={onBlur} type="text" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Empresa / Institución</label>
          <input style={inputStyle} onFocus={onFocus} onBlur={onBlur} type="text" name="empresa" placeholder="Nombre del lugar" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>Correo *</label>
          <input style={inputStyle} onFocus={onFocus} onBlur={onBlur} type="email" name="email" placeholder="correo@ejemplo.com" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelBase}>WhatsApp</label>
          <input style={inputStyle} onFocus={onFocus} onBlur={onBlur} type="tel" name="whatsapp" placeholder="+52 449 000 0000" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>{config.sectorLabel}</label>
        <CustomSelect name="sector" options={config.sectorOptions} accent={accent} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>{config.servicioLabel}</label>
        <CustomSelect name="servicio" options={config.servicioOptions} accent={accent} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelBase}>Cuéntanos más</label>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
          onFocus={onFocus as React.FocusEventHandler<HTMLTextAreaElement>}
          onBlur={onBlur as React.FocusEventHandler<HTMLTextAreaElement>}
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
        className="mt-1 self-start font-inter font-semibold text-sm px-8 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:opacity-60"
        style={{
          background:  accent.btnBg,
          color:       source === 'dpos' ? '#0e0d07' : 'white',
          boxShadow:   `0 8px 24px -8px ${accent.glow}`,
        }}
      >
        {status === 'sending' ? 'Enviando...' : status === 'ok' ? '✓ Enviado' : 'Enviar mensaje →'}
      </button>
    </form>
  );
};
