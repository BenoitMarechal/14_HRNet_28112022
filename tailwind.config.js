/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#94ac1b',
          secondary: '#5a6f08',
          neutral: '#343D07',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
