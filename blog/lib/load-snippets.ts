import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { FileDate, getFileDate } from './getFileData';
import { BlogPost, Post, ProjectType, Snippet } from '../types/post';
//



export async function loadAllSnippets(): Promise<Snippet[]> {
    const blogPostsPath = path.join(process.cwd(), "content/snippets/");
    const paths = await readdir(blogPostsPath);
    const mdxFiles = paths.filter(path => path.endsWith(".md" || ".mdx"));
    const postContents = await Promise.all(
        mdxFiles.map(async (fileName) => {
            const fileContents = await readFile(blogPostsPath + fileName, { encoding: "utf8" });
            const { created, updated }:FileDate = getFileDate(blogPostsPath);
            
            const { data, content } = matter(fileContents);

            //Remove the file extension name
            const slug = fileName.split(`.`)[0];

            const matterData = { ...data, content } as {
                title: string;
                description: string;
                tags: string[];
                slug?: string;
                published: boolean;
                featured?: number;
                content: string;
            }


            const post: Snippet = {
                title: matterData.title!,
                created: created!,
                published: matterData.published! || false,
                featured: matterData.featured || 0,
                updated: updated!,
                slug: slug,
                permaLink: `/snippet/post/${slug}`,
                tags: matterData.tags || [],
                description: matterData.description,
                ___rawContent: matterData.content,
            }


            return post;
        })
    );
    return postContents;
}
