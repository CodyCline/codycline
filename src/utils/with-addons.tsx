import * as React from 'react';

export const withAddons = (Component:any) => (props:any) => {
    //Analytics, icons, etc.
    return <Component {...props } />;
};