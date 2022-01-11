import { MDXRemote } from "next-mdx-remote"
import { Code, InlineCode } from "./Code";
import type { MDXProviderComponentsProp } from "@mdx-js/react";
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MDXImage"
import { Paragraph, Title } from "./ui/Typography"
import { Quote } from "./ui/Quote";

const mdxComponents: MDXProviderComponentsProp = {
    code: Code,
    inlineCode: InlineCode,
    img: (props) => <MdxImg {...props} layout="responsive"  />,
    p: Paragraph,
    h1: Title,
    blockquote: Quote,
    Spoiler: Spoiler,
}

export const MarkdownWrapper = ({children}:any) => (
    <MDXRemote components={mdxComponents} {...children}/>
)