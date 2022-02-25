import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } 
        finally {
            sheet.seal();
        }
    }

    render() {
        const setInitialTheme = `
            function getThemePreference() {
                if(window.localStorage.getItem("theme")) {
                    return window.localStorage.getItem("theme")
                }
                if (window.matchMedia("(prefers-color-scheme: dark").matches) {
                    return "dark";
                }
                //This is done on purpose because the dark theme looks better
                if (window.matchMedia("(prefers-color-scheme: light").matches) {
                    return "dark";
                } else {
                    return "dark";
                }
            }
            
            document.documentElement.dataset.theme = getThemePreference();
        `;
        const setInitialVolume = `
            function getSoundPreference() {
                if(window.localStorage.getItem("volume")) {
                    return window.localStorage.getItem("volume");
                } else {
                    return "on";
                }
            }
            document.documentElement.dataset.volume = getSoundPreference();
        `;

        const setInitialAnimation = `
            function getMotionPreference() {
                if(window.localStorage.getItem("motion")) {
                    return window.localStorage.getItem("motion")
                }
                if (window.matchMedia("(prefers-reduced-motion: no-preference").matches) {
                    return "no-preference";
                }
                if (window.matchMedia("(prefers-color-scheme: reduce").matches) {
                    return "reduce";
                } else {
                    return "no-preference";
                }
            }
            
            document.documentElement.dataset.motion = getMotionPreference();
        
        `
        return (
            <Html>
                <Head />
                <body>
                    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                    <script dangerouslySetInnerHTML={{ __html: setInitialVolume }} />
                    <script dangerouslySetInnerHTML={{ __html: setInitialAnimation }} />
                    <Main />
                    <div id="__portal"/> 
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;