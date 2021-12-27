/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const metadata = {
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
  },
  siteUrl: `https://codycline.com`
}


module.exports = withMDX({
  reactStrictMode: true,
  metadata: metadata,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
});
