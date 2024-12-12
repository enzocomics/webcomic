import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "stage.directus.cuek.co",
			},
			{
				protocol: "https",
				hostname: "cms.cuek.co",
			},
		],
	},
	staticPageGenerationTimeout: 30,
};

export default nextConfig;
