import * as React from 'react';
import * as Prism from 'prismjs';
import cx from 'classnames';
import getLoader from 'prismjs/dependencies';
import components from 'prismjs/components'; //JS not the folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './codeblock.scss';
import './prism.scss';


const languagesToLoad: any[] = [
    "markup",
    "python",
    "javascript",
    "css",
    "php",
    "cpp",
    "rust",
    "typescript",
    "crystal",

];
const pluginsToLoad: any[] = [
    "line-numbers",
    "match-braces",
    "highlight-keywords",
    "file-highlight",
];

export const CodeBlock = ({ children, language, filename }: any) => {
    const [state, setState] = React.useState<any>({
        toolTipVisible: false,
        copied: false,
        fileExtension: "default",
    });
    const codeRef = React.useRef<any>()
    const toolTipRef = React.useRef<any>();
    React.useEffect(() => {
        //Not the cleanest solution but loadLanguages is broken
        const languageLoader = getLoader(components, languagesToLoad);
        const pluginLoader = getLoader(components, pluginsToLoad);
        languageLoader.load((lang: any) => {
            require(`prismjs/components/prism-${lang}.min.js`);
        });
        pluginLoader.load((plugin: any) => {
            require(`prismjs/plugins/${plugin}/prism-${plugin}.min.js`);
        });
        Prism.highlightAll();
    });

    async function copyCode() {
        await navigator.clipboard.writeText(codeRef.current.innerText);
    }

    function followCursor(event: any) {
        const element = toolTipRef.current;
        if (element) {
            const x: number = event.clientX, y: number = event.clientY;
            element.style.top = (y - 5) + "px";
            element.style.left = (x - 132.5) + "px";
        }
    }

    const toggleToolTip = () => {
        setState({
            ...state,
            toolTipVisible: !state.toolTipVisible,
        });
    }

    return (
        <React.Fragment>
            <pre style={{
                margin: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            }} className={cx("match-braces", "line-numbers" , "codeblock-override")}>
                <code ref={codeRef} className={cx(`language-${language}`, "rainbow-braces")}>
                    {children}
                </code>
            </pre>
            <ul className="toolBar">
                <li>{filename}</li>
                <li
                    className="copyIcon"
                    onClick={copyCode}
                    onMouseLeave={toggleToolTip}
                    onMouseEnter={toggleToolTip}
                    onMouseMove={(event) => followCursor(event)}
                >
                    <FontAwesomeIcon icon={["far", "clipboard"]} />
                    {state.toolTipVisible && <span ref={toolTipRef} className="copyToolTip">{state.copied ? "Copied! ⚡" : "Click to copy"}</span>}
                </li>
            </ul>
        </React.Fragment>
    );
};


export const InlineCode = ({ children }) => {
    return (
        <code className="inline-code">{children}</code>
    )
}