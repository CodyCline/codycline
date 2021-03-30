import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from '../utils/with-addons';
import "../styles/index.scss";





const Index = ({ data }: any) => {
	return (
		<Layout>
			<SEO
				title="Welcome"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<div style={{ display: `grid`, placeItems: `center`, overflow: `hidden` }}>
				
			</div>
			<div style={{ height: "60vh" }} />
		</Layout>
	)
}
export default withAddons(Index);

export const pageQuery = graphql`
query HomePage {
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


