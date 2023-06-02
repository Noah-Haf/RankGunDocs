/**
 * @type {import("nextra").NextraConfig}
 */
const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
	reactStrictMode: true,
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/docs",
				permanent: false,
			},
		];
	},
});
