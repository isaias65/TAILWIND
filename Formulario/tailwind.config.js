/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "laptop-image": "url('../assets/img-1.jpg')"
      },
      
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

