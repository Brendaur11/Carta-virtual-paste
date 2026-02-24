/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rose:  { DEFAULT: "#F2C4CE", dark: "#E8A0B0" },
        beige: "#F9F3EC",
        cream: "#FDF8F3",
        lav:   { DEFAULT: "#DDD0EA", dark: "#C5B3DA" },
        mocha: "#7A5C4E",
        muted: "#9B8880",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans:  ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "20px" },
      boxShadow: {
        card: "0 2px 16px rgba(122,92,78,.08)",
        hover: "0 4px 24px rgba(122,92,78,.14)",
      },
    },
  },
  plugins: [],
};
