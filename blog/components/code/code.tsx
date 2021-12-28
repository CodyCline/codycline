import { Tooltip } from "../ui/tooltip/tooltip";
import { Icon } from "../ui/icon/icon";
import * as types from "../../types/components";
// import "./code-block.scss";
// import "./prism.scss";
// import "prism-themes/themes/vs.css";

const languagesToLoad: string[] = [
    "clike",
    "c",
    "cpp",
    "markup",
    "python",
    "go",
    "regex",
    "arduino",
    "javascript",
    "css",
    "nasm",
    "java",
    "rust",
    "crystal",
    "jsx",
    "tsx",
    "json",
    "graphql",
    "bash",
    "shell",
    "csharp",
    "diff",
    "dotnet",
    "cmake",
    "docker",
    "dockerfile",
    "fortran",
    "gitignore",
    "npmignore",
    "makefile",
    "matlab",
    "nginx",
    "objc",
    "powershell",
    "puppet",
    "regex",
    "scss",
    "sql",
    "toml",
    "typescript",
    "wasm",
    "yaml"
];

const pluginsToLoad: string[] = [
    "line-numbers",
    "match-braces",
    "highlight-keywords",
    "file-highlight",
];


// import "prismjs/themes/prism.css";


import React, { useEffect, ReactNode, useState } from "react";
import Prism, { Token } from "prismjs";

export interface CodeProps {
    //Prismjs supports a lot more languages. The entire list can be found on the site,
    //this is a list of those languages that will be useful to me.
    language: string
    children: any,
    className: string
}

//We will use the tokenize method (https://prismjs.com/docs/Prism.html#.tokenize).
//Because other API methods directly manipulate DOM, and that’s not what we want.
//tokenToReactNode is our function that converts the result of executing tokenize into react components.
function tokenToReactNode(token: Token | string, i: number): ReactNode {
    if (typeof token === "string") {
        return <span key={i}>{token}</span>
    } else if (typeof token.content === "string") {
        return (<span key={i} className={`token ${token.type}`}>{token.content}</span>)
    } else if (Array.isArray(token.content)) {
        return <span key={i} className={`token ${token.type}`}>{token.content.map(tokenToReactNode)}</span>
    } else {
        return (<span key={i} className={`token ${token.type}`}>{tokenToReactNode(token.content, 0)}</span>)
    }
}

export const Code = (props: CodeProps) => {
    const separate: string[] = props.className.split(`:`);
    const language: string | null = separate[0].split(`language-`).join(``);
    //In the state, we store the code and tokens for the code.
    const [data, replaceToken] = useState<Array<string | Token>>([])

    useEffect(() => {
        require( "prism-themes/themes/prism-vsc-dark-plus.min.css");
        //We need to add languages since, by default only markup, CSS, clike, and javascript are available.
        //I did not find a better way, like the one below, if you know - please submit an issue.
        require("prismjs/components/prism-clike");
        require("prismjs/components/prism-c");
        import(`prismjs/components/prism-${language}`).then(() => {
            //If language still not available skip tokenize part
            const tokens: Array<string | Token> = Prism.languages[language]
                ? Prism.tokenize(props.children, Prism.languages[language])
                : [];
            //Save the result to the state.
            replaceToken(tokens)
        })

        
    }, [props.children]);
    //If the array with tokens is empty, print the code from props, otherwise render our beauty.
    return (
        <pre style={{fontSize: `1em`}} className={`language-${language}`}>
            {data.length ? data.map(tokenToReactNode) : props.children}
        </pre>
    );
}



// export const CodeBlock = (props: types.CodeBlock.IBlockProps) => {
//     const codeRef = React.useRef<HTMLPreElement>(null);
//     const split: string[] = props.className.split(`:`);
//     const language: string | null = split[0].split(`language-`).join(``);
//     const title: string | null = split[1] ? split[1].split(`title=`).join(``) : null;

//     React.useEffect(() => {
//         //Not the cleanest solution but `languageLoader` plugin is broken
//         const languageLoader = getLoader(components, languagesToLoad);
//         const pluginLoader = getLoader(components, pluginsToLoad);
//         languageLoader.load((language: string) => {
//             require(`prismjs/components/prism-${language || `clike`}.min.js`);
//         });
//         pluginLoader.load((plugin: string) => {
//             require(`prismjs/plugins/${plugin}/prism-${plugin}.min.js`);
//         });
//         Prism.highlightAll();
//     });



//     function copyCode() {
//         if (codeRef.current) {
//             navigator.clipboard.writeText(codeRef.current.innerText);
//         }
//     }

//     return (
//         <section className="code__block-container">
//             <ul className="tool__bar">
//                 <li>
//                     <Icon height={24} width={24} name={language} />
//                 </li>
//                 <li className="tool__bar-title">
//                     {title}
//                 </li>
//                 <li className="tool__bar-item tool__bar-copy" role="button" onClick={copyCode}>
//                     <Tooltip position="top" content="Copy Code">
//                         <Icon noTitle className="tool__bar-copy" name="copy" height={24} width={24} />
//                     </Tooltip>
//                 </li>

//             </ul>
//             <pre className={cx(`code__block`, `match-braces`, `line-numbers`, `block__content`)}>
//                 <code role="code" ref={codeRef} className={cx(props.className, `rainbow-braces`)}>
//                     {props.children}
//                 </code>
//             </pre>
//         </section>
//     );
// };


export const InlineCode = ({ children }: types.CodeBlock.IInlineProps) => {
    return (
        <code className="inline">{children}</code>
    )
}