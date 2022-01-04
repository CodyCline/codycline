import { Url } from "url";

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
    created: Date;
    tags: string[];
    banner?: HeroImage;
    published: boolean;
    featured: number;
    ___rawContent: string;
}


export interface BlogPost extends Post {}

export interface Snippet extends Post {}

export interface Project extends Post {
    externalLink: string;
    additionalLinks: Url[];
}




export interface LoadedPost {
    lastUpdated: Date;
    permalink: string;
}