// H-EPM logomark — hexagonal icon, teal/ECG theme.
// All filter/gradient IDs use "hepm-" prefix to avoid collisions with other inline SVGs.
export const HBrandMark = ({
  className = 'w-16 h-16',
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hepm-lg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#42d4b8" />
        <stop offset="48%" stopColor="#3a7080" />
        <stop offset="100%" stopColor="#242844" />
      </linearGradient>
      <radialGradient id="hepm-rg" cx="38%" cy="28%" r="65%">
        <stop offset="0%" stopColor="#243050" />
        <stop offset="28%" stopColor="#151a30" />
        <stop offset="60%" stopColor="#0c1020" />
        <stop offset="100%" stopColor="#07080f" />
      </radialGradient>
      <linearGradient id="hepm-sh" x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
        <stop offset="32%" stopColor="#ffffff" stopOpacity="0.02" />
        <stop offset="62%" stopColor="#000000" stopOpacity="0.01" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.09" />
      </linearGradient>
      <filter id="hepm-sf" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="11" />
      </filter>
      <filter id="hepm-ef">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#hepm-rg)" />
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#hepm-sh)" />
    <ellipse cx="80" cy="44" rx="34" ry="19" fill="white" opacity="0.06" transform="rotate(-22 80 44)" filter="url(#hepm-sf)" />
    <line x1="60" y1="65" x2="60" y2="135" stroke="#c6c8d6" strokeWidth="11" strokeLinecap="square" />
    <line x1="140" y1="65" x2="140" y2="135" stroke="#c6c8d6" strokeWidth="11" strokeLinecap="square" />
    <line x1="54" y1="80" x2="66" y2="80" stroke="#ffffff" strokeWidth="0.9" opacity="0.18" />
    <line x1="54" y1="120" x2="66" y2="120" stroke="#ffffff" strokeWidth="0.9" opacity="0.18" />
    <line x1="134" y1="80" x2="146" y2="80" stroke="#ffffff" strokeWidth="0.9" opacity="0.18" />
    <line x1="134" y1="120" x2="146" y2="120" stroke="#ffffff" strokeWidth="0.9" opacity="0.18" />
    <path
      d="M 60,100 L 77,100 L 81,93 L 85,107 L 89,76 L 94,124 L 99,100 L 140,100"
      fill="none" stroke="#42d4b8" strokeWidth="10" opacity="0.08"
      strokeLinejoin="round" strokeLinecap="round"
    />
    <path
      d="M 60,100 L 77,100 L 81,93 L 85,107 L 89,76 L 94,124 L 99,100 L 140,100"
      fill="none" stroke="#42d4b8" strokeWidth="3.5"
      strokeLinejoin="round" strokeLinecap="round"
      filter="url(#hepm-ef)"
    />
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="none" stroke="url(#hepm-lg)" strokeWidth="2.2" />
    <circle cx="175" cy="57" r="3" fill="#42d4b8" />
    <circle cx="25" cy="57" r="3" fill="#42d4b8" />
  </svg>
);
