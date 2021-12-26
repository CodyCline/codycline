import * as React from 'react';
import './divider.scss';

export const Divider = ({onClick, style} : any) => (
    <hr className="divider" onClick={onClick} style={style}/>
)