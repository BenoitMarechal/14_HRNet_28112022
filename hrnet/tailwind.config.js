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
          neutral: '#c9f6e2', //clair
          accent: 'blue',
          'base-100': 'white',
          // secondary: '#508a77',
          // accent: '#508a77',
          // neutral: '#508a77',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
