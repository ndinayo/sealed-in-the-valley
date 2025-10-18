/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e1a122",        // Gold accent
        secondary: "#82b440",      // Green
        darkblue: "#00204c",       // Navbar/Footer
        nightblue: "#011736",      // Dark sections
        dark: "#262626",           // Headings/Text
        midgray: "#6f7a8a",        // Paragraphs
        graylight: "#f7f7f7",      // Section background
        grayborder: "#eaeaeb",     // Dividers
        white: "#ffffff",
        offwhite: "#fffcf8",
        black: "#000000",
        goldsoft: "#e1a12254",
        softyellow: "#ffefce",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
