/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  content: [],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px",
      },
    },
  },
  plugins: [],
};
