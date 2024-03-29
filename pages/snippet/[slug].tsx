import path from "path";
import fs from "fs";
import { ContentBodyWrapper, ContentHeader, ContentTags } from '../../components/ContentTemplate';
import { MdxRenderer } from '../../components/Mdx';
import { IconTag } from '../../components/ui/Tag';
import { Snippet } from '../../types/post';
import { loadSnippetBySlug } from '../../lib/loadSnippets';
import { eDateFormat } from '../../lib/utils/formatDate';
import { ContentSeo } from '../../components/Seo';
import { siteMetadata } from '../../site-metadata';
import { formatSlug } from '../../lib/utils/formatSlug';
import { Progressbar } from "../../components/ui/Progressbar";
import { useRef } from "react";
const SnippetsPage = ({ snippet }: any) => {
    const ref = useRef<any>()
    return (
        <>
            <ContentSeo
                url={`${siteMetadata.siteUrl}/snippet/${snippet.slug}`}
                authorDetails={siteMetadata.author}
                {...snippet}
            />
            <Progressbar target={ref} />
            <ContentBodyWrapper ref={ref}>

                
                <ContentHeader>{snippet.title}</ContentHeader>
                <span title={snippet.published.toString()}>Published: {eDateFormat(snippet.published)}</span>
                <span title={snippet.updated.toString()}> Last Updated: {eDateFormat(snippet.published)}</span>
                <MdxRenderer source={snippet.content} />
                <ContentTags>
                    {snippet.tags && snippet.tags.map((tag: string, i: number) => <IconTag key={i} link={`/category/${tag}`} icon={tag}>{tag}</IconTag>)}
                </ContentTags>
            </ContentBodyWrapper>

        </>
    )
}





export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), `content`, `snippets`))
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
    const snippet: Snippet = await loadSnippetBySlug(slug);
    return {
        props: {
            snippet: snippet,
        }
    }
}

export default SnippetsPage;