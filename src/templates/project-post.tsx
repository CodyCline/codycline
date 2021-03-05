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
	const siteTitle = post.frontmatter.title || data.site.siteMetadata.title;
	const siteDescription = post.frontmatter.description || post.excerpt;
	const { previous, next } = pageContext;
	return (
		<Layout id={post.id}>
			<SEO
				title={siteTitle}
				description={siteDescription}
				contentType="article"
				lang="en"
				siteMeta={data.site.siteMetadata}
			/>
			<img className="article__cover" src={post.frontmatter.banner && post.frontmatter.banner.publicURL || "https://via.placeholder.com/300x300"} alt="banner" />
			<article id={post.id} className="article__container" >
                <h1 className="article__large-header">{post.frontmatter.title}</h1>
                <h3>{post.frontmatter.date}</h3>
                <Divider/>
                <section className="article__markdown-section">
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
			external_link
			github_link
			banner {
				publicURL
			}
		}
		body
    }
}
`
