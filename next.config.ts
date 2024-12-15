import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				hostname: "localhost",
			},
		],
	},
	staticPageGenerationTimeout: 30,
}

export default nextConfig
