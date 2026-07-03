// Real Maxina Digital hexagon+M mark, recreated from maxina-favicon.svg
// (the existing site's brand logo) and restyled with the landing page's
// cyan glow treatment instead of the flat navy fill.
export const BrandMark = ({ className = 'w-16 h-16' }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="brandGlow">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <polygon
      points="20,4 44,4 56,32 44,60 20,60 8,32"
      fill="rgba(0,188,212,0.12)"
      stroke="#00BCD4"
      strokeWidth="2"
      filter="url(#brandGlow)"
    />
    <text
      x="32"
      y="33"
      fontFamily="var(--font-outfit), Outfit, Arial, sans-serif"
      fontSize="30"
      fontWeight="700"
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
    >
      M
    </text>
  </svg>
);
