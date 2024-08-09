/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30DCB2",
          secondary: "#FFFFFF",
          accent: "#FF879A",
          neutral: "#FF879A",
          "base-100": "#12384B",
          info: "#38bdf8",
          success: "#65FFB2",
          warning: "#E3DD07",
          error: "#CD2824",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
