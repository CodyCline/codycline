import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";



export const NavBar = styled.nav`
    margin: 0 0 1em 0;
    padding: 0;
    list-style: none;
    text-align: center;
    height: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid var(--color-border);
    z-index: 999;
`

export const NavItem: any = styled.div`
    padding: 0 1rem;
    font-size: var(--font-size-md);
    font-weight: 700;
    ${(props: any) => props.right && `margin-left: auto;`}
`

const _Link:any = styled.a`
    margin-right: 10px;
    color: ${(props:any) => props.active ? `var(--color-text-primary);` : `var(--color-text-default);`}
`

function ActiveLink({ children, href }:any) {
    const router = useRouter();
    const isActive = router.asPath === href;

    const handleClick = (e:React.SyntheticEvent) => {
        e.preventDefault();
        router.push(href);
    }

    return (
        <_Link href={href} onClick={handleClick} active={isActive}>
            {children}
        </_Link>
    )
}


export const NavLink = ({ children, href }: any) => {

    return (
        <NavItem>
            <ActiveLink href={href}>{children}</ActiveLink>
        </NavItem>
    );
}


