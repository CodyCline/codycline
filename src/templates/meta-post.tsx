import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout/layout"
const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	return (
		<Layout >
			<div style={{ margin: `auto`, width: `80%` }}>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<h2>{tag}</h2>
					<p>{totalCount} Post{totalCount <= 1 ? null : "s"}</p>
				</div>
				{edges.map(({ node }) => {
					const { slug } = node.fields
					const { title } = node.frontmatter
					return (
						<div key={node.id} style={{ padding: "10px", margin: "1em 0 1em 0", border: "2px solid #c0c9ce", borderRadius: "20px" }}>
							<Link to={slug}>
								{title}
							</Link>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}
export default Tags
export const pageQuery = graphql`
query($tag: String) {
	allMdx(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { tags: { in: [$tag] } } }
	){
		totalCount
		edges {
			node {
				id
				fields {
					slug
				}
				frontmatter {
					title
				}
			}
    	}
    }
}
`