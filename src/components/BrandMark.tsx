// Maxina Digital logomark — hexagonal icon, purple/violet gradient theme.
// All filter/gradient IDs use "md-" prefix to avoid collisions with other inline SVGs.
export const BrandMark = ({
  className = 'w-16 h-16',
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="md-cp">
        <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" />
      </clipPath>
      <linearGradient id="md-lg" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#d0c6f8" />
        <stop offset="48%" stopColor="#9184d9" />
        <stop offset="100%" stopColor="#4a3b96" />
      </linearGradient>
      <linearGradient id="md-sm" gradientUnits="userSpaceOnUse" x1="100" y1="68" x2="100" y2="132">
        <stop offset="0%" stopColor="#f6f4ff" />
        <stop offset="100%" stopColor="#c4b8f0" />
      </linearGradient>
      <radialGradient id="md-rg" cx="38%" cy="28%" r="65%">
        <stop offset="0%" stopColor="#30345a" />
        <stop offset="28%" stopColor="#1e2240" />
        <stop offset="60%" stopColor="#0f1228" />
        <stop offset="100%" stopColor="#07080f" />
      </radialGradient>
      <linearGradient id="md-sh" x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
        <stop offset="32%" stopColor="#ffffff" stopOpacity="0.022" />
        <stop offset="62%" stopColor="#000000" stopOpacity="0.01" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.09" />
      </linearGradient>
      <filter id="md-sf" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="11" />
      </filter>
      <filter id="md-cf" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="13" />
      </filter>
      <filter id="md-gf">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#md-rg)" />
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#md-sh)" />
    <ellipse cx="80" cy="44" rx="34" ry="19" fill="white" opacity="0.065" transform="rotate(-22 80 44)" filter="url(#md-sf)" />
    <ellipse cx="100" cy="18" rx="28" ry="14" fill="#9184d9" opacity="0.22" filter="url(#md-cf)" />
    <g clipPath="url(#md-cp)">
      <line x1="10" y1="65" x2="190" y2="108" stroke="#9184d9" strokeWidth="0.75" opacity="0.28" />
      <line x1="10" y1="90" x2="190" y2="133" stroke="#9184d9" strokeWidth="0.75" opacity="0.28" />
    </g>
    <polygon points="100,21 168,61 168,139 100,179 32,139 32,61" fill="none" stroke="#9184d9" strokeWidth="0.6" opacity="0.28" />
    <line x1="27" y1="100" x2="37" y2="100" stroke="#9184d9" strokeWidth="1" opacity="0.44" />
    <line x1="163" y1="100" x2="173" y2="100" stroke="#9184d9" strokeWidth="1" opacity="0.44" />
    <g clipPath="url(#md-cp)">
      <polyline
        points="40,132 40,68 100,108 160,68 160,132"
        fill="none" stroke="url(#md-sm)" strokeWidth="12"
        strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="2"
        filter="url(#md-gf)"
      />
      <line x1="33" y1="62" x2="47" y2="76" stroke="#b8aaee" strokeWidth="1.9" opacity="0.9" />
      <line x1="153" y1="62" x2="167" y2="76" stroke="#b8aaee" strokeWidth="1.9" opacity="0.9" />
      <line x1="33" y1="126" x2="47" y2="140" stroke="#b8aaee" strokeWidth="1.9" opacity="0.9" />
      <line x1="153" y1="126" x2="167" y2="140" stroke="#b8aaee" strokeWidth="1.9" opacity="0.9" />
    </g>
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="none" stroke="url(#md-lg)" strokeWidth="2.2" />
    <circle cx="100" cy="14" r="3" fill="#9184d9" />
    <circle cx="175" cy="57" r="3" fill="#9184d9" />
    <circle cx="25" cy="57" r="3" fill="#9184d9" />
  </svg>
);
