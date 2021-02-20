import React from "react"
import { graphql, Link } from "gatsby"
import { Markdown } from '../utils/markdown'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from "../components/layout/layout"
import SEO from "../utils/seo"
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";
import { Tag } from "../components/ui/tags/tags";

const SnippetPostTemplate = ({ data, pageContext }: any) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const { banner } = data.mdx.frontmatter;
    const category = data.mdx.frontmatter.tags[0];
	const { previous, next } = pageContext;
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			{banner && <img className="article__cover" src={post.frontmatter.thumb.publicURL} alt="banner.jpg" />}
			<article id={post.id} className="article__container" >
				<h1 className="article__large-header">{post.frontmatter.title}</h1>
				<h3>{post.frontmatter.date}</h3>
				<Divider />
				<section className="article__markdown-section">
					<Markdown>
						<MDXRenderer>
							{post.body}
						</MDXRenderer>
					</Markdown>
				</section>
				<div className="article__tags" >
                    <Tag 
                        icon={category} 
                        link={`/meta/${category}`}
                    >
                        {category}
                    </Tag>
				</div>
				<nav className="article__navigation" >
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</nav>
			</article>
		</Layout>
	)
}

export default withAddons(SnippetPostTemplate)

export const pageQuery = graphql`
  query SnippetPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
		id
		frontmatter {
			tags
			title
			date(formatString: "YYYY-MM-DD")
			description
			banner {
				publicURL
			}
		}
		body
    }
  }
`
