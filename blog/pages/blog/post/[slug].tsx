import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Code } from '../../../components/Code';
import styled from 'styled-components';



const Paragraph = styled.p`
    marginBottom: 28px;
    font-size: 20px;
`

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 30px;
    line-height: 1.2;
`

const BlogPage = ({ mdxSource }:any) => {
    return (
        <div className="mt-4">
            <MDXRemote components={{
                code: Code,
                p: Paragraph,
                h1: Title,
            }} {...mdxSource}/>
        </div>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/blog/"))
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
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), "content/blog/" + slug + ".md"), 'utf-8')
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

export default BlogPage;