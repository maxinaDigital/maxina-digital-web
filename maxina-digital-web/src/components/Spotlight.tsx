'use client';

import { useEffect, useRef } from 'react';

// Cursor-follow radial-gradient glow that illuminates the background,
// ported from the existing maxina-digital site's .spotlight effect.
// This is a static positional highlight (not continuous motion), so unlike
// the 3D tilt panel it stays active regardless of prefers-reduced-motion —
// it only needs a real mouse (pointer: fine).
export const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = ref.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
};
