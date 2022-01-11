import styled from "styled-components";
import { Paragraph } from "./Typography";

const BlockQuoteWrapper = styled.blockquote`
    color: var(--color-greentext);
    margin: 36px 0 36px 12px;
    ${Paragraph}::before {
        content: ">";
        position: absolute;
        margin-left: -12px;
    }
`

export const Quote = ({children}:any) => {
    return <BlockQuoteWrapper>{children}</BlockQuoteWrapper>
}