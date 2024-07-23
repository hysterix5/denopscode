/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'baby-powder': '#F0F4EF',
        'rich-black': '#00171F',
        'prussian-blue': '#003459',
        'cerulean': '#007EA7',
        'picton-blue': '#00A8E8',
      },
      fontFamily: {
        'teko': ["Teko"],
        'figtree': ["Figtree"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

