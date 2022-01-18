import { MDXRemote } from "next-mdx-remote";
import { useMemo } from "react";
import { Code, InlineCode } from "./Code";
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MDXImage"
import { Paragraph, Title } from "./ui/Typography"
import { Quote } from "./Quote";
import { MarkdownTable } from "./table/MarkdownTable";


const mdxComponents = {
    code: (props:any) => { 
        const separate: string[] = props.className.split(`:`) ;
        const language: string | null = separate[0].split(`language-`).join(``);
        const title: string | null = separate[1] ? separate[1].split(``).join(``) : null;
        return <Code className={`language-${language}`} language={language} title={title} {...props}/>
    },
    inlineCode: InlineCode,
    img: (props) => <MdxImg {...props} layout="responsive" />,
    p: Paragraph,
    h1: Title,
    table: MarkdownTable,
    blockquote: Quote,
    Spoiler: Spoiler,
}

export const MdxRenderer = ({ source }: any) => (
    <MDXRemote components={mdxComponents} {...source} />
)

// export const MdxRenderer: React.FC<{ source: string }> = ({ source, ...rest }) => {
//     const Component = useMemo(() => getMDXComponent(source), [source])

//     return <Component components={mdxComponents} />
// }