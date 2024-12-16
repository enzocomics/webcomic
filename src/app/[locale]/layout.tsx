/**----------------------------------- */
// I18N
import { setStaticParamsLocale } from "next-international/server"
import { I18nProviderClient } from "@/lib/i18n/client"
import { getStaticParams } from "@/lib/i18n/server"

// STYLES 
import { ThemeProvider } from "next-themes"
import { copy, display } from "@/styles/fonts"
import "@/styles/global.css"

/**-----------------------------------
 * Root Layout. Wraps the entire site.
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
		<html
			className={`scroll-smooth ${copy.variable} ${display.variable}`}
			data-mode="system"
			lang={locale}
			suppressHydrationWarning
		>
			<body className="bg-base-100 text-base-content">
				{/* NEXT-THEMES PROVIDER */}
				<ThemeProvider attribute="data-mode">
					{/* NEXT-INTERNATIONAL PROVIDER */}
					<I18nProviderClient locale={locale}>
						{children}
					</I18nProviderClient>
				</ThemeProvider>
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