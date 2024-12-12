/**
 * # Root Layout
 * 
 * The homepage base layout that persists across all routes.
 *  * 
 */

import { Params } from "next/dist/server/request/params"

export default function RootLayout(params: Params) {
	return (
		<html>
			<body>
				{params.children}
			</body>
		</html>
	)
}