import path from "path";
import { parseMdxDirectory } from "./parseMdx";


//Load all categories parses through all content and 
//returns a Set object containing each tag found and the 
//number of times it has appeaded i.e. { `javascript: 2`,  `webassembly: 1` }
export async function loadAllCategories() : Promise<object[]> {
    const articlesDirectory = path.join(process.cwd(), `content`, `articles`);
    const projectsDirectory = path.join(process.cwd(), `content`, `projects`);
    const snippetsDirectory = path.join(process.cwd(), `content`, `snippets`);

    const [articlesFrontmatter, projectsFrontmatter, snippetsFrontmatter] = await Promise.all([
        parseMdxDirectory(articlesDirectory),
        parseMdxDirectory(projectsDirectory),
        parseMdxDirectory(snippetsDirectory),
    ]);

    const mergedContent: object[] = [
        ...articlesFrontmatter,
        ...projectsFrontmatter,
        ...snippetsFrontmatter,
    ]
    const traversedCategories: string[][] = mergedContent.map((data: object) => {
        const matterData = data as { title: string, tags: string[] };
        return matterData.tags;
    })
    
    const frequencyMap: any = traversedCategories.flat().reduce((acc, i) => acc.set(i, (acc.get(i) || 0) + 1), new Map());
    return [...frequencyMap].map(([key, value]) => ({ name: key, frequency: value }));
}

