import styled from "styled-components";
import { Icon } from "./ui/Icon";
import { IconTag, LinkTag } from "./ui/Tag";
import Image from "next/image";
import r from "../public/assets/minuteman_II.jpg";
import { truncate } from "./ui/Truncate";
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


const getIcon = (platform: string) => {
    switch (platform) {
        case "web":
            return (`folder`);
        case "mobile":
            return (`folder`);
        case "hardware":
            return (`circuit`);
        case "network":
            return (`globe`);
        case "desktop":
            return (`desktop`);
        case "package":
            return (`package`);
        default:
            return (`folder`);
    }
}



const CardDescription = styled.div`
    height: 96px;
    ${truncate(225)}
    
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
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

`

const CardBadge = styled.div`
    border-radius: 50%;
    position: absolute;
    transform: translateY(-75%);
    right: 17px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
`;


export const ProjectCard = ({ title, projectType, buildStatusLink, tags, }: any) => {
    const firstTag = tags && tags[0];
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
            <div style={{ padding: "16px", display: "flex", height:"175px", flexDirection: "column", "justifyContent": "space-between" }}>
                <CardDescription>

                    <CardTitle>
                        <Icon height={24} width={24} name={getIcon("package")} />
                        minuteman  <span>v.2.1.0</span>
                    </CardTitle>
                    <CardSummary>
                        CLI tool for wiping secure hard drive erasure using D.O.D. 5220-m method
                    </CardSummary>

                </CardDescription>
                <CardActionBar>
                    <CardActionItem>
                        <Icon height={24} width={24} name="link" />
                    </CardActionItem>
                    <CardActionItem>
                        <Icon height={24} width={24} name="snapcraft" />
                    </CardActionItem>
                    <CardActionItem>
                        <Icon height={24} width={24} name="github" />
                    </CardActionItem>
                    <CardActionItem>
                        <Icon height={24} width={24} name="cargo" />
                    </CardActionItem>
                    <CardActionItem right>
                        <div style={{ verticalAlign: "middle", display: "inline-flex", }}>
                            <img
                                title="build status"
                                alt="build status"
                                src="https://github.com/rust-lang/rust/workflows/CI/badge.svg"
                            />
                        </div>
                    </CardActionItem>
                </CardActionBar>
            </div>
        </ProjectCardContainer>
    );
}