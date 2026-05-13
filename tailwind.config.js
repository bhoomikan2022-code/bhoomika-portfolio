export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(91, 168, 255, 0.16)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(168, 85, 247, 0.18), transparent 22%), radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.16), transparent 25%)',
      },
      colors: {
        surface: '#07111f',
        overlay: 'rgba(12, 24, 49, 0.74)',
      },
      boxShadow: {
        card: '0 25px 80px rgba(4, 12, 30, 0.35)',
      },
      dropShadow: {
        glow: '0 0 20px rgba(129, 140, 248, 0.35)',
      },
    },
  },
  plugins: [],
};
