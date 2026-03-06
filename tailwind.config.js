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
        Outfit:["Outfit", 'sans-serif'],
        clash:["Clash Display", 'sans-serif']
      },
      screens:{
        "3xl":"1700px",
        "4xl":"1850px"
      },
      animation: {
        motionGradient: 'motionGradient 4s ease infinite',
      },
      keyframes: {
        motionGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [],
}
