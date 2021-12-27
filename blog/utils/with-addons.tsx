import * as React from 'react';
import { useStickyState } from './use-sticky-state';


//HOC that injects analytics, 
export const withAddons = (Component: any) => (props: any) => {
    //Register analytics, logging, etc.
    if (typeof window !== `undefined`) {
        const [theme]:any = useStickyState(`dark`, `theme__preference`);
        React.useEffect(() => {
            document.documentElement.className = `theme--${theme}`
        }, [theme]);
    }
    return (
        <Component {...props } />
    );
}