import { visit } from "unist-util-visit";


//Instead of explicitly adding nodes to the pre block for 
//a title feature we give it props from the AST 
//this references 
//https://github.com/timlrx/rehype-prism-plus/blob/main/src/generator.js
export const rehypeCodeMeta = (options = {}) => {
    return (tree) => {
        visit(tree, "element", visitor)
    }
    function visitor(node, index, parent) {
        if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
            return
        }

        let meta = node.data && node.data.meta ? /** @type {string} */ (node.data.meta) : ''

        // Coerce className to array
        console.log('cname', node.properties);
        const nodeLang = node.properties.className;
        if (node.properties.className) {
            if (typeof node.properties.className === "boolean") {
                node.properties.className = []
            } else if (!Array.isArray(node.properties.className)) {
                node.properties.className = [node.properties.className]
            }
        } else {
            node.properties.className = []
        }
        
        if (node.properties.className[0].includes(":")) {
            const separate: string[] = node.properties.className[0].split(`:`);
            const language: string | null = separate[0].split(`language-`).join(``);
            const title: string | null = separate[1] ? separate[1].split(``).join(``): null;
            parent.properties["language"] = language;
            parent.properties["title"] = title;
        } else {
            parent.properties["language"] = nodeLang;
            parent.properties["title"] = "test";
        }

    }
}
