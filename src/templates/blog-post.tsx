import React from "react"
import { graphql, Link } from "gatsby"
import { Markdown } from '../utils/markdown'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from "../components/layout/layout"
import SEO from "../utils/seo"
import { withAddons } from "../utils/withAddons";
import { Divider } from "../components/ui/divider/divider";
import { FunTable } from "../components/ui/table/table";

const BlogPostTemplate = ({ data, pageContext }: any) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext;
	const columns = React.useMemo(
		() => [
					{
						Header: 'First Name',
						accessor: 'firstName',
					},
					{
						Header: 'Last Name',
						accessor: 'lastName',
					},
					{
						Header: 'Age',
						accessor: 'age',
						width: 50,
					},
					{
						Header: 'Visits',
						accessor: 'visits',
						width: 60,
					},
					{
						Header: 'Status',
						accessor: 'status',
					},
					{
						Header: 'Profile Progress',
						accessor: 'progress',
					},
		],
		[]
	)
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
					<div className="styler">
						<FunTable columns={columns} data={[{
							firstName: "WOrd",
							lastName: " Sasfas",
							visits: "Hello world",
							progress: false,
							status: "Single"
						}]}></FunTable>
					</div>
					<Markdown>
						<MDXRenderer>
							{post.body}
						</MDXRenderer>
					</Markdown>
				</section>
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
