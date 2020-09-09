import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import { CodeBlock, InlineCode } from '../components/codeblock/codeblock';
import { Spoiler } from '../components/spoiler/spoiler';
import { BlockQuote } from '../components/blockquote/blockquote';
import { Divider } from '../components/ui/divider/divider';
import { Link } from '../components/ui/link/link';


//Import and register components for markdown use
const Paragraph = ({children}: any) => {
    return (
        <p style={{fontSize: "25px", lineHeight: "2rem", marginBlockStart: "1em", marginBlockEnd: "1em"}}>{children}</p>
    );
}

export const MarkdownWrapper = ({text} :any) => {
    return (
        <Markdown
            children={text}
            options={{
                forceBlock: true,
                overrides: {
                    a: {
                        component: Link,
                    },
                    p: Paragraph,
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