import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout/layout";
import SEO from "../utils/seo";
import { withAddons } from "../utils/with-addons";

const Error404Page = ({ data }: any) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout>
			<SEO 
				title="Not Found"
				description="The page you are looking for has not been found"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<h1>Not Found</h1>
			<p>What you are looking for does not exist!</p>
		</Layout>
	)
}

export default withAddons(Error404Page);

export const pageQuery = graphql`
query Error404Page {
	site {
		siteMetadata {
			title
			description
			social {
				github
			}
		}
	}
}
`
