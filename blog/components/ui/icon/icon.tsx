import * as React from 'react';
import { standardIcons } from '../../../assets/icons/std';
import { codeIcons } from '../../../assets/icons/code';
import { brandIcons } from '../../../assets/icons/brands';


export const Icon = ({ name, title, noTitle, height, width, className} : any) => {
    const iconLib = { ...standardIcons, ...codeIcons, ...brandIcons  };
    const currentIcon = iconLib[name];
    const exists = iconLib[name] !== undefined && typeof window !== undefined;
    
    return (
        <svg 
            className={className}
            height={height || 24}
            width={width || 24} 
            viewBox="0 0 1024 1024"
        >
            {!noTitle && <title>{ title || name }</title>}
            {
                exists && currentIcon.paths.map((path, index) => {
                    return (
                        <path
                            key={index}
                            opacity={currentIcon?.attrs?.[index]?.["opacity"] || 1}
                            fill={!className ? (currentIcon?.attrs?.length > 0 && currentIcon.attrs[index]["fill"] || null) : null}
                            d={path}
                        >
                        </path>
                    )
                })
            }
        </svg>
    );
}


