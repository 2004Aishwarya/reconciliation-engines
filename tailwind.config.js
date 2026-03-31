/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00d4ff',
        success: '#00ff88',
        warning: '#ffd60a',
        error: '#ff4757',
        duplicate: '#ff6b35',
        lag: '#a78bfa',
        darkBg: '#0f172a',
        darkCard: '#1e293b'
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
