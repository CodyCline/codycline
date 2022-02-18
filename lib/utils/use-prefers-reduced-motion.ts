import { useEffect, useState } from "react";


export function usePrefersReducedMotion() {
    const QUERY = '(prefers-reduced-motion: no-preference)';

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        !window.matchMedia(QUERY)
    );
    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = (event:any) => {
            setPrefersReducedMotion(!event.matches);
        };
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', listener);
        } else {
            mediaQueryList.addListener(listener);
        }
        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);
    return prefersReducedMotion;
}