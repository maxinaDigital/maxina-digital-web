// D-POS logomark — hexagonal icon, gold/amber theme.
// All filter/gradient IDs use "dpos-" prefix to avoid collisions with other inline SVGs.
export const DPosBrandMark = ({
  className = 'w-16 h-16',
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dpos-lg" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#f2d07c" />
        <stop offset="100%" stopColor="#9a6820" />
      </linearGradient>
      <linearGradient id="dpos-sv" gradientUnits="userSpaceOnUse" x1="100" y1="70" x2="100" y2="134">
        <stop offset="0%" stopColor="#f4d070" />
        <stop offset="100%" stopColor="#a87028" />
      </linearGradient>
      <linearGradient id="dpos-sc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d4a843" stopOpacity="0" />
        <stop offset="18%" stopColor="#d4a843" stopOpacity="0.72" />
        <stop offset="50%" stopColor="#d4a843" stopOpacity="1" />
        <stop offset="82%" stopColor="#d4a843" stopOpacity="0.72" />
        <stop offset="100%" stopColor="#d4a843" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="dpos-rg" cx="38%" cy="28%" r="65%">
        <stop offset="0%" stopColor="#2a2412" />
        <stop offset="28%" stopColor="#181408" />
        <stop offset="60%" stopColor="#0e0d07" />
        <stop offset="100%" stopColor="#07070a" />
      </radialGradient>
      <linearGradient id="dpos-sh" x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
        <stop offset="32%" stopColor="#ffffff" stopOpacity="0.02" />
        <stop offset="62%" stopColor="#000000" stopOpacity="0.01" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.09" />
      </linearGradient>
      <filter id="dpos-sf" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="11" />
      </filter>
      <filter id="dpos-bf" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="10" />
      </filter>
    </defs>
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#dpos-rg)" />
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="url(#dpos-sh)" />
    <ellipse cx="80" cy="44" rx="34" ry="19" fill="white" opacity="0.06" transform="rotate(-22 80 44)" filter="url(#dpos-sf)" />
    <ellipse cx="100" cy="178" rx="24" ry="11" fill="#d4a843" opacity="0.18" filter="url(#dpos-bf)" />
    <path
      d="M 45,70 L 97,134 L 103,134 L 155,70"
      fill="none" stroke="url(#dpos-sv)" strokeWidth="11"
      strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"
    />
    <line x1="58" y1="102" x2="142" y2="102" stroke="url(#dpos-sc)" strokeWidth="1.8" />
    <circle cx="45" cy="70" r="5.5" fill="none" stroke="#d4a843" strokeWidth="1.5" opacity="0.6" />
    <circle cx="45" cy="70" r="2" fill="#d4a843" opacity="0.6" />
    <circle cx="155" cy="70" r="5.5" fill="none" stroke="#d4a843" strokeWidth="1.5" opacity="0.6" />
    <circle cx="155" cy="70" r="2" fill="#d4a843" opacity="0.6" />
    <line x1="91" y1="138" x2="109" y2="138" stroke="#d4a843" strokeWidth="2.5" strokeLinecap="square" opacity="0.9" />
    <polygon points="100,14 175,57 175,143 100,186 25,143 25,57" fill="none" stroke="url(#dpos-lg)" strokeWidth="2.2" />
    <circle cx="100" cy="186" r="3" fill="#d4a843" />
    <circle cx="175" cy="143" r="3" fill="#d4a843" />
    <circle cx="25" cy="143" r="3" fill="#d4a843" />
  </svg>
);
