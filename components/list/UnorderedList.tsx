import styled from "styled-components";
import { ListItem } from "./ListItem";



export const UnorderedList = styled.ul`
    list-style: none;
    --size: 2rem;
    --border-width: 1px;

    padding-left: calc(var(--size) - var(--border-width));

    ${ListItem} {
        position: relative;
    }

    ${ListItem}::before {
        content: "(!)";
        position: absolute;
        color: var(--color-text-secondary); /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        width: var(--size); 
        height: var(--size);
        left: calc(-1 * var(--size));
        text-align: center;
    }
`

