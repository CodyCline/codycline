import { MDXRemote } from "next-mdx-remote"
import { Code, InlineCode } from "./Code"
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MDXImage"
import { Paragraph, Title } from "./ui/Typography"


export const MarkdownWrapper = ({source}:any) => (
    <MDXRemote components={{
        code: Code,
        inlineCode: InlineCode,
        img: MdxImg,
        p: Paragraph,
        h1: Title,
        Spoiler: Spoiler,
    }} {...source}/>
)