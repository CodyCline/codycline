import { css } from "styled-components";

//Attaches a scrollbar style to a styled component 
export function scrollbar () {
    return css`
        &::-webkit-scrollbar-track {
            background: inherit;
            border-top: 1px solid var(--color-border);
            
            z-index: 999;
        }

        &::-webkit-scrollbar {
            height: calc(var(--font-size-sm) / 1.5);
        }
        &::-webkit-scrollbar-thumb {
            background: var(--color-fg-primary);
            width: 10px;
            &:hover {
                background: var(--color-text-primary);
            }
        }
    
    `
}