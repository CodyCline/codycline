import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout/layout"
const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	const tagHeader = `${totalCount} post(s) tagged with "${tag}"`
	return (
		<Layout>
			<h1>{tagHeader}</h1>
			<ul>
				{edges.map(({ node }) => {
					const { slug } = node.fields
					const { title } = node.frontmatter
					return (
						<li key={slug}>
							<Link to={slug}>{title}</Link>
						</li>
					)
				})}
			</ul>
			<Link to="/tags">All tags</Link>
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