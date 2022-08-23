import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { IconTag } from "./ui/Tag";
import { media } from "./styles/Media";
import { truncate } from "./styles/Truncate";
import { eDateFormat } from "../lib/utils/format-date";
import router from "next/router";
import { fadeInAnimation, slideInAnimation, slideInLeft, slideInRight } from "./styles/Animations";


export const ArticleList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 32px;
    ${media.tablet`grid-template-columns: 1fr; grid-gap: none;`}
    ${media.phone`grid-template-columns: 1fr; grid-gap: none;`}
    margin: auto;
    padding-bottom: 10vh;
    width: 80%;
    animation: ${slideInLeft} var(--transition-seconds-primary);
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
    transition: var(--transition-seconds-default) ease-in-out;
    ${truncate(2, "vertical")}
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
    ${truncate(3, "vertical")}
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




export const ArticleCard = ({ title, description, image, onClick, tags, permaLink, date, }: any) => {
    const firstThreeTags = tags.slice(0, 4);

    return (
        <BlogListContainer onClick={onClick}>
            {image &&
                <Image alt="cover" onClick={() => router.push(permaLink)} objectFit="cover" blurDataURL={image.blurDataURL} height="100%" width={200} src={image.src} />
            }
            <SubContent>
                <SubItem>
                    <Header>
                        <Link href={permaLink}>
                            {title}
                        </Link>
                    </Header>
                </SubItem>
                <SubItem>
                    <Date title={date.toString()}>{eDateFormat(date)}</Date>
                </SubItem>
                <SubItem>
                    <Summary>
                        <Link href={permaLink}>{description}</Link>
                    </Summary>
                </SubItem>
                {/* <SubItem>
                    <ReadButton> Start Reading ➡️</ReadButton>
                </SubItem> */}
                <SubItem>
                    {tags && firstThreeTags.map((tag: string, index: number) =>
                        <IconTag key={index} icon={tag} link={`/category/${tag}`}>
                            {tag}
                        </IconTag>
                    )}
                </SubItem>
            </SubContent>

        </BlogListContainer>

    );
}

