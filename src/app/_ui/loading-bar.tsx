"use client"
/**----------------------------------- */
// Third-Party Libraries 
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

/**-----------------------------------
 * Page loading bar. Uses [`next-nprogress-bar`](https://github.com/Skyleen77/next-nprogress-bar) and a customized [`nprogress`](https://github.com/enzocomics/nprogress) that persists the loading bar after completion instead of removing it.
 * 
 * @returns the loading bar ui
 * 
 **/
export default function LoadingBar() {
	/** TODO: `barColor` is currently hardcoded. It should dynamically change according to the active palette. The loadbar module (nprogress) only accepts a true CSS value, so we will have to retrieve it from tailwind somehow.
	 *
	 **/
	const barColor = "white"

	// Output
	return (
		<div
			id="loading"
			className="w-full h-1 [&:not(.nprogress-busy_&)]:bg-white"
		>
			<ProgressBar
				color={barColor}
				height="4px"
				options={{
					parent: "#loading",
				}}
				startPosition={0.08}
				stopDelay={1000}
			/>
		</div>
	)
}