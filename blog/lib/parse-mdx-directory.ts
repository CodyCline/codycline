import { PathLike, Stats, statSync } from "fs";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";


//Scans through a folder of files with .mdx or .md extensions and returns
//An array of objects containing the rawContent, frontmatter, and file Stats
export async function parseMdxDirectory(path: PathLike) {
    const paths = await readdir(path);
    const mdxFiles = paths.filter(path => path.endsWith(`.md`) || path.endsWith(`.mdx`));
    const content: object[] = await Promise.all(
        mdxFiles.map(async (fileName) => {
            const slug = fileName.split(`.`)[0];
            const stats: Stats = statSync(path);
            const fileContents = await readFile(path + fileName, { encoding: "utf8" });
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
