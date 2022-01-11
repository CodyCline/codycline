import path from 'path';
import { Article, HeroImage } from '../types/post';
import { parseMdxDirectory, parseSingleMdxFile } from './parse-mdx-directory';

import { sizeOf, } from './image-metadata';
import { readFile, readFileSync } from 'fs';


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




export async function loadArticleBySlug(slug: string): Promise<Article> {
    const articlePath = path.join(process.cwd(), "content/articles/" + slug + ".md");
    const articleData = await parseSingleMdxFile(articlePath);
    const matterData = articleData as {
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
        published: new Date(matterData.published!),
        updated: matterData.updated!,
        ___rawContent: matterData.content,
    }


    if (matterData.hero) {
        const BLUR_IMG_SIZE = 8;
        const BLUR_QUALITY = 70;
        const VALID_BLUR_EXT = ["jpeg", "png", "webp"];
        //If there is an image attached to frontmatter load it and get dimensions
        const imagePath = path.join(process.cwd(), "public", matterData.hero);

        const res = await sizeOf(imagePath);
        if (!res) throw Error(`Invalid image with src "${matterData.hero}"`);

        if (res.width && res.height) {
            // const imageBlurExt: any = imagePath.match(/\.(png|webp|jpg|jpeg)$/);
            // const dimension = res.width >= res.height ? "width" : "height";
            // const extension = imageBlurExt[1].replace("jpg", "jpeg");
            // const content = await readFileSync(imagePath);
            // const resizedImage = await resizeImage(
            //     content,
            //     dimension,
            //     BLUR_IMG_SIZE,
            //     extension,
            //     BLUR_QUALITY
            // );

            // const blurredImageURL = `data:image/${extension};base64,${resizedImage.toString(
            //     "base64"
            // )}`;
            const heroImage: HeroImage = {
                height: res.height,
                width: res.width,
                src: matterData.hero,
                // blurDataURL: blurredImageURL,
            }
            article.hero = heroImage;
        }
    }

    return article;
}