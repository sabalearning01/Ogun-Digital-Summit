/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
  extend: {
    screens: {
        'smll': '320px',
        'sm': '640px',
        'point': '643px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage:{
        'bg': "url('public/img/People at the office during a work day.svg')",

      }

    },
    },
    plugins: [],
  };

