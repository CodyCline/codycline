import React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";
import { Strip } from "../components/strip/strip";
import { Spacer } from "../components/ui/spacer/spacer";

const SnippetIndex = ({ data }: any) => {
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    return (
        <Layout >
            <SEO title="All blog posts" />
            <Spacer height={10} units="vh"/>
            <div className="content__container">
                <div className="content__header">
                    <h2 className="no__margin">Snippets</h2>
                    <p>Bite-sized content for quick reading and implementation.</p>
                    <Divider/>
                </div>
                {posts.map((post: any) => {
                    const title = post.node.frontmatter.title || post.node.fields.slug;
                    const { description, date } = post.node.frontmatter;
                    const category = post.node.frontmatter.tags[0]
                    const { id } = post.node;
                    return (
                        <Strip
                            key={id}
                            title={title}
                            slug={post.node.fields.slug}
                            description={description}
                            category={category}
                            date={date}
                        />
                    )
                })}
            </div>
            <Spacer height={60} units="vh" />
        </Layout>
    )
}

export default withAddons(SnippetIndex)

export const pageQuery = graphql`
query AllSnippets {
	site {
		siteMetadata {
			title
	  	}
	}
	allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {glob: "**/snippets/**/*.md"}}) {
		edges {
			node {
				id
				fields {
					slug
				}
				frontmatter {
                    date(formatString: "YYYY-MM-DD")
					title
                    description
					tags
				}
			}
	  	}
	}
}
`