import styled from "styled-components";
import { Icon } from "./ui/Icon";
import Image from "next/image";
import { truncate } from "./styles/Truncate";
import { ProjectType } from "../types/post";
import Link from "next/link";
import { hostToIconName } from "../utils/hostname-icon";
import router from "next/router";

export const ProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(217px,1fr));
    grid-column-gap: 10px;
    -webkit-column-gap: 10px;
    -moz-column-gap: 10px;
    column-gap: 10px;
    margin: 2em auto;
    width: 80%;
    padding-bottom: 10vh;
    grid-gap: 32px;
`;

const ProjectCardContainer = styled.article`
    position: relative;
    border: 1px solid var(--color-border);
    width: 100%;
    border-radius: 5px;
    padding: 1em;
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition-seconds-default) ease-in-out;
    &:hover {
        background: var(--color-fg-primary);
    }
`;


const projectTypeIcon = (platform: ProjectType) => {
    switch (platform) {
        case ProjectType.WEB: return `desktop`;
        case ProjectType.MOBILE: return `desktop`;
        case ProjectType.DESKTOP: return `desktop`;
        case ProjectType.EXTENSION: return `desktop`;
        case ProjectType.CLI: return `desktop`
        case ProjectType.NETWORK: return `desktop`;
        case ProjectType.DEPENDENCY: return `package`;
        case ProjectType.HARDWARE: return ``;
        case ProjectType.SECURITY: return ``;
        case ProjectType.PUBLICATION: return ``;
        case ProjectType.OTHER: return `mystery`;
        default: return `folder`
    }
}



const CardTitle = styled.div`
    display: inline-flex;
    align-items: center;
    color: var(--color-text-secondary);
    
    font-weight: 700;
    margin-top: 1rem;
    > i {
        margin-right: var(--font-size-xs);
    }
    > span {
        color: #CCC;
        margin-left: 5px;
        font-weight: normal;
        font-size: var(--font-size-sm);
    }
    `

const CardActionBar = styled.ul`
    margin: 2rem 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
`;

const CardActionItem: any = styled.li`
    ${(props: any) => props.right ? `margin-left: auto;` : `margin-right: .33em;`}
`;

const CardSummary = styled.div`
    ${truncate(3, `vertical`)}
`

const CardBadge = styled.div`
    border-radius: 50%;
    position: absolute;
    transform: translateY(-66.6%);
    right: 17px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
`;


const CiStatusWrapper = styled.div`
    display: inline-flex;
    vertical-align: middle 
`

export const ProjectCard = ({ image, title, type, ciLink = "https://github.com/codycline/codycline/workflows/aws_ci/badge.svg", tags, links, description, permaLink }: any) => {
    const firstTag = tags && tags[0];
    const allLinks = links && links.map((link: string) => {
        return new URL(link);
    })

    return (
        <ProjectCardContainer>
            <Image onClick={() => router.push(permaLink)} objectFit="cover" width={image.width} height={400} src={image.src} />
            <CardBadge>
                <Icon height={36} width={36} name={firstTag} />
            </CardBadge>
            <Link href={permaLink}>
                <CardTitle>
                    <Icon height={24} width={24} fill="var(--color-text-secondary)" name={projectTypeIcon(type as ProjectType)} />
                    <p>{title}</p>
                    {/* <span>version</span> */}
                </CardTitle>
            </Link>
            <CardSummary>
                <Link href={permaLink}>
                    {description}
                </Link>
            </CardSummary>

            <CardActionBar>
                {
                    allLinks.map((link: URL) => (
                        <Link key={link.href} passHref href={link.href}>
                            <a target="_blank" href={link.href}>
                                <CardActionItem>
                                    <Icon title={`View project on ${link.hostname}`} height={24} width={24} name={hostToIconName(link)} />
                                </CardActionItem>
                            </a>
                        </Link>
                    ))
                }
                {ciLink &&
                    <CardActionItem right>
                        <CiStatusWrapper>
                            <Image
                                title="ci status"
                                unoptimized
                                alt="ci status"
                                objectFit="scale-down"
                                height={25}
                                width="100%"
                                src={ciLink}
                            />
                        </CiStatusWrapper>
                    </CardActionItem>
                }
            </CardActionBar>
        </ProjectCardContainer>
    );
}