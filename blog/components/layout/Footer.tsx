import Link from "next/link";
import styled from "styled-components";


export const Footer = styled.footer`
    border-top: 1px solid var(--color-border);
    width: 100%;
    height: 52px;
    margin-top: 52px;
`

export const FooterItems = styled.ul`
    display: flex;
height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0 2rem;
`

export const FooterItem = styled.li``;


export const FooterLink = ({children, href}:any) => {
    return (
        <Link passHref={true} href={href}>
            <a style={{paddingLeft: `1rem`}} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </Link>
    )
}
