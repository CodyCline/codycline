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
        margin: 0;
        counter-increment: list-counter;
        position: relative;
        border: 1px solid transparent;
    }

    & ${ListItem}::before {
        margin-bottom: 28px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        font-size: 20px;
        
        content: counter(list-counter);
        color: var(--color-text-secondary);
        font-weight: bold;
        position: absolute;
        left: calc(-1 * var(--size));
        top: 0;
        width: var(--size); 
        height: var(--size);
        line-height: calc(var(--size) - var(--border-width));
        border-radius: 50%;
        text-align: center;
        border: var(--border-width) solid var(--color-text-secondary);
    }
`


