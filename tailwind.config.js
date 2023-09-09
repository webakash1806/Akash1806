/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'button': '#6C72FF',
      'darkBG': '#080F25',
      'shadowBG': '#212C7B',
      'primary': '#101935',
      'btnHover': '#6C72FF',
      'primaryText': '#7F8EC5',
      'textHover': '#57C2FF',
      'liveTXT': '#14CA74',
      'liveBG': '#0C5648'
    },
    extend: {},
  },
  plugins: [],
}