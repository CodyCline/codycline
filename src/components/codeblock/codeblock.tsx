import * as React from 'react';
import * as Prism from 'prismjs';
import cx from 'classnames';
import getLoader from 'prismjs/dependencies';
import components from 'prismjs/components'; //JS not the folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './codeblock.scss';
import './prism.scss';
import { Icon } from '../ui/icon/icon';

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

const pluginsToLoad: any[] = [
    "line-numbers",
    "match-braces",
    "highlight-keywords",
    "file-highlight",
];

export const CodeBlock = (props: any) => {
    const [error, setError] = React.useState<boolean>(false);
    const [isCopied, setIsCopied] = React.useState<string>("copy");
    const codeRef = React.useRef<HTMLPreElement>(null);
    const language = props.className.split("language-").join("");
    React.useEffect(() => {
        //Not the cleanest solution but loadLanguages is broken
        const languageLoader = getLoader(components, languagesToLoad);
        const pluginLoader = getLoader(components, pluginsToLoad);
        //Todo handle errors
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
            setIsCopied("copied!");
        }
    }

    return (
        <section style={{ margin: "1em 0 1em 0" }}>
            <pre style={{
                margin: 0,
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
            }} className={cx("match-braces", "line-numbers")}>
                <code ref={codeRef} className={cx(props.className, "rainbow-braces")}>
                    {props.children}
                </code>
            </pre>
            <ul className="tool__bar">
                <li>
                    <Icon name={language}/>
                </li>
                <li
                    className="copy__icon"
                    onClick={copyCode}
                >
                    <p style={{ margin: 0, borderRadius: "5px" }}>
                        {isCopied}<FontAwesomeIcon style={{ marginLeft: "5px" }} icon={["far", "copy"]}/>
                    </p>
                </li>
                
            </ul>
        </section>
    );
};


export const InlineCode = ({ children }: any) => {
    return (
        <code className="inline">{children}</code>
    )
}