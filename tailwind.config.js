/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js, jsx, ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '48px',
          {
            lineHeight: '60px',
            fontWeight: '700',
          },
        ],
        h2: [
          '40px',
          {
            lineHeight: '50px',
            fontWeight: '700',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '30px',
            fontWeight: '600',
          },
        ],
        xs: ['14px'],
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
      outlineWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
