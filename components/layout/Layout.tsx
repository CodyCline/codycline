import dynamic from "next/dynamic";
import React from "react";
import { NavItem, NavLink } from "./Navbar";
import { NavBar } from "./Navbar";
import { MobileNav } from "./Mobilenav";
import { useMatchMedia } from "../../utils/use-match-media";

import { MotionToggle } from "../ThemeToggle";
import { Footer, FooterItem, FooterItems, FooterLink } from "./Footer";
import styled from "styled-components";
import { Icon } from "../ui/Icon";
import { siteMetadata } from "../../site-metadata";

const ThemeToggle: any = dynamic((): any => import("../ThemeToggle"), {
    ssr: false,
});

const LayoutWrapper = styled.main`
    min-height: 100%;
`

export const Layout = ({ children }:any) => {
    const isMobile = useMatchMedia(`(max-width: 750px)`);
    const date = new Date()
    return (
        <LayoutWrapper>
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
                            {/* <MotionToggle/> */}
                        </NavItem>
                        <NavItem>
                            <ThemeToggle/>
                        </NavItem>
                    </React.Fragment>
                }
            </NavBar>
            {children}
            <Footer>
                <FooterItems>
                    <FooterItem>{date.getFullYear()}</FooterItem>
                    <FooterItem>
                        <FooterLink href={siteMetadata.social.github}>
                            <Icon width={24} height={24} title="Github Profile" name="github"/>
                        </FooterLink>
                        <FooterLink href={siteMetadata.social.stackOverflow}>
                            <Icon width={24} height={24}  title="Stack Overflow Profile" name="stack-overflow"/>
                        </FooterLink>
                        <FooterLink href="https://google.com">
                            <Icon width={24} height={24}  title="Stack Overflow Profile" name="hackerone"/>
                        </FooterLink>
                    </FooterItem>
                </FooterItems>
            </Footer>
        </LayoutWrapper>
    )
}





