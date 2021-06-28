module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
      colors: {

        "liquid-peach": "#dfd4c6",
        "liquid-darkblue": "#070768",
        "liquid-blue-grey": "#cedbde",
        "liquid-light-pink": "#cacaca",
        "liquid-mac-cheese": "#e5ac39",
        "liquid-brown-grey": "#919191",
        "liguid-lighter-pink": "#d8d8d8",
        "liquid-white": "#ffffff",
        "liquid-grey": "#ebebeb",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"], 
    },
    container: {
      center: true,
      padding: "5rem",
      screens: {
        lg: "1600px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
