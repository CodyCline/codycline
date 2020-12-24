import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout/layout"
import { withAddons } from "../utils/with-addons"

const Meta = ({ data }: any) => {
	const { group } = data.allMdx;
	return (
		<Layout>
			<div style={{ margin: `auto`, width: `80%` }}>
				<h1>Site Meta</h1>
				{group.map((tag) => {
					const { fieldValue, totalCount } = tag;
					return (
						<div key={fieldValue}>
							<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
								<Link to={`/meta/${(fieldValue)}/`}>
									<h2>{fieldValue}</h2>
								</Link>
								<p>{totalCount} Post{totalCount <= 1 ? null : "s"}</p>
							</div>
							{tag.nodes.map((post) => {
								const { id, fields, frontmatter } = post;
								return (
									<div key={id} style={{ padding: "10px", margin: "1em 0 1em 0", border: "2px solid #c0c9ce", borderRadius: "20px" }}>
										<Link to={fields.slug}>
											{frontmatter.title}
										</Link>
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export default withAddons(Meta);

export const pageQuery = graphql`
query {
    allMdx(limit: 2000) {
		group(field: frontmatter___tags) {
			fieldValue
			totalCount
			nodes {
				id
				frontmatter {
					title
				}
				fields {
					slug
				}
			}
		}
  	}
}
`