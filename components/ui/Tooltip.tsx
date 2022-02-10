import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import ReactToolTip from "react-tooltip";
import styled from "styled-components";
import { useOnClickOutside } from "../../utils/use-on-outside";
const Portal: any = dynamic((): any => import("../ui/Portal"), {
    ssr: false,
});


export const Tooltip = styled(ReactToolTip)`
    background-color: white !important;
    color: black !important;
    box-shadow: 0px 2px 20px lightgray;
    &:after {
        border-top-color: white !important;
    }
`;


export const SnackbarContainer = styled.span`
    background: var(--color-fg-primary);
    bottom: 1em;
    left: 1em;
    padding: .5em 1rem;
    border-radius: .5em;
    border: 1px solid var(--color-border);


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