import * as React from "react";
import { useDebounce } from "./use-debounce";

export const useResize = (ref:React.MutableRefObject<HTMLDivElement>) => {
    const [state, setState] = React.useState<object>();
    const [dimensions] = useDebounce(state, 2000);
    React.useEffect(() => {
        const getSize = () => {
            if (!ref || !ref.current) {
                return;
            }
            const { offsetWidth, offsetHeight } = ref.current;
            setState({
                offsetWidth,
                offsetHeight,
            });

        }
        window.addEventListener(`resize`, getSize);
        getSize();
        return () => window.removeEventListener(`resize`, getSize);
    }, [ref]);

    return dimensions;
}