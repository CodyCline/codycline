import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, InlineCode } from "../components/codeblock/codeblock"
import { Quote } from '../components/quote/quote';
import { Spoiler } from '../components/spoiler/spoiler';
import { Divider } from "../components/ui/divider/divider";
import { Link } from '../components/ui/link/link';
import { CheckBox } from '../components/ui/switch/switch';

interface IProps {
    children: React.ReactNode,
}

export const Markdown = ({children}:IProps) => {
    return (
        
        <MDXProvider
            components={{
                pre: CodeBlock,
                code: InlineCode,
                hr: Divider,
                blockquote: Quote,
                a: Link,
                input: CheckBox,
                //Custom non-native components
                Spoiler: Spoiler,

            }}
        >
            {children}
        </MDXProvider>
    )
}