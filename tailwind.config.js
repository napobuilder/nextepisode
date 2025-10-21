/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Inspirado en flores de cerezo y cielos de atardecer anime
        'white-sakura': '#FFFBFB', // Un blanco muy pálido, casi rosa
        'sakura-light': '#FCEEED',
        'sakura-deep': '#D8A7B1',
        'gray-night': '#2E2A3D', // Nuestro "negro", un morado/gris oscuro
        'neon-magenta': '#E83F6F', // El acento para botones y ofertas
        'water-blue': '#3DCCC7',
      },
      fontFamily: {
        // Definimos las fuentes importadas
        sans: ['Noto Sans JP', 'sans-serif'],
        display: ['Montserrat Alternates', 'sans-serif'],
      },
      keyframes: {
        // Animación sutil para las cards de productos
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        // Efecto para el Hero Banner
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'subtle-float': 'subtle-float 4s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 10s ease infinite',
      },
      backgroundSize: {
        // Para el gradiente animado
        '200%': '200% 200%',
      }
    },
  },
  plugins: [],
}

