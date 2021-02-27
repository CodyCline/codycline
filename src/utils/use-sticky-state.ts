import * as React from 'react';

export const useStickyState = (defaultValue: any, key: string) => {
    const [value, setValue] = React.useState(() => {
        const stickyValue: string | null = localStorage.getItem(key);
        return stickyValue !== null
            ? stickyValue
            : defaultValue;
    });
    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue];
}