/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      colors : {
        'yellow-1000' : '#FFCD00',
        'white-2' : '#FFFAE6',
        'green-2' : '#054a47',
        'orange-2' : '#ffa800',
        'green-3' : '#48ebdd',
        'green-4' : '#48ebdd',
        'gray-1000' : '#242529',
      }
    },
  },
  plugins: [],
}

