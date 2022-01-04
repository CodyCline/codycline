import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { getFileDate } from './getFileData';

export async function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), "content/blog")
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map(filename => {
        const file = fs.readFileSync(path.join(process.cwd(), "content/blog", filename), 'utf8');
        // const { created, updated } = await getFileData(file);
        // console.log(created, updated);
        const { created, updated} = getFileDate(path.join(process.cwd(), "content/blog", filename))
        // TODO: transform and return file
        // get frontmatter
        const { data } = matter(file)

        // get slug from filename
        const slug = filename.replace(/\.md$/, '')

        // return combined frontmatter and slug; build permalink
        return {
            ...data,
            created: created.toString(),
            updated: updated?.toString(),
            slug,
            permalink: `/blog/post/${slug}`,
        }
    })
}