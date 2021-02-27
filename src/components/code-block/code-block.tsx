import * as React from "react";
import * as Prism from "prismjs";
import getLoader from "prismjs/dependencies";
import components from "prismjs/components"; //JS not the folder
import cx from "classnames";
import { Icon } from "../ui/icon/icon";
import "./codeblock.scss";
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
    "typescript",
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

export const CodeBlock = (props: any) => {
    const codeRef = React.useRef<HTMLPreElement>(null);
    const language = props.className.split(`language-`).join(``);

    React.useEffect(() => {
        //Not the cleanest solution but `languageLoader` plugin is broken
        const languageLoader = getLoader(components, languagesToLoad);
        const pluginLoader = getLoader(components, pluginsToLoad);
        languageLoader.load((language:string) => {
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
        <section style={{ margin: "1em 0 1em 0" }}>
            <ul className="tool__bar">
                <li>
                    <Icon height={24} width={24} name={language}/>
                </li>
                <li role="button" className="copy__icon" onClick={copyCode}>
                    <Icon noTitle name="copy" height={24} width={24}/>
                </li>
                
            </ul>
            <pre className={cx(`code__block`, `match-braces`, `line-numbers`)}>
                <code role="code" ref={codeRef} className={cx(props.className, `rainbow-braces`)}>
                    {props.children}
                </code>
            </pre>
        </section>
    );
};


export const InlineCode = ({ children }: any) => {
    return (
        <code className="inline">{children}</code>
    )
}