import React, { useEffect, ReactNode, useState } from "react";
import styled from "styled-components";
import Prism, { Token } from "prismjs";
import { Icon } from "./ui/Icon";

export interface CodeProps {
    language: string
    children: any,
    className: string
}

//Use the tokenize method (https://prismjs.com/docs/Prism.html#.tokenize).
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


const CodeBlockContainer = styled.section`
    margin: 36px 0;
    border-radius: var(--font-size-sm);
    border: 1px solid var(--color-border);
`

const CodeBlock = styled.pre`
    border-bottom-left-radius: var(--font-size-sm);
    border-bottom-right-radius: var(--font-size-sm);
`

const ToolBar = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0.5em 1em;

    list-style: none;
    background: var(--color-fg-primary);
    border-top-left-radius: var(--font-size-sm);
    border-top-right-radius: var(--font-size-sm);
`

const ToolBarTitle = styled.li`
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 2px;
`

const CopyIcon = styled.li`
    cursor: pointer;
    margin-left: auto;
`;

export const InlineCode = styled.code`
    white-space: nowrap;
    font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';
    color: var(--color-text-inline-code);
    background: var(--color-bg-inline-code);
    padding: 0.1em 0.3em;
    border-radius: 3px;
`;


export const Code = ({className, children}:any) => {
    const codeRef = React.useRef<HTMLPreElement>(null);
    const separate: string[] = className.split(`:`);
    const language: string | null = separate[0].split(`language-`).join(``);
    const title: string | null = separate[1] ? separate[1].split(`title=`).join(``): null;
    //In the state, we store the code and tokens for the code.
    const [data, replaceToken] = useState<Array<string | Token>>([])

    function copyCode() {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.innerText);
        }
    }

    useEffect(() => {
        // require( "./layout/Prism.css");
        //We need to add languages since, by default only markup, CSS, clike, and javascript are available.
        //I did not find a better way, like the one below, if you know - please submit an issue.
        require("prismjs/components/prism-clike");
        require("prismjs/components/prism-c");
        import(`prismjs/components/prism-${language || `clike`}`).then(() => {
            //If language still not available skip tokenize part
            const tokens: Array<string | Token> = Prism.languages[language]
                ? Prism.tokenize(children, Prism.languages[language])
                : [];
            //Save the result to the state.
            replaceToken(tokens)
        }).catch(() => {
            console.warn(`Cannot find highlighter for language ${language}`)
        });

        
    }, [children]);
    //If the array with tokens is empty, print the code from props, otherwise render our beauty.
    return (
        <CodeBlockContainer>
            <ToolBar>
                <ToolBarTitle>
                    <Icon name={language || `file`} height={20} width={20}/>
                    {title}
                </ToolBarTitle>
                <CopyIcon onClick={copyCode}>
                    <Icon onClick={copyCode} noTitle name="copy" height={18} width={18} />
                </CopyIcon>
            </ToolBar>
            <pre
                ref={codeRef}
                className={`language-${language}`}
                style={{ borderBottomLeftRadius: `var(--font-size-sm)`, borderBottomRightRadius: `var(--font-size-sm)`}}
            >
                {data.length ? data.map(tokenToReactNode) : children}
            </pre>
        </CodeBlockContainer>
    );
}
