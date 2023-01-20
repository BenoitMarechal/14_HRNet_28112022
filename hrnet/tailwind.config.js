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
          primary: '#4ce09d', //background
          secondary: '#17432f', //foncé

          neutral: '#17432f', //clair
          accent: 'blue',
          'base-100': 'white',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
