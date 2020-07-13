import React from 'react';
import Markdown from 'markdown-to-jsx';


//Import and register components for markdown use
const componentMapping = {
};

export const MarkdownWrapper = ({children} :any) => {
    return (
        <Markdown
            children={children}
            options={{
                overrides: componentMapping
            }}
        />
    )
}