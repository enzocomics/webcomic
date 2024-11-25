// Tailwind Global Style
import '@/styles/globals.css'
// UI
import LoadingBar from "./_ui/loading-bar"
import Link from "next/link"

/**
 * # Root Layout
 * 
 * The homepage base layout that persists across all routes.
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
		<body className="bg-gray-900 text-white">
			<LoadingBar />
			<header>
				Header
			</header>
			<main>
				{children}
				<p><Link href="/">Home</Link></p>
				<p><Link href="/page">Another page</Link></p>
			</main>
			<footer>
				Footer
			</footer>
		</body>
	</html >
}