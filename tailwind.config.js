/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-01": "#fff",
        "neutral-07": "#2c2f24",
        "neutral-071": "#182226",
        "neutral-03": "#dbdfd0",
        darkslategray: {
          "100": "#474747",
          "200": "#2d2e2d",
        },
        "neutral-02": "#f9f9f7",
        dimgray: "#5d5d5d",
        "neutral-06": "#485460",
        brown: "#ad343e",
        "neutral-061": "#414536",
        "neutral-05": "#737865",
        "neutral-04": "#adb39e",
        "template-color-secondary": "#4d592b",
        "template-color-primary": "#ed5700",
        "primary-main": "#ee5622",
      },
      spacing: {},
      fontFamily: {
        "body-16px-bold": "'DM Sans'",
        puritan: "Puritan",
        "bt-01": "Poppins",
        "franklin-gothic-book": "'Franklin Gothic Book'",
        "playfair-display": "'Playfair Display'",
        "body-16px-medium": "Inter",
      },
      borderRadius: {
        "99xl": "118px",
        "15xl": "34px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      "5xl": "24px",
      "36xl": "55px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

