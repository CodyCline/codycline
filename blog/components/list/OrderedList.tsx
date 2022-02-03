import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";


export const OrderedList = styled.ol`
    list-style: none;
    counter-reset: list-counter;
    --size: 20px;
    padding: 0;
    margin: 0;
    
    ${ListItem} {
    border: 1px solid green;
        margin: 0;
        counter-increment: list-counter;
        position: relative;
    }

    & ${ListItem}::before {
        content: counter(list-counter);
        color: var(--color-text-secondary);
        font-weight: bold;
        position: absolute;
        left: calc(-1 * var(--size) - 8px);
        width: var(--size);
        top: calc(20px -)
        height: var(--size);
        border-radius: 50%;
        line-height: none;
        text-align: center;
        border: 2px solid var(--color-text-secondary);
    }
`


