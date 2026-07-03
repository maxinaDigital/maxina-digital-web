// Maxina Digital Color Palette
export const colors = {
  navy: '#0F1419',
  primary: '#0066CC',
  cyan: '#00BCD4',
  white: '#FFFFFF',
  gray: '#8A92A6',
  darkGray: '#1a2a3a',
} as const;

export const gradients = {
  background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkGray} 100%)`,
} as const;
