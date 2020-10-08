import * as React from 'react';
import './quote.scss';

export const Quote = ({children} : any) => {
    return (
        <blockquote className="quote">
            {children}
        </blockquote>
    )
}