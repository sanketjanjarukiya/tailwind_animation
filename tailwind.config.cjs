/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        '360':'360deg',
      },
      skew:{
        '360':'360deg'
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}
