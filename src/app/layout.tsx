// Styles
import '@/styles/globals.css'

/**
 * # Root Layout
 * 
 * This layout applies to all routes.
 * 
 * @param {React.ReactNode} children - the contents of the accompanying `page.tsx`
 * @returns {JSX.Element} Returns `html` and `body` tags
 */

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Output
	return <html lang="en">
		<body>
			{children}
		</body>
	</html>
}