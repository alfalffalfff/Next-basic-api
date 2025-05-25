const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },

  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bage-100": "#fae5d3",
        "bage-50": "#fef5e7",
      },
    },
  },
  variants: {},
  plugins: [rotateY],
};
