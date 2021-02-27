import * as React from 'react';
import { useHasMounted } from './use-has-mounted';


export const useStickyState = (defaultValue: any, key: string) => {
    
    const [value, setValue] = React.useState(() => {
        const stickyValue: string | null = window.localStorage.getItem(key);
        return stickyValue !== null
            ? stickyValue
            : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue];
}