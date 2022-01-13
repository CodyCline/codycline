import { PathLike, Stats, statSync } from "fs";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { getAllFilesRecursively } from "./utils/files";
import { formatSlug } from "./utils/format-slug";


//Scans through a folder of files with .mdx or .md extensions and returns
//An array of objects containing the rawContent, frontmatter, and file Stats
export async function parseMdxDirectory(path: PathLike) {
    const paths = await getAllFilesRecursively(path);
    const mdxFiles = paths.filter((path:any) => path.endsWith(`.md`) || path.endsWith(`.mdx`));
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
                created: stats?.birthtime? stats.birthtime : new Date(),
                updated: stats?.mtime? stats.mtime : null,
            }
        })
    )
    return content;
}


export async function parseSingleMdxFile(path: PathLike): Promise<object> {
    const fileContents = await readFile(path, `utf-8`);
    const stats: Stats = statSync(path);
    const { data, content } = matter(fileContents);
    return {
        ...data,
        content,
        created: stats?.birthtime? stats.birthtime : new Date(),
        updated: stats?.mtime? stats.mtime : null,
    }
}

