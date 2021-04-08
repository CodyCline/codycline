const emoji = require(`remark-emoji`);

module.exports = {
	siteMetadata: {
		title: `Cody Cline`,
		author: {
			name: `Cody Cline`,
			summary: `Software Developer based in Seattle, WA. 
			My few areas of specialization are DevOps, security, and web app development. 
			Currently, on a mission to craft useful, high-quality open-source software and patch security holes in the web.`,
		},
		description: `Developer blog and portfolio with code-focused content.`,
		social: {
			github: `codycline`
		}
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
				path: `${__dirname}/content/snippets`,
				name: `snippets`,
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
					// {
					// 	resolve: `gatsby-remark-mathjax-ssr`,
					// 	options: {
					// 		// Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
					// 		strict: `ignore`
					// 	}
					// },
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-plugin-sass`,
		// `gatsby-plugin-feed`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
