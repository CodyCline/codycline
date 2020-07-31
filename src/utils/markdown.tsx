import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import { CodeBlock, InlineCode } from '../components/codeblock/codeblock';
import { Spoiler } from '../components/spoiler/spoiler';
import { BlockQuote } from '../components/blockquote/blockquote';
import { Divider } from '../components/ui/divider/divider';
import { Link } from '../components/ui/link/link';


//Import and register components for markdown use
const paragraph = ({children}: any) => {
    return (
        <p style={{fontSize: "25px", lineHeight: "2rem", marginBlockStart: "1em", marginBlockEnd: "1em"}}>{children}</p>
    );
}

export const MarkdownWrapper = ({children} :any) => {
    return (
        <Markdown
            children={children}
            options={{
                overrides: {
                    a: {
                        component: Link,
                    },
                    p: paragraph,
                    //For now use native component due to bug in jsx parser
                    code: InlineCode,
                    CodeBlock: CodeBlock,
                    blockquote: BlockQuote,
                    Spoiler: Spoiler,
                    hr: Divider,
                }
            }}
        />
    )
}