import styled from "styled-components";
import { media } from "./styles/Media";
import { Paragraph } from "./ui/Typography";

const BlockQuoteWrapper = styled.blockquote`
    color: var(--color-greentext);
    background: var(--color-bg-greentext);
    border-radius: 5px;
    padding: 25px;
    margin: 36px 0;
    border: 1px solid var(--color-border-greentext);
    
    ${Paragraph} {
        white-space: pre-wrap;
        ${media.phone`white-space: normal`}
        padding-left: 12px;
        margin: 0;
    }
    & ${Paragraph}::before {
        content: ">";
        margin-left: -12px;
    }
    
    
`

export const Quote = ({children}:any) => (
    <BlockQuoteWrapper>{children}</BlockQuoteWrapper>
);