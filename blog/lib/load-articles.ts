import path from 'path';
import { Article, HeroImage } from '../types/post';
import { parseMdxDirectory } from './parse-mdx-directory';

import { sizeOf } from './image-metadata';


export async function loadAllArticles(): Promise<Article[]> {
    const articlesPath = path.join(process.cwd(), "content/articles/");
    const articleData = await parseMdxDirectory(articlesPath);

    const allArticles = articleData.map(async (fileData: object) => {
        const matterData = fileData as {
            title: string;
            description: string;
            tags: string[];
            slug: string;
            hero: string | null;
            draft: boolean;
            published: Date;
            created: Date;
            updated?: Date | null;
            featured?: number;
            content: string;
        }

        

        const article: Article = {
            title: matterData.title!,
            description: matterData.description,
            permaLink: `/article/${matterData.slug}`,
            slug: matterData.slug,
            featured: matterData.featured || 0,
            draft: matterData.draft,
            tags: matterData.tags || [],
            hero: null!,
            created: matterData.created!,
            published: matterData.published!,
            updated: matterData.updated!,
            
            ___rawContent: matterData.content,
        }


        if (matterData.hero) {
            //If there is an image attached to frontmatter load it and get dimensions
            const imagePath = path.join(process.cwd(), "public", matterData.hero);
            const res = await sizeOf(imagePath);
            if (!res) throw Error(`Invalid image with src "${matterData.hero}"`);

            if (res.width && res.height) {
                const heroImage: HeroImage = {
                    height: res.height,
                    width: res.width,
                    src: matterData.hero,
                }
                article.hero = heroImage;
            }
        }

        return article;
    })
    return Promise.all(allArticles);
}

