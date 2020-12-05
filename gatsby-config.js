const emoji = require(`remark-emoji`);

module.exports = {
	siteMetadata: {
		title: `Cody Cline`,
		author: {
			name: `Cody Cline`,
			summary: `No summary yet`,
		},
		description: `Developer blog with code-focused content.`,
	},
	plugins: [
		//Load Markdown (mdx) content and static assets
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/projects`,
				name: `projects`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
				name: `assets`,
			},
		},
		//Load Mdx and its plugins
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				remarkPlugins: [emoji],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Gatsby Starter Blog`,
		// 		short_name: `GatsbyJS`,
		// 		start_url: `/`,
		// 		background_color: `#fcfcfc`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `src/assets/manifest-icon.png`,
		// 	},
		// },
		`gatsby-plugin-sass`,
		`gatsby-plugin-fontawesome-css`,
		// `gatsby-plugin-feed`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
