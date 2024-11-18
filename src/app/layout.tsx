// Tailwind Global Style
import '@/styles/globals.css'

/**
 * # Root Layout
 * 
 * - Layouts define UI that is shared between multiple routes.
 * - This layout applies to all routes.
 * 
 * @param {React.ReactNode} children - the contents of the accompanying `page.tsx`
 * @returns {JSX.Element} Returns `html` and `body` tags
 * 
 */

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Output
	return <html lang="en">
		<body>
			<header>
				Header
			</header>
			<main>
				{children}
			</main>
			<footer>
				Footer
			</footer>
		</body>
	</html >
}