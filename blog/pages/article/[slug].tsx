import fs from "fs";
import { serialize } from 'next-mdx-remote/serialize'
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import r from "../../public/assets/llvm.jpg"
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { MarkdownWrapper } from "../../components/Markdown";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { loadArticleBySlug } from "../../lib/load-articles";
import { Article } from "../../types/post";
import imageMetadata from "../../lib/image-metadata";


const ArticleContent = ({ article, articleMdxSource }:any) => {
    return (
        <>
            <ContentHero src={article.hero?.src}>

            </ContentHero>
            <ContentBodyWrapper>
                <ContentHeader>{article.title}</ContentHeader>
                <MarkdownWrapper>{articleMdxSource}</MarkdownWrapper>
                {article.updated && <span>{article.updated.toISOString()}</span>}
                <ContentTags>
                    {article.tags && article.tags.map((tag:string, i: number) => <IconTag key={i} link={`/category/${tag}`} icon={tag}>{tag}</IconTag>)}
                </ContentTags>
            </ContentBodyWrapper>
        
        </>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/articles/"))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(/(.md|.mdx)/, "")
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const article: Article = await loadArticleBySlug(slug);
    const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>> = await serialize(article.___rawContent, {
        mdxOptions: {
            rehypePlugins: [imageMetadata]
        }
    });
    return {
        props: {
            article: article,
            articleMdxSource: mdxSource
        }
    }
}

export default ArticleContent;