/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F87516',
        'custom-blue':'#5E11FF',
        'bg':'#0e0f1a'
      },
      fontFamily:{
        sora:["Sora", 'sans-serif'],
        Outfit:["Outfit", 'sans-serif']
      },
      screens:{
        "3xl":"1700px",
        "4xl":"1850px"
      }
    },
  },
  plugins: [],
}