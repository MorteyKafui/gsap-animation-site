/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#CF5C36",
        "color-2": "#F6AA1C",
        "color-3": "#C6AE82",
        "bg-color": "#191716",
      },
    },
  },
  plugins: [],
};
