import path from 'path';
import { Project, ProjectType } from '../types/post';
import { parseMdxDirectory } from './parse-mdx-directory';


export async function loadAllProjects(): Promise<Project[]> {
    const projectsPath = path.join(process.cwd(), "content/projects/");
    const projectData = await parseMdxDirectory(projectsPath);

    const allProjects = projectData.map((fileData: object) => {
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

        if (matterData.hero) {
            //Todo images
        }
        
        const project: Project = {
            title: matterData.title!,
            created: matterData.created!,
            published: matterData.published!,
            draft: matterData.draft || false,
            featured: matterData.featured || 0,
            updated: matterData.updated!,
            slug: matterData.slug,
            type: matterData.type.toUpperCase() as ProjectType,
            buildLink: matterData.ci_link,
            links: matterData.links,
            permaLink: `/project/${matterData.slug}`,
            tags: matterData.tags || [],
            description: matterData.description,
            ___rawContent: matterData.content,
        }
        return project;
    })
    return allProjects;
}
