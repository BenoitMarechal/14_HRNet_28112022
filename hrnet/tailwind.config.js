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
          primary: '#94ac1b', //background clair,
          //primary: '#5a6f08', //background foncé,
          secondary: '#5a6f08', //bordures foncées
          //secondary: '#94ac1b', //bordures foncées
          //neutral: 'black',
          // primary: '#4ce09d', //background
          // secondary: '#17432f', //foncé
          neutral: '#343D07', //clair
          // accent: 'blue',
          // 'base-100': 'red', //fond des forms
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
