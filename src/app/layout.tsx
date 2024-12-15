/**----------------------------------- */
// STYLES 
import "#/styles/global.css"

/**
 * # Root Layout
 * 
 * The homepage base layout that persists across all routes.
 * 
 */

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html>
			<body className="bg-red-500">
				{children}
			</body>
		</html>
	)
}