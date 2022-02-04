import dynamic from "next/dynamic";
import styled from "styled-components";
import { Icon } from "./ui/Icon";
import { useRef } from "react";
import { truncate } from "./styles/Truncate";
enum AdmonitionType {
    NOTE = "note",
    TIP = "tip",
    INFO = "info",
    EXPERIMENTAL = "experimental",
    CAUTION = "caution",
    DANGER = "danger",
    FATAL = "fatal",
}


const admonitionIcon = (type: AdmonitionType) => {
    switch (type) {
        case AdmonitionType.NOTE: return `pinned`;
        case AdmonitionType.TIP: return `lightbulb`;
        case AdmonitionType.INFO: return `info`;
        case AdmonitionType.EXPERIMENTAL: return `beaker`;
        case AdmonitionType.CAUTION: return `warning`;
        case AdmonitionType.DANGER: return `fire`;
        case AdmonitionType.FATAL: return `skull`;
        default: return `pinned`;
    }
}


const admonitionIconFill = (type: AdmonitionType) => {
    switch (type) {
        case AdmonitionType.NOTE: return `var(--color-text-default)`;
        case AdmonitionType.TIP: return `var(--color-greentext)`;
        case AdmonitionType.INFO: return `var(--color-blue)`;
        case AdmonitionType.EXPERIMENTAL: return `var(--color-yellow)`;
        case AdmonitionType.CAUTION: return `var(--color-orange)`;
        case AdmonitionType.DANGER: return `var(--color-red)`;
        case AdmonitionType.FATAL: return `var(--color-dark-purple)`;
        default: return `var(--color-text-primary)`;
    }
}

const AdmonitionTitle = styled.h3`
    margin-bottom: .5rem;
    ${truncate(1, "vertical")}
`

const AdmonitionIcon = styled.span`
    margin-right: 1rem;

`;

const AdmonitionText = styled.span`
    margin-left: 3rem;
`

const AdmonitionBody:any = styled.article`
    display: flex; 
    flex-direction: column;
    margin: 36px 0;
    justify-content: center;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    padding: 1em;
    transition: .25s ease-in-out;
    ${(props: any) => {
        const type: AdmonitionType = props.type;
        switch (type) {
            case AdmonitionType.NOTE: //Normal black or white background
                return `background: var(--color-fg-aux);`;
            case AdmonitionType.TIP: //Green
                return `
                    background: var(--color-bg-admonition-tip);
                    border-color: var(--color-greentext);
                    & ${AdmonitionTitle} {
                        color: var(--color-greentext);
                    }
                `
            case AdmonitionType.INFO: //Blue
                return `
                    background: var(--color-bg-admonition-info);
                    border-color: var(--color-blue);
                    & ${AdmonitionTitle} {
                        color: var(--color-blue);
                    }
                `
            case AdmonitionType.EXPERIMENTAL: //Yellow 
                return `
                    background: var(--color-bg-admonition-experimental);
                    border-color: var(--color-yellow);
                    & ${AdmonitionTitle} {
                        color: var(--color-yellow);
                    }
                `;
            case AdmonitionType.CAUTION: //orange
                return `
                    background: var(--color-bg-admonition-caution);
                    border-color: var(--color-orange);
                    & ${AdmonitionTitle} {
                        color: var(--color-orange);
                    }
                `;
            case AdmonitionType.DANGER: //Red
                return `
                    background: var(--color-bg-admonition-danger);
                    border-color: var(--color-red);
                    & ${AdmonitionTitle} {
                        color: var(--color-red);
                    }
                `
            case AdmonitionType.FATAL: //Strongest of warnings will be a dark purple 
                return `
                    background: var(--color-bg-admonition-fatal);
                    border-color: var(--color-dark-purple);
                    & ${AdmonitionTitle} {
                        color: var(--color-dark-purple);
                    }
                `
            default: 
                return `
                    background: var(--color-fg-aux);
                `
        }
    }}
`



 export const Admonition = ({ children, type, title }: any) => {
    
    return (
        <AdmonitionBody type={type}>
            <AdmonitionTitle>
                <AdmonitionIcon>
                    <Icon fill={admonitionIconFill(type)}  height={32} width={32} name={admonitionIcon(type as AdmonitionType)}/>
                </AdmonitionIcon>
                {title}
            </AdmonitionTitle>
            <AdmonitionText>{children}</AdmonitionText>
        </AdmonitionBody>
    )
}

export default Admonition