import styled from "styled-components";
import { media } from "./ui/Media";
import { Icon } from "./ui/Icon";
import Link from "next/link";
import { complement, cssVar, invert } from "polished";

export const SnippetList = styled.section`
    margin: auto;
    width: 80%;
`


const SnippetContainer = styled.section`
    display: flex;
    position: relative;
    transition: .25s ease-in-out;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 1em 0;
    border-radius: var(--font-size-sm);
    ${media.phone`justify-content: flex-start; flex-direction: column; align-items: start;`}
    border: 1px solid var(--color-border);
    &:hover {
        background: var(--color-fg-primary);

    }
`;

const SnippetTitle = styled.p`
    padding-left: 1em;
    color: var(--color-text-secondary);
    font-weight: bold;
    &:hover {
        text-decoration: dotted underline;
        color: ${invert(cssVar("--color-fg-primary", "black")  as string)};
    }
    
`

const SnippetIcon = styled.div`
    display: inline-flex;
    align-items: center;
`;


const SnippetDescription = styled.div``;

const SnippetDate = styled.div`
    color: gray;
`;

export const Snippet = ({ tags, title, description, permaLink, date }: any) => {
    const firstTag = tags && tags[0];
    return (
        <SnippetContainer>
            <SnippetIcon>
                <Icon height={24} width={24} name={tags && firstTag} />
                <SnippetTitle>
                    <Link href={permaLink}>{title}</Link>
                </SnippetTitle>
            </SnippetIcon>

            <SnippetDescription>
                <Link href={permaLink}>
                    {description}
                </Link>
            </SnippetDescription>
            <SnippetDate>2020.12.24</SnippetDate>
        </SnippetContainer>
    );
};