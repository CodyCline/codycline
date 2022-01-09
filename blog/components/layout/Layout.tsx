import dynamic from "next/dynamic";
import React from "react";
import { NavItem, NavLink } from "./Navbar";
import { NavBar } from "./Navbar";
import { MobileNav } from "./Mobilenav";
import { useMatchMedia } from "../../utils/useMatchMedia";

import { MotionToggle } from "../ThemeToggle";
const ThemeToggle: any = dynamic((): any => import("../ThemeToggle"), {
    ssr: false,
});

export const Layout = ({ children }:any) => {
    const isMobile = useMatchMedia(`(max-width: 750px)`);
    
    return (
        <React.Fragment>
            <NavBar>
                <NavLink href="/">CC</NavLink>
                {isMobile ? 
                    <NavItem right>
                        <MobileNav/>
                    </NavItem>
                    :
                    <React.Fragment>
                        <NavLink href="/articles">Articles</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/snippets">Snippets</NavLink>
                        <NavItem right>
                            <MotionToggle/>
                        </NavItem>
                        <NavItem>
                            <ThemeToggle/>
                        </NavItem>
                    </React.Fragment>
                }
            </NavBar>
            {children}
        </React.Fragment>
    )
}





