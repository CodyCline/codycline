import fs from "fs";
import { serialize } from 'next-mdx-remote/serialize'
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import r from "../../public/assets/llvm.jpg"
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { MarkdownWrapper } from "../../components/Markdown";


const ArticleContent = ({ mdxSource, frontMatter }:any) => {
    return (
        <>
            <ContentHero src={r.src}>

            </ContentHero>
            <ContentBodyWrapper>
                <ContentHeader>{frontMatter.title}</ContentHeader>
                <MarkdownWrapper source={mdxSource}/>
                {frontMatter.updated && <span>{frontMatter.updated}</span>}
                <ContentTags>
                    {frontMatter.tags && frontMatter.tags.map((tag:string) => <IconTag link={"/hello"} icon={tag}>{tag}</IconTag>)}
                </ContentTags>
            </ContentBodyWrapper>
        
        </>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/articles/"))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(/.md/, "")
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), "content/articles/" + slug + ".md"), 'utf-8')
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

export default ArticleContent;