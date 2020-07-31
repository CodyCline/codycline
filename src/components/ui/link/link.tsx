import * as React from 'react';
import './link.scss';

export const Link = ({children, href} : any) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className="link">{children}</a>
    )
}