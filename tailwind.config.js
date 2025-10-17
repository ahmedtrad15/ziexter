module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#d73431', dark: '#b02724', light: '#e15652' },
        secondary: { DEFAULT: '#0a2e4d', dark: '#071f35', light: '#0d3d64' },
        accent: { DEFAULT: '#f59e0b', dark: '#d97706', light: '#fbbf24' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}

