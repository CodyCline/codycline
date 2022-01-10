import path from 'path';
import { Snippet } from '../types/post';
import { parseMdxDirectory, parseSingleMdxFile } from './parse-mdx-directory';
//

export async function loadAllSnippets(): Promise<Snippet[]> {
    const snippetsPath = path.join(process.cwd(), "content/snippets/");

    const projectData = await parseMdxDirectory(snippetsPath);

    const allSnippets = projectData.map((fileData: object) => {
        const matterData = fileData as {
            title: string;
            description: string;
            tags: string[];
            slug: string;
            published: Date;
            draft: boolean;
            created: Date;
            updated: Date | null;
            featured?: number;
            content: string;
        }

        
        const snippet: Snippet = {
            title: matterData.title!,
            created: matterData.created!,
            published: matterData.published!,
            draft: matterData.draft,
            featured: matterData.featured || 0,
            updated: matterData.updated!,
            slug: matterData.slug,
            permaLink: `/snippet/${matterData.slug}`,
            tags: matterData.tags || [],
            description: matterData.description,
            ___rawContent: matterData.content,
        }
        return snippet;
    })
    return allSnippets;
}


export async function loadSnippetBySlug(slug: string) : Promise<Snippet> {
    const snippetPath = path.join(process.cwd(), "content/snippets/" + slug + ".md");
    const snippetData = await parseSingleMdxFile(snippetPath);

    const matterData = snippetData as {
        title: string;
        description: string;
        tags: string[];
        slug: string;
        published: Date;
        draft: boolean;
        created: Date;
        updated: Date | null;
        featured?: number;
        content: string;
    }

    
    const snippet: Snippet = {
        title: matterData.title!,
        created: matterData.created!,
        published: new Date(matterData.published!),
        draft: matterData.draft || true,
        featured: matterData.featured || 0,
        updated: matterData.updated!,
        slug: matterData.slug,
        permaLink: `/snippet/${matterData.slug}`,
        tags: matterData.tags || [],
        description: matterData.description,
        ___rawContent: matterData.content,
    }
    return snippet;
}