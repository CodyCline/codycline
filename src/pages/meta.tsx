import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout/layout"
import { withAddons } from "../utils/withAddons"

const Meta = ({ data }: any) => (
	<Layout>
		<div>
			<h1>Site Meta</h1>
			<ul>
				{data.allMdx.group.map(tag => (
					<li key={tag.fieldValue}>
						<Link to={`/meta/${(tag.fieldValue)}/`}>
							{tag.fieldValue} ({tag.totalCount})
                        </Link>
					</li>
				))}
			</ul>
		</div>
	</Layout>
)

export default withAddons(Meta);

export const pageQuery = graphql`
query {
    allMdx(limit: 2000) {
      	group(field: frontmatter___tags) {
        	fieldValue
        	totalCount
      	}
    }
}
`