/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        nav_text: "#00000",
        light:{
          text_emphasis:"blue",
          background: 'whitesmoke',
          middle:"#ffffff",
          surface:"#3e3e3e",
          heading:"#282828",
          nav_bg:"#3e3e3e",
          nav_dropshadow: 'black',
          nav_hover: '#959595',
          text: "#000000",
        },
        dark:{
          text_emphasis:"red",
          background:'#191919',
          middle:"#282828",
          surface:"#3e3e3e",
          heading:"#ffffff",
          nav_bg:"#282828",
          nav_dropshadow: '#3e3e3e',
          nav_hover: '#959595',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}