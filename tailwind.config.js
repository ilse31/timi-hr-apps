/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx,vue}", // Menambahkan semua file dalam folder app dengan ekstensi tertentu
    "./components/**/*.{html,js,jsx,ts,tsx,vue}", // Menambahkan semua file dalam folder components dengan ekstensi tertentu
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          //* Background
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          //* Complement
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          //* Default
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          //* Hovered
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          //* Active
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
        },
        secondary: {
          50: "#EFF9F8",
          //* Background
          100: "#E8F4F3",
          200: "#E0F3F1",
          //* Complement
          300: "#D0EDEB",
          400: "#A2DBD7",
          //* Default
          500: "#40A69F",
          //* Hovered
          600: "#3B9993",
          //* Active
          700: "#2F7A75",
          800: "#235C58",
          900: "#173D3A",
        },
        typo: {
          DEFAULT: "#1F1F1F",
          secondary: "#707070",
          tertiary: "#999CA0",
          icons: "#999CA0",
          divider: "#EBEBEB",
          outline: "#D9D9D9",
        },
        dark: "#222222",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
