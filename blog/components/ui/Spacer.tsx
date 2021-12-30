import styled from "styled-components";
import { ISpacerProps } from "../../types/components";

export const Spacer = styled.div`
    height: ${(props:ISpacerProps) => props.height + props.units};
    width: ${(props:ISpacerProps) => props.height + props.units};
`;