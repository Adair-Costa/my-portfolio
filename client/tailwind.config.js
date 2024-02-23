import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#5a3d5c",
      hero: "#3648574d",
      logo: "#ad8c45",
      paragraph: '#AC9993',
      btn: '#364857',
      white: "#ffffff",
      black: '#000000'
    },
    screens: {
      xs: '200px',
      ...defaultTheme.screens
    },
    // fontFamily: {
    //   'logo': ['Alfa Slab One']
    // },
    extend: {},
  },
  plugins: [],
};
