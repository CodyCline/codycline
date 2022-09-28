import { MDXRemote } from "next-mdx-remote";
import { Code, InlineCode } from "./Code";
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MdxImage"
import { Paragraph, Title } from "./ui/Typography"
import { Quote } from "./Quote";
import { MarkdownTable } from "./table/MarkdownTable";
import { OrderedList } from "../components/list/OrderedList";
import { ListItem } from "../components/list/ListItem";
import { UnorderedList } from "../components/list/UnorderedList";
import { Link } from "./ui/Link";
import { Bookmark } from "./Bookmark";
import { Admonition } from "./Admonition";
import { Tab, Tabs } from "./Tabs";
import { Answer, Prompt, Quiz } from "./Quiz";
import { Hr } from "./ui/Hr";
import dynamic from "next/dynamic";


const CodeSandbox = dynamic(():any => import("./embed/CodeSandbox"), { ssr: false })


const mdxComponents = {
    code: ({className, ...props}:any) => {
        const match = /language-(\w+)/.exec(className || '')
        
        if(match) {
            const separate: string[] = className?.includes(":")? className.split(`:`) : [className];
            const language: string | null = separate[0]?.split(`language-`).join(``);
            const title: string | null = separate[1] ? separate[1].split(``).join(``) : null;
            return (
                <Code 
                    language={language} 
                    title={title} 
                    {...props}
                />
            )
        } else {
            return <InlineCode {...props}/>
        }
    },
    img: (props:any) => <MdxImg {...props} layout="responsive" />,
    p: Paragraph,
    a: Link,
    h1: Title,
    table: MarkdownTable,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
    hr: Hr,
    blockquote: Quote,
    Spoiler: Spoiler,
    Bookmark: Bookmark,
    Admonition: Admonition,
    CodeSandbox: CodeSandbox, 
    Tab: Tab,
    Tabs: Tabs,
    Quiz: Quiz,
    Answer: Answer,
    Prompt: Prompt,
}

export const MdxRenderer = ({ source }: any) => (
    <MDXRemote components={mdxComponents} {...source}/>
)
