import styled from "styled-components";
import { ListItem } from "./ListItem";



export const UnorderedList = styled.ul`
    list-style: none;
    --size: 20px;
    --border-width: 1px;

    margin: 0;
    padding: 0;

    ${ListItem} {
        display: flex;
        align-items: baseline;        
    }

    ${ListItem}::before {
        content: "*";
        margin-right: .5em;
        color: var(--color-text-secondary); /* Change the color */
        font-weight: bold; /* If you want it to be bold */
    }
`

