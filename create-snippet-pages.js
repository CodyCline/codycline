const path = require(`path`);

//Create blog posts
const createProjectPages = (createPage, edge) => {
    const snippetTemplate = path.resolve(`./src/templates/snippet-post.tsx`);
    createPage({
        path: edge.node.fields.slug,
        component: snippetTemplate,
        context: {
            slug: edge.node.fields.slug,
        },
    });
}

module.exports = createProjectPages;