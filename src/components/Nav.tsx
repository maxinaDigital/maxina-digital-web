'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-15 h-[60px] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(22,24,38,0.92)] backdrop-blur-xl border-b border-[var(--color-neutral-800)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <BrandMark className="w-8 h-8" />
          <span className="font-display font-semibold text-sm text-[var(--color-text)] tracking-tight">
            Maxina Digital
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-inter text-[13px] text-[var(--color-neutral-400)] hover:text-[var(--color-text)] transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* H-EPM CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/hepm"
            className="font-inter font-semibold text-[13px] px-4 py-2 rounded bg-[var(--color-accent-900)] text-[var(--color-accent-300)] border border-[var(--color-accent-700)] hover:bg-[var(--color-accent-700)] hover:text-[var(--color-text)] transition-all no-underline"
          >
            H-EPM
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <span className={`block h-[1.5px] bg-[var(--color-neutral-400)] rounded transition-all duration-250 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] bg-[var(--color-neutral-400)] rounded transition-all duration-250 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] bg-[var(--color-neutral-400)] rounded transition-all duration-250 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 z-40 bg-[rgba(22,24,38,0.97)] backdrop-blur-xl border-b border-[var(--color-neutral-800)] flex flex-col px-5 pb-6 pt-2">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="font-inter text-[15px] text-[var(--color-neutral-400)] py-3 border-b border-[var(--color-neutral-800)] hover:text-[var(--color-text)] transition-colors no-underline"
            >
              {label}
            </a>
          ))}
          <Link
            href="/hepm"
            onClick={close}
            className="mt-3 font-inter font-semibold text-[14px] px-4 py-3 rounded bg-[var(--color-accent-900)] text-[var(--color-accent-300)] border border-[var(--color-accent-700)] text-center no-underline"
          >
            H-EPM →
          </Link>
        </div>
      )}
    </>
  );
};
