/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      colors:{
        primary_color:'#00838f',
        secondary_color:'#2095A2'
      },
      boxShadow:{
        'custom': 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      }
     
    },
  },
  plugins: [

  ],
}