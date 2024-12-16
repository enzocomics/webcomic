import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: ["selector", "[data-mode=dark"],
	theme: {
		extend: {
			colors: {
				base: {
					100: "rgb(var(--color-base-1) / <alpha-value>)",
					200: "rgb(var(--color-base-2) / <alpha-value>)",
					300: "rgb(var(--color-base-3) / <alpha-value>)",
					content: "rgb(var(--color-content) / <alpha-value>)",
				},
			},
			fontFamily: {
				copy: ["var(--font-copy)"],
				display: ["var(--font-display)"],
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			// LIGHT MODE + media query that reads the user's system settings
			addVariant("light", ["[data-mode=light] &"])
			addVariant("system", ["[data-mode=system] &"])
			addVariant("prefer-light", "@media (prefers-color-scheme: light)")
		}),
	],
} satisfies Config
