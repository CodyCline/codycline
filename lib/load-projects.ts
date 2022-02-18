import path from 'path';
import { HeroImage, Project, ProjectType } from '../types/post';
import { parseMdxDirectory, parseSingleMdxFile } from './parse-mdx-directory';
import { sizeOf } from './image-metadata';
import { existsSync } from 'fs';
import { pixelateImage } from './pixelate-image';

export async function loadAllProjects(): Promise<Project[]> {
    const projectsPath = path.join(process.cwd(), "content", "projects");
    const projectData = await parseMdxDirectory(projectsPath);

    const allProjects = projectData.map(async (fileData: object) => {
        const matterData = fileData as {
            title: string;
            description: string;
            published: Date;
            tags: string[];
            slug: string;
            created: Date;
            updated: Date | null;
            hero: string;
            links: string[] | URL[];
            draft: boolean;
            featured?: number;
            ci_link?: URL | string;
            content: string;
            type: string;
        }

        
        const project: Project = {
            title: matterData.title!,
            created: matterData.created!,
            published: matterData.published!,
            draft: matterData.draft || false,
            featured: matterData.featured || 0,
            updated: matterData.updated!,
            slug: matterData.slug,
            hero: null!,
            type: matterData.type.toUpperCase() as ProjectType,
            buildLink: matterData.ci_link,
            links: matterData.links,
            permaLink: `/project/${matterData.slug}`,
            tags: matterData.tags || [],
            description: matterData.description,
            ___rawContent: matterData.content,
        }
        if (matterData.hero) {
            //If there is an image attached to frontmatter load it and get dimensions
            const imagePath = path.join(process.cwd(), "public", matterData.hero);
            const res = await sizeOf(imagePath);
            const pixelatedImage = await pixelateImage(imagePath, 0.999);
            if (!res) throw Error(`Invalid image with src "${matterData.hero}"`);

            if (res.width && res.height) {
                const heroImage: HeroImage = {
                    height: res.height,
                    width: res.width,
                    src: matterData.hero,
                    blurDataURL: pixelatedImage,
                }
                project.hero = heroImage;
            }
        }
        return project;
    })
    return Promise.all(allProjects);
}


export async function loadProjectBySlug(slug: string): Promise<Project> {
    const mdPath = path.join(process.cwd(), `content`, `projects`, `${slug}.md`);
    const mdxPath = path.join(process.cwd(), `content`, `projects`, `${slug}.mdx`);
    const source = existsSync(mdxPath)
        ? mdxPath
        : mdPath
        
    const projectData = await parseSingleMdxFile(source);

    const matterData = projectData as {
        title: string;
        description: string;
        published: Date;
        tags: string[];
        slug: string;
        created: Date;
        updated: Date | null;
        hero: string;
        links: string[] | URL[];
        draft: boolean;
        featured?: number;
        ci_link?: URL | string;
        content: string;
        type: string;
    }

    
    const project: Project = {
        title: matterData.title!,
        created: matterData.created!,
        published: new Date(matterData.published!),
        draft: matterData.draft || false,
        featured: matterData.featured || 0,
        updated: matterData.updated!,
        slug: matterData.slug,
        hero: null!,
        type: matterData.type.toUpperCase() as ProjectType,
        buildLink: matterData.ci_link,
        links: matterData.links,
        permaLink: `/project/${matterData.slug}`,
        tags: matterData.tags || [],
        description: matterData.description,
        ___rawContent: matterData.content,
    }
    if (matterData.hero) {
        //If there is an image attached to frontmatter load it and get dimensions
        const imagePath = path.join(process.cwd(), "public", matterData.hero);
        const res = await sizeOf(imagePath);
        if (!res) throw Error(`Invalid image with src "${matterData.hero}"`);
        const pixelatedImage = await pixelateImage(imagePath, 0.999);

        if (res.width && res.height) {
            const heroImage: HeroImage = {
                height: res.height,
                width: res.width,
                src: matterData.hero,
                blurDataURL: pixelatedImage,
            }
            project.hero = heroImage;
        }
    }
    return project;
}