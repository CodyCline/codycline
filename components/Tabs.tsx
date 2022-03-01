import React from "react";
import styled, { css } from "styled-components";
import useSound from "use-sound";
import { fadeInAnimation } from "./styles/Animations";
import { Icon } from "./ui/Icon";
import page from "../public/assets/sfx/theme_light.mp3";


const TabsContainer = styled.section`
    margin: 36px 0;
`;


const TabItem: any = styled.li`
    cursor: pointer;
    padding: 10px 25px;
    background: var(--prism-background);


    border-top: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    border-left: 0;
    border-bottom: 2px solid transparent;

    ${(props: any) => props.isActive && css`
        color: var(--color-text-secondary);
        border-bottom: 2px solid var(--color-text-secondary);
        background: var(--color-fg-primary);
        animation: ${fadeInAnimation} var(--transition-seconds-primary);

    `}

    &:first-child {
        border-top-left-radius: 5px;
        border-left: 1px solid var(--color-border);
    }
    &:last-child {
        border-top-right-radius: 5px;
    }
    
`;

const TabsBody = styled.div`
    background: var(--prism-background);
    border: 1px solid var(--color-border);
    min-height: 30vh;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px 25px;
    font-size: 20px;
`


const TabsBodyAnimation = styled.div`
    animation: ${fadeInAnimation} var(--transition-seconds-primary) linear;
`

const TabsHeader = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const TabTitle = styled.h4`
    margin-block-start: 0;
    margin-block-end: 0;
`;

const IconContainer = styled.span`
    margin-right: 1em;
`

export const Tab = (props: any) => {
    return (
        <TabItem key={props.isActive} {...props} onClick={props.onClick} isActive={props.isActive}>
            <TabTitle key={props.isActive}>
                {props.icon &&
                    <IconContainer>
                        <Icon name={props.icon} width={20} height={20}/>
                    </IconContainer>
                }
                {props.title}
            </TabTitle>
        </TabItem>
    )
}

export const Tabs = ({ children }: any) => {
    const [playPageSound] = useSound(page, {
		soundEnabled: false,
	});
    const [activeTab, setActiveTab] = React.useState<number>(0);
    return (
        <TabsContainer>
            <TabsHeader>
                {React.Children.map(children, (child: any, idx: number) => (
                    <Tab
                        key={idx}
                        title={child?.props?.title}
                        icon={child?.props?.icon}
                        onClick={() => {
                            setActiveTab(idx);
                            playPageSound({ forceSoundEnabled: document.documentElement.dataset.volume === "on" });
                        }}
                        isActive={activeTab == idx}
                    />
                ))}
            </TabsHeader>
            <TabsBody key={activeTab}>
                <TabsBodyAnimation key={activeTab}>
                    {React.Children.count(children) <= 1 
                        ? children.props.children 
                        : children[activeTab].props?.children
                    }
                </TabsBodyAnimation>
            </TabsBody>
        </TabsContainer>
    )
}