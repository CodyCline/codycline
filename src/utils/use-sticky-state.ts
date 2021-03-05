import * as React from 'react';


//Store a value in user localStorage, do not mount on SSR
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