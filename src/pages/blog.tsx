import React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { Panel } from "../components/panel/panel";
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";
import { Spacer } from "../components/ui/spacer/spacer";

const BlogIndex = ({ data }: any) => {
	const posts = data.allMdx.edges
	return (
		<Layout >
			<SEO 
				title="Blog Posts"
				description="Website blog posts"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<Spacer height={10} units="vh"/>
			<div className="content__container">
				<div className="content__header">
					<h2 className="no__margin">Blog Posts</h2>
					<p>Full feature articles</p>
					<Divider/>
				</div>
				{posts.map((post: any) => {
					const title = post.node.frontmatter.title || post.node.fields.slug;
					const { description, thumb, tags } = post.node.frontmatter;
					const { id, fields, } = post.node;
					return (
						<Panel
							key={id}
							link={fields.slug}
							title={title}
							description={description}
							imageUrl={thumb.publicURL}
							tags={tags}
						/>
					)
				})}
			</div>
			<Spacer height={60} units="vh" />
		</Layout>
	)
}

export default withAddons(BlogIndex)

export const pageQuery = graphql`
query AllBlogPosts {
	site {
		siteMetadata {
			title
			description
			social {
				github
			}
	  	}
	}
	allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {glob: "**/blog/**/*.md"}}) {
		edges {
			node {
				id
				fields {
					slug
				}
				frontmatter {
					title
					description
					tags
					thumb {
						publicURL
					}
				}
			}
	  	}
	}
}
`