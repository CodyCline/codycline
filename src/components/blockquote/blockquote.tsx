import * as React from 'react';
import './blockquote.scss';

export const BlockQuote = ({children} : any) => {
    return (
        <blockquote className="block-quote">
            {children}
        </blockquote>
    )
}