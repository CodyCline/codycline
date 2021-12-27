import * as React from 'react';
import './typography.scss';

//Styles the markdown headers, strikethrough, etc.

export const Deleted = ({children}) => (
    <del className="typography__deleted">{children}</del>
);

export const Header1 = ({children}) => (
    <h1 className="typography__header-one">{children}</h1>
);
export const Header2 = ({children}) => (
    <h2 className="typography__header-two">{children}</h2>
);
export const Header3 = ({children}) => (
    <h3 className="typography__header-three">{children}</h3>
);
export const Header4 = ({children}) => (
    <h4 className="typography__header-four">{children}</h4>
);
export const Header5 = ({children}) => (
    <h5 className="typography__header-five">{children}</h5>
);
export const Header6 = ({children}) => (
    <h6 className="typography__header-six">{children}</h6>
);