'use client';

import { useRef, ReactNode } from 'react';

interface GlassTiltPanelProps {
  children: ReactNode;
  className?: string;
}

// Glassmorphism panel that tilts in 3D toward the cursor, ported from the
// existing maxina-digital site's .metrics-panel pointer-tilt effect.
export const GlassTiltPanel = ({ children, className = '' }: GlassTiltPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    panel.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateZ(0)`;
    panel.style.setProperty('--cx', `${e.clientX - rect.left}px`);
    panel.style.setProperty('--cy', `${e.clientY - rect.top}px`);
  };

  const handlePointerLeave = () => {
    if (panelRef.current) panelRef.current.style.transform = '';
  };

  return (
    <div
      ref={panelRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`glass-tilt-panel card-glow ${className}`}
    >
      {children}
    </div>
  );
};
