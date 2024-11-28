"use client"
/**----------------------------------- */
// NEXT-NPROGRESS-BAR
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import "$/styles/nprogress.css"

/**-----------------------------------
 * Page loading bar.
 * - Uses a customized [`next-nprogress-bar`](https://github.com/enzocomics/next-nprogress-bar) that allows the style tag to be null, so we can apply our own CSS
 * - Uses a customized [`nprogress`](https://github.com/enzocomics/nprogress) that persists the loading bar after completion instead of removing it
 * 
 * @returns the loading bar ui
 * 
 **/
export default function LoadingBar({
	className
}: {
	className?: string
}) {
	// Output
	return (
		<div id="loading" className={className}>
			<ProgressBar
				height="4px"
				options={{
					parent: "#loading",
				}}
				startPosition={0.08}
				style={null}
			/>
		</div>
	)
}