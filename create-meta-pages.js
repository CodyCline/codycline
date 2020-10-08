const path = require(`path`);
//Create blog posts
const createMetaPages = (createPage, tag) => {
    const metaTemplate = path.resolve(`./src/templates/meta-post.tsx`);
    createPage({
        path: `/meta/${tag.fieldValue}/`,
        component: metaTemplate,
        context: {
            tag: tag.fieldValue
        },
    })
}
module.exports = createMetaPages;