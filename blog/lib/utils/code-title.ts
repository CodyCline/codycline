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

        





        if (node.properties.className) {
            if (typeof node.properties.className === "boolean") {
                node.properties.className = []
            } else if (!Array.isArray(node.properties.className)) {
                node.properties.className = [node.properties.className]
            } 
            const nodeLang = node.properties.className[0];
            console.log(nodeLang);
            if (nodeLang && nodeLang.includes(":")) {
                const separate: string[] = node.properties.className[0].split(`:`);
                const language: string | null = separate[0].split(`language-`).join(``);
                const title: string | null = separate[1] ? separate[1].split(``).join(``): null;
                parent.properties["className"] = [separate[0]];
                parent.properties["language"] = language.toLowerCase();
                parent.properties["title"] = title;
            } else {
                const language: string | null = nodeLang.split(`language-`);
                parent.properties["className"] = [nodeLang.toLowerCase()];
                parent.properties["language"] = language[1].toLowerCase();
            }

        } else {
            node.properties.className = []
        }
    }
}
