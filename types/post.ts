
export interface HeroImage {
    src: string;
    width: number | undefined;
    height: number | undefined;
    blurDataURL?: string;
}

interface MarkdownDocument {
    title: string;
    description: string;
    published: Date;
    created: Date;
    updated?: Date;
    href: URL | string;
    tags: string[];
    slug: string;
    draft: boolean;
    featured: number;
    content: string;
}

export enum ProjectType {
    WEB = "WEB", //Anything web-based. Examples: Web App, HTML, Landing Page.
    MOBILE = "MOBILE", //Application that runs on a phone: React native, Swift, etc.
    DESKTOP = "DESKTOP", //Application with a UI that runs on a machine. Examples: VSCode, Chrome, Electron, GTK.
    EXTENSION = "EXTENSION", //An extension of an application. Examples: Chrome Extension, Gnome tweak.
    CLI = "CLI", //Application that runs on local machine that is command or text-based. Examples: CRA, npm, DBAN.
    NETWORK = "NETWORK", //Some kind of application that runs in the cloud, uses low-level networking. Examples: Web Socket Server, Router
    DEPENDENCY = "DEPENDENCY", //Software sdks, dependencies or extensions. Examples: npm package, cargo package, pip, conan, apt-get etc.
    HARDWARE = "HARDWARE", //Any hardware device or low-level application such as firmware, kernel. Examples: Kernel extension, firmware, raspberry pi.
    SECURITY = "SECURITY", //Anything related to security such as oauth, firewall etc. 
    PUBLICATION = "PUBLICATION", //E-book or some kind of published text. Examples: Eook, manual, RFC, etc.
    OTHER = "OTHER", //Anything that can't fit here
}



export interface Article extends MarkdownDocument {
    hero?: HeroImage;
}

export interface Snippet extends MarkdownDocument {}

export interface Project extends MarkdownDocument {
    hero?: HeroImage;
    version?: number;
    
    links: string[] | URL[]; //Links to github, etc.
    badge?: URL | string;
    type: ProjectType;
}



