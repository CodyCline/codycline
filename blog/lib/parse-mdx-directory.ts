import { PathLike, Stats, statSync } from "fs";
import path from "path";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { getAllFilesRecursively } from "./utils/files";
import { formatSlug } from "./utils/format-slug";
import { serialize } from "next-mdx-remote/serialize";
// Remark packages
import remarkFootnotes from "remark-footnotes"
import remarkGfm  from "remark-gfm";
import remarkMath from "remark-math";
import remarkTocHeadings from "./utils/toc-headings";
import markdown from "remark-parse";
// Rehype packages
import rehypeSlug from "rehype-slug";
import imageMetadata from "./image-metadata";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex"
import rehypeCitation from "rehype-citation"
import emoji from "remark-emoji";
//Scans through a folder of files with .mdx or .md extensions and returns
//An array of objects containing the rawContent, frontmatter, and file Stats
export async function parseMdxDirectory(path: PathLike) {
    const paths = await getAllFilesRecursively(path);
    const mdxFiles = paths.filter((path: any) => path.endsWith(`.md`) || path.endsWith(`.mdx`));
    const content: object[] = await Promise.all(
        mdxFiles.map(async (filePath: string) => {
            const fileNameString = path.toString()

            const fileName = filePath.slice(fileNameString.length + 1).replace(/\\/g, '/')

            const slug = formatSlug(fileName);

            const stats: Stats = statSync(path);
            const fileContents = await readFile(filePath, { encoding: "utf8" });
            const { data, content } = matter(fileContents);
            return {
                ...data,
                content,
                slug,
                created: stats?.birthtime ? stats.birthtime : new Date(),
                updated: stats?.mtime ? stats.mtime : null,
            }
        })
    )
    return content;
}


export async function parseSingleMdxFile(filePath: PathLike): Promise<object> {
    const fileContents = await readFile(filePath, `utf-8`);
    const stats: Stats = statSync(filePath);
    const { data: frontmatter, content } = matter(fileContents);

    let toc = [];

    const mdxSource = await serialize(content, {
        // made available to the arguments of any custom mdx component
        scope: {},
        // MDX's available options at time of writing pulled directly from
        // https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js
        mdxOptions: {
            remarkPlugins: [
                markdown,
                emoji,
                [remarkTocHeadings, { exportRef: toc }],
                remarkMath,
                remarkGfm,
            ],
            rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
                rehypeKatex,
                imageMetadata,
                [
                    rehypeCitation,
                    { bibliography: frontmatter?.bibliography, path: path.join(process.cwd(), "content") },
                ],
            ],
            compilers: [],
            filepath: '/some/file/path',
        },
        // Specify the target environment for the generated code. See esbuild docs:
        // https://esbuild.github.io/api/#target
        target: ['esnext'],
    })
    

    return {
        ...frontmatter,
        content: mdxSource,
        created: stats?.birthtime ? stats.birthtime : new Date(),
        updated: stats?.mtime ? stats.mtime : null,
    }
}

