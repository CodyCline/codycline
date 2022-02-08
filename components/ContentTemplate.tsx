import styled from "styled-components";
import { media } from "./styles/Media";
import { Icon } from "./ui/Icon";


const TitleWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    padding-top: 10vh;
`

const Header = styled.h1`
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    flex-direction: row;
`

const IconWrapper = styled.span`
    margin-right: 1rem;
    display: inline-flex;
`

export const ContentTitle = ({header, children, icon}:any) => (
    <TitleWrapper>
        <Header>
            {icon && <IconWrapper><Icon height={36} width={36} name={icon || `file`}/></IconWrapper>} {header}
        </Header>
        {children}
    </TitleWrapper>
)

export const ContentBodyWrapper = styled.article`
    height: 100%;
    margin-top: 2em;
    margin-left: auto;
    padding: 1em;
    margin-right: auto;
    max-width: 70%;
    ${media.giant`max-width: 70%`}
    ${media.desktop`max-width: 75%`}
    ${media.tablet`max-width: 80%`}
    ${media.phone`max-width: 92.5%`}
`

//Image for a content wrapper
export const ContentHeader = styled.h1`
    font-size: var(--font-size-lg);
    color: var(--color-text-primary);
    margin: 2rem 0;
`

export const ContentTags = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
    display: flex;
`

export const ContentHero = styled.img`
    margin: auto;
    margin-top: 2rem;
    height: 30vh;
    width: 80%;
    object-fit: cover;

`