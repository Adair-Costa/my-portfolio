/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Excon",
      },
      colors: {
        base: "#34495E",
        primary: "#F7FA86",
        neutral: "#FFFFFF",
      },
      screens: {
        phone: "0px",
        // => @media (min-width: 640px) { ... }

        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
