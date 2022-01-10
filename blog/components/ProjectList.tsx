import styled from "styled-components";
import { Icon } from "./ui/Icon";
import Image from "next/image";
import { truncate } from "./ui/Truncate";
import { ProjectType } from "../types/post";
import Link  from "next/link";
export const ProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(217px,1fr));
    grid-column-gap: 10px;
    -webkit-column-gap: 10px;
    -moz-column-gap: 10px;
    column-gap: 10px;
    margin: auto;
    width: 80%;
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
    transition: .3s ease-in-out;
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



const CardDescription = styled.div`
    
`;

const CardTitle = styled.div`
    display: inline-flex;
    align-items: center;
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
    ${(props: any) => props.right ? "margin-left: auto;" : "margin-right: .33em;"}
`;

const CardSummary = styled.div`
${truncate(3, "vertical")}
`

const CardBadge = styled.div`
    border-radius: 50%;
    position: absolute;
    transform: translateY(-50%);
    right: 17px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
`;


export const ProjectCard = ({ image, title, type, ciLink, tags, links, description, permaLink }: any) => {
    const firstTag = tags && tags[0];
    const firstLink = links && links[0];
    return (
        <ProjectCardContainer>
            <div>
                <div style={{ height: "14vh", width: "100%", position: `relative` }}>
                    <Image objectFit="cover" layout="fill" src={image.src} />
                </div>
            </div>
            <CardBadge>
                <Icon height={36} width={36} name={firstTag} />
            </CardBadge>
            <CardDescription>
                <Link href={permaLink}>
                <CardTitle>
                    <Icon height={24} width={24} fill={`var(--color-text-secondary)`} name={projectTypeIcon(type as ProjectType)} />
                    <p style={{color: `var(--color-text-secondary)`}}>{title}</p>
                    <span>v.2.1.0</span>
                </CardTitle>
                </Link>
                <CardSummary>
                    <Link href={permaLink}>
                    {description}
                    </Link>
                </CardSummary>

            </CardDescription>
            <CardActionBar>
                <Link passHref href={firstLink}>
                    <a target="_blank" href={firstLink}>
                    <CardActionItem>
                        <Icon height={24} width={24} name="link" />
                    </CardActionItem>
                    </a>
                </Link>
                <CardActionItem>
                    <Icon height={24} width={24} name="snapcraft" />
                </CardActionItem>
                <CardActionItem>
                    <Icon height={24} width={24} name="github" />
                </CardActionItem>
                <CardActionItem>
                    <Icon height={24} width={24} name="cargo" />
                </CardActionItem>
                {ciLink &&
                    <CardActionItem right>
                        <div style={{ verticalAlign: "middle", display: "inline-flex", }}>
                            <Image
                                title="ci status"
                                alt="ci status"
                                objectFit="scale-down"
                                height={20}
                                width="100%"
                                src={ciLink}
                            />
                        </div>
                    </CardActionItem>
                }
            </CardActionBar>
        </ProjectCardContainer>
    );
}