import { serialize } from 'next-mdx-remote/serialize'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ContentBodyWrapper, ContentHeader, ContentTags } from '../../components/ContentTemplate';
import { MarkdownWrapper } from '../../components/Markdown';
import { IconTag } from '../../components/ui/Tag';

const SnippetsPage = ({ frontMatter, mdxSource }: any) => {
    return (
        <ContentBodyWrapper>
            <ContentHeader>{frontMatter.title}</ContentHeader>
            <MarkdownWrapper source={mdxSource} />
            {frontMatter.updated && <span>{frontMatter.updated}</span>}
            <ContentTags>
                {frontMatter.tags && frontMatter.tags.map((tag: string) => <IconTag link={"/hello"} icon={tag}>{tag}</IconTag>)}
            </ContentTags>
        </ContentBodyWrapper>
    )
}





export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/snippets/"))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), "content/snippets/" + slug + ".md"), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content);
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export default SnippetsPage;