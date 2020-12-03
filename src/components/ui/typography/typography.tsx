import * as React from 'react';
import './typography.scss';

export const Deleted = ({children}) => (
    <del className="deleted">{children}</del>
)