const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createProjectPages = require(`./create-project-pages`);
const createBlogPages = require(`./create-blog-pages`);
const createMetaPages = require(`./create-meta-pages`);


exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`{
		blog: allMdx(
			filter: {fileAbsolutePath: {glob: "**/blog/**/*.md"}}
			sort: { 
				fields: [frontmatter___date], 
				order: DESC, 
			}
			limit: 1000
		){
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
		projects: allMdx(
			filter: {fileAbsolutePath: {glob: "**/projects/**/*.md"}},
			sort: { 
				fields: [frontmatter___date], 
				order: DESC,
			}
			limit: 1000
		){
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
		meta: allMdx(limit: 2000) {
			group(field: frontmatter___tags) {
			  fieldValue
			}
		}
	}`);

	if (result.errors) {
		throw result.errors
	}

	const blogPosts = result.data.blog.edges;
	const projectPosts = result.data.projects.edges;
	const metaPosts = result.data.meta.group;

	blogPosts.forEach((post, index) => {
		const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
		const next = index === 0 ? null : blogPosts[index - 1].node
		createBlogPages(createPage, post, previous, next);
	});

	projectPosts.forEach(post => {
		createProjectPages(createPage, post);
	});
	metaPosts.forEach(tag => {
		createMetaPages(createPage, tag);
	});
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		const file = getNode(node.parent);
		createNodeField({
			node,
			name: `slug`,
			value: `/${file.sourceInstanceName}${value}`,
		});
	}
}

//Metadata structure on different posts has a different shape
//Typing accordingly 
exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	createTypes(`
		interface Frontmatter {
			title: String
			date: Date
			description: String
			thumb: File
			banner: File!
			tags: [String]
		}
		type BlogFrontmatter implements Frontmatter {
			title: String
			date: Date
			description: String
			thumb: File
			banner: File!
			tags: [String]
		}

		type ProjectFrontmatter implements Frontmatter {
			title: String
			date: Date
			description: String
			thumb: File
			banner: File!
			tags: [String]
			appstore_link: String!
			snapstore_link: String!
		}
		type Mdx implements Node {
			frontmatter: BlogFrontmatter
		}
	`)
}