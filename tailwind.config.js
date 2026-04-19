export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rice-blue': '#3a7cb3',
        'rice-yellow': '#ecc44e',
        'rice-cream': '#edecd8',
        'rice-orange': '#e64117',
        'rice-dark': '#1a1a1a',
      },
      fontFamily: {
        'sans': ['"Inter Tight"', '"Bricolage Grotesque"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
