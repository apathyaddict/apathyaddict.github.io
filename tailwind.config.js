/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#f7f5ee",
        darkbeige: "#636458",
        bluegreen: "#32CCBC",
      },
      height: {
        84: "22rem", // Adjust the size as needed
      },
    },
  },
  plugins: [],
};
