import { css } from "styled-components";

//Attaches a scrollbar style to a styled component 
export function scrollbar () {
    return css`
        &::-webkit-scrollbar-track {
            background: inherit;
            border-bottom-left-radius: var(--font-size-sm);
            border-bottom-right-radius: var(--font-size-sm);
            border-left: 1px solid var(--color-border);
            border-right: 1px solid var(--color-border);

            border-bottom: 0;
            z-index: 999;
        }

        &::-webkit-scrollbar {
            height: 10px;
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