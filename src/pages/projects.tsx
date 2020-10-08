import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout';
import SEO from '../utils/seo';
import { Divider } from '../components/ui/divider/divider';
import { Spacer } from '../components/ui/spacer/spacer';
import { withAddons } from '../utils/withAddons';
import { Panel } from '../components/panel/panel';
import { ExternalTag } from '../components/ui/tags/tags';

const ProjectIndex = ({ data }: any) => {
	const posts = data.allMdx.edges
	return (
		<Layout>
			<SEO title="All projects" />
			<div className="project__container">
				<h2>Projects</h2>
				<Divider style={{ width: "30vh" }} />
				<div className="project__page">
					{posts.map((project: any) => {
						const title = project.node.frontmatter.title || project.node.fields.slug;
						const { external_link, github_link, description, thumb } = project.node.frontmatter;
						const { id, fields } = project.node;
						return (
							<Panel
								key={id}
								link={fields.slug}
								title={title}
								description={description}
								imageUrl={thumb && thumb.publicURL}
							>
								<ExternalTag link={github_link} icon={["fab", "github"]} />
								<ExternalTag link={external_link} icon={["fas", "link"]} />
							</Panel>
						);
					})}
				</div>
				<Spacer height={30} units="vh" />
			</div>
		</Layout>
	)
}
export default withAddons(ProjectIndex)


export const pageQuery = graphql`
query AllProjects {
	site {
		siteMetadata {
			title
		}
	}
	allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {glob: "**/projects/**/*.md"}}) {
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
					external_link
					github_link
					thumb {
						publicURL
					}
				}
			}
		}
	}
}
	
`