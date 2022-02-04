import React from "react";

export interface IGenericProps {
    children: React.ReactNode
    style?: React.CSSProperties
}

export namespace Card {
    export type Status = `passing` | `mixed` | `failing` | `no-status`;
    export type Platform = `web` | `mobile` | `hardware` | `network` | `desktop` | `package`;

    export interface IProps {
        title: string
        description: string
        platform: Platform
        slug: string
        status: Status
        version?: number
        gitUrl?: string
        externalUrl?: string
        appleUrl?: string
        androidUrl?: string
        snapcraftUrl?: string
    }
}

export namespace CodeBlock {
    export interface IBlockProps {
        children: React.ReactNode
        className: string
    }
    export interface IInlineProps {
        children: React.ReactNode
    }
}


export namespace Layout {
    export interface INavProps  {
        children: React.ReactNode
        link: string
        notActive?: boolean
        className?: string
        style?: React.CSSProperties
    }
}

export interface IPanelProps {
    title: string
    description: string
    imageUrl: string
    onClick?: React.MouseEventHandler
    slug: string
    tags: string[]
}

export interface ISpacerProps {
    height?: number
    width?: number
    units:  `em` | `px` | `vh` | `rem`
    style?: React.CSSProperties
}

export interface ILinkProps {
    externalOnly?: boolean
    href: string
    children: React.ReactNode
}

export interface ISpoilerProps {
    title: string
    children: React.ReactNode
}

export namespace SEO {
    interface SiteMeta {
        title: string
        description: string
        author: {
            name: string
            summary: string
        }
        social: {
            github: string
        }
    }
    
    export interface IProps {
        title: string
        description: string
        lang: string
        siteMeta: SiteMeta
        contentType?: string
        meta?: any
    }
}

export interface IStripProps {
    title: string
    description: string
    category: string
    date: string
    slug: string
}


