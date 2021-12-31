import {useState} from "react";

import styled from "styled-components"
import { Icon } from "./ui/Icon";

const SpoilerContainer = styled.section`
    transition: 1s ease-in-out;
`

const SpoilerHeader:any = styled.ul`
        color: var(--color-text-primary);
        background: var(--color-fg-primary);
        border: 1px solid var(--color-border);
    display: flex;
    ${(props:any) => 
        props.toggled
        ? `border-top-left-radius: 10px; border-top-right-radius: 10px;`
        : `border-radius: 10px;`
    }

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px 10px 25px;
    list-style: none;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
`;
const SpoilerHeaderItem = styled.li`


`;
const SpoilerIcon = styled(Icon)`

`

const SpoilerBody = styled.div`
    padding: 25px;
    background: t("bg");
    border-right: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: inherit;
    height: auto;
`;


export const Spoiler = ({children, title} : any) => {
    const [toggled, toggleSpoiler] = useState<boolean>(false);
    const onToggle = () => {
        toggleSpoiler(!toggled);
    }
    return (
        <>
            <SpoilerHeader onClick={onToggle} toggled={toggled}>
                <SpoilerHeaderItem>{title}</SpoilerHeaderItem>
                <SpoilerHeaderItem>
                    <SpoilerIcon width={24} height={24} name={toggled? `chevron-down`: `chevron-up`}/>
                </SpoilerHeaderItem>
            </SpoilerHeader>
            {toggled &&
                <SpoilerBody>
                    {children}
                </SpoilerBody>
                
            }
        </>
    )
}