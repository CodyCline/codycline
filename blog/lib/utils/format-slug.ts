export function formatSlug(slug: string) {
    return slug.replace(/\.(mdx|md)/, '')
}

export function formatJsFile(slug: string) {
    return slug.replace(/\.(ts|tsx|js|jsx)/, '')
}