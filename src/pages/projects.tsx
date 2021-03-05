import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { Card } from '../components/card/card';
import SEO from '../utils/seo';
import { Divider } from '../components/ui/divider/divider';
import { Spacer } from '../components/ui/spacer/spacer';
import { withAddons } from '../utils/with-addons';

const ProjectIndex = ({ data }: any) => {
	const posts = data.allMdx.edges;
	return (
		<Layout>
			<SEO 
				title="Portfolio Projects"
				description="Software portfolio projects"
				siteMeta={data.site.siteMetadata}
				lang="en" 
			/>
			<div className="content__container">
				<Spacer height={10} units="vh"/>
				<div className="content__header">
					<h2 className="no__margin">Projects</h2>
					<p>Projects, mostly-web based and open source.</p>
					<Divider/>	
				</div>
				<div className="content__card-grid">
					{posts.map((project: any) => {
						const title = project.node.frontmatter.title || project.node.fields.slug;
						const { external_link, github_link, apple_link, android_link, snapcraft_link, description, platform } = project.node.frontmatter;
						const { id, fields } = project.node;
						return (
							<Card
								key={id}
								title={title}
								description={description}
								platform={platform}
								slug={fields.slug}
								externalUrl={external_link}
								gitUrl={github_link}
								appleUrl={apple_link}
								androidUrl={android_link}
								snapcraftUrl={snapcraft_link}
								
							/>
						);
					})}
				</div>
			</div>
			<Spacer height={60} units="vh" />
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
					snapcraft_link
					platform
					thumb {
						publicURL
					}
				}
			}
		}
	}
}
	
`