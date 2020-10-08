const path = require(`path`);

//Create blog posts
const createProjectPages = (createPage, edge) => {
    const projectTemplate = path.resolve(`./src/templates/project-post.tsx`);
    createPage({
        path: edge.node.fields.slug,
        component: projectTemplate,
        context: {
            slug: edge.node.fields.slug,
        },
    });
}

module.exports = createProjectPages;