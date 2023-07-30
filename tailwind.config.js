/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'doodle': ['Gochi Hand', 'cursive']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      cursor: {
        // pencil
        'pencil': "url(/img/pencil.png) 0 24, auto",
        'pencil-dark': "url(/img/pencil-invert.png) 0 24, auto",
      },
    },
  },
  plugins: [
  ],
}
