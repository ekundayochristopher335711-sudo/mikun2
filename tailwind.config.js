/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#B8FF3D',
        'brand-lime-hover': '#9CE62B',
        'brand-forest': '#173B35',
        'brand-soft': '#E8FFDF',
        'brand-soft-hover': '#D7FFCA',
        'brand-black': '#111111',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
