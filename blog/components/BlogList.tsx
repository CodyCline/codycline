import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { IconTag } from "./ui/Tag";
import { media } from "./ui/Media";
import { complement, cssVar, lighten } from "polished";
import React from "react";

export const BlogList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 32px;
    ${media.tablet`grid-template-columns: 1fr; grid-gap: none;`}
    ${media.phone`grid-template-columns: 1fr; grid-gap: none;`}
    margin: auto;
    width: 80%;
`


const BlogListContainer = styled.article`
    display: flex;
    flex-direction: row;
    margin: 2em auto;
    ${media.phone`flex-direction: column;`}
    ${media.tablet`flex-direction: column`}
    ${media.desktop`flex-direction: column`}
    background: var(--color-fg-primary);
    border: 1px solid var(--color-border);
`

const Header = styled.h3`
    font-weight: 700;
    font-size: 1.7rem;
    cursor: pointer;
    color: var(--color-text-secondary);
    margin-block-start: 0;
    transition: 1s ease-in-out;
    &:hover {
        text-decoration: underline;
    }
`;

const SubContent = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 20px 40px;
    font-size: 18px;
    list-style: none;
`

const SubItem = styled.li`
    margin-bottom: 0.33em;
`;

const Date = styled.span`
    color: #ccc;
`


const ReadButton = styled.button`
    background: ${lighten(0.2, complement("#1f2123"))};
    color: var(--color-bg-toggle);
    border-radius: 0.333em;
    margin: 1em 0;
    cursor: pointer;
    border: none;
    padding: 0.5em;
`
import r from "../public/assets/clang.jpg";




export const BlogCard = ({ title, description, image, onClick, tags, url, date, }: any) => {
    const firstThreeTags = tags.slice(0, 3);
    return (
        <BlogListContainer onClick={onClick}>
            <Link href={url}>
                <Image objectFit="cover" height={100} width={500} src={r} />
            </Link>

            <SubContent>
                <SubItem>
                    <Header>
                        <Link href={url}>
                            {title}
                        </Link>
                    </Header>
                </SubItem>
                <SubItem>
                    <Date>2020.12.24</Date>
                </SubItem>
                <SubItem>
                    <Link href={url}>{description}</Link>
                </SubItem>
                <SubItem>
                    <ReadButton> Start Reading ➡️</ReadButton>
                </SubItem>
                <SubItem>
                    {tags && firstThreeTags.map((tag: string, index: number) =>
                        <IconTag key={index} icon={tag} link={`/meta/${tag}`}>
                            {tag}
                        </IconTag>
                    )}
                </SubItem>
            </SubContent>

        </BlogListContainer>
    );
}

