import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { Icon } from "../ui/Icon";
import dynamic from "next/dynamic";
import { NavItem, NavLink } from "./Navbar";
import { useOnClickOutside } from "../../utils/use-on-outside";
import ThemeToggle from "../ThemeToggle";
import VolumeToggle from "../VolumeToggle";
import MotionToggle from "../MotionToggle";
import { slideInRight, slideOutRight } from "../styles/Animations";

const Portal: any = dynamic((): any => import("../ui/Portal"), {
    ssr: false,
});


export const MobileNav = () => {
    const ref = useRef<any>(null);
    const [toggled, setToggled] = React.useState<boolean>(false);
    useOnClickOutside(ref, () => setToggled(false));

    function toggle() {
        setToggled(!toggled)
    }

    return (
        <React.Fragment>
            <SideNavButton onClick={toggle}>
                <Icon name={toggled ? "close" : "three-bars"} height={36} width={36} />
            </SideNavButton>
            <Portal>
                {toggled &&
                    <ModalContainer key={toggled} ref={ref}>
                        <SideNav>

                            <SideNavLinks>
                                <NavLink href="/">
                                    <h2>Home</h2>
                                </NavLink>
                                <NavLink href="/articles">
                                    <h2>Articles</h2>

                                </NavLink>
                                <NavLink href="/projects">
                                    <h2>Projects</h2>

                                </NavLink>
                                <NavLink href="/snippets">
                                    <h2>Snippets</h2>
                                </NavLink>
                            </SideNavLinks>
                            <SideNavControls>
                                <NavItem>
                                    <ThemeToggle />
                                </NavItem>
                                <NavItem>
                                    <VolumeToggle />
                                </NavItem>
                                <NavItem>
                                    <MotionToggle />
                                </NavItem>
                            </SideNavControls>
                        </SideNav>
                    </ModalContainer>
                }
            </Portal>
        </React.Fragment>
    );
};



const ModalContainer:any = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 16px 16px 16px 32px;
    width: 60vw;
    height: 100%;
    z-index: 999;
    background: var(--color-fg-primary);
    animation: ${slideInRight} var(--transition-seconds-default);
`;


const SideNavLinks = styled.div`

`

const SideNavControls = styled.div`
    display: flex;
    flex-direction: row;
`

const SideNav = styled.nav`
    margin: 1em 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
`

const SideNavButton = styled.button`
    padding: 4px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 99;
`
