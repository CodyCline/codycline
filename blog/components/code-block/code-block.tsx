import * as React from "react";
import * as Prism from "prismjs";
import getLoader from "prismjs/dependencies";
import components from "prismjs/components"; //JS not the folder
import cx from "classnames";
import { Tooltip } from "../ui/tooltip/tooltip";
import { Icon } from "../ui/icon/icon";
import * as types from "../../types/components";
import "./code-block.scss";
import "./prism.scss";

const languagesToLoad: string[] = [
    "markup",
    "python",
    "go",
    "regex",
    "arduino",
    "javascript",
    "css",
    "php",
    "cpp",
    "c",
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
    "cs",
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
    "php",
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

export const CodeBlock = (props: types.CodeBlock.IBlockProps) => {
    const codeRef = React.useRef<HTMLPreElement>(null);
    const split: string[] = props.className.split(`:`);
    const language: string | null = split[0].split(`language-`).join(``);
    const title: string | null = split[1] ? split[1].split(`title=`).join(``): null;

    React.useEffect(() => {
        //Not the cleanest solution but `languageLoader` plugin is broken
        const languageLoader = getLoader(components, languagesToLoad);
        const pluginLoader = getLoader(components, pluginsToLoad);
        languageLoader.load((language: string) => {
            require(`prismjs/components/prism-${language || `clike`}.min.js`);
        });
        pluginLoader.load((plugin: string) => {
            require(`prismjs/plugins/${plugin}/prism-${plugin}.min.js`);
        });
        Prism.highlightAll();
    });



    function copyCode() {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.innerText);
        }
    }

    return (
        <section className="code__block-container">
            <ul className="tool__bar">
                <li>
                    <Icon height={24} width={24} name={language} />
                </li>
                <li className="tool__bar-title">
                    {title}
                </li>
                <li className="tool__bar-item tool__bar-copy" role="button" onClick={copyCode}>
                    <Tooltip position="top" content="Copy Code">
                        <Icon noTitle className="tool__bar-copy" name="copy" height={24} width={24} />
                    </Tooltip>
                </li>

            </ul>
            <pre className={cx(`code__block`, `match-braces`, `line-numbers`, `block__content`)}>
                <code role="code" ref={codeRef} className={cx(props.className, `rainbow-braces`)}>
                    {props.children}
                </code>
            </pre>
        </section>
    );
};


export const InlineCode = ({ children }: types.CodeBlock.IInlineProps) => {
    return (
        <code className="inline">{children}</code>
    )
}