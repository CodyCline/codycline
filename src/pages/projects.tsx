import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { Card } from '../components/card/card';
import SEO from '../utils/seo';
import { Divider } from '../components/ui/divider/divider';
import { Spacer } from '../components/ui/spacer/spacer';
import { withAddons } from '../utils/with-addons';

const ProjectIndex = ({ data }: any) => {
	const posts = data.allMdx.edges
	return (
		<Layout>
			<SEO title="All projects" />
			<div className="projects__header">
				<h2 className="no-margin">Projects</h2>
				<Divider style={{ width: "30vh" }} />	
			</div>
			<div className="projects__container">
				{posts.map((project: any) => {
					const title = project.node.frontmatter.title || project.node.fields.slug;
					const { external_link, github_link, description } = project.node.frontmatter;
					const { id, fields } = project.node;
					return (
						<React.Fragment>
							<Card
								key={id}
								title={title}
								description={description}
								externalUrl={external_link}
								gitUrl={github_link}
							/>
						</React.Fragment>
					);
				})}
			</div>
			
			<Spacer height={30} units="vh" />
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