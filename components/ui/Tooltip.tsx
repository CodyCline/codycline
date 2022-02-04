import ReactToolTip from "react-tooltip";
import styled from "styled-components";


export const Tooltip = styled(ReactToolTip)`
    background-color: white !important;
    color: black !important;
    box-shadow: 0px 2px 20px lightgray;
    &:after {
        border-top-color: white !important;
    }
`;