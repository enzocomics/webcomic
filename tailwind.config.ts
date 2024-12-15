import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: ["selector", "[data-mode=dark"],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
