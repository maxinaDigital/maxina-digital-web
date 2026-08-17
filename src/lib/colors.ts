// Nocturne design system — Maxina Digital color palette
export const colors = {
  navy: '#161826',
  surface: '#232532',
  primary: '#796cbf',    // accent-600, button fills
  accent: '#9184d9',     // base accent
  accentLight: '#b5abfc', // accent-400, EKG / frame strokes
  text: '#e9e9ed',
  gray: '#9397ab',       // neutral-500, muted text
} as const;

export const gradients = {
  background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.surface} 100%)`,
} as const;
