const path = require(`path`);

//Create blog posts
const createBlogPages = (createPage, edge, previous, next) => {
    const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`)
    createPage({
        path: edge.node.fields.slug,
        component: blogTemplate,
        context: {
            slug: edge.node.fields.slug,
            previous,
            next,
        },
    })
}

module.exports = createBlogPages;