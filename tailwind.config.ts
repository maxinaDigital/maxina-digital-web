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
        // Nocturne system — background / surfaces
        navy: '#161826',
        surface: '#232532',
        'dark-gray': '#232532',
        // Accent (violet mono scheme)
        'cyan-accent': '#9184d9',   // primary accent (kept name to avoid renames)
        'blue-primary': '#796cbf',  // accent-600, used for button fills
        // Neutral
        'gray-primary': '#9397ab',  // neutral-500
        // Accent tonal ramp
        'accent-100': '#f5f4ff',
        'accent-200': '#e7e5fe',
        'accent-300': '#d2cefd',
        'accent-400': '#b5abfc',
        'accent-500': '#968ae0',
        'accent-600': '#796cbf',
        'accent-700': '#5d5294',
        'accent-800': '#423a6a',
        'accent-900': '#2b2741',
        // Neutral tonal ramp
        'neutral-300': '#cfd3e5',
        'neutral-400': '#b2b6ca',
        'neutral-500': '#9397ab',
        'neutral-600': '#75798c',
        'neutral-700': '#595d6c',
        'neutral-800': '#3f424d',
        'neutral-900': '#292b31',
      },
      fontFamily: {
        // All roles use Inter per the Nocturne design system
        outfit: ['var(--font-inter)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backdropBlur: {
        sm: '4px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(145, 132, 217, 0.4)',
        'glow-lg': '0 0 30px rgba(145, 132, 217, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
