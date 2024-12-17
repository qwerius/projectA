/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,        // Menjaga container tetap di tengah halaman
        padding: '2rem',     // Menambahkan padding di dalam container
        screens: {
          'xs': '100%',      // Container full-width di layar xs
          'sm': '640px',     // Container dengan lebar 640px di layar sm
          'md': '768px',     // Container dengan lebar 768px di layar md
          'lg': '960px',     // Container dengan lebar 960px di layar lg
          'xl': '1024px',    // Container dengan lebar 1100px di layar xl
          '2xl': '1440px'    // Container dengan lebar 1200px di layar 2xl
        }
      },
      screens: {
        screens: {
          'xs': '480px',  // Ukuran layar ekstra kecil (lebih kecil dari sm)
          'sm': '640px',  // Ukuran layar kecil
          'md': '768px',  // Ukuran layar medium
          'lg': '1024px', // Ukuran layar besar
          'xl': '1280px', // Ukuran layar ekstra besar
          '2xl': '1536px',
        },
      },
      fontSize: {
        'xs': '0.75rem', // Ukuran font extra small
        'sm': '0.875rem', // Ukuran font small
        'md': '1rem', // Ukuran font medium
        'lg': '1.125rem', // Ukuran font large
        'xl': '1.25rem', // Ukuran font extra large
        '2xl': '1.5rem', // Ukuran font 2x large
        '3xl': '1.875rem', // Ukuran font 3x large
        '4xl': '2.25rem', // Ukuran font 4x large
        '5xl': '4rem', // Ukuran font 5x large
        '6xl': '6rem', // Ukuran font 6x large
      },
      colors: {
        hijausawit: '#349E75',  
        hijausawitgelap: '#237D5B',
        hijausawitgelappisan: '#194836',
        orangesawit: '#FEAF39',
        abuabu: '#f1f5f9',
        abuwindow: '#f3f3f3'
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

