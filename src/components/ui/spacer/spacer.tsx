import * as React from "react";
import * as types from "../../../types/components"

export const Spacer = ({height, width, units, style} : types.ISpacerProps) => {
    const styles = {
        height: `${height}${units}`,
        width: `${width}${units}`,
        ...style
    }
    return (
        <div style={styles}/>
    )
}