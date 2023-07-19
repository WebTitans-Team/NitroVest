/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          "100": "#2e2f38",
          "200": "#000",
        },
        white: "#fff",
        mediumblue: {
          "100": "#2639ed",
          "200": "#1429e3",
        },
        "neutral-4": "#e2e2ea",
        darkgray: {
          "100": "#a4a4a4",
          "200": "#959595",
        },
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#f1f2f2",
          "300": "#f1f1f1",
        },
        dimgray: "#565656",
        gainsboro: "#e4e4e4",
        cornsilk: "#fff5db",
        gray: "#8e8e8e",
        "text-and-main-white": "#fafafa",
        "text-and-main-gray-2": "#909090",
        black1: "#313131",
        aliceblue: {
          "100": "#f4f9ff",
          "200": "#e7f0fc",
        },
        deeppink: "#ff007a",
      },
      fontFamily: {
        "title-heading-4": "Poppins",
        actor: "Actor",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "13xl": "32px",
        "81xl": "100px",
        "291xl-5": "310.5px",
        "77xl": "96px",
        "41xl": "60px",
        "56xl": "75px",
        "481xl": "500px",
        "37xl": "56px",
      },
    },
    fontSize: {
      xs: "12px",
      "3xs": "10px",
      "5xs": "8px",
      lg: "18px",
      xl: "20px",
      "8xl-2": "27.2px",
      sm: "14px",
      "21xl": "40px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
