import React from "react";
import styled from "styled-components";
import { Paragraph } from "../ui/Typography";
import { ListItem } from "./ListItem";


export const OrderedList = styled.ol`
    list-style: none;
    counter-reset: list-counter;
    --size: 2rem;
    --border-width: 1px;
    padding-left: calc(var(--size) - var(--border-width));

    ${ListItem} {
        counter-increment: list-counter;
    }

    & ${ListItem}::before {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        content: counter(list-counter);
        color: var(--color-text-secondary);
        font-weight: bold;
        position: absolute;
        left: calc(-1 * var(--size));
        width: var(--size); 
        height: var(--size);
        border-radius: 50%;
        border: var(--border-width) solid var(--color-text-secondary);
    }
`


