const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      rose: colors.rose,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.4',
        normal: '1.45',
        relaxed: '1.625',
        loose: '2',
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
      },
      backgroundImage: {
        'gradient-50-50': 'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);',
        'gradient-30-70': 'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
        'gradient-20-80': 'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      cursor: {
        inherit: 'inherit',
      },
      outlineWidth: {
        3: '3px',
        6: '6px',
      },
      transitionDuration: {
        350: '350ms',
      },
      translate: {
        '1/8': '12.5%',
      },
      rotate: {
        15: '15deg',
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      width: {
        tabnav: 'calc(100% + 15px)',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};
