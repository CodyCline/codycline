import {useState} from "react";

import styled from "styled-components"
import { Icon } from "./ui/Icon";

const SpoilerContainer = styled.section`
    transition: 1s ease-in-out;
    margin: 36px 0;
    font-size: 20px;

`

const SpoilerHeader:any = styled.ul`
    color: var(--color-text-default);
    background: var(--color-fg-aux);
    border: 1px solid var(--color-border);
    display: flex;
    ${(props:any) => 
        props.toggled
        ? `border-top-left-radius: 5px; border-top-right-radius: 5px;`
        : `border-radius: 5px;`
    }

    flex-direction: row;
    justify-content: space-between;
    font-size: var(--font-size-md);
    align-items: center;
    padding: 10px 25px 10px 25px;
    list-style: none;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
`;
const SpoilerHeaderItem = styled.li`
`;

const SpoilerBody = styled.div`
    padding: 25px;
    background: var(--prism-background);
    border-right: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: inherit;
    height: auto;
`;


export const Spoiler = ({children, title} : any) => {
    const [toggled, toggleSpoiler] = useState<boolean>(false);
    const onToggle = () => {
        toggleSpoiler(!toggled);
    }
    return (
        <SpoilerContainer>
            <SpoilerHeader onClick={onToggle} toggled={toggled}>
                <SpoilerHeaderItem>{title}</SpoilerHeaderItem>
                <SpoilerHeaderItem>
                    <Icon width={24} height={24} name={toggled? `chevron-down`: `chevron-up`}/>
                </SpoilerHeaderItem>
            </SpoilerHeader>
            {toggled &&
                <SpoilerBody>
                    {children}
                </SpoilerBody>
                
            }
        </SpoilerContainer>
    )
}