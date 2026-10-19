import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#09090B',
        offblack: '#0F172A',
        accent: {
          blue: '#2563EB',
          cyan: '#0284C7',
          indigo: '#4F46E5',
          sky: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['Geist', 'var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Geist', 'var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      animation: {
        'marquee-slow': 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-rev 48s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
