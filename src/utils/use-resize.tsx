import * as React from "react";
import { useDebounce, debounce } from "./use-debounce";

export const useResize = (ref: React.MutableRefObject<HTMLDivElement> | React.RefObject<HTMLDivElement>) => {
    const [state, setState] = React.useState<any>();
    React.useEffect(() => {
        const getSize = debounce(() => {
            if (!ref || !ref.current) {
                return;
            }
            const width = ref.current.offsetWidth
            const height = ref.current.offsetHeight
            setState({
                height,
                width,
            });

        }, 1000)
        window.addEventListener(`resize`, getSize);
        getSize();
        return () => window.removeEventListener(`resize`, getSize);
    }, [ref]);

    return state;
}