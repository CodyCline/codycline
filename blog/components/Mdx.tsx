import { MDXRemote } from "next-mdx-remote";
import { useMemo } from "react";
import { Code, InlineCode } from "./Code";
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MDXImage"
import { Paragraph, Title } from "./ui/Typography"
import { Quote } from "./Quote";
import { MarkdownTable } from "./table/MarkdownTable";
import { OrderedList } from "../components/list/OrderedList";
import { ListItem } from "../components/list/ListItem";
import { UnorderedList } from "../components/list/UnorderedList";
import { Bookmark, Link } from "./ui/Link";
import { Admonition } from "./Admonition";

const mdxComponents = {
    code: (props:any) => { 
        const separate: string[] = props.className.includes(":")? props.className.split(`:`) : [props.className];
        const language: string | null = separate[0].split(`language-`).join(``);
        const title: string | null = separate[1] ? separate[1].split(``).join(``) : null;
        return (
            <Code 
                language={language} 
                title={title} 
                {...props}
            />
        )
    },
    inlineCode: InlineCode,
    img: (props:any) => <MdxImg {...props} layout="responsive" />,
    p: Paragraph,
    a: Link,
    h1: Title,
    table: MarkdownTable,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
    blockquote: Quote,
    spoiler: Spoiler,
    bookmark: Bookmark,
    admonition: Admonition
}

export const MdxRenderer = ({ source }: any) => (
    <MDXRemote components={mdxComponents} {...source} />
)
