/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/Bitmap.png')",
      }
    },
  },
  plugins: [],
}
