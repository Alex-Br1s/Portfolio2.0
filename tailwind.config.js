/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorPrincipal: '#0a192f',
        celestito: '#8DCDEE',
        verdecito: '#4cc2a6'
      },
      spacing: {
        al: '900px'
      },
      height: {
        'h-image': '300px', // Ejemplo de altura personalizada: 24rem
      }
    },
  },
  plugins: [],
};
