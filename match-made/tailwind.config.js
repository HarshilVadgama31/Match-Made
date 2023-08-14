/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg_light: "#fff4f4",
        font_light: "#000000",
        card_light: "#f7e6c4",
        button_light: "#f1c376",
        bg_dark: "#000000",
        font_dark: "#fff4f4",
        card_dark: "#27374d",
        button_dark: "#506a7e",
      },
      backgroundImage: {
        landing_dark: "url('../image/Image_Landing_Page_dark.png')",
        landing_light: "url('../image/Image_Landing_Page_light.png')",
      },
    },
  },
  plugins: [],
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/tw-elements/dist/js/**/*.js",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         bg_light: "#fff4f4",
//         font_light: "#000000",
//         card_light: "#f7e6c4",
//         button_light: "#f1c376",
//         bg_dark: "#000000",
//         font_dark: "#fff4f4",
//         card_dark: "#27374d",
//         button_dark: "#506a7e",
//       },
//       backgroundImage: {
//         landing_dark: "url('../image/Image_Landing_Page_dark.png')",
//         landing_light: "url('../image/Image_Landing_Page_light.png')",
//       },
//     },
//   },
//   plugins: [
//     require("tailwind-scrollbar"),
//     require("tw-elements/dist/plugin.cjs"),
//     require("flowbite/plugin"),
//   ],
// };
