import * as React from 'react';
import styled from 'styled-components';
import { standardIcons } from '../../public/assets/icons/std';
import { codeIcons } from '../../public/assets/icons/code';
import { brandIcons } from '../../public/assets/icons/brands';



const Svg = styled.svg`
    fill: var(--color-text-primary);
`


export const Icon = ({ name, title, noTitle, height, width, className }: any) => {
    const iconLib: any = { ...standardIcons, ...codeIcons, ...brandIcons };
    const currentIcon = iconLib[name];
    const exists = iconLib[name] !== undefined && typeof window !== undefined;

    return (
        <i title={noTitle ? `` : `${name || title}`} style={{ height: `${height}px`, width: `${width}px`, verticalAlign: `middle`, display: `inline-block` }}>
            <Svg
                className={className}
                viewBox="0 0 1024 1024"
            >
                {
                    exists && currentIcon.paths.map((path: any, index: any) => {
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
            </Svg>
        </i>
    );
}


