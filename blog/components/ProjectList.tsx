import styled from "styled-components";
import { Icon } from "./ui/Icon";
import { IconTag, LinkTag } from "./ui/Tag";
import Image from "next/image";
import { truncate } from "./ui/Truncate";
import r from "../public/assets/llvm.jpg";
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
    height: 275px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--font-size-default);
    height: 96px;
`;

const CardTitle = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: .5em;

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
    transform: translateY(-100%);
    right: 17px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
`;



export const ProjectCard = ({title, projectType, buildStatusLink, }) => {
    return (
        <ProjectCardContainer>
            <div style={{ margin: "0 auto", borderRadius: "8px", border: "1px solid green", height: "14vh", width: "100%", position: `relative` }}>
                <Image objectFit="cover" layout="fill" src={r} />

            </div>
            <CardDescription>
                <CardBadge>
                    <Icon height={36} width={36} name="cuda" />
                </CardBadge>
                <CardTitle>
                    <Icon height={24} width={24} name="package" />
                    react-paypal
                    <span style={{ color: "#CCC" }}> v.223</span>
                </CardTitle>
                <CardSummary>
                    A slideshow component for cycling through elements—images or slides of text—like a carousel. Nested carousels are not supported.


                </CardSummary>
                <CardActionBar>
                    <CardActionItem>
                        <Icon height={24} width={24} name="link" />


                    </CardActionItem>
                    <CardActionItem>
                        <Icon height={24} width={24} name="snapcraft" />

                    </CardActionItem>
                    <CardActionItem>
                        <Icon height={24} width={24} name="appstore" />

                    </CardActionItem>
                    {buildStatusLink &&
                        <CardActionItem right>
                            <div style={{ verticalAlign: "middle", display: "inline-flex", }}>
                                <img
                                    title="build status"
                                    alt="build status"
                                    src="https://github.com/rust-lang/rust/workflows/CI/badge.svg"
                                />
                            </div>
                        </CardActionItem>
                    }
                </CardActionBar>
            </CardDescription>
        </ProjectCardContainer>
    );
}