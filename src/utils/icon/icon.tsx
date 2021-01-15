import * as React from 'react';
import { iconLib } from './icons';


export const Icon = ({name}) => {
    const currentIcon = iconLib[name];
    const exists = iconLib[name] !== undefined && typeof window !== undefined;
        return (
            <svg width="22" height="22" viewBox="0 0 1024 1024">
                {
                    exists && currentIcon.paths.map((path, index) => {
                        return (
                            <path 
                                key={index} 
                                opacity={currentIcon.attrs.length >= 1 && currentIcon.attrs[index]["opacity"]} 
                                fill={currentIcon.attrs.length >= 1 && currentIcon.attrs[index]["fill"]} 
                                d={path}
                            >
                            </path>
                        )
                    })
                }
            </svg>
        )
    
}