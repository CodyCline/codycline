import styled from "styled-components";
import { media } from "./styles/Media";
import { Icon } from "./ui/Icon";
import Link from "next/link";
import { eDateFormat } from "../lib/utils/format-date";
import { truncate } from "./styles/Truncate";
 

export const SnippetList = styled.section`
    margin: 2em auto;
    width: 80%;
    padding-bottom: 10vh;

`


const SnippetContainer = styled.section`
overflow: hidden;
    display: flex;
    position: relative;
    transition: var(--transition-seconds-default) ease-in-out;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 1em 0;
    border-radius: var(--font-size-sm);
    ${media.phone`
        justify-content: flex-start; 
        flex-direction: column; 
        align-items: start;
    `}
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
    }
    
`

const SnippetIcon = styled.div`
    display: inline-flex;
    align-items: center;
`;


const SnippetDescription = styled.div`
    ${truncate(1, "vertical")}

    ${media.phone(truncate(3, "vertical"))}
`;

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
            <SnippetDate title={date.toString()}>{eDateFormat(date)}</SnippetDate>
        </SnippetContainer>
    );
};