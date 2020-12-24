import React from "react"
import { graphql } from "gatsby"
import { Markdown } from '../utils/markdown'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from "../components/layout/layout"
import SEO from "../utils/seo"
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";

const ProjectPostTemplate = ({ data, pageContext}:any) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext;
	return (
		<Layout id={post.id}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<img className="article__cover__image" src={post.frontmatter.thumb && post.frontmatter.thumb.publicURL || "https://via.placeholder.com/300x300"} alt="banner.jpg" />
			<article
				id={post.id}
				style={{
					marginLeft: `auto`,
					padding: `1em`,
					marginRight: `auto`,
					maxWidth: `80%`,
				}}
			>
                <h1 className="big__header">{post.frontmatter.title}</h1>
                <h3>{post.frontmatter.date}</h3>
                <Divider/>
                <section style={{
                    lineHeight: `28px`,
                    letterSpacing: `-0.003em`
                }}>
                    <Markdown>
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </Markdown>
                </section>
			</article>
		</Layout>
	)
}

export default withAddons(ProjectPostTemplate)

export const pageQuery = graphql`
query ProjectPostBySlug($slug: String!) {
	site {
    	siteMetadata {
        	title
      	}
    }
    mdx(fields: { slug: { eq: $slug } }) {
		id
		frontmatter {
			title
			date(formatString: "YYYY-MM-DD")
			description
		}
		body
    }
}
`
