import fs from "fs";
import path from "path";
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { MdxRenderer } from "../../components/Mdx";
import { loadArticleBySlug } from "../../lib/load-articles";
import { Article } from "../../types/post";
import imageMetadata from "../../lib/image-metadata";

import { eDateFormat } from "../../lib/utils/format-date";
import { siteMetadata } from "../../site-metadata";
import { ContentSeo } from "../../components/Seo";
import { formatSlug } from "../../lib/utils/format-slug";
import{  Progressbar }from "../../components/ui/Progressbar";
import { useEffect, useRef } from "react";
import { StyledComponent } from "styled-components";
// import dynamic from "next/dynamic";

const ArticleContent = ({ article }:any) => {
    const ref = useRef<any>();
    return (
        <>
            <Progressbar target={ref}/>
            <ContentSeo
                url={`${siteMetadata.siteUrl}/article/${article.slug}`}
                authorDetails={siteMetadata.author}
                {...article}
            />
            <ContentHero src={article.hero?.src}/>
            <ContentBodyWrapper ref={ref}>
                <span title={article.published.toString()}>Published: {eDateFormat(article.published)}</span>
                <span title={article.updated.toString()}> Last Updated: {eDateFormat(article.published)}</span>
                <ContentHeader>{article.title}</ContentHeader>
                <MdxRenderer source={article.___rawContent}/>
                <ContentTags>
                    {article.tags && article.tags.map((tag:string, i: number) => <IconTag key={i} link={`/category/${tag}`} icon={tag}>{tag}</IconTag>)}
                </ContentTags>
            </ContentBodyWrapper>
        
        </>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), `content`, `articles`))
    const paths = files.map(filename => ({
        params: {
            slug: formatSlug(filename)
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const article: Article = await loadArticleBySlug(slug);
    return {
        props: {
            article: article,
        }
    }
}

export default ArticleContent;