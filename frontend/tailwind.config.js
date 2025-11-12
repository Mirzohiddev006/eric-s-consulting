/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark-blue": "#0a192f", // Example dark blue from your design
        "brand-blue": "#015FC9",
        "brand-secondary": "#0DD3F1",
      },
    },
  },
  plugins: [],
};
