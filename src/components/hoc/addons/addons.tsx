import * as React from 'react';

export const withAddons = (Component:any) => (props:any) => {
    //Analtyics, icons, etc.
    return <Component {...props } />;
};