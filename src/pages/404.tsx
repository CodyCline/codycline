import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout/layout";
import SEO from "../utils/seo";
import { withAddons } from "../utils/with-addons";

const NotFoundPage = ({ data }: any) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout title={siteTitle}>
			<SEO title="Not Found" />
			<h1>Not Found</h1>
			<p>What you are looking for does not exist!</p>
		</Layout>
	)
}

export default withAddons(NotFoundPage);

export const pageQuery = graphql`
query {
	site {
    	siteMetadata {
        	title
      	}
    }
}
`
