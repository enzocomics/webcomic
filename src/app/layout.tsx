
import { Params } from "next/dist/server/request/params"
import "$/styles/global.css"

/**
 * # Root Layout
 * 
 * The homepage base layout that persists across all routes.
 *  * 
 */

export default function RootLayout(params: Params) {
	return (
		<html>
			<body className="bg-red-500">
				{params.children}
			</body>
		</html>
	)
}