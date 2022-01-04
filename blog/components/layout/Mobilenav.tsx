import React, { createRef, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Icon } from "../ui/Icon";
import dynamic from "next/dynamic";
import { NavItem, NavLink } from "./Navbar";
import { useOnClickOutside } from "../../utils/useOnOutside";

const Portal: any = dynamic((): any => import("../ui/Portal"), {
    ssr: false,
});


export const MobileNav = () => {
    const ref = useRef<any>(null);
    const [toggled, setToggled] = React.useState<boolean>(false);
    useOnClickOutside(ref, () => setToggled(false));

    function toggle() {
        setToggled(!toggled);
    }
    
    return (
        <React.Fragment>
            <SideNavButton onClick={toggle}>
                <Icon name={toggled? "close": "three-bars"} height={36} width={36} />
            </SideNavButton>
            <Portal>
                {toggled &&
                    <SideNav ref={ref}>
                        <NavLink href="/">
                            <h2>Hello</h2>
                        </NavLink>
                        <button>Hello</button>

                    </SideNav>
                }
            </Portal>
        </React.Fragment>
    );
};



const SideNav = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 70%;
    height: 100%;
    background: var(--color-fg-primary);

`

const SideNavButton = styled.button`
 padding: 4px;
 background: none;
 outline: none;
 border: none;
 cursor: pointer;
 z-index: 99;
`
