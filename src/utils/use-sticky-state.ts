import * as React from 'react';

export const useStickyState = (defaultValue: string, key: string) => {
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