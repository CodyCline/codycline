import Link from "next/link";
import styled from "styled-components";
import { Icon } from "./Icon";


const TagContainer: any = styled.button`
    font-size: var(--font-size-sm);
    outline: none;
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    min-width: 2rem;
    padding: 0.333rem 0.5rem;
    border: 2px solid var(--color-border);
    min-height: 1.5rem;
    max-width: 100%;
    border-radius: .725rem;
    display: inline-flex;
    align-items: center;
    transition: .2s ease-in-out;
    cursor: ${(props:any) => props.link && "pointer"};
    &:hover {
        border-color: white;
        background: var(--color-border);
    }

`

const TagText = styled.span`
    margin-left: calc(var(--font-size-sm) / 2);
`


export const IconTag = ({ children, link, icon }: any) => {
    return (
        link ?
            <Link href={link}>
                <TagContainer link={link}>
                    {icon && <Icon height={18} width={18} name={icon.toLowerCase()} />}
                    <TagText>
                        {children && children.toLowerCase()}
                    </TagText>
                </TagContainer>
            </Link>
            :
            <TagContainer>
                {icon && <Icon height={18} width={18} name={icon.toLowerCase()} />}
                <TagText>
                    {children && children.toLowerCase()}
                </TagText>
            </TagContainer>
    )
}


export const LinkTag = ({ link, icon }: any) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <TagContainer link={link}>
            <Icon name="link" height={18} width={18}/>
        </TagContainer>
    </a>
)