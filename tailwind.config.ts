import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				golos: ['Golos Text', 'sans-serif'],
				mono: ['IBM Plex Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					cyan: '#00d4ff',
					amber: '#ffb300',
					green: '#00ff88',
					red: '#ff4444',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0,212,255,0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4)' }
				},
				'spring-bounce': {
					'0%': { transform: 'scaleY(1)' },
					'25%': { transform: 'scaleY(0.7)' },
					'50%': { transform: 'scaleY(1.15)' },
					'75%': { transform: 'scaleY(0.92)' },
					'100%': { transform: 'scaleY(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'formula-appear': {
					from: { opacity: '0', letterSpacing: '0.5em' },
					to: { opacity: '1', letterSpacing: 'normal' }
				},
				'scan-line': {
					from: { transform: 'translateY(-100%)' },
					to: { transform: 'translateY(100vh)' }
				},
				'counter-up': {
					from: { opacity: '0', transform: 'scale(0.5)' },
					to: { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-up': 'slide-up 0.7s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'spring-bounce': 'spring-bounce 1.5s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'formula-appear': 'formula-appear 0.8s ease-out forwards',
				'scan-line': 'scan-line 4s linear infinite',
				'counter-up': 'counter-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
