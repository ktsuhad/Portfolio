/** @type {import('tailwindcss').Config} */
export default {
  content: [".ineex.html", "./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        ysabeau: ["Ysabeau Infant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
