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
			<style jsx>{`
				@font-face {
					font-family: "AftikaBold";
					src: url("/fonts/AftikaBold.ttf") format("truetype");
					/* Add other formats if available */
				}

				@font-face {
					font-family: "Aftika";
					src: url("/fonts/Aftika.ttf") format("truetype");
					/* Add other formats if available */
				}
			`}</style>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="110"
				height="110"
				viewBox="0 0 456.8 98"
			>
				<path
					d="m64.3,0h-30.74c-3.1,0-6.06,1.27-8.32,3.38L3.38,25.24c-2.26,2.26-3.38,5.22-3.38,8.32v30.88c0,3.1,1.27,6.06,3.38,8.32l21.86,21.86c2.26,2.26,5.22,3.38,8.32,3.38h30.88c3.1,0,6.06-1.27,8.32-3.38l21.86-21.86c2.26-2.26,3.38-5.22,3.38-8.32v-30.88c0-3.1-1.27-6.06-3.38-8.32L72.62,3.38c-2.12-2.12-5.22-3.38-8.32-3.38h0Z"
					fill="currentColor"
				/>
				<text
					transform="translate(132.5 75)"
					style={{
						fontFamily: "AftikaBold, Aftika",
						fontSize: "66px",
						letterSpacing: "-.01em",
					}}
					fill="currentColor"
				>
					<tspan x="0" y="0">
						R
					</tspan>
					<tspan x="46.05" y="0">
						ankGun
					</tspan>
				</text>
			</svg>
		</>
	),
	feedback: {
		content: "Question? Give us feedback →",
		labels: "feedback",
	},
	logoLink: "https://docs.rankgun.works/",
	project: {
		link: "https://discord.gg/Nx8enrGXgk",
		icon: (
			<svg width="24" height="24" viewBox="0 0 127.14 96.36">
				<path
					fill="currentColor"
					d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
				></path>
			</svg>
		),
	},
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
					href="/favicon-light.ico"
					rel="icon"
					media="(prefers-color-scheme: light)"
				/>
				<link
					href="/favicon-dark.ico"
					rel="icon"
					media="(prefers-color-scheme: dark)"
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
