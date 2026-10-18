/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf8',
          100: '#d8f7ee',
          200: '#aff0df',
          300: '#7fe6cf',
          400: '#4adcaf',
          500: '#28c99d',
          600: '#1aa97f',
          700: '#118565',
          800: '#0f6a50',
          900: '#0e5543',
        },
        accent: '#f9a826',
      },
      boxShadow: {
        soft: '0 24px 50px rgba(14, 30, 37, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(40, 201, 157, 0.22), transparent 45%)',
      },
    },
  },
  plugins: [],
};
