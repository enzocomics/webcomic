/**----------------------------------- */
// STYLES 
import { I18nProviderClient } from "@/lib/i18n/client"
import "@/styles/global.css"

/**
 * # Root Layout
 * 
 * The homepage base layout that persists across all routes.
 * 
 */

export default async function RootLayout({ params, children }: {
	params: Promise<{ locale: string }>
	children: React.ReactNode
}) {
	const { locale } = await params
	return (
		<html>
			<body className="bg-red-500">
				<I18nProviderClient locale={locale}>
					{children}
				</I18nProviderClient>
			</body>
		</html>
	)
}