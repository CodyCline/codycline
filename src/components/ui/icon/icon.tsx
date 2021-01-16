import * as React from 'react';
import { standardIcons } from '../../../assets/icons/std';
import { codeIcons } from '../../../assets/icons/code';
import { brandIcons } from '../../../assets/icons/brands';


export const Icon = ({ name, color, height, width } : any) => {
    const iconLib = { ...standardIcons, ...codeIcons, ...brandIcons  };
    const currentIcon = iconLib[name];
    const exists = iconLib[name] !== undefined && typeof window !== undefined;
    
    const styles: any = {
        path: {
            fill: color,
        }
    }
    return (
        <svg 
            style={styles}
            height={height || 24}
            width={width || 24} 
            viewBox="0 0 1024 1024"
        >
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


