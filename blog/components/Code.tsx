import React, { useEffect, ReactNode, useState } from "react";
import styled from "styled-components";
import { Icon } from "./ui/Icon";
import { scrollbar } from "./styles/Scrollbar";
import Prism, { Token } from 'prismjs';

export interface CodeProps {
    language: string
    children: any,
    className: string
}


const CodeBlockContainer = styled.section`
    margin: 36px 0;

`

const Pre = styled.pre`
    ${scrollbar()}
    overflow: auto;
    border: 1px solid var(--color-border);
    border-top: none;
    // border-radius: 5px;


`

const ToolBar = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 10px 25px 10px 25px;

    list-style: none;
    background: var(--color-fg-primary);
    border: 1px solid var(--color-border);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

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


const FileName = styled.span`
    margin-left: .5rem;
`

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


export const Code = ({ language, title, children }: any) => {
    const codeRef = React.useRef<HTMLPreElement>(null);
    const [data, replaceToken] = useState<Array<string | Token>>([])
    function copyCode() {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.innerText);
        }
    }
    useEffect(() => {
        import("prismjs/components/prism-c");
        import(`prismjs/components/prism-${language}`).then(() => {
          const tokens: Array<string | Token> = Prism.languages[ language ]
            ? Prism.tokenize(children, Prism.languages[ language ])
            : [];
          replaceToken(tokens)
        }).catch((e) => {
            console.warn(`Failed to load highlighter for language: ${language}`)
            console.error(e);
        })
    }, [children]);
    //If the array with tokens is empty, print the code from props, otherwise render our beauty.
    return (
        <CodeBlockContainer>
            <ToolBar>
                <ToolBarTitle>
                    <Icon name={language || `gear`} height={20} width={20} />
                    <FileName>{title}</FileName>
                </ToolBarTitle>
                <CopyIcon onClick={copyCode}>
                    <Icon onClick={copyCode} noTitle name="copy" height={18} width={18} />
                </CopyIcon>
            </ToolBar>
            <Pre style={{ borderBottomLeftRadius: `5px`, borderBottomRightRadius: `5px` }} ref={codeRef} className={`language-${language}`}>
                {data.length ? data.map(tokenToReactNode) : children}
            </Pre>

        </CodeBlockContainer>
    );
}
