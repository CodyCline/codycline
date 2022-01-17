import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { Code, InlineCode } from "./Code";
import { Spoiler } from "./Spoiler"
import { MdxImg } from "./ui/MDXImage"
import { Paragraph, Title } from "./ui/Typography"
import { Quote } from "./Quote";
import { MarkdownTable } from "./table/MarkdownTable";


const mdxComponents = {
    pre: Code,
    // code: InlineCode,
    // img: (props) => <MdxImg {...props} layout="responsive" />,
    // pre: (preProps: Partial<ReactHTMLElement<HTMLPreElement>['props']>) => {
    //     const props = preToCodeBlock(preProps)

    //     if (props) {
    //         return <Code {...props} />
    //     }

    //     return <pre {...preProps} />
    // },
    p: Paragraph,
    h1: Title,
    // table: MarkdownTable,
    blockquote: Quote,
    Spoiler: Spoiler,
}

// export const MarkdownWrapper = ({ children }: any) => (
//     <MDXRemote components={mdxComponents} {...children} />
// )

export const MdxRenderer: React.FC<{ source: string }> = ({ source, ...rest }) => {
    const Component = useMemo(() => getMDXComponent(source), [source])

    return <Component components={mdxComponents} />
}