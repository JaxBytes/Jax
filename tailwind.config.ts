import { addDynamicIconSelectors } from '@iconify/tailwind';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './siteconfig.ts',
  ],
  safelist: [
    'icon-[fa6-brands--github]',
    'icon-[fa6-brands--x-twitter]',
    'icon-[fa6-brands--telegram]',
    'icon-[ri--bilibili-fill]',
    'icon-[mdi--camera]',
    'icon-[mdi--email]',
    'icon-[mdi--rss]',
    'text-[#4cabf0]',
    'text-[#ffa8d2]',
    'text-[#000000]',
    'text-[#f5cc00]',
    'text-[#ffbb00]',
  ],
  theme: {
    extend: {
      screens: {
        sm: '580px', // => @media (min-width: 580px) { ... }
      },
      colors: {
        bgColor: 'hsl(var(--theme-bg) / <alpha-value>)',
        textColor: 'hsl(var(--theme-text) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography, addDynamicIconSelectors()],
};
export default config;
