import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { FileDate, getFileDate } from './getFileData';
import { Article } from '../types/post';
//



export async function loadAllArticles(): Promise<Article[]> {
    const articlesPath = path.join(process.cwd(), "content/articles/");
    const paths = await readdir(articlesPath);
    const mdxFiles = paths.filter(path => path.endsWith(".md" || ".mdx"));
    const articleContents = await Promise.all(
        mdxFiles.map(async (fileName) => {
            const fileContents = await readFile(articlesPath + fileName, { encoding: "utf8" });
            const { created, updated }:FileDate = getFileDate(articlesPath);
            
            const { data, content } = matter(fileContents);

            //Remove the file extension name
            const slug = fileName.split(`.`)[0];

            const matterData = { ...data, content } as {
                title: string;
                description: string;
                tags: string[];
                slug?: string;
                hero: string;
                draft: boolean;
                published: Date;
                featured?: number;
                content: string;
            }

            if (matterData.hero) {
                //Todo images
            }

            const article: Article = {
                title: matterData.title!,
                description: matterData.description,
                permaLink: `/article/${slug}`,
                slug: slug,
                featured: matterData.featured || 0,
                draft: matterData.draft,
                tags: matterData.tags || [],
                
                created: created!,
                published: matterData.published!,
                updated: updated!,
                
                ___rawContent: matterData.content,
            }


            return article;
        })
    );
    return articleContents;
    // return new Map(postContents.map((post) => [post.slug, post] as const));

}
