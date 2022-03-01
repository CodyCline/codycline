import {useState} from "react";
import styled, { css } from "styled-components"
import { fadeInAnimation, rotateBackwards, rotateForwards, rotateInCenter, slideInBottom, slideInLeft, slideInRight } from "./styles/Animations";
import { truncate } from "./styles/Truncate";
import { Icon } from "./ui/Icon";
import toggleSound from "../public/assets/sfx/theme_light.mp3";
import useSound from "use-sound";

const SpoilerContainer = styled.section`
    transition: var(--transition-seconds-normal) ease-in-out;
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
    ${truncate(1, "vertical")}
`;

const SpoilerBody:any = styled.div`
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

const SpoilerAnimation:any = styled.div`
    animation: ${fadeInAnimation} var(--transition-seconds-default) forwards;
`

const IconAnimation:any = styled.div`

    ${(props:any) => props.toggled 
        ? css`animation: ${rotateBackwards} var(--transition-seconds-default) forwards;`
        : css`animation: ${rotateForwards} var(--transition-seconds-default) forwards;`}
`

export const Spoiler = ({children, title} : any) => {
    const [toggled, toggleSpoiler] = useState<boolean>(false);
    const [playToggleSound] = useSound(toggleSound, {
		soundEnabled: false,
	});
    const onToggle = () => {
        toggleSpoiler(!toggled);
        playToggleSound({ forceSoundEnabled: document.documentElement.dataset.volume === "on" })
    }
    return (
        <SpoilerContainer>
            <SpoilerHeader onClick={onToggle} toggled={toggled}>
                <SpoilerHeaderItem>{title}</SpoilerHeaderItem>
                <SpoilerHeaderItem>
                    <IconAnimation key={toggled} toggled={toggled}>
                        <Icon width={24} height={24} name="chevron-up"/>
                    </IconAnimation>
                </SpoilerHeaderItem>
            </SpoilerHeader>
            <SpoilerAnimation toggled={toggled} key={toggled}>
                {toggled &&
                    <SpoilerBody>
                        {children}
                    </SpoilerBody>
                }
            </SpoilerAnimation>
        </SpoilerContainer>
    )
}