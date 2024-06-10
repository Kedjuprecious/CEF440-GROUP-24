/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary:{
          DEFAULT:'#FFAD0F'
        }
      }
    },

    fontFamily: {
      outfitRegular: ["Outfit-Regular", "sans-serif"],
      outfitMedium: ["Outfit-Medium", "sans-serif"],
      outfitBold: ["Outfit-Bold", "sans-serif"]
    }
  },
  plugins: [],
}

