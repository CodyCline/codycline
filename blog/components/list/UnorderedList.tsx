import styled from "styled-components";
import { ListItem } from "./ListItem";



export const UnorderedList = styled.ul`
    list-style: none;
    padding-left: 40px;
    counter-reset: list-counter;
    font-size: inherit;
    --size: 2rem;

    ${ListItem} {

    }
`

