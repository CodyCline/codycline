import styled from "styled-components";
import { Icon } from "./ui/Icon";
import { IconTag, LinkTag } from "./ui/Tag";
import Image from "next/image";
import r from "../public/assets/minuteman_II.jpg";
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
    > i {
        margin-right: 10px;
    }
    > span {
        color: #CCC;
        margin-left: 5px;
        font-weight: normal;
        font-size: var(--font-size-sm);
    }
    `

const CardActionBar = styled.ul`
    margin: 0;
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
    transform: translateY(-75%);
    right: 17px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
`;


export const ProjectCard = ({ title, type, buildLink, tags, links, description, permaLink }: any) => {
    const firstTag = tags && tags[0];
    const firstLink = links && links[0];
    console.log(firstTag, firstLink);
    return (
        <ProjectCardContainer>
            <div style={{ padding: `12px` }}>
                <div style={{ height: "14vh", width: "100%", position: `relative` }}>
                    <Image objectFit="cover" layout="fill" src={r} />
                </div>
            </div>
            <CardBadge>
                <Icon height={36} width={36} name={firstTag} />
            </CardBadge>
            <div style={{ padding: "16px", display: "flex", height:"200px", flexDirection: "column", "justifyContent": "space-between" }}>
                <CardDescription>

                    <CardTitle>
                            <Icon height={24} width={24} name={projectTypeIcon(type as ProjectType)} />
                            {title}<span>v.2.1.0</span>
                    </CardTitle>
                    <CardSummary>
                        {description}
                    </CardSummary>

                </CardDescription>
                <CardActionBar>
                    <Link href={firstLink}>
                        <CardActionItem>
                                <Icon height={24} width={24} name="link" />
                        </CardActionItem>
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
                    {buildLink &&
                        <CardActionItem right>
                            <div style={{ verticalAlign: "middle", display: "inline-flex", }}>
                                <img
                                    title="build status"
                                    alt="build status"
                                    src={buildLink}
                                />
                            </div>
                        </CardActionItem>
                    }
                </CardActionBar>
            </div>
        </ProjectCardContainer>
    );
}