/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./1_app/**/*.{js,ts,jsx,tsx}",
    "./2_pages/**/*.{js,ts,jsx,tsx}",
    "./3_widgets/**/*.{js,ts,jsx,tsx}",
    "./4_features/**/*.{js,ts,jsx,tsx}",
    "./5_entities/**/*.{js,ts,jsx,tsx}",
    "./6_shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },

    extend: {
    },
  },
  plugins: [],
};
