import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F1419',
        'dark-gray': '#1a2a3a',
        'blue-primary': '#0066CC',
        'cyan-accent': '#00BCD4',
        'gray-primary': '#8A92A6',
        // Ported from the existing maxina-digital site's palette so both
        // properties share one visual language (accent3 = its purple accent).
        'accent-purple': '#8b5cf6',
        'legacy-blue': '#4f9cf9',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backdropBlur: {
        sm: '4px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 188, 212, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 188, 212, 0.6)',
        'glow-legacy': '0 0 60px rgba(79, 156, 249, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
