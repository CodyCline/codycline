import { existsSync } from 'fs';
import path from 'path';
import { Snippet } from '../types/post';
import { parseMdxDirectory, parseSingleMdxFile } from './parseMdx';
//

export async function loadAllSnippets(): Promise<Snippet[]> {
    const snippetsPath = path.join(process.cwd(), "content", "snippets");

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
            href: `/snippet/${matterData.slug}`,
            tags: matterData.tags || [],
            description: matterData.description,
            content: matterData.content,
        }
        return snippet;
    })
    return allSnippets;
}


export async function loadSnippetBySlug(slug: string) : Promise<Snippet> {
    const mdPath = path.join(process.cwd(), `content`, `snippets`, `${slug}.md`);
    const mdxPath = path.join(process.cwd(), `content`, `snippets`, `${slug}.mdx`);
    const source = existsSync(mdxPath)
        ? mdxPath
        : mdPath
    const snippetData = await parseSingleMdxFile(source);

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
        href: `/snippet/${matterData.slug}`,
        tags: matterData.tags || [],
        description: matterData.description,
        content: matterData.content,
    }
    return snippet;
}