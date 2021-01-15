import React from "react"
import { graphql, Link } from "gatsby"
import { Markdown } from '../utils/markdown'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from "../components/layout/layout"
import SEO from "../utils/seo"
import { withAddons } from "../utils/with-addons";
import { Divider } from "../components/ui/divider/divider";
import { Tag } from "../components/ui/tags/tags";

const BlogPostTemplate = ({ data, pageContext }: any) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const { tags } = data.mdx.frontmatter;
	const { previous, next } = pageContext;
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<img className="article__cover__image" src={post.frontmatter.thumb.publicURL} alt="banner.jpg" />
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
				<Divider />
				<section style={{
					lineHeight: `28px`,
					letterSpacing: `-0.003em`
				}}>
					<Markdown>
						<MDXRenderer>
							{post.body}
						</MDXRenderer>
					</Markdown>
				</section>
				<div style={{display: "grid", gridTemplateColumns: "repeat(6fr, auto)"}} className="article__tags">
					{
						tags && tags.map((name: any, index: number) => {
							console.log("the tag", name)
							return (
								<Tag icon={name} key={index}>{name}</Tag>
							)
						})
					}
				</div>
				<nav
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
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
