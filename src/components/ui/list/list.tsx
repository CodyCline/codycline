import * as React from 'react';
import './list.css';

export const OrderedList = ({children}) => (
    <ol className="numbered-list">
        {children}
    </ol>
)

export const ListItem = ({children}) => (
    <li>{children}</li>
)