/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /top-[(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30)(px|em|vh|vw)]/,
      //       pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

