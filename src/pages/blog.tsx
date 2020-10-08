import React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { Panel } from "../components/panel/panel";
import { withAddons } from "../utils/withAddons";
import { Divider } from "../components/ui/divider/divider";
import { MetaTag } from "../components/ui/tags/tags";

const BlogIndex = ({ data }: any) => {
	// const siteTitle = data.site.siteMetadata.title
	const posts = data.allMdx.edges
	return (
		<Layout >
			<SEO title="All blog posts" />
			<div className="project__container">
				<h2>Blog Posts</h2>
				<Divider style={{ width: "30vh" }} />
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
						>
							{tags && tags.map((tag: string, inc:number) => {
								return (
									<MetaTag link={`/meta/${tag}`} key={inc}>
										{tag}
									</MetaTag>
								)
							})}
						</Panel>
					)
				})}
			</div>
		</Layout>
	)
}

export default withAddons(BlogIndex)

export const pageQuery = graphql`
query {
	site {
		siteMetadata {
			title
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