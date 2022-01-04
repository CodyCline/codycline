import dynamic from "next/dynamic";
import React from "react";
import { NavItem, NavLink } from "./Navbar";
import { NavBar } from "./Navbar";
import { MobileNav } from "./Mobilenav";

const ThemeToggle: any = dynamic((): any => import("../ThemeToggle"), {
    ssr: false,
});

export const Layout = ({children}:any) => {
    return (
        <React.Fragment>
            <NavBar>
                <NavLink href="/">CC</NavLink>
                <NavLink href="/blog">Blog</NavLink>

                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/snippets">Snippets</NavLink>
                <NavItem right>
                    <ThemeToggle/>
                </NavItem>
                <NavItem>
                    <MobileNav/>
                </NavItem>
            </NavBar>
        {children}
        </React.Fragment>
    )
}