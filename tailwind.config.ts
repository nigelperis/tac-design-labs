import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBE8DB',
          100: '#F6D2B6',
          200: '#EDA268',
          300: '#E5751F',
          400: '#A05013',
          500: '#552B0A',
          600: '#442208',
          700: '#321906',
          800: '#201004',
          900: '#120902',
          950: '#090501',
        },
        secondary: {
          50: '#F8E9DD',
          100: '#F1D3BC',
          200: '#E3A97C',
          300: '#D57D39',
          400: '#9C5621',
          500: '#5A3213',
          600: '#48280F',
          700: '#371E0C',
          800: '#261508',
          900: '#110904',
          950: '#080502',
        },
        accent: {
          50: '#FAF2EA',
          100: '#F5E2D1',
          200: '#ECC7A7',
          300: '#E2AA79',
          400: '#D98F4F',
          500: '#C6742B',
          600: '#9F5D23',
          700: '#754419',
          800: '#502E11',
          900: '#261608',
          950: '#150C05',
        },
      },
      fontFamily: {
        primary: ['var(--font-comic-neue)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
