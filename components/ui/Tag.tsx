import Link from "next/link";
import styled from "styled-components";
import { Icon } from "./Icon";

import hoverSound from "../../public/assets/sfx/hover.mp3";
import useSound from "use-sound";

const TagContainer: any = styled.button`
    font-size: var(--font-size-sm);
    outline: none;
    color: var(--color-text-default);
    background: var(--color-bg-primary);
    min-width: 2rem;
    padding: 0.333rem 0.5rem;
    margin: 0.333rem .33rem .33rem 0;
    border: 1px solid var(--color-border);
    min-height: 1.5rem;
    max-width: 100%;
    border-radius: .725rem;
    display: inline-flex;
    align-items: center;
    transition: var(--transition-seconds-default) ease-in-out;
    cursor: ${(props:any) => props.link && "pointer"};
    &:hover {
        border-color: white;
        background: var(--color-border);
    }

`

const TagText:any = styled.span`
    ${(props:any) => props.icon && "margin-left: calc(var(--font-size-sm) / 2);"}
`


export const IconTag = ({ children, link, icon }: any) => {
    const [play, { stop }] = useSound(hoverSound, { soundEnabled: false });
    return (
        <>
            {link ?
                <Link href={link}>
                    <TagContainer onMouseEnter={() => play({forceSoundEnabled: document.documentElement.dataset.volume === "on"})} onMouseLeave={() => stop()} link={link}>
                        {icon && <Icon role="img" height={18} width={18} name={icon.toLowerCase()} />}
                        <TagText icon={icon}>
                            {children}
                        </TagText>
                    </TagContainer>
                </Link>
                :
                <TagContainer onMouseEnter={() => play({forceSoundEnabled: document.documentElement.dataset.volume === "on"})}>
                    {icon && <Icon role="img" height={18} width={18} name={icon.toLowerCase()} />}
                    <TagText icon={icon}>
                        {children}
                    </TagText>
                </TagContainer>
            }
        </>
    )
}


export const LinkTag = ({ link, icon }: any) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <TagContainer link={link}>
            <Icon name="link" height={18} width={18}/>
        </TagContainer>
    </a>
)