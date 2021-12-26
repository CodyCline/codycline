import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

export function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), "content/blog")
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map(filename => {
        const file = fs.readFileSync(path.join(process.cwd(), "content/blog", filename), 'utf8')

        // TODO: transform and return file
        // get frontmatter
        const { data } = matter(file)

        // get slug from filename
        const slug = filename.replace(/\.md$/, '')

        // return combined frontmatter and slug; build permalink
        return {
            ...data,
            slug,
            permalink: `/blog/${slug}`,
        }
    })
}