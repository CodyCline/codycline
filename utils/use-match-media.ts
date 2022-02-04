import { useState, useCallback, useEffect } from "react";

export function useMatchMedia(breakpoint: string) {
    const [isMatching, setMatching] = useState<boolean>(false);
    
    const handleResize = useCallback(
        (query: any) => {
            query.matches ? setMatching(true) : setMatching(false);
        }, [setMatching]
    );
    
    useEffect(() => {
        const mediaQuery = window.matchMedia(breakpoint);
        //For initial state
        if (mediaQuery.matches) {
            setMatching(true);
        }
        mediaQuery.addEventListener(`change`, handleResize)
        return () => {
            mediaQuery.removeEventListener(`change`, handleResize);
        }
    }, [handleResize]);
    return isMatching;
}