import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { IconTag } from "./ui/Tag";
import { media } from "./ui/Media";
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
    border: 1px solid var(--color-border);
`

const Header = styled.h3`
    font-weight: 700;
    cursor: pointer;
    color: var(--color-text-secondary);
    margin-block-start: 0;
    transition: 1s ease-in-out;
    &:hover {
        text-decoration: dotted underline;
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

const Summary = styled.div`
    --max-lines: 3;
    --lh: 1.7rem;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    &:before {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
    }
`

const Date = styled.span`
    color: #ccc;
`


const ReadButton = styled.button`
    font-size: var(--font-size-default);
    color: var(--color-text-primary);
    background: inherit;
    border: 2px solid var(--color-text-primary);
    margin: .5em 0;
    cursor: pointer;
    &:hover {
        background: var(--color-text-primary);
        color: var(--color-text-default);
    }
`
import r from "../public/assets/clang.jpg";




export const BlogCard = ({ title, description, image, onClick, tags, permaLink, date, }: any) => {
    const firstThreeTags = tags.slice(0, 4);
    return (
        <BlogListContainer onClick={onClick}>
            <Link href={permaLink}>
                <Image objectFit="cover" height={100} width={500} src={r} />
            </Link>

            <SubContent>
                <SubItem>
                    <Header>
                        <Link href={permaLink}>
                            {title}
                        </Link>
                    </Header>
                </SubItem>
                <SubItem>
                    <Date title={date.toString()}>{date.toISOString()}</Date>
                </SubItem>
                <SubItem>
                    <Summary>
                        <Link href={permaLink}>{description}</Link>
                    </Summary>
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

