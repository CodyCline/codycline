import * as React from 'react';

export const Spacer = ({height, width, units, style} : any) => {
    const styles = {
        height: `${height}${units}`,
        width: `${width}${units}`,
        ...style
    }
    return (
        <div style={styles}/>
    )
}