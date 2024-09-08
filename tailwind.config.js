/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,           // Konteynerni markazga joylashtirish
        padding: {
          DEFAULT: '1rem',      // Asosiy padding
          sm: '2rem',           // Kichik ekranlar uchun padding
          md: '4rem',           // O'rta ekranlar uchun padding
          lg: '6rem',           // Katta ekranlar uchun padding
          xl: '8rem',           // Juda katta ekranlar uchun padding
        },
        screens: {
          xl: '1440px',         // Katta ekranlar uchun max-width 1440px
        },
      },
    },
  },
  plugins: [],
}



