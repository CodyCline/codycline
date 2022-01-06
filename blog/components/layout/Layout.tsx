import dynamic from "next/dynamic";
import React from "react";
import { NavItem, NavLink } from "./Navbar";
import { NavBar } from "./Navbar";
import { MobileNav } from "./Mobilenav";
import { useMatchMedia } from "../../utils/useMatchMedia";

const ThemeToggle: any = dynamic((): any => import("../ThemeToggle"), {
    ssr: false,
});

export const Layout = ({ children }:any) => {
    const isMobile = useMatchMedia(`(max-width: 700px)`);
    
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
                        <NavLink href="/blog">Blog</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/snippets">Snippets</NavLink>
                        <NavItem right>
                            <ThemeToggle/>
                        </NavItem>
                    </React.Fragment>
                }
            </NavBar>
            {children}
        </React.Fragment>
    )
}





