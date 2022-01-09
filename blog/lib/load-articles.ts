import path from 'path';
import { Article } from '../types/post';
import { parseMdxDirectory } from './parse-mdx-directory';


export async function loadAllArticles(): Promise<Article[]> {
    const articlesPath = path.join(process.cwd(), "content/articles/");
    const articleData = await parseMdxDirectory(articlesPath);

    const allArticles = articleData.map((fileData: object) => {
        const matterData = fileData as {
            title: string;
            description: string;
            tags: string[];
            slug: string;
            hero: string;
            draft: boolean;
            published: Date;
            created: Date;
            updated?: Date | null;
            featured?: number;
            content: string;
        }

        if (matterData.hero) {
            //Todo images
        }

        const article: Article = {
            title: matterData.title!,
            description: matterData.description,
            permaLink: `/article/${matterData.slug}`,
            slug: matterData.slug,
            featured: matterData.featured || 0,
            draft: matterData.draft,
            tags: matterData.tags || [],
            
            created: matterData.created!,
            published: matterData.published!,
            updated: matterData.updated!,
            
            ___rawContent: matterData.content,
        }
        return article;
    })
    return allArticles;
}

