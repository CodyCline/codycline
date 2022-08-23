import React from "react";
import styled from "styled-components";
import { Paragraph } from "../ui/Typography";
import { ListItem } from "./ListItem";


export const OrdersedList = styled.ol`
    counter-reset: list-counter;
    --size: 20px;
    --border-width: 1px;
    margin: 0;
    padding: 0;
`

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
        &:not(:last-child) p {
            margin-bottom: 0;
        }
        
    }

    & ${ListItem}::before {
        content: counter(list-counter) ".";
        margin-right: .5em;
        color: var(--color-text-secondary);
        font-weight: bold;
    }
`



