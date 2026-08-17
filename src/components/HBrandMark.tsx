// H-EPM logomark — H with long legs + EKG trace crossing in front.
// Same construction as BrandMark (M variant) but letter replaced with H.
// bg prop must match the surface behind the mark so the knockout reads correctly.
export const HBrandMark = ({
  className = 'w-16 h-16',
  bg = '#161826',
}: {
  className?: string;
  bg?: string;
}) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* 1. Rounded-square frame — teal accent */}
    <rect
      x={4} y={4} width={56} height={56} rx={13}
      stroke="#2dd4bf" strokeWidth={1.6} fill="none"
    />
    {/* 2. H — two vertical legs + crossbar, near-white stroke */}
    <path
      d="M 18 56 L 18 10 M 18 33 L 46 33 M 46 10 L 46 56"
      stroke="#e9e9ed" strokeWidth={8.5}
      strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    {/* 3. Gap/knockout — EKG path in bg color punches through the H */}
    <path
      d="M 8 45 L 18 45 L 22 49 L 26 43 L 32 20 L 38 51 L 42 43 L 46 45 L 56 45"
      stroke={bg} strokeWidth={6.4}
      strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    {/* 4. EKG trace — front layer, teal accent */}
    <path
      d="M 8 45 L 18 45 L 22 49 L 26 43 L 32 20 L 38 51 L 42 43 L 46 45 L 56 45"
      stroke="#2dd4bf" strokeWidth={2.4}
      strokeLinecap="round" strokeLinejoin="miter" fill="none"
    />
  </svg>
);
