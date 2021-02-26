import * as React from 'react';


//HOC that injects analytics, 
export const withAddons = (Component: any) => (props: any) => {
    //Register analytics, logging, etc.
    return (
        <Component {...props } />
    );
}