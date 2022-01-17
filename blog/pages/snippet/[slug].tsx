import { serialize } from 'next-mdx-remote/serialize'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ContentBodyWrapper, ContentHeader, ContentTags } from '../../components/ContentTemplate';
import { MdxRenderer } from '../../components/Markdown';
import { IconTag } from '../../components/ui/Tag';
import imageMetadata from '../../lib/image-metadata';
import { Snippet } from '../../types/post';
import { loadSnippetBySlug } from '../../lib/load-snippets';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { eDateFormat } from '../../lib/utils/format-date';
import { ContentSeo } from '../../components/Seo';
import { siteMetadata } from '../../site-metadata';
import { formatSlug } from '../../lib/utils/format-slug';

const SnippetsPage = ({ snippet, snippetMdxSource }: any) => {
    return (
        <ContentBodyWrapper>
            <ContentSeo
                url={`${siteMetadata.siteUrl}/snippet/${snippet.slug}`}
                authorDetails={siteMetadata.author}
                {...snippet}
            />
            <span title={snippet.published.toString()}>Published: {eDateFormat(snippet.published)}</span>
            <span title={snippet.updated.toString()}> Last Updated: {eDateFormat(snippet.published)}</span>
            <ContentHeader>{snippet.title}</ContentHeader>
            <MdxRenderer source={snippet.___rawContent}/>
            {snippet.updated && <span>{snippet.updated.toISOString()} {snippet.published.toISOString()}</span>}
            <ContentTags>
                {snippet.tags && snippet.tags.map((tag: string, i: number) => <IconTag key={i} link={`/category/${tag}`} icon={tag}>{tag}</IconTag>)}
            </ContentTags>
        </ContentBodyWrapper>
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
    const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>> = await serialize(snippet.___rawContent, {
        mdxOptions: {
            rehypePlugins: [imageMetadata]
        }
    });
    return {
        props: {
            snippet: snippet,
            snippetMdxSource: mdxSource
        }
    }
}

export default SnippetsPage;