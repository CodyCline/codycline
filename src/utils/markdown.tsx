import * as React from 'react';
import Markdown from 'markdown-to-jsx';


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
                    p: paragraph
                }
            }}
        />
    )
}