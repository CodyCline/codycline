import { useEffect, useState } from "react";
import styled from "styled-components";


const Progress:any = styled.div.attrs((props:any) => ({
    style: {
        width: props.progress + "%",
    },
}))`
    position: sticky;
    height: 4px;
    top: 0;
    background: linear-gradient(to left, var(--color-bg-theme-toggle), var(--color-shadow-theme-toggle));

`;
export const Progressbar = ({ target }: any) => {
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = () => {
        if (!target?.current) {
            return;
        }

        const element = target.current;
        const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
        const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (windowScrollTop === 0) {
            return setReadingProgress(0);
        }

        if (windowScrollTop > totalHeight) {
            return setReadingProgress(100);
        }

        setReadingProgress((windowScrollTop / totalHeight) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    });

    return <Progress progress={readingProgress} />;
};

export default Progressbar;