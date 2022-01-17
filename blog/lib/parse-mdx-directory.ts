import { PathLike, Stats, statSync } from "fs";
import path from "path";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { getAllFilesRecursively } from "./utils/files";
import { formatSlug } from "./utils/format-slug";
import { bundleMDX } from "mdx-bundler";
// Remark packages
import remarkGfm from "remark-gfm"
import remarkFootnotes from "remark-footnotes"
import remarkMath from "remark-math"
import remarkCodeTitles from "./utils/code-title";
import { rehypeCodeMeta } from "./utils/code-title";
import remarkTocHeadings from "./utils/toc-headings";
// import remarkImgToJsx from "./remark-img-to-jsx"
// Rehype packages
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeKatex from "rehype-katex"
import rehypeCitation from "rehype-citation"
import rehypePrismPlus from "rehype-prism-plus"

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

    if (process.platform === "win32") {
        process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "esbuild.exe")
    } else {
        process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "bin", "esbuild")
    }

    let toc = []
    const { code } = await bundleMDX({
        source: fileContents,
        // mdx imports can be automatically source from the components directory
        cwd: path.join(process.cwd(), `components`),
        xdmOptions(options) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                [remarkTocHeadings, { exportRef: toc }],
                remarkGfm,
                [remarkFootnotes, { inlineNotes: true }],
                remarkMath,
                // remarkImgToJsx,
            ]
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeSlug,
                rehypeAutolinkHeadings,
                rehypeKatex,
                [
                    rehypeCitation,
                    { bibliography: frontmatter?.bibliography, path: path.join(process.cwd(), "content") },
                ],
                [rehypeCodeMeta],
                
            ]
            return options
        },
        esbuildOptions: (options) => {
            options.loader = {
                ...options.loader,
                ".js": "jsx",
                ".ts": "tsx", 
            }
            return options
        },
    })

    return {
        ...frontmatter,
        content: code,
        created: stats?.birthtime ? stats.birthtime : new Date(),
        updated: stats?.mtime ? stats.mtime : null,
    }
}

