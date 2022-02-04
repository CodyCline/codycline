/** @type {import('next').NextConfig} */

const { withSuperjson } = require("next-superjson");

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


module.exports = withSuperjson()({
  reactStrictMode: true,
  metadata: metadata,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ["via.placeholder.com", "github.com", "img.shields.io"],
  },
});
