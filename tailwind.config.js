/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        textbg: "#0f0f0f",
        popclr: "#0d30bd",
        mainclr: "#081859",
      },
    },
  },
  plugins: [],
};
