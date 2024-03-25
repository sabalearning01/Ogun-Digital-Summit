/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      'smll': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  extend: {
    
      backgroundImage:{
        'bg': "url('public/img/People at the office during a work day.svg')",

      }

    },
    },
    plugins: [],
  };

