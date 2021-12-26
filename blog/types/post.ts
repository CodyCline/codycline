export interface HeroImage {
    src: string;
    width: number;
    height: number;
    title?: string;
    ref?: string;
    license?: string;
}


export interface Post {
    title: string;
    description: string;
    createdAt: Date;
    lastUpdated: Date;
    tags: string[];
    banner: HeroImage;
    ___rawContent: string;

}