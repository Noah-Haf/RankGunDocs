import React from "react";
import { useConfig } from "nextra-theme-docs";

export default {
	docsRepositoryBase: "https://github.com/Noah-Haf/RankGunDocs/tree/main/",
	sidebar: {
		defaultMenuCollapseLevel: 1,
		toggleButton: true,
	},
	toc: {
		title: "On this page",
		float: true,
		extraContent: function ExtraTOCContent() {
			return (
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
						href="https://app.rankgun.works/"
					>
						Dashboard →
					</a>
				</div>
			);
		},
	},
	logo: (
		<>
			<div className="flex items-center space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.0"
					width="28px"
					height="28px"
					className="h-7 w-7"
					viewBox="0 0 836.000000 836.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,836.000000) scale(0.100000,-0.100000)"
						fill="#7C24CC"
						stroke="none"
					>
						<path d="M2736 8339 c-193 -28 -364 -104 -518 -229 -40 -32 -503 -490 -1030 -1017 -863 -865 -962 -967 -1017 -1052 -64 -99 -111 -216 -139 -341 -15 -68 -17 -204 -17 -1510 0 -1139 3 -1448 13 -1500 30 -148 93 -296 178 -419 29 -41 418 -438 1033 -1053 894 -895 995 -992 1080 -1047 99 -64 216 -111 341 -139 68 -15 204 -17 1510 -17 1139 0 1448 3 1500 13 148 30 296 93 419 178 41 29 438 418 1053 1033 895 894 992 995 1047 1080 60 94 108 208 139 331 14 58 16 213 19 1470 3 956 0 1431 -7 1486 -26 200 -99 375 -218 522 -26 32 -485 493 -1019 1025 -839 834 -985 975 -1063 1026 -132 87 -279 140 -444 161 -100 12 -2774 11 -2860 -1z m1607 -2585 c83 -19 175 -58 244 -105 59 -39 1832 -1806 1913 -1906 289 -356 177 -878 -232 -1084 -190 -96 -443 -97 -631 -3 -29 15 -79 46 -112 69 -33 24 -348 332 -700 684 l-640 641 -670 -669 -670 -668 -95 -47 c-124 -60 -201 -79 -325 -79 -119 0 -211 20 -310 68 -179 86 -305 229 -371 420 -26 73 -28 93 -28 220 0 126 2 148 27 220 56 168 26 135 1012 1123 500 503 943 940 982 972 171 138 395 191 606 144z" />
					</g>
				</svg>

			</div>
		</>
	),
	feedback: {
		content: "Question? Give us feedback →",
		labels: "feedback",
	},
	logoLink: "https://docs.rankgun.works/",
	project: {
		link: "https://discord.gg/ZR8FCfXDUv",
		icon: (
			<svg width="24" height="24" viewBox="0 0 127.14 96.36">
				<path
					fill="currentColor"
					d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
				></path>
			</svg>
		),
	},
	primaryHue: 266,
	footer: {
		text: (
			<span>
				©️ {new Date().getFullYear()}, Coloop LTD, all rights reserved
			</span>
		),
	},
	head: function Head() {
		const { title } = useConfig().frontMatter;

		return (
			<>
				<link
					href="/favicon.ico"
					rel="icon"
	
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="RankGun Docs" />
				<meta
					name="description"
					content="Learn & Grow with the knowledge from RankGun"
				/>
				<meta
					name="og:description"
					content="Learn & Grow with the knowledge from RankGun"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="og:title"
					content={title ? title + " — RankGun" : "RankGun Docs"}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@Rank_Gun" />
				<title>{title ? `${title} — RankGun` : "RankGun Docs"}</title>
				<meta
					name="og:image"
					content={`/api/og?title=${encodeURIComponent(title)}`}
				/>
				<meta
					name="twitter:image"
					content={`/api/og?title=${encodeURIComponent(title)}`}
				/>
				<style
					dangerouslySetInnerHTML={{
						__html: `
							.nextra-sidebar-container li a {
								border-radius: 1.5em !important;
								padding-left: 12px !important;
							}

              .nextra-sidebar-container button {
                border-radius: 1.5em !important;
                padding-left: 12px !important;
              }
							
						`,
					}}
				/>
			</>
		);
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Docs",
		};
	},
};
