import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";


export const OrderedList = styled.ol`
    list-style: none;
    padding-left: 40px;
    counter-reset: list-counter;
    font-size: 18px;
    --size: 2rem;
    
    ${ListItem} {
        margin: 0 0 2rem 0;
        counter-increment: list-counter;
        position: relative;
    }

    & ${ListItem}::before {
        content: counter(list-counter);
        color: var(--color-text-primary);
        font-weight: bold;
        position: absolute;
        left: calc(-1 * var(--size) - 8px);
        line-height: var(--size);
        width: var(--size);
        height: var(--size);
        top: calc(-1 * var(--size) / 8);
        border-radius: 50%;
        text-align: center;
        border: 2px solid var(--color-text-primary);
    }
`


