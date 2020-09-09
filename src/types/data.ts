export interface Article {
    id: string,
    slug: string,
    date: string,
    title: string,
    description: string,
    banner: NodeModule | string,
    cover: NodeModule | string,
    tags: string[],
    read_time: number,
    body: string,
}