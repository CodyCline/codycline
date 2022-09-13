import { useCallback, useEffect, useState } from "react";


export function usePrefersReducedMotion() {
    const QUERY = `(prefers-reduced-motion: no-preference)`;

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        !window.matchMedia(QUERY)
    );

    // const listener = (event:any) => {
    //     setPrefersReducedMotion(!event.matches);
    // };

    const listener = useCallback(
        (event: any) => {
            setPrefersReducedMotion(!event.matches);
        }, [setPrefersReducedMotion]
    );

    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        if(mediaQueryList.matches) {
            setPrefersReducedMotion(true);
        }
        mediaQueryList.addEventListener("change", listener);
        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [listener]);
    return prefersReducedMotion;
}