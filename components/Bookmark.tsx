import styled from "styled-components";
import { hostToIconName } from "../utils/hostname-icon";
import { isValidUrl } from "../utils/valid-url";
import { truncate } from "./styles/Truncate";
import { Icon } from "./ui/Icon";

const BookmarkContainer = styled.div`
display: flex; 
flex-direction: column;
margin: 36px 0;
justify-content: center;
border: 1px solid var(--color-border);
border-radius: 5px;
background: var(--color-fg-aux);
padding: 1em;
transition: var(--transition-seconds-default) ease-in-out;
&:hover {
    border: 1px solid var(--color-link);
    background: var(--color-link-hover);
}
`

const BookmarkIcon = styled.span`
margin-right: .33rem;
`

const BookmarkText = styled.span`
    color: #CCC;
    ${truncate(1, "vertical")}
`

export const Bookmark = ({ href }: any) => {
const url = isValidUrl(href) ? new URL(href) : null;
if (url) {
    return (
        <a title={`Visit: ${href}`} aria-label={`Visit: ${href}`} href={href} target="_blank" rel="noopener noreferrer">
            <BookmarkContainer title={`Visit: ${href}`}>
                <h3>
                    <BookmarkIcon>
                        <Icon title={`Visit: ${href}`} name={hostToIconName(url)} height={32} width={32} />
                    </BookmarkIcon>
                    {url.hostname}
                </h3>
                <BookmarkText>{href}</BookmarkText>
            </BookmarkContainer>
        </a>
    )
}
return (
    <a title={`Visit: ${href}`} aria-label={`Visit: ${href}`} href={href} target="_blank" rel="noopener noreferrer">
        <BookmarkContainer title={`Visit: ${href}`}>
            <h3>View Website</h3>
            <BookmarkText>{href}</BookmarkText>
        </BookmarkContainer>
    </a>
)
}