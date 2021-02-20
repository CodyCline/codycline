import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, InlineCode } from "../components/codeblock/codeblock"
import { Quote } from '../components/quote/quote';
import { Spoiler } from '../components/spoiler/spoiler';
import { Divider } from "../components/ui/divider/divider";
import { Link } from '../components/ui/link/link';
import { CheckBox } from '../components/ui/toggle/checkbox/checkbox';
import { Header1, Header2, Header3, Header4, Header5, Header6, Deleted } from '../components/ui/typography/typography';
import { TableContainer } from '../components/ui/table/table';
import { ListContainer, List, OrderedList } from '../components/ui/list/list';


interface IProps {
    children: React.ReactNode,
}

export const Markdown = ({children}:IProps) => {
    return (
        
        <MDXProvider
            components={{
                h1: Header1,
                h2: Header2,
                h3: Header3,
                h4: Header4,
                h5: Header5,
                h6: Header6,
                del: Deleted,
                ul: ListContainer,
                ol: OrderedList,
                li: List,
                blockquote: Quote,
                pre: CodeBlock,
                code: InlineCode,
                hr: Divider,
                a: Link,
                input: CheckBox,
                table: TableContainer,
                //Custom non-native components
                Spoiler: Spoiler,
            }}
        >
            {children}
        </MDXProvider>
    )
}