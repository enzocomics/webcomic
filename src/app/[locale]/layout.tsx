/**----------------------------------- */
// I18N
import { setStaticParamsLocale } from "next-international/server"
import { I18nProviderClient } from "@/lib/i18n/client"
import { getStaticParams } from "@/lib/i18n/server"

// STYLES 
import { copy, display } from "@/styles/fonts"
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
	// NEXT-INTERNATINOAL
	const { locale } = await params
	setStaticParamsLocale(locale)

	// OUTPUT
	return (
		<html className={`scroll-smooth ${copy.variable} ${display.variable}`}>
			<body>
				{/* NEXT-INTERNATIONAL PROVIDER */}
				<I18nProviderClient locale={locale}>
					{children}
				</I18nProviderClient>
			</body>
		</html>
	)
}

/**
 * Allows static rendering of the `locale` dynamic route by generating the param
 * 
 * @returns {function} getStaticParams() - the locale from next-international
 * 
 */
export function generateStaticParams() {
	return getStaticParams()
}