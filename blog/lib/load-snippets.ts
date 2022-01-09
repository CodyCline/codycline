import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { FileDate, getFileDate } from './getFileData';
import { Snippet } from '../types/post';
//



export async function loadAllSnippets(): Promise<Snippet[]> {
    const snippetsPath = path.join(process.cwd(), "content/snippets/");
    const paths = await readdir(snippetsPath);
    const mdxFiles = paths.filter(path => path.endsWith(".md" || ".mdx"));
    const snippetContents = await Promise.all(
        mdxFiles.map(async (fileName) => {
            const fileContents = await readFile(snippetsPath + fileName, { encoding: "utf8" });
            const { created, updated } : FileDate = getFileDate(snippetsPath);
            
            const { data, content } = matter(fileContents);

            //Remove the file extension name
            const slug = fileName.split(`.`)[0];

            const matterData = { ...data, content } as {
                title: string;
                description: string;
                tags: string[];
                slug?: string;
                published: Date;
                draft: boolean;
                featured?: number;
                content: string;
            }


            const snippet: Snippet = {
                title: matterData.title!,
                created: created!,
                published: matterData.published!,
                draft: matterData.draft,
                featured: matterData.featured || 0,
                updated: updated!,
                slug: slug,
                permaLink: `/snippet/${slug}`,
                tags: matterData.tags || [],
                description: matterData.description,
                ___rawContent: matterData.content,
            }


            return snippet;
        })
    );
    return snippetContents;
}
