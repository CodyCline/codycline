import dynamic from "next/dynamic";
import styled, { css } from "styled-components";
import { slideInBottom, slideInRight } from "../styles/Animations";
const Portal: any = dynamic((): any => import("../ui/Portal"), {
    ssr: false,
});




export const SnackbarContainer:any = styled.span`
    background: var(--color-fg-primary);
    bottom: 1em;
    left: 1em;
    padding: .5em 1rem;
    border-radius: .5em;
    border: 1px solid var(--color-border);

    animation: ${slideInBottom} var(--transition-seconds-fast) linear;
    z-index: 1400;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;



export const Snackbar = ({children, toggled}:any) => {
    return (
        <Portal>
            {toggled &&
                <SnackbarContainer>
                    {children}
                </SnackbarContainer>
            }
        </Portal>
    )
}