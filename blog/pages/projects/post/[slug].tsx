import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const ProjectPage = ({ mdxSource }:any) => {
    return (
        <div className="mt-4">
            <MDXRemote components={{
            }} {...mdxSource}/>
        </div>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/projects/"))
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
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), "content/projects/" + slug + ".md"), 'utf-8')
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

export default ProjectPage;