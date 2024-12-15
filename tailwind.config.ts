import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: ["selector", "[data-mode=dark"],
	theme: {
		extend: {
			fontFamily: {
				copy: ["var(--font-copy)"],
				display: ["var(--font-display)"],
			},
		},
	},
	plugins: [],
} satisfies Config
