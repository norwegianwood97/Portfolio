/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        navy: {
          50: '#f4f7fb',
          100: '#e8eef7',
          700: '#17365f',
          800: '#102846',
          900: '#0b1b31',
          950: '#071322',
        },
        steel: '#64748b',
        ink: {
          950: '#0A0A0F',
          900: '#13131A',
          850: '#161B22',
          800: '#1A1A24',
          700: '#2A2A38',
          500: '#8B8B95',
          300: '#B8B8C5',
          100: '#F5F5FA',
        },
        accent: {
          purple: '#7C3AED',
          'purple-soft': '#C4B5FD',
          cyan: '#06B6D4',
          'cyan-soft': '#67E8F9',
        },
        syntax: {
          key: '#FDA4AF',
          string: '#86EFAC',
          dash: '#67E8F9',
          highlight: '#C4B5FD',
        },
      },
      backgroundImage: {
        'name-grad': 'linear-gradient(90deg, #A78BFA 0%, #06B6D4 100%)',
        'dot-grid': 'radial-gradient(rgba(42, 42, 56, 0.9) 0.8px, transparent 0.8px)',
      },
      backgroundSize: {
        'dot-grid': '22px 22px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
