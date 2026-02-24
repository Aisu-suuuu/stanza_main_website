import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        primary: {
          DEFAULT: '#7C3AED',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#7C3AED',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        brand: {
          'purple-primary': '#7C3AED',
          'purple-violet': '#7C3AED',
          'purple-light': '#7C3AED',
          'purple-dark': '#7C3AED',
          'pink-accent': '#7C3AED',
        },
        surface: {
          dark: 'var(--surface-dark)',
          card: 'var(--surface-card)',
        },
        cream: 'var(--cream)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #7C3AED 0%, #7C3AED 100%)',
        'gradient-text': 'linear-gradient(90deg, #7C3AED 0%, #7C3AED 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s linear infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
