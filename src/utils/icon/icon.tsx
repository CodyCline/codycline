import * as React from 'react';
import { iconLib } from './icons';


export const Icon = ({name}) => {
    const currentIcon = iconLib[name];
    return (
        <svg width="22" height="22" viewBox="0 0 1024 1024">
            {
                currentIcon !== undefined && currentIcon.paths.map((path, index) => {
                    return (
                        <path 
                            key={index} 
                            opacity={currentIcon.attrs[index]["opacity"]} 
                            fill={currentIcon.attrs[index]["fill"]} 
                            d={path}
                        >
                        </path>
                    )
                })
            }
        </svg>
    )
}