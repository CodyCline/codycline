import * as React from 'react';
import styled from 'styled-components';
import { standardIcons } from '../../public/assets/icons/std';
import { codeIcons } from '../../public/assets/icons/code';
import { brandIcons } from '../../public/assets/icons/brands';



const Svg:any = styled.svg`
    fill: ${(props:any) => props.fill || `var(--color-text-default)`};
`

const IWrapper:any = styled.i`
    height: ${({height}:any) => height + `px`};
    width: ${({width}:any) => width + `px`};
    vertical-align: middle;
    display: inline-block;
`

export const Icon = ({ name, fill, title, noTitle, height, width, className, role, style }: any) => {
    const iconLib: any = { ...standardIcons, ...codeIcons, ...brandIcons };
    const currentIcon = iconLib[name];
    const exists = iconLib[name] !== undefined && typeof window !== undefined;

    return (
        <IWrapper role={role} title={noTitle ? `` : `${title || name}`} height={height} width={width}>
            <Svg
                fill={fill}
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
        </IWrapper>
    );
}


