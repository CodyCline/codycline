import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { FileDate, getFileDate } from './getFileData';
import { Project, ProjectType } from '../types/post';


export async function loadAllProjects(): Promise<Project[]> {
    const projectsPath = path.join(process.cwd(), "content/projects/");
    const paths = await readdir(projectsPath);
    const mdxFiles = paths.filter(path => path.endsWith(".md" || ".mdx"));
    const projectContents = await Promise.all(
        mdxFiles.map(async (fileName) => {
            const fileContents = await readFile(projectsPath + fileName, { encoding: "utf8" });
            const { created, updated }:FileDate = getFileDate(projectsPath);
            const { data, content } = matter(fileContents);

            //Remove the file extension name
            const slug = fileName.split(`.`)[0];

            const matterData = { ...data, content } as {
                title: string;
                description: string;
                published: Date;
                tags: string[];
                slug?: string;
                hero: string;
                links:  string[] | URL[];
                draft: boolean;
                featured?: number;
                ci_link?: URL | string;
                content: string;
                type: string;
            }


            //TODO HERO IMAGE
            const project: Project = {
                title: matterData.title!,
                created: created!,
                published: matterData.published!,
                draft: matterData.draft || false,
                featured: matterData.featured || 0,
                updated: updated!,
                slug: slug,
                type: matterData.type.toUpperCase() as ProjectType,
                buildLink: matterData.ci_link,
                links: matterData.links,
                permaLink: `/project/${slug}`,
                tags: matterData.tags || [],
                description: matterData.description,
                ___rawContent: matterData.content,
            }
            return project;
        })
    );
    return projectContents;
    // return new Map(postContents.map((post) => [post.slug, post] as const));

}
