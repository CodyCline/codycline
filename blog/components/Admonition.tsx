import dynamic from "next/dynamic";
import styled from "styled-components";
import {lighten, cssVar, darken} from "polished";
import { Icon } from "./ui/Icon";
import { useRef } from "react";
// const polished: any = dynamic((): any => import("polished"), {
//     ssr: false,
// });
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
        case AdmonitionType.NOTE: return `var(--color-text-primary)`;
        case AdmonitionType.TIP: return `var(--color-greentext)`;
        case AdmonitionType.INFO: return `info`;
        case AdmonitionType.EXPERIMENTAL: return `beaker`;
        case AdmonitionType.CAUTION: return `warning`;
        case AdmonitionType.DANGER: return `fire`;
        case AdmonitionType.FATAL: return `skull`;
        default: return `pinned`;
    }
}

const AdmonitionTitle = styled.h3`
    padding-bottom: .5rem;
`

const AdmonitionIcon = styled.span``

const AdmonitionBody:any = styled.article`
    --color-orange: orange;
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
                return `
                    background: var(--color-fg-aux);
                `;
            case AdmonitionType.TIP: //Green
                return `
                    background: ${
                        darken(.3, cssVar("--color-fg-aux") as string)
                    };
                    border-color: var(--color-greentext);
                    & ${AdmonitionTitle} {
                        color: var(--color-greentext);
                    }
                `
            case AdmonitionType.INFO: //Blue
                return `
                    
                `
            case AdmonitionType.EXPERIMENTAL: //Yellow 
                return `beaker`;
            case AdmonitionType.CAUTION: //orange
                return `warning`;
            case AdmonitionType.DANGER: //Red
                return `
                
                `
            case AdmonitionType.FATAL: //Strongest of warnings will be a dark purple 
                return `
                `
            default: 
                return `
                    background: var(--color-fg-aux);
                `
        }
    }}
`



 const Admonition = ({ children, type, title }: any) => {
    
    return (
        <AdmonitionBody type={type}>
            <AdmonitionTitle>
                <AdmonitionIcon>
                    <Icon fill={admonitionIconFill(type)}  height={32} width={32} name={admonitionIcon(type as AdmonitionType)}/>
                </AdmonitionIcon>
                {title}
            </AdmonitionTitle>
            {children}
        </AdmonitionBody>
    )
}

export default Admonition