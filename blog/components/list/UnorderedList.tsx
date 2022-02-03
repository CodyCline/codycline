import styled from "styled-components";
import { ListItem } from "./ListItem";



export const UnorderedList = styled.ul`
    list-style: none;
    font-size: inherit;
    --size: 2rem;

    ${ListItem}::before {
        content: "*";
        color: red; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
    }
`

