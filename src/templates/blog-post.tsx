import React from "react"
import { graphql, Link } from "gatsby"
import { Markdown } from '../utils/markdown'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from "../components/layout/layout"
import SEO from "../utils/seo"
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";
import { Tag } from "../components/ui/tags/tags";
import "gatsby-remark-mathjax-ssr/mathjax.css";

const BlogPostTemplate = ({ data, pageContext }: any) => {
	const post = data.mdx;
	const siteTitle = post.frontmatter.title || data.site.siteMetadata.title;
	const siteDescription = post.frontmatter.description || post.excerpt;
	const { tags } = data.mdx.frontmatter;
	const { previous, next } = pageContext;
	return (
		<Layout>
			<SEO
				title={siteTitle}
				description={siteDescription}
				contentType="article"
				lang="en"
				siteMeta={data.site.siteMetadata}
			/>
			<img className="article__cover" src={post.frontmatter.thumb.publicURL} alt="banner"/>
			<article className="article__container" id={post.id}>
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
				<div
					className="article__tags"
					
				>
					{tags && tags.map((name: string, index: number) => {
						return (
							<Tag
								key={index}
								icon={name}
								link={`/meta/${name}`}
							>
								{name}
							</Tag>
						);
					})
					}
				</div>
				<nav className="article__navigation">
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
	);
}

export default withAddons(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
			thumb {
				publicURL
			}
		}
		body
    }
  }
`
