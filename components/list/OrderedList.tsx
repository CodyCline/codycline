import React from "react";
import styled from "styled-components";
import { Paragraph } from "../ui/Typography";
import { ListItem } from "./ListItem";


export const OrderedList = styled.ol`
    list-style: none;
    counter-reset: list-counter;
    --size: 20px;
    --border-width: 1px;
    margin: 0;
    padding: 0;
    
    ${ListItem} {
        counter-increment: list-counter;
        display: flex;
        align-items: baseline;
        
    }

    & ${ListItem}::before {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: .5em;

        content: counter(list-counter);
        color: var(--color-text-secondary);
        font-weight: bold;
        width: var(--size); 
        height: var(--size);
        border-radius: 50%;
        border: var(--border-width) solid var(--color-text-secondary);
    }
`


