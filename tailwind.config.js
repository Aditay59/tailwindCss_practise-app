/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '321px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "itr": ["Inter", "sans-serif"],
        "cn": ["Comic Neue", "sans-serif"],
        "ppns": ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': "#3238f2"
      }
    },
  },
  plugins: [],
}

